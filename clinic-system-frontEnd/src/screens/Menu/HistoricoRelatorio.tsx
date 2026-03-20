import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Animated,
  LayoutChangeEvent,
} from "react-native";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import HistoricoStyle from "../../styles/MenuStyles/HistoricoStyle";
import { use, useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type ItemResult = {
  nome: string;
  valor: string;
  referencia: string;
};
type ItemDataEx = {
  id: string;
  title: string;
  dataConsulta: string;
  medico: string;
  unidade: string;
  status: "DISPONIVEL" | "PENDENTE";
  resumo?: string;
  parametros?: ItemResult[];
};

type ItemPropsEx = {
  item: ItemDataEx;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  isExpanded: boolean;
};

const DATA_EXAMPLE: ItemDataEx[] = [
  {
    id: "1",
    title: "Hemograma",
    dataConsulta: "2025-01-10T08:30:00",
    medico: "Dr. João Silva · Hematologia",
    unidade: "Clínica Central · Sala 203",
    status: "DISPONIVEL",
    resumo: "Exame dentro da faixa de referência, sem alterações relevantes.",
    parametros: [
      { nome: "Hemoglobina", valor: "13,5 g/dL", referencia: "12,0 – 15,5" },
      { nome: "Leucócitos", valor: "6.800 /mm³", referencia: "4.000 – 10.000" },
      {
        nome: "Plaquetas",
        valor: "250.000 /mm³",
        referencia: "150.000 – 400.000",
      },
    ],
  },
  {
    id: "2",
    title: "Raio-X de Tórax",
    dataConsulta: "2025-01-05T15:10:00",
    medico: "Dra. Marina Costa · Pneumologia",
    unidade: "Hospital Vida · Bloco B",
    status: "PENDENTE",
  },
  {
    id: "3",
    title: "Ultrassonografia Abdominal",
    dataConsulta: "2024-12-20T10:00:00",
    medico: "Dr. Carlos Nunes · Gastroenterologia",
    unidade: "Clínica Imagem+",
    status: "PENDENTE",
  },
];
const Item = ({ item, onPress, isExpanded }: ItemPropsEx) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const measuredHeightRef = useRef(0);

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? measuredHeightRef.current : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  const onMeasure = (e: LayoutChangeEvent) => {
    const h = e.nativeEvent.layout.height;
    if (h && h !== measuredHeightRef.current) {
      measuredHeightRef.current = h;
      if (isExpanded) animatedHeight.setValue(h);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={HistoricoStyle.TouchableOpacity}
    >
      <View style={{ padding: HistoricoStyle.itemContent.padding }}>
        <Text
          style={[
            HistoricoStyle.title,
            {
              color: HistoricoStyle.value.color,
              fontSize: HistoricoStyle.itemContent.fontSize,
            },
          ]}
        >
          {item.title}
        </Text>

        <View
          style={HistoricoStyle.ViewOnMeasure}
          pointerEvents="none"
          onLayout={onMeasure}
        >
          <ExpandedContent item={item} />
        </View>

        <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
          <ExpandedContent item={item} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const ExpandedContent = ({ item }: { item: ItemDataEx }) => {
  const getStatusConfig = () => {
    switch (item.status) {
      case "DISPONIVEL":
        return { label: "Disponível", bg: "#E0F7EC", color: "#0F9D58" };
      case "PENDENTE":
        return { label: "Em análise", bg: "#FFF4E0", color: "#fa7a02ff" };
    }
  };

  const status = getStatusConfig();

  return (
    <View style={HistoricoStyle.ViewInTheBox}>
      <View style={HistoricoStyle.ViewCalendarLabel}>
        <View style={HistoricoStyle.ViewCalendar}>
          <Ionicons name="calendar" size={18} color="#FFFFFF" />
          <Text style={HistoricoStyle.TextCalendar}>{item.dataConsulta}</Text>
        </View>

        <View
          style={[HistoricoStyle.statusBadge, { backgroundColor: status.bg }]}
        >
          <Text style={[HistoricoStyle.statusText, { color: status.color }]}>
            {status.label}
          </Text>
        </View>
      </View>

      <View style={HistoricoStyle.section}>
        <Text style={HistoricoStyle.sectionTitle}>Dados da consulta</Text>
        <Text style={HistoricoStyle.label}>Médico</Text>
        <Text style={HistoricoStyle.value}>{item.medico}</Text>

        <Text style={[HistoricoStyle.label, { marginTop: 6 }]}>Unidade</Text>
        <Text style={HistoricoStyle.value}>{item.unidade}</Text>
      </View>

      <View style={HistoricoStyle.divider} />

      {item.parametros && item.parametros.length > 0 && (
        <View style={HistoricoStyle.section}>
          <Text style={HistoricoStyle.sectionTitle}>Resumo do resultado</Text>
          <Text style={[HistoricoStyle.value, { fontSize: 12, marginTop: 2 }]}>
            {item.resumo}
          </Text>
        </View>
      )}

      {item.parametros && item.parametros.length > 0 && (
        <View style={[HistoricoStyle.section, { marginTop: 10 }]}>
          {item.parametros.map((p, index) => (
            <View key={index} style={HistoricoStyle.resultRow}>
              <View style={{ flex: 1 }}>
                <Text style={HistoricoStyle.label}>{p.nome}</Text>
                <Text style={HistoricoStyle.value}>{p.valor}</Text>
                <Text style={HistoricoStyle.ref}>Ref: {p.referencia}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
      {item.status === "DISPONIVEL" && (
        <View style={HistoricoStyle.actionsRow}>
          <TouchableOpacity style={HistoricoStyle.actionButton}>
            <Ionicons
              name="document-text-outline"
              size={16}
              color={HistoricoStyle.actionText.color}
            />
            <Text style={HistoricoStyle.actionText}>Ver PDF</Text>
          </TouchableOpacity>

          <TouchableOpacity style={HistoricoStyle.actionButton}>
            <Ionicons
              name="share-social-outline"
              size={16}
              color={HistoricoStyle.actionText.color}
            />
            <Text style={HistoricoStyle.actionText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default function HistoricoRelatorio() {
  const [selectedId, setSelectedId] = useState<String>();

  const renderItem = ({ item }: { item: ItemDataEx }) => {
    const backgroundColor = item.id === selectedId ? "#0e7ffa" : "#0ec3faff";
    const color = "white";
    const isExpanded = item.id === selectedId;

    return (
      <Item
        item={item}
        onPress={() =>
          setSelectedId((prev) => (prev === item.id ? undefined : item.id))
        }
        backgroundColor={backgroundColor}
        textColor={color}
        isExpanded={isExpanded}
      />
    );
  };
  return (
    <SafeAreaView style={HistoricoStyle.safe}>
      <HeaderHome  mostrarBusca={false} mostrarVoltar={true} titulo="Resultados" />
      <View style={HistoricoStyle.body}>
        <FlatList
          data={DATA_EXAMPLE}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          scrollEnabled={true}
          contentContainerStyle={{ paddingVertical: 8, paddingBottom: 120 }}
        />
      </View>
      <TabsNavegation />
    </SafeAreaView>
  );
}
