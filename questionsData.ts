
export const questionsData = {
  "Pacote Start – Presença Digital": {
    "3 Vídeos curtos com IA (até 30s cada)": [
      { id: "start_video_goal", type: "textarea", label: "Qual é o objetivo principal de cada vídeo? (Ex: promover um produto, educar, engajar, etc.)" },
      { id: "start_video_theme", type: "textarea", label: "Qual é o tema ou mensagem central de cada vídeo?" },
      { id: "start_video_script", type: "textarea", label: "Existe algum roteiro ou pontos-chave que devem ser abordados?" },
      { id: "start_video_audience", type: "textarea", label: "Qual é o público-alvo?" },
      { id: "start_video_style", type: "radio", label: "Há alguma preferência de estilo visual ou tom?", options: ["Formal", "Divertido", "Informativo", "Outro"] },
      { id: "start_video_reference", type: "textarea", label: "Você tem algum material de referência (imagens, vídeos, áudios) que gostaria de incluir?" },
    ],
    "5 Imagens profissionais IA (realistas ou artísticas)": [
      { id: "start_image_goal", type: "textarea", label: "Qual é o objetivo de cada imagem? (Ex: post para redes sociais, banner para site, ilustração para artigo)" },
      { id: "start_image_theme", type: "textarea", label: "Qual é o tema ou conceito de cada imagem?" },
      { id: "start_image_preference", type: "radio", label: "Você prefere imagens realistas, artísticas, ou uma mistura?", options: ["Realistas", "Artísticas", "Uma mistura"] },
      { id: "start_image_palette", type: "textarea", label: "Há alguma paleta de cores ou estilo visual específico a seguir?" },
      { id: "start_image_elements", type: "textarea", label: "Você tem alguma imagem de referência ou elementos que devem ser incluídos/excluídos?" },
    ]
  },
  "Pacote Growth – Expansão": {
    "6 Vídeos (até 45s cada)": [
        { id: "growth_video_goal", type: "textarea", label: "Qual é o objetivo principal de cada vídeo?" },
        { id: "growth_video_theme", type: "textarea", label: "Qual é o tema ou mensagem central de cada vídeo?" },
        { id: "growth_video_script", type: "textarea", label: "Existe algum roteiro ou pontos-chave que devem ser abordados?" },
        { id: "growth_video_audience", type: "textarea", label: "Qual é o público-alvo?" },
        { id: "growth_video_style", type: "radio", label: "Há alguma preferência de estilo visual ou tom?", options: ["Formal", "Divertido", "Informativo", "Outro"] },
        { id: "growth_video_reference", type: "textarea", label: "Você tem algum material de referência (imagens, vídeos, áudios) que gostaria de incluir?" },
        { id: "growth_video_connection", type: "textarea", label: "Há alguma sequência ou conexão entre os vídeos?" },
        { id: "growth_video_topics", type: "textarea", label: "Quais são os principais tópicos ou mensagens para cada vídeo?" },
    ],
    "12 Imagens IA (realistas, 3D ou artísticas)": [
        { id: "growth_image_goal", type: "textarea", label: "Qual é o objetivo de cada imagem?" },
        { id: "growth_image_concept", type: "textarea", label: "Qual é o tema ou conceito de cada imagem?" },
        { id: "growth_image_preference", type: "radio", label: "Você prefere imagens realistas, artísticas, 3D ou uma mistura?", options: ["Realistas", "Artísticas", "3D", "Mistura"] },
        { id: "growth_image_palette", type: "textarea", label: "Há alguma paleta de cores ou estilo visual específico a seguir?" },
        { id: "growth_image_reference", type: "textarea", label: "Você tem alguma imagem de referência ou elementos que devem ser incluídos/excluídos?" },
        { id: "growth_image_3d_context", type: "textarea", label: "Você tem alguma preferência por imagens 3D em algum contexto específico?" },
    ],
    "Clone facial simples (para usar em 1 vídeo)": [
        { id: "growth_clone_video", type: "textarea", label: "Qual vídeo utilizará o clone facial?" },
        { id: "growth_clone_reference", type: "textarea", label: "Você fornecerá as imagens/vídeos de referência para a criação do clone?" },
        { id: "growth_clone_instruction", type: "textarea", label: "Há alguma instrução específica sobre a expressão ou movimento do clone?" },
    ],
  },
  "Pacote Premium – Dominação Digital": {
    "12 Vídeos (até 60s cada)": [
      { id: "premium_video_goal", type: "textarea", label: "Qual é o objetivo principal de cada vídeo?" },
      { id: "premium_video_theme", type: "textarea", label: "Qual é o tema ou mensagem central de cada vídeo?" },
      { id: "premium_video_script", type: "textarea", label: "Existe algum roteiro ou pontos-chave que devem ser abordados?" },
      { id: "premium_video_audience", type: "textarea", label: "Qual é o público-alvo?" },
      { id: "premium_video_style", type: "radio", label: "Há alguma preferência de estilo visual ou tom?", options: ["Formal", "Divertido", "Informativo", "Outro"] },
      { id: "premium_video_reference", type: "textarea", label: "Você tem algum material de referência (imagens, vídeos, áudios) que gostaria de incluir?" },
      { id: "premium_video_strategy", type: "textarea", label: "Qual é a estratégia de conteúdo geral para esses vídeos?" },
      { id: "premium_video_marketing", type: "textarea", label: "Há necessidade de integração com alguma campanha de marketing?" },
    ],
    "20 Imagens IA (realistas, criativas, estilo 3D ou artísticas)": [
      { id: "premium_image_goal", type: "textarea", label: "Qual é o objetivo de cada imagem?" },
      { id: "premium_image_concept", type: "textarea", label: "Qual é o tema ou conceito de cada imagem?" },
      { id: "premium_image_preference", type: "radio", label: "Você prefere imagens realistas, criativas, estilo 3D ou artísticas?", options: ["Realistas", "Criativas", "Estilo 3D", "Artísticas", "Mistura"] },
      { id: "premium_image_palette", type: "textarea", label: "Há alguma paleta de cores ou estilo visual específico a seguir?" },
      { id: "premium_image_reference", type: "textarea", label: "Você tem alguma imagem de referência ou elementos que devem ser incluídos/excluídos?" },
      { id: "premium_image_identity", type: "textarea", label: "Como essas imagens se encaixam na identidade visual da marca?" },
    ],
    "3 Músicas completas IA exclusivas": [
      { id: "premium_music_style", type: "textarea", label: "Qual é o estilo musical desejado?" },
      { id: "premium_music_mood", type: "textarea", label: "Qual é o clima ou emoção que a música deve transmitir?" },
      { id: "premium_music_duration", type: "textarea", label: "Qual é a duração aproximada?" },
      { id: "premium_music_purpose", type: "textarea", label: "Para qual finalidade a música será utilizada?" },
      { id: "premium_music_reference", type: "textarea", label: "Você tem alguma referência musical?" },
    ],
    "Clone facial & deepfake profissional (até 3 vídeos)": [
      { id: "premium_clone_videos", type: "textarea", label: "Quais vídeos utilizarão o clone facial/deepfake?" },
      { id: "premium_clone_requirements", type: "textarea", label: "Quais são os requisitos específicos para a qualidade e realismo do deepfake?" },
      { id: "premium_clone_simulation", type: "textarea", label: "Há necessidade de simular falas ou expressões específicas?" },
    ],
    "Criação de prompts inteligentes sob medida": [
      { id: "premium_prompt_type", type: "textarea", label: "Para quais tipos de conteúdo você precisa de prompts? (Ex: texto, imagem, vídeo)" },
      { id: "premium_prompt_goals", type: "textarea", label: "Quais são os objetivos desses prompts? (Ex: gerar ideias, otimizar conteúdo existente, criar variações)" },
      { id: "premium_prompt_examples", type: "textarea", label: "Você tem exemplos de prompts que funcionaram bem ou mal no passado?" },
    ],
    "Consultoria estratégica 1x por mês": [
      { id: "premium_consulting_challenges", type: "textarea", label: "Quais são os principais desafios ou objetivos que você gostaria de discutir na consultoria?" },
      { id: "premium_consulting_focus", type: "textarea", label: "Há alguma área específica de foco para a consultoria?" },
    ],
  },
  "Serviços Avulsos": {
    "Vídeo curto IA (até 30s)": [
      { id: "avulso_video_goal", type: "textarea", label: "Qual é o objetivo principal do vídeo?" },
      { id: "avulso_video_theme", type: "textarea", label: "Qual é o tema ou mensagem central do vídeo?" },
      { id: "avulso_video_script", type: "textarea", label: "Existe algum roteiro ou pontos-chave que devem ser abordados?" },
      { id: "avulso_video_audience", type: "textarea", label: "Qual é o público-alvo?" },
      { id: "avulso_video_style", type: "radio", label: "Há alguma preferência de estilo visual ou tom?", options: ["Formal", "Divertido", "Informativo", "Outro"] },
      { id: "avulso_video_reference", type: "textarea", label: "Você tem algum material de referência (imagens, vídeos, áudios) que gostaria de incluir?" },
    ],
    "Imagem realista ou artística IA": [
      { id: "avulso_image_goal", type: "textarea", label: "Qual é o objetivo da imagem?" },
      { id: "avulso_image_concept", type: "textarea", label: "Qual é o tema ou conceito da imagem?" },
      { id: "avulso_image_preference", type: "radio", label: "Você prefere imagens realistas, artísticas, ou uma mistura?", options: ["Realistas", "Artísticas", "Mistura"] },
      { id: "avulso_image_palette", type: "textarea", label: "Há alguma paleta de cores ou estilo visual específico a seguir?" },
      { id: "avulso_image_reference", type: "textarea", label: "Você tem alguma imagem de referência ou elementos que devem ser incluídos/excluídos?" },
    ],
    "Música exclusiva IA": [
        { id: "avulso_music_style", type: "textarea", label: "Qual é o estilo musical desejado?" },
        { id: "avulso_music_mood", type: "textarea", label: "Qual é o clima ou emoção que a música deve transmitir?" },
        { id: "avulso_music_duration", type: "textarea", label: "Qual é a duração aproximada?" },
        { id: "avulso_music_purpose", type: "textarea", label: "Para qual finalidade a música será utilizada?" },
        { id: "avulso_music_reference", type: "textarea", label: "Você tem alguma referência musical?" },
    ],
    "Clone facial simples": [
        { id: "avulso_clone_purpose", type: "textarea", label: "Para qual finalidade o clone será utilizado?" },
        { id: "avulso_clone_reference", type: "textarea", label: "Você fornecerá as imagens/vídeos de referência?" },
        { id: "avulso_clone_instruction", type: "textarea", label: "Há alguma instrução específica sobre a expressão ou movimento?" },
    ],
    "Deepfake profissional": [
        { id: "avulso_deepfake_goal", type: "textarea", label: "Qual é o objetivo do deepfake?" },
        { id: "avulso_deepfake_quality", type: "textarea", label: "Quais são os requisitos de realismo e qualidade?" },
        { id: "avulso_deepfake_source", type: "textarea", label: "Você fornecerá o material de origem (vídeos, áudios)?" },
        { id: "avulso_deepfake_simulation", type: "textarea", label: "Há necessidade de simular falas ou expressões específicas?" },
    ],
    "Restauração de imagem": [
        { id: "avulso_restore_quantity", type: "textarea", label: "Quantas imagens precisam ser restauradas?" },
        { id: "avulso_restore_damage", type: "textarea", label: "Qual é o nível de dano das imagens? (Ex: arranhões, desbotamento, partes faltando)" },
        { id: "avulso_restore_instruction", type: "textarea", label: "Há alguma instrução específica sobre a restauração? (Ex: manter o estilo original, colorir)" },
    ]
  }
};
