import { Button, Alert, ActivityIndicator, FlatList, View, Text } from 'react-native';
import { useAuth } from '../../contexts/AuthContext'
import * as S from './styles'
import { useTheme } from 'styled-components/native';
import { useCallback, useEffect, useState } from 'react';
import { collaboratorService } from '../../../data/services/collaboratorService';
import { Collaborator } from '../../../domains/entities/Collaborator';
import { Feather } from '@expo/vector-icons';

export const HomeScreen = () => {
  const theme = useTheme();
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [collaborators, setCollaborators] = useState<Collaborator[]>([])

  const onLogout = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: 'cancel' },
      { text: "Sair", style: 'destructive', onPress: () => void signOut() }
    ])
  }

  const fetchList = async () => {
    const items = await collaboratorService.list();
    setCollaborators(items)
  }

  useEffect(() => {
    setLoading(true)
    try {
      fetchList()
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const renderItem = useCallback(
    ({ item }: { item: Collaborator }) => (
      <View style={{ marginBottom: 12, flexDirection: 'row' }}>
        <Text style={{ color: theme.colors.accentDeep }}>{item.firstName} {item.lastName}</Text>
        <Text style={{ color: theme.colors.accentDeep }}>{item.role}</Text>
        <Text style={{ color: theme.colors.accentDeep }}>{item.email}</Text>
      </View>
    ),
    []
  )

  const emptyList = () => (
    <View style={{ alignItems: 'center', paddingTop: 50 }}>
      <Feather name='users' size={30} color={theme.colors.textFaint} />
      <Text style={{ color: theme.colors.accentDeep }}>Nenhum colaborador ainda</Text>
    </View>
  )

  return (
    <S.Root>
      <S.Header>
        <S.Greeting>
          Olá{user?.firstName ? `, ${user.firstName}` : ''}
        </S.Greeting>
      </S.Header>
      {loading ? (
        <S.Centered>
          <ActivityIndicator size='large' color={theme.colors.accentDeep} />
          <S.SmallText>Carregando seu time...</S.SmallText>
        </S.Centered>
      ) : (
        <S.Centered>
          <FlatList
            data={collaborators}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: theme.space.lg,
              paddingTop: 8,
              paddingBottom: 30,
              flexGrow: 1
            }}
            ListEmptyComponent={emptyList}
          />
        </S.Centered>
      )}
      <Button onPress={onLogout} title='Sair' color={theme.colors.accentDeep} />
    </S.Root>
  )
}