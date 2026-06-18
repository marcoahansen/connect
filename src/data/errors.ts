import axios from 'axios';

interface ApiErrorBody {
  message?: string;
  error?: string;
}

export function extractErrorMessage(
  error: unknown,
  fallback = 'Algo deu errado. Tente novamente.'
): string {
  if (axios.isAxiosError<ApiErrorBody>(error)) {
    if (error.code === 'ECONNABORTED') {
      return 'A requisição expirou. Verifique sua conexão e tente novamente.';
    }
    if (!error.response) {
      return 'Erro de rede. Verifique sua conexão com a internet.';
    }

    const body = error.response.data;
    if (body?.message) return body.message;
    if (body?.error) return body.error;

    if (error.response.status === 401 || error.response.status === 400) {
      return 'Credenciais inválidas. Tente novamente.';
    }
    return `Falha na requisição (status ${error.response.status}).`;
  }

  if (error instanceof Error && error.message) return error.message;
  return fallback;
}
