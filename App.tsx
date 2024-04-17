import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomePage from './screens/HomePage';
import DetailsPage from './screens/DetailsPage';
import { Item } from './types/Item';

export type stackScreens = {
  Home: undefined,
  Details: {
    item: Item
  }
}

// Create a stack navigator
const Stack = createNativeStackNavigator<stackScreens>();

// Main App component
const App: React.FC = () => {
  return (
    <NavigationContainer>
      {/* Navigator for managing navigation between screens */}
      <Stack.Navigator
        initialRouteName="Home" 
        screenOptions={{
          // Global styles for header
          headerStyle: {
            backgroundColor: '#abdbe3', 
          },
          headerTintColor: '#000000', // The text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize: 25,
          },
        }}
      >
        {/* Home screen */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: 'Home', 
            headerLeft: () => (
              // Add home icon to the left side of the header
              <Image
                source={require('./assets/icon-home.png')} // Path to home icon image
                style={{ width: 25, height: 25, marginLeft: 10 }} // Style for the image
              />
            ),
          }}
        />
       <Stack.Screen 
          name="Details" 
          component={DetailsPage} 
          options={{ title: 'Item (Post) Details' }} 
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;