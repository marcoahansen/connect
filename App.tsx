import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AppThemeProvider } from './src/presentation/contexts/ThemeContext';

export default function App() {
  return (
    <AppThemeProvider>
      <View>
        <Text>Olá mundo</Text>
        <StatusBar style="auto" />
      </View>
    </AppThemeProvider>
  );
}
