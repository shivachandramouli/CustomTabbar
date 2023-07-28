import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Screens for each tab
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', alignItems: 'center' }}>
      {/* Replace this icon with your desired icon */}
      <Icon name="home" size={30} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Replace this icon with your desired icon */}
      <Icon name="user" size={30} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Replace this icon with your desired icon */}
      <Icon name="cog" size={30} />
    </View>
  );
}

// Main component with bottom tab bar
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Define the icons for each tab based on the route name
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          }
          activeBackgroundColor: 'blue'

          // Return the appropriate icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: 'blue', 
        inactiveBackgroundColor: 'red',
        
        style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'lightblue', // Set the background color here
          },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}