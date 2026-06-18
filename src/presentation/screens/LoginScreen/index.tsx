import { Button, ScrollView, View } from 'react-native'
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import * as S from './styles'
import { Input } from '../../components/Input';
import { useState } from 'react';
import { validateRequired } from '../../utils/validation';
export const LoginScreen = () => {
  const theme = useTheme();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ userName?: string, password?: string }>({})

  const onSubmit = () => {
    const nextErrors = {
      userName: validateRequired(userName, 'usuário') ?? undefined,
      password: validateRequired(password, 'senha') ?? undefined,
    }
    setErrors(nextErrors);
    if (nextErrors.userName || nextErrors.password) return;
    console.log(userName, password)
  }
  return (
    <S.Root>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <S.Hero
          colors={[theme.colors.gradientFrom, theme.colors.gradientTo] as [string, string]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <S.Badge>
            <Feather name="users" size={15} color={'#fff'} />
            <S.BadgeText>TEAM OS</S.BadgeText>
          </S.Badge>
          <S.Brand>Connect</S.Brand>
          <S.Tagline>Organize sua equipe</S.Tagline>
        </S.Hero>
        <S.Body>
          <S.Title>Bem vindo!</S.Title>
          <S.SubTitle>Faça o login para gerenciar o seu time.</S.SubTitle>
          <Input
            label="USUÁRIO"
            icon="user"
            value={userName}
            onChangeText={setUserName}
            placeholder="emilys"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.userName}
            returnKeyType="next"
          />
          <Input
            label="SENHA"
            icon="lock"
            value={password}
            onChangeText={setPassword}
            placeholder="*******"
            secureTextEntry
            autoCapitalize="none"
            error={errors.password}
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
          <View style={{ marginTop: 8 }}>
            <Button title='Entrar' color={theme.colors.accentDeep} onPress={onSubmit} />
          </View>
        </S.Body>
      </ScrollView>
    </S.Root>
  )
}