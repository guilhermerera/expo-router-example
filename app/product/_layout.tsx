import { Slot } from "expo-router";
import { Text } from "react-native";

export default function ProductLayout() {
	return (
		<>
			<Text>Product Header</Text>
			<Slot />
			<Text>Product Footer</Text>
		</>
	);
}
