import Clipboard from "expo-clipboard";
import { ToastAndroid } from "react-native";

interface Props {
  text: string;
}

export default function copy({ text }: Props): void {
  Clipboard.setString(text);
  ToastAndroid.showWithGravityAndOffset(
    "Copied to clipboard!",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    100
  );
}
