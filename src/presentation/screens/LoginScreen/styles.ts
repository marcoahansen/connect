import styled from "styled-components/native";

export const Root = styled.View(({theme})=>({
  flex: 1,
  backgroundColor: theme.colors.bg
}))

export const Body = styled.View(({theme})=>({
  flex: 1,
  paddingVertical: theme.space.xl
}))

export const Title = styled.Text(({theme})=>({
  fontSize: 27,
  color: theme.colors.text
}))
export const SubTitle = styled.Text(({theme})=>({
  fontSize: 14,
  color: theme.colors.textMuted,
  marginTop: theme.space.sm,
  marginBottom: theme.space.lg
}))

