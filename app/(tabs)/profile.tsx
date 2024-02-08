import { Text, View } from "react-native";

export default function Profile() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				gap: 10
			}}>
			<Text style={{ fontSize: 26, fontWeight: "bold" }}>Profile </Text>
		</View>
	);
}
