import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1e293b',
            borderTopColor: '#334155',
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#94a3b8',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '🏠 Home',
          }}
        />
        <Tab.Screen
          name="Tuning"
          component={HomeScreen}
          options={{
            tabBarLabel: '⚙️ Tuning',
          }}
        />
        <Tab.Screen
          name="Stats"
          component={HomeScreen}
          options={{
            tabBarLabel: '📊 Stats',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            tabBarLabel: '⚡ Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
