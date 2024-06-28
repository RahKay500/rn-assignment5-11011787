import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { ThemeProvider, useTheme } from './ThemeContext';
import HomeScreen from './Screens/HomeScreen'; 
import SettingsScreen from './Screens/SettingsScreen';
import MyCardsScreen from './Screens/MyCards';
import StatisticsScreen from './Screens/Statistics';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { isDarkTheme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName =  require('./assets/home.png');
          } else if (route.name === 'My Cards') {
            iconName =  require('./assets/myCards.png');
          } else if (route.name === 'Statistics') {
            iconName =  require('./assets/statistics.png');
          } else if (route.name === 'Settings') {
            iconName =  require('./assets/settings.png');
          }

          return <Image source={iconName} style={{ width: 24, height: 24, tintColor: focused ? 'blue' : 'gray' }} />;
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: isDarkTheme ? '#292941' : 'white',
        },
        tabBarInactiveTintColor: isDarkTheme ? 'gray' : 'black',
        tabBarActiveTintColor: isDarkTheme ? 'lightblue' : 'blue',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
