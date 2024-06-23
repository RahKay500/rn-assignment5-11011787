    import React from 'react';
    import { View, Text, StyleSheet, FlatList } from 'react-native';

    const transactions = [
    { id: '1', description: 'Grocery Shopping', amount: '- $88' },
    { id: '2', description: 'Apple Store', amount: '- $5.99' },
    { id: '3', description: 'Spotify Music', amount: '- $12.99' },
    ];

    export default function HomeScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome back, Eric Atsu</Text>
        <FlatList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <View style={styles.transaction}>
                <Text>{item.description}</Text>
                <Text>{item.amount}</Text>
            </View>
            )}
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16,
        backgroundColor: '#ffffff', 
    },
    welcomeText: { fontSize: 24, marginBottom: 16 },
    transaction: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    });
