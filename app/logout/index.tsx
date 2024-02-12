import { Button, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Logout() {
	const isPresented = router.canGoBack();
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				gap: 10
			}}>
			<Text style={{ fontSize: 26, fontWeight: "bold" }}> Logout </Text>

			<Button
				title='Logout'
				onPress={() => {
					alert("Logout action");
				}}
			/>

			{isPresented && (
				<Link href='../' asChild>
					<Button title='Back' />
				</Link>
			)}
		</View>
	);
}
