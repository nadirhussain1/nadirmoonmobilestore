import {ReactNode} from 'react';
import {
  Animated,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Button} from 'react-native-paper';

// a wrapper written over react-native-paper button to reduce overhead of extra props
// and maintain consistency throughout the application

export type ButtonProps = {
  mode?: 'text' | 'outlined' | 'contained';
  buttonColor?: string;
  textColor?: string;
  disable?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
  children?: ReactNode;
};

export const NadirButton = ({
  children,
  mode = 'contained',
  ...props
}: ButtonProps) => {
  return (
    <Button mode={mode} {...props}>
      {children}
    </Button>
  );
};
