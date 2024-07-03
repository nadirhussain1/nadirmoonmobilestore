import {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';
import {Button} from 'react-native-paper';

// a wrapper written over react-native-paper button to reduce overhead of extra props
// and maintain consistency throughout the application

export type ButtonProps = {
  mode: 'text' | 'outlined';
  buttonColor: string;
  textColor: string;
  disable: boolean;
  onPress: (e: GestureResponderEvent) => void;
  children?: ReactNode;
};

export const NadirButton = ({children, ...props}: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};
