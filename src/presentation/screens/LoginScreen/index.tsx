import { Button, ScrollView, View } from 'react-native'
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import * as S from './styles'
import { Input } from '../../components/Input';
import { useState } from 'react';
import { validateRequired } from '../../utils/validation';
import { useAuth } from '../../contexts/AuthContext';
export const LoginScreen = () => {
  const theme = useTheme();
  const { signIn, signingIn } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ userName?: string, password?: string }>({})
  const [banner, setBanner] = useState<string | null>(null)

  const onSubmit = async () => {
    const nextErrors = {
      userName: validateRequired(username, 'usuário') ?? undefined,
      password: validateRequired(password, 'senha') ?? undefined,
    }
    setErrors(nextErrors);
    if (nextErrors.userName || nextErrors.password) return;
    setBanner(null)
    try {
      await signIn({ username, password })
    } catch (e) {
      setBanner(e instanceof Error ? e.message : "Não foi possível entrar")
    }
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
          {banner ? (
            <S.BannerBox>
              <Feather name="alert-circle" size={16} color={theme.colors.danger} />
              <S.BadgeText>{banner}</S.BadgeText>
            </S.BannerBox>
          ) : null}
          <Input
            label="USUÁRIO"
            icon="user"
            value={username}
            onChangeText={setUsername}
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
            <Button title='Entrar' color={theme.colors.accentDeep} onPress={onSubmit} disabled={signingIn} />
            <S.Hint>
              <S.HintText>Credenciais de teste</S.HintText>
              <S.HintCreds>emilys · emilyspass</S.HintCreds>
            </S.Hint>
          </View>
        </S.Body>
      </ScrollView>
    </S.Root>
  )
}