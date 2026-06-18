import { ScrollView } from 'react-native'
import * as S from './styles'
export const LoginScreen = () => {
  return (
    <S.Root>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <S.Body>
          <S.Title>Bem vindo!</S.Title>
          <S.SubTitle>Faça o login para gerenciar o seu time.</S.SubTitle>
        </S.Body>
      </ScrollView>
    </S.Root>
  )
}