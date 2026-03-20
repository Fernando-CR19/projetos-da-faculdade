import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function CheckAnimation() {
  return (
    <View>
      <LottieView
        source={require("../assets/CheckMark.json")}
        autoPlay={true}
        loop={false}
        style={{ width: 150, height: 150 }}
        resizeMode="cover"
      />
    </View>
  );
}
