import {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';
import {TextInput} from 'react-native-paper';

// a wrapper written over react-native-paper button to reduce overhead of extra props
// and maintain consistency throughout the application

export type TextInputProps = {
  mode: 'flat' | 'outlined';
  disabled: boolean;
  placeholder: string;
  textColor: string;
  onChangeText: (text: string) => void;
  children?: ReactNode;
};

export const NadirInputText = ({children, ...props}: TextInputProps) => {
  return <TextInput {...props}></TextInput>;
};
