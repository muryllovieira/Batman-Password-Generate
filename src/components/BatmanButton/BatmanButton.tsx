import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatmanButtonStyles';
import { BatmanTextInput } from '../BatmanTextInput/BatmanTextInput';
import generatePassword from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatmanButton() {

    const [password, setPassword] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePassword()
        setPassword(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(password)
        console.log('Copied to clipboard')
    }

    return (
        <>
            <BatmanTextInput password={password}/>

            <Pressable
                onPress={handleGenerateButton}
                style={styles.button}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable
                onPress={() => { handleCopyButton }}
                style={styles.button}
            >
                <Text style={styles.text}>⚡ COPY</Text>
            </Pressable>

        </>
    );
}