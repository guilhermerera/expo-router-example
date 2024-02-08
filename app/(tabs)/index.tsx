import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				gap: 10
			}}>
			<Text style={{ fontSize: 26, fontWeight: "bold" }}> Home </Text>

			<Link href='/profile' asChild>
				<Button title='Profile' />
			</Link>

			<Link href='/product/1' asChild>
				<Button title='Product 1' />
			</Link>
			<Link href='/product/2' asChild>
				<Button title='Product 2' />
			</Link>
			<Link href='/product/blabla' asChild>
				<Button title='Product blabla' />
			</Link>
		</View>
	);
}
