import styled from "styled-components/native";

export const Root = styled.View(({theme})=>({
  flex: 1,
  backgroundColor: theme.colors.bg
}))

export const Header = styled.View(({ theme }) => ({
  paddingTop: theme.space.sm,
  paddingHorizontal: theme.space.lg,
  paddingBottom: theme.space.md,
}));

export const Greeting = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.clay,
  marginBottom: 2,
}));

export const Centered = styled.View(({theme})=>({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.space.xl
}))

export const SmallText = styled.Text(({theme})=>({
  fontSize: 13,
  color: theme.colors.textMuted
}))

