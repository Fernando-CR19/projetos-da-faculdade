import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../styles/stylesComponents/agendaCard";
import marcacaoButtons from "../styles/stylesComponents/marcacaoButtons";
import { router } from "expo-router";
import { FadeIn, FadeOut } from "react-native-reanimated";
import Reanimated from "react-native-reanimated";
import { useFetchConsultations } from "../hooks/useFetchConsultations";
import { useFetchExams } from "../hooks/useFetchExams";

type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
};

export default function AgendaCard({ activeTab }: Props) {
  const { schedules, loading: loadingConsulta } = useFetchConsultations();
  const { exams, loading: loadingExames } = useFetchExams();

  const loading = loadingConsulta || loadingExames;

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  const list =
    activeTab === "opcao1"
      ? schedules.filter((item: any) => item.type === "consulta")
      : activeTab === "opcao2"
      ? exams.filter((item: any) => item.type === "exame")
      : [];

  return (
    <Reanimated.View
      entering={FadeIn.duration(700)}
      exiting={FadeOut.duration(100)}
    >
      {activeTab === "opcao1" && (
        <>
          {list.length === 0 && (
            <View>
              <Text style={styles.noItem}>Nenhuma consulta encontrado.</Text>
            </View>
          )}

          {list.map((item: any) => (
            <View key={item.id} style={styles.CardContainer}>
              <Text style={styles.DateHour}>
                Dia: {item.serviceDate} Horário: {item.serviceTime}
              </Text>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Nome do profissional</Text>
                <Text style={styles.textCardView}>{item.medicName ?? "-"}</Text>
              </View>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Serviço</Text>
                <Text style={styles.textCardView}>{item.service}</Text>
              </View>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Local</Text>
                <Text style={styles.textCardView}>{item.unit}</Text>
              </View>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Tipo do agendamento</Text>
                <Text style={styles.textCardView}>{item.serviceModel}</Text>
              </View>

              <View style={styles.caixaButtonOption}>
                <TouchableOpacity style={styles.buttonCardEdit}>
                  <Text style={styles.buttonTextCardView}>Reagendar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCardCancel}>
                  <Text style={styles.buttonTextCardView}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </>
      )}

      {activeTab === "opcao2" && (
        <>
          {list.length === 0 && (
            <View>
              <Text style={styles.noItem}>Nenhum exame encontrado.</Text>
            </View>
          )}

          {list.map((item: any) => (
            <View key={item.id} style={styles.CardContainer}>
              <Text style={styles.DateHour}>
                Dia: {item.serviceDate} Horário: {item.serviceTime}
              </Text>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Serviço</Text>
                <Text style={styles.textCardView}>{item.exame}</Text>
              </View>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Local</Text>
                <Text style={styles.textCardView}>{item.unit}</Text>
              </View>

              <View style={styles.infoCardView}>
                <Text style={styles.labelCardView}>Tipo do agendamento</Text>
                <Text style={styles.textCardView}>{item.serviceModel}</Text>
              </View>

              <View style={styles.caixaButtonOption}>
                <TouchableOpacity style={styles.buttonCardEdit}>
                  <Text style={styles.buttonTextCardView}>Reagendar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCardCancel}>
                  <Text style={styles.buttonTextCardView}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </>
      )}

      {activeTab === "opcao3" && (
        <View style={marcacaoButtons.background}>
          <View style={marcacaoButtons.caixaMarcacao}>
            <Text style={marcacaoButtons.tittleTextCaixaMarcacao}>
              Marque seu Agendamento
            </Text>
          </View>

          <View style={marcacaoButtons.caixaMarcacao}>
            <TouchableOpacity
              style={marcacaoButtons.buttonMarcacao}
              onPress={() => router.push("/agendarConsulta")}
            >
              <Text style={marcacaoButtons.textButtonMarcacao}>Consulta</Text>
            </TouchableOpacity>
          </View>

          <View style={marcacaoButtons.caixaMarcacao}>
            <TouchableOpacity
              style={marcacaoButtons.buttonMarcacao}
              onPress={() => router.push("/exames")}
            >
              <Text style={marcacaoButtons.textButtonMarcacao}>Exame</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Reanimated.View>
  );
}
