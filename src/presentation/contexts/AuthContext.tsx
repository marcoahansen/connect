import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api, setAuthToken } from '../../data/api';
import { authService } from '../../data/services/authService';
import { extractErrorMessage } from '../../data/errors';
import { Credentials, UserProfile } from '../../domains/entities/Auth';

const TOKEN_KEY = '@connect/token';
const USER_KEY = '@connect/user';

interface AuthContextData {
  token: string | null;
  user: UserProfile | null;
  isAuthenticated: boolean;
  initializing: boolean;
  signingIn: boolean;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

function safeParseUser(raw: string | null): UserProfile | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserProfile;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [storedToken, storedUser] = await Promise.all([
          AsyncStorage.getItem(TOKEN_KEY),
          AsyncStorage.getItem(USER_KEY),
        ]);
        if (storedToken) {
          setAuthToken(storedToken);
          setToken(storedToken);
          setUser(safeParseUser(storedUser));
        }
      } finally {
        setInitializing(false);
      }
    })();
  }, []);

  const signIn = useCallback(async (credentials: Credentials) => {
    setSigningIn(true);
    try {
      const session = await authService.login(credentials);
      setAuthToken(session.token);
      AsyncStorage.setItem(TOKEN_KEY, session.token).catch(() => undefined)
      AsyncStorage.setItem(USER_KEY, JSON.stringify(session.profile))
      setToken(session.token);
      setUser(session.profile);
    } catch (error) {
      throw new Error(extractErrorMessage(error, 'Não foi possível entrar. Verifique suas credenciais.'));
    } finally {
      setSigningIn(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setAuthToken(null);
    delete api.defaults.headers.common.Authorization;
    AsyncStorage.removeItem(TOKEN_KEY)
    AsyncStorage.removeItem(USER_KEY)
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextData>(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      initializing,
      signingIn,
      signIn,
      signOut,
    }),
    [token, user, initializing, signingIn, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextData {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
