import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AppThemeProvider } from './src/presentation/contexts/ThemeContext';
import { AuthStack } from './src/presentation/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppThemeProvider>
        <AuthStack />
      </AppThemeProvider>
    </NavigationContainer>
  );
}
