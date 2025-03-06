import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { Menu } from "../../components/Menu/Menu";
import { BatmanLogo } from "../../components/BatmanLogo/BatmanLogo";
import { BatmanTextInput } from "../../components/BatmanTextInput/BatmanTextInput";
import { BatmanButton } from "../../components/BatmanButton/BatmanButton";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatmanLogo/>
            </View>
            
            <View style={styles.inputContainer}>
                <BatmanButton/>
            </View>

            <StatusBar style="light" />
        </View>
    )
}

