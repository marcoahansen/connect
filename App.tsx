import { StatusBar } from 'expo-status-bar';
import { AppThemeProvider } from './src/presentation/contexts/ThemeContext';
import { AuthStack } from './src/presentation/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/presentation/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppThemeProvider>
        <AuthProvider>
          <StatusBar />
          <AuthStack />
        </AuthProvider>
      </AppThemeProvider>
    </NavigationContainer>
  );
}
