import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './src/Tabbar'; // Import the custom TabBar component

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: require('./assets/document.png'), // Custom image for unselected tab
            tabBarIconFocused: require('./assets/document-selected.png'), // Custom image for selected tab
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: require('./assets/document.png'), // Custom image for unselected tab
            tabBarIconFocused: require('./assets/document-selected.png'), // Custom image for selected tab
          }}
        />
        {/* Add more screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
