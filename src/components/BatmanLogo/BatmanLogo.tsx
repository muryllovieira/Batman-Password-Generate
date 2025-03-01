import React from 'react';
import { View, Text, Image} from 'react-native';

import { styles } from './BatmanLogoStyles';
import batLogo from '../../../assets/bat-logo.png'

export function BatmanLogo() {
  return (
    <>
        <Text style={styles.title}>
            BATMAN PASSWORD GENERATOR
        </Text>
        <Image
            source={batLogo}
            style={{
                resizeMode: 'contain',
                height: 180,
            }}
        />
    </>
  );
}