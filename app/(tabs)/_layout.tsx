import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabRoutesLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: "Home",
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name='home' color={color} size={size} />
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profile",
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name='person' color={color} size={size} />
					)
				}}
			/>
			<Tabs.Screen
				name='settings'
				options={{
					title: "Settings",
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name='settings' color={color} size={size} />
					)
				}}
			/>
		</Tabs>
	);
}
