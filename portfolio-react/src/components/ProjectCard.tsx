import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "../styles/ProjectCard";

type ProjectCardProps = {
  title: string;
  description: string;
  image: any;
  accessible?: boolean;
  accessibilityLabel?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  accessible = true,
  accessibilityLabel,
}: ProjectCardProps) {
  return (
    <SafeAreaView>
      <View
        style={styles.cardContainer}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel || `Projeto: ${title}`}
      >
        <Image
          style={styles.cardImage}
          source={image}
          accessible={true}
          accessibilityLabel={`Imagem do projeto ${title}`}
        />
        <Text
          style={styles.cardTitle}
          accessible={true}
          accessibilityLabel={`Título: ${title}`}
        >
          {title}
        </Text>
        <Text
          style={styles.cardDescription}
          accessible={true}
          accessibilityLabel={`Descrição: ${description}`}
        >
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}
