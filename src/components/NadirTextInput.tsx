import {ReactNode} from 'react';
import {GestureResponderEvent, StyleProp, TextStyle} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/components/TextInput/types';

// a wrapper written over react-native-paper button to reduce overhead of extra props
// and maintain consistency throughout the application

export type TextInputProps = {
  label: TextInputLabelProp;
  value: string;
  mode?: 'flat' | 'outlined';
  disabled?: boolean;
  placeholder?: string;
  textColor?: string;
  onChangeText?: (text: string) => void;
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
};

export const NadirInputText = ({
  children,
  mode = 'outlined',
  ...props
}: TextInputProps) => {
  return <TextInput mode={mode} {...props}></TextInput>;
};
