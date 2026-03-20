import { ScrollView } from "react-native";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const projects = [
    {
      id: 1,
      title: "Sistema de Agendamento",
      description:
        "Desenvolvi este aplicativo Android durante a faculdade como um protótipo para uma clínica, com o objetivo de simplificar o processo de agendamento. Ele reduz a burocracia dos sistemas tradicionais e oferece funcionalidades adicionais, como: agendamento de consultas e exames, acesso ao histórico médico, visualização de resultados de exames, escolha entre planos (básico, membro e premium) e uma área dedicada para receitas e prescrições médicas digitalizadas.",
      image: require("../assets/saudeManiaApp.png"),
    },
    {
      id: 2,
      title: "Microserviço para envio de código de Autenticação",
      description:
        "Desenvolvi um microserviço para geração e envio de códigos OTP (One-Time Password) de 6 dígitos, seguindo o padrão de mercado e com suporte a TTL (Time To Live) para expiração automática. O envio é realizado via WhatsApp, utilizando WebSocket para comunicação em tempo real. Esse microserviço é flexível e reutilizável, podendo ser facilmente integrado a diferentes aplicações, como no caso do meu app Saúde Mania.",
      image: require("../assets/OTP.jpg"),
    },
    {
      id: 3,
      title: "AI Agent",
      description:
        "Desenvolvi um agent de IA utilizando LangChain e o protocolo MCP, ele está equipado com um conjunto de ferramentas para treinamento de modelos de machine learning e realização de previsões a partir de uma base de dados pré-definida. O agente avalia os modelos treinados, identifica aquele com melhor desempenho e o retorna para ser utilizado em uma análise posterior, com novos dados que serão enviados pelo usuário.",
      image: require("../assets/AIAgent.jpg"),
    },
    {
      id: 4,
      title: "Bot de Relatório",
      description:
        "Desenvolvi um Bot para Telegram capaz de monitorar mensagens e, mediante o comando /report, gerar relatórios automatizados de logs do sistema. Essa solução auxilia no processo de auditoria, proporciona maior transparência operacional e facilita o acompanhamento em tempo real do comportamento do aplicativo onde for implementado.",
      image: require("../assets/BotTelegram.png"),
    },
  ];

  return (
    <ScrollView
      accessible={true}
      accessibilityLabel="Lista de projetos desenvolvidos"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          accessible={true}
          accessibilityLabel={`Projeto ${index + 1}: ${project.title}`}
        />
      ))}
    </ScrollView>
  );
}
