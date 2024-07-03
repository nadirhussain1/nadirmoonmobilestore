import {ReactNode} from 'react';
import {View} from 'react-native';

export type Spacer = {
  space: number;
};

export const TopSpacer = ({space}: Spacer) => {
  return <View style={{marginTop: space}}></View>;
};
