import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import tabButtonPerfil from "../styles/stylesComponents/tabButtonPerfil";
import { FadeIn, FadeOut } from "react-native-reanimated";
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
  interpolateColor,
} from "react-native-reanimated";

type Tab = {
  label: string;
  value: string;
};

type Props = {
  tabs: Tab[];
  activeTab: string;
  onPress: (value: string) => void;
};

function TabButton({
  label,
  isActive,
  onPress,
}: {
  label: string;
  isActive: boolean;
  onPress: () => void;
}) {
  const progress = useSharedValue(isActive ? 1 : 0);
  const press = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(isActive ? 1 : 0, { duration: 220 });
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      progress.value,
      [0, 1],
      ["#3284f1", "#ffffff"]
    );
    const scaleActive = interpolate(progress.value, [0, 1], [1, 1.2]);
    const pressShrink = interpolate(press.value, [0, 1], [0, 0.03]);
    const scale = scaleActive - pressShrink;
    return {
      backgroundColor: bgColor,
      transform: [{ scale }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      ["#ffffff", "#0D47AB"]
    );
    return { color };
  });

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onPressIn={() => {
        press.value = withSpring(1, { stiffness: 300, damping: 20 });
      }}
      onPressOut={() => {
        press.value = withSpring(0, { stiffness: 300, damping: 20 });
      }}
    >
      <Reanimated.View style={[tabButtonPerfil.tabButtonPerfil, animatedStyle]}>
        <Reanimated.Text
          style={[tabButtonPerfil.tabTextPerfil, animatedTextStyle]}
        >
          {label}
        </Reanimated.Text>
      </Reanimated.View>
    </TouchableOpacity>
  );
}

export default function TabsButtonPerfil({ tabs, activeTab, onPress }: Props) {
  return (
    <Reanimated.View
      style={tabButtonPerfil.tabsCaixa}
      entering={FadeIn.duration(700)}
      exiting={FadeOut.duration(500)}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;
        return (
          <TabButton
            key={tab.value}
            label={tab.label}
            isActive={isActive}
            onPress={() => onPress(tab.value)}
          />
        );
      })}
    </Reanimated.View>
  );
}
