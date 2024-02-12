import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
	useDrawerStatus
} from "@react-navigation/drawer";

export default function Layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				drawerContent={(props) => {
					return (
						<DrawerContentScrollView
							contentContainerStyle={{
								flex: 1,
								justifyContent: "space-between"
							}}
							style={{
								backgroundColor: "#020617",
								paddingHorizontal: 10,
								paddingVertical: 16
							}}
							{...props}>
							<View>
								<DrawerItemList {...props} />
							</View>
							<DrawerItem
								labelStyle={{
									color: "#ef4444",
									fontWeight: "bold"
								}}
								style={{
									paddingHorizontal: 8
								}}
								label='Logout'
								onPress={() => alert("handle logout")}
								icon={({ size }) => (
									<MaterialIcons name='logout' color='#ef4444' size={size} />
								)}
							/>
						</DrawerContentScrollView>
					);
				}}
				screenOptions={({ navigation, route }) => ({
					headerShown: true,
					drawerActiveBackgroundColor: "#334155",
					drawerActiveTintColor: "#f1f5f9",
					drawerInactiveTintColor: "#cbd5e1",
					drawerItemStyle: {
						paddingHorizontal: 8,
						margin: 0,
						borderRadius: 4
					},
					drawerType: "front",
					headerStyle: {
						backgroundColor: "#020617",
						elevation: 10
					},
					headerLeft: () => null,
					headerRight: () => {
						const isDrawerOpen = useDrawerStatus() === "open";
						return (
							<Pressable
								onPress={() => {
									navigation.toggleDrawer();
								}}>
								<MaterialIcons
									name={isDrawerOpen ? "close" : "menu"}
									size={24}
									color='#f1f5f9'
									style={{ marginRight: 10 }}
								/>
							</Pressable>
						);
					},
					headerTitle: () => (
						<Text style={{ color: "#f1f5f9", fontSize: 18, fontWeight: "500" }}>
							{route.params?.name || ""}
						</Text>
					)
				})}>
				<Drawer.Screen
					name='index'
					initialParams={{ name: "Profile" }}
					options={{
						drawerLabel: "Profile",
						drawerIcon: ({ size, color }) => (
							<MaterialIcons name='person' color={color} size={size} />
						)
					}}
				/>
				<Drawer.Screen
					name='profile-settings'
					initialParams={{ name: "Profile Settings" }}
					options={{
						drawerLabel: "Profile Settings",
						drawerIcon: ({ size, color }) => (
							<MaterialIcons name='settings' color={color} size={size} />
						)
					}}
				/>
				<Drawer.Screen
					name='notifications'
					initialParams={{ name: "Notifications" }}
					options={{
						drawerLabel: "Notifications",
						drawerIcon: ({ size, color }) => (
							<MaterialIcons name='notifications' color={color} size={size} />
						)
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
