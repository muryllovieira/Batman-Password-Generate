import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatmanTextInputStyles';

interface BatmanTextInputProps{
    password: string;
}

export function BatmanTextInput(props: BatmanTextInputProps){
  return (
        <TextInput
            style={styles.inputer}
            placeholder='password'
            value={props.password}
        >
        </TextInput>
  );
}