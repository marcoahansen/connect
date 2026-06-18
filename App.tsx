import { StatusBar } from 'expo-status-bar';
import { AppThemeProvider } from './src/presentation/contexts/ThemeContext';
import { AuthStack } from './src/presentation/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppThemeProvider>
        <StatusBar />
        <AuthStack />
      </AppThemeProvider>
    </NavigationContainer>
  );
}
