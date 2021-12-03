import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import ListScreen from '../Screens/ListScreen';



export default function Navigation({coins}) {
    const Tab = createBottomTabNavigator();

    return (
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName="Home"
					screenOptions={({ route }) => ({
						headerShown: false,
						tabBarStyle: {
							backgroundColor: 'black',
							borderTopColor: 'black',
						},
							tabBarLabelStyle: {
								color: '#ea580c'
							},
						tabBarIcon: ({ focused, size }) => {
							let iconName;
							if (route.name === 'Home') {
								iconName = focused ? 'home' : 'home-outline';
							} else {
								iconName = focused ? 'list-circle' : 'list-outline';
							}
							return <Ionicons name={iconName} color={'#ea580c'} size={size} />;
						},
					})}
				>
					<Tab.Screen
						name="Home"
						children={() => <HomeScreen coins={coins} />}
					/>
					<Tab.Screen name="List"
					 children={() => <ListScreen coins={coins} />}
					 />
				</Tab.Navigator>
			</NavigationContainer>
		);
}
