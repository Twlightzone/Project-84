import * as React from 'react';
import DrawerNavigation from './Navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
