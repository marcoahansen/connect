import styled from 'styled-components/native';

export const Wrapper = styled.View(({ theme }) => ({
  marginBottom: theme.space.md,
}));

export const LabelText = styled.Text(({ theme }) => ({
  fontSize: 13,
  letterSpacing: 0.3,
  color: theme.colors.textMuted,
  marginBottom: 7,
}));

export const Field = styled.View<{ $focused: boolean; $error: boolean }>(
  ({ theme, $focused, $error }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 54,
    paddingHorizontal: theme.space.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.md,
    borderWidth: 1.5,
    borderColor: $error
      ? theme.colors.danger
      : $focused
        ? theme.colors.accent
        : theme.colors.border,
  }),
);

export const StyledTextInput = styled.TextInput(({ theme }) => ({
  flex: 1,
  height: '100%',
  fontSize: 16,
  color: theme.colors.text,
}));

export const ErrorText = styled.Text(({ theme }) => ({
  marginTop: 6,
  marginLeft: 4,
  fontSize: 12.5,
  color: theme.colors.danger,
}));
