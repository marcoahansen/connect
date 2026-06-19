import { Button, Alert } from 'react-native';
import { useAuth } from '../../contexts/AuthContext'
import * as S from './styles'
import { useTheme } from 'styled-components/native';

export const HomeScreen = () => {
  const theme = useTheme();
  const { user, signOut } = useAuth();

  const onLogout = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: 'cancel' },
      { text: "Sair", style: 'destructive', onPress: () => void signOut() }
    ])
  }
  return (
    <S.Root>
      <S.Header>
        <S.Greeting>
          Olá{user?.firstName ? `, ${user.firstName}` : ''}
        </S.Greeting>
      </S.Header>
      <Button onPress={onLogout} title='Sair' color={theme.colors.accentDeep} />
    </S.Root>
  )
}