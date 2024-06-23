import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';
import HomeScreen from './Screens/HomeScreen'; 
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName =  require('./assets/home.png');
            } else if (route.name === 'Settings') {
              iconName =  require('./assets/settings.png');
            }

          return <Image source={iconName} style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }} />;
          },
          tabBarShowLabel: true,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'white',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
