import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const tabBarIcon = isFocused ? options.tabBarIconFocused : options.tabBarIcon;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, isFocused && styles.selectedTabButton]}
            onPress={onPress}
          >
            <Image
              source={tabBarIcon}
              style={[styles.tabIcon, isFocused && styles.selectedTabIcon]}
            />
            <Text style={[styles.tabText, isFocused && styles.selectedTabText]}>
              {options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgray', // Set background color for the TabBar
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  selectedTabButton: {
    backgroundColor: 'blue', // Set background color for the selected tab
  },
  tabIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    tintColor: 'orange', // Default image color for unselected tabs
  },
  selectedTabIcon: {
    tintColor: 'white', // Customize the image color of the selected tab
  },
  tabText: {
    color: 'black',
    fontSize: 16,
  },
  selectedTabText: {
    color: 'white', // Customize the text color of the selected tab
  },
});

export default TabBar;
