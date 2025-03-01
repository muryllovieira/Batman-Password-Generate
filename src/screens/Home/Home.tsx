import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { Menu } from "../../components/Menu/Menu";
import { BatmanLogo } from "../../components/BatmanLogo/BatmanLogo";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatmanLogo/>
            </View>
            
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

