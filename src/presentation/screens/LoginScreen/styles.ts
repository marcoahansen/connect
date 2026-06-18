import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Root = styled.View(({theme})=>({
  flex: 1,
  backgroundColor: theme.colors.bg
}))

export const Body = styled.View(({theme})=>({
  flex: 1,
  paddingVertical: theme.space.xl,
  paddingHorizontal: theme.space.lg
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

export const Hero = styled(LinearGradient)(({theme}) => ({
  paddingTop: 30,
  paddingHorizontal: theme.space.lg,
  paddingBottom: theme.space.xl,
  borderBottomRightRadius: theme.radii.xl,
  borderBottomLeftRadius: theme.radii.xl
}))

export const Badge = styled.View(({theme})=>({
  marginTop: 10,
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'flex-start',
  gap: theme.radii.xs,
  paddingVertical: theme.radii.xs,
  paddingHorizontal: theme.radii.sm,
  borderRadius: theme.radii.pill,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  marginBottom: theme.space.lg
}))

export const BadgeText = styled.Text(({theme})=>({
  fontSize: theme.radii.sm,
  letterSpacing: 1.5,
  color: "#fff"
}))

export const Brand = styled.Text(({theme})=>({
  fontSize: theme.space.xxl,
  lineHeight: 60,
  color: "#fff"
}))

export const Tagline = styled.Text(({theme})=>({
  fontSize: theme.space.md,
  lineHeight: theme.space.lg,
  color: '#fff',
  marginTop: theme.radii.xs,
  maxWidth: 260,
}))

export const BannerBox = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 9,
  paddingVertical: 13,
  paddingHorizontal: 15,
  borderRadius: theme.radii.md,
  backgroundColor: theme.colors.dangerSoft,
  marginBottom: theme.space.md,
}));

export const BannerText = styled.Text(({ theme }) => ({
  flex: 1,
  fontSize: 13,
  color: theme.colors.danger,
}));

export const Hint = styled.View(({ theme }) => ({
  alignItems: 'center',
  marginTop: theme.space.lg,
  gap: 3,
}));

export const HintText = styled.Text(({ theme }) => ({
  fontSize: 11,
  letterSpacing: 0.5,
  color: theme.colors.textFaint,
  textTransform: 'uppercase',
}));

export const HintCreds = styled.Text(({ theme }) => ({
  fontSize: 14,
  color: theme.colors.accentDeep,
}));