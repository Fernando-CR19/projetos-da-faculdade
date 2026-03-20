import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import TabsNavegation from "../../components/tabsNavegation";
import HeaderHome from "../../components/headerHome";
import planos from "../../styles/MenuStyles/planos";
import { Concluido } from "../../components/concluido";
import { TermosPlanos } from "../../components/termosPlanos";
import { PlanosType } from "../../utils/authPlanos";
import usePlanoAssinar from "../../hooks/usePlanoAssinar";
import { useRouter } from "expo-router";

const planosData: PlanosType[] = [
  { id: "1", nome: "Basico" },
  { id: "2", nome: "Pro" },
  { id: "3", nome: "Plus" },
];
export default function Planos() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConcluido, setModalConcluido] = useState(false);
  const [planoSelecionado, setPlanoSelecionado] = useState<PlanosType | null>(
    null
  );

  const router = useRouter();
  const { error, handleAssinarPlano } = usePlanoAssinar(router);

  const abrirModalConfirmacao = (plano: PlanosType) => {
    setPlanoSelecionado(plano);
    setModalVisible(true);
  };
  const confirmarAssistunar = () => {
    if (!planoSelecionado) return;
    setModalVisible(false);
    handleAssinarPlano(planoSelecionado);
    setModalConcluido(true);
  };
  return (
    <View style={planos.background}>
      <HeaderHome
        subTitulo="Escolha os melhores planos"
        mostrarBusca={false}
        mostrarVoltar={true}
        titulo="Planos"
      />
      <ScrollView style={planos.background}>
        <View style={planos.card}>
          <Text style={planos.titlecard}>Plano Básico</Text>
          <Text style={planos.price}>R$ 89,90/mês</Text>
          <Text style={planos.subtitle}>Perfeito para uso individual</Text>

          <View style={planos.tagsContainer}>
            <Text style={planos.tag}>Atendimento 24h</Text>
            <Text style={planos.tag}>Desconto em exames</Text>
          </View>
          <Text style={planos.descricaocard}>
            • Consultas médicas online e presenciais{"\n"}• Atendimento digital
            24 horas{"\n"}• Até 30% de desconto em exames laboratoriais
          </Text>

          <TouchableOpacity
            style={planos.buttoncard}
            onPress={() => abrirModalConfirmacao(planosData[0])}
          >
            <Text style={planos.buttoncardtext}>Assinar</Text>
          </TouchableOpacity>
        </View>

        <View style={planos.card}>
          <Text style={planos.titlecard}>Plano Pro</Text>
          <Text style={planos.price}>R$ 149,90/mês</Text>
          <Text style={planos.subtitle}>Mais benefícios para a família</Text>

          <View style={planos.tagsContainer}>
            <Text style={planos.tag}>Odotonlogia</Text>
            <Text style={planos.tag}>Para a família</Text>
          </View>
          <Text style={planos.descricaocard}>
            • Inclui todos os benefícios do Plano A{"\n"}• Cobertura
            odontológica básica{"\n"}• Até 4 dependentes
          </Text>

          <TouchableOpacity
            style={planos.buttoncard}
            onPress={() => abrirModalConfirmacao(planosData[1])}
          >
            <Text style={planos.buttoncardtext}>Assinar</Text>
          </TouchableOpacity>
        </View>

        <View style={planos.card}>
          <Text style={planos.titlecard}>Plano Plus</Text>
          <Text style={planos.price}>R$ 249,90/mês</Text>
          <Text style={planos.subtitle}>Cobertura completa</Text>

          <View style={planos.tagsContainer}>
            <Text style={planos.tag}>Fisioterapia</Text>
            <Text style={planos.tag}>Cobertura para cirurgias</Text>
          </View>
          <Text style={planos.descricaocard}>
            • Consultas médicas online e presenciais{"\n"}• Atendimento digital
            24 horas{"\n"}• Até 30% de desconto em exames laboratoriais
          </Text>

          <TouchableOpacity
            style={planos.buttoncard}
            onPress={() => abrirModalConfirmacao(planosData[2])}
          >
            <Text style={planos.buttoncardtext}>Assinar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TermosPlanos
          onClose={() => setModalVisible(false)}
          onAccept={confirmarAssistunar}
        />
      </Modal>
      <Modal visible={modalConcluido} animationType="fade" transparent={true}>
        <Concluido
          modalTittle="Plano atualizado com sucesso"
          onAccept={() => setModalConcluido(false)}
        />
      </Modal>
      <TabsNavegation />
    </View>
  );
}
