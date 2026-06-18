import { Feather } from "@expo/vector-icons";
import { Pressable, type TextInputProps } from "react-native";
import * as S from "./styles";
import { useState } from "react";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: keyof typeof Feather.glyphMap;
}

export const Input = ({ label, error, icon, secureTextEntry, onFocus, onBlur, ...rest }: InputProps) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(Boolean(secureTextEntry))
  return (
    <S.Wrapper>
      {label ? <S.LabelText>{label}</S.LabelText> : null}
      <S.Field $focused={focused} $error={Boolean(error)}>
        {icon ? (
          <Feather
            name={icon}
            size={18}
            color={focused ? theme.colors.accentDeep : theme.colors.textFaint}
          />
        ) : null}
        <S.StyledTextInput
          {...rest}
          secureTextEntry={hidden}
          placeholderTextColor={theme.colors.textFaint}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false)
            onBlur?.(e)
          }}
        />
        {secureTextEntry ? (
          <Pressable onPress={() => setHidden((hidden) => !hidden)} hitSlop={10}>
            <Feather name={hidden ? 'eye' : 'eye-off'} size={18} color={theme.colors.textFaint} />
          </Pressable>
        ) : null}
      </S.Field>
      {error ? <S.ErrorText>{error}</S.ErrorText> : null}
    </S.Wrapper>
  )
}