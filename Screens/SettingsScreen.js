    import React from 'react';
    import { View, Text, StyleSheet, Switch } from 'react-native';

    export default function SettingsScreen() {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.option}>
            <Text>Dark Theme</Text>
            <Switch
            onValueChange={toggleSwitch}
            value={isDarkTheme}
            />
        </View>
        {/* Other settings options */}
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 24, marginBottom: 16 },
    option: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
    });
