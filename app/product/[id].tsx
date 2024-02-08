import { Button, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Product() {
	const { id } = useLocalSearchParams();

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				gap: 10
			}}>
			<Text style={{ fontSize: 26, fontWeight: "bold" }}>Product: {id} </Text>

			<Link href='/' asChild>
				<Button title='Back' />
			</Link>
		</View>
	);
}
