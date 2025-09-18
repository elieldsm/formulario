
import React, { useState, useCallback } from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { MailIcon } from './components/icons/MailIcon';
import { CheckCircleIcon } from './components/icons/CheckCircleIcon';
import { Select } from './components/Select';
import { Textarea } from './components/Textarea';
import { RadioGroup } from './components/RadioGroup';
import { questionsData } from './questionsData';

type Question = {
  id: string;
  type: 'textarea' | 'radio';
  label: string;
  options?: readonly string[];
};

type Section = {
  [key: string]: Question[];
};

type QuestionsData = {
  [key: string]: Section;
};

const App: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const formatPhoneNumber = useCallback((value: string) => {
    const digits = value.replace(/\D/g, '');
    let formatted = '';
    if (digits.length > 0) formatted = `(${digits.substring(0, 2)}`;
    if (digits.length > 2) formatted = `${formatted}) ${digits.substring(2, 7)}`;
    if (digits.length > 7) formatted = `${formatted}-${digits.substring(7, 11)}`;
    return formatted;
  }, []);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setContactInfo(prev => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setContactInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackage(e.target.value);
    setAnswers({}); // Reset answers when package changes
  };

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactInfo.name.trim() || !contactInfo.email.trim() || !contactInfo.phone.trim()) {
      setError('Por favor, preencha suas informações de contato.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    const phoneDigits = contactInfo.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Por favor, insira um número de telefone válido com DDD.');
      return;
    }
    
    if (!selectedPackage) {
      setError('Por favor, selecione um pacote de serviços.');
      return;
    }

    setError('');

    const recipientEmail = 'elieldossantosmorais@gmail.com';
    const subject = `Novo Briefing de Projeto: ${contactInfo.name} - ${selectedPackage}`;
    
    let body = `
Olá,

Um novo briefing de projeto foi recebido.

INFORMAÇÕES DE CONTATO:
- Nome: ${contactInfo.name}
- E-mail: ${contactInfo.email}
- Telefone: ${contactInfo.phone}

PACOTE SELECIONADO: ${selectedPackage}
`;
    
    const currentQuestions = (questionsData as QuestionsData)[selectedPackage];
    if (currentQuestions) {
      body += `\nRESPOSTAS DO QUESTIONÁRIO:\n`;
      Object.entries(currentQuestions).forEach(([sectionTitle, questions]) => {
        body += `\n--- ${sectionTitle} ---\n\n`;
        questions.forEach(q => {
          const answer = answers[q.id] || 'Não respondido';
          body += `P: ${q.label}\nR: ${answer}\n\n`;
        });
      });
    }

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
  };
  
  const currentQuestions = selectedPackage ? (questionsData as QuestionsData)[selectedPackage] : null;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-800 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {isSubmitted ? (
            <div className="p-8 md:p-12 text-center">
              <CheckCircleIcon className="w-16 h-16 text-brand-cyan mx-auto mb-6"/>
              <h2 className="text-3xl font-bold mb-2">Obrigado!</h2>
              <p className="text-slate-400 mb-6">
                Seu cliente de e-mail deve abrir para que você possa enviar o briefing.
              </p>
              <Button onClick={() => {
                setIsSubmitted(false);
                setContactInfo({ name: '', email: '', phone: '' });
                setSelectedPackage('');
                setAnswers({});
              }}>
                Preencher Novo Briefing
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12" noValidate>
              <div className="text-center mb-10">
                <div className="inline-block bg-slate-700 p-4 rounded-full mb-4">
                  <MailIcon className="w-8 h-8 text-brand-cyan"/>
                </div>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-cyan">
                  Briefing de Projeto
                </h1>
                <p className="text-slate-400 mt-2">
                  Responda às perguntas para começarmos a criar.
                </p>
              </div>

              <fieldset className="mb-8 border-2 border-slate-700 rounded-lg p-6 pt-4">
                <legend className="px-2 text-lg font-semibold text-brand-cyan">Suas Informações</legend>
                <div className="space-y-6">
                   <Input id="name" name="name" label="Seu Nome" type="text" placeholder="Nome Completo" value={contactInfo.name} onChange={handleContactChange} />
                   <Input id="email" name="email" label="Seu E-mail" type="email" placeholder="voce@exemplo.com" value={contactInfo.email} onChange={handleContactChange} />
                   <Input id="phone" name="phone" label="Seu Telefone" type="tel" placeholder="(00) 00000-0000" value={contactInfo.phone} onChange={handleContactChange} maxLength={15} />
                </div>
              </fieldset>

              <fieldset className="mb-8 border-2 border-slate-700 rounded-lg p-6 pt-4">
                 <legend className="px-2 text-lg font-semibold text-brand-cyan">Pacote de Serviços</legend>
                 <Select id="package" label="Selecione o Pacote" value={selectedPackage} onChange={handlePackageChange}>
                    <option value="" disabled>Escolha uma opção...</option>
                    {Object.keys(questionsData).map(pkg => <option key={pkg} value={pkg}>{pkg}</option>)}
                 </Select>
              </fieldset>

              {currentQuestions && (
                 <div className="space-y-8">
                  {Object.entries(currentQuestions).map(([sectionTitle, questions]) => (
                    <fieldset key={sectionTitle} className="border-2 border-slate-700 rounded-lg p-6 pt-4">
                       <legend className="px-2 text-lg font-semibold text-brand-cyan">{sectionTitle}</legend>
                       <div className="space-y-6 mt-4">
                        {(questions as Question[]).map((q) => {
                          if (q.type === 'textarea') {
                            return <Textarea key={q.id} id={q.id} label={q.label} value={answers[q.id] || ''} onChange={e => handleAnswerChange(q.id, e.target.value)} />
                          }
                          if (q.type === 'radio' && q.options) {
                            return <RadioGroup key={q.id} name={q.id} legend={q.label} options={q.options} value={answers[q.id] || ''} onChange={e => handleAnswerChange(q.id, e.target.value)} />
                          }
                          return null;
                        })}
                       </div>
                    </fieldset>
                  ))}
                 </div>
              )}


              {error && <p className="text-red-400 text-sm mt-6 text-center">{error}</p>}

              <div className="mt-8">
                <Button type="submit" className="w-full">
                  Enviar Briefing
                </Button>
              </div>
            </form>
          )}
        </div>
        <footer className="text-center mt-6 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Eliel DSM IA. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
