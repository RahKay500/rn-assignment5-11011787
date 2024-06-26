    import React from 'react';
    import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
    import { useTheme } from '../ThemeContext';

    const transactions = [
    { id: '1',  name: 'Apple Store', description: ' Entertainment', amount: '- $5.99', icon: require('../assets/apple.png') },
    { id: '2',  name: 'Spotify', description: ' Music', amount: '- $12.99', icon: require('../assets/spotify.png') },
    { id: '3',  name: 'Money Transfer', description: ' Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png') },
    { id: '4',  name: 'Grocery ', description: ' Shopping', amount: '- $88', icon: require('../assets/grocery.png') },
    ];

    export default function HomeScreen() {
    const { isDarkTheme } = useTheme();
    const styles = createStyles(isDarkTheme);

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image style={styles.profileImage} source={require('../assets/RahKayy.jpg')} />
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.name}>Rahina Kayor</Text>
            <View style={styles.searchContainer}>
            <Image style={[styles.icons, {tintColor: isDarkTheme ? 'white' : 'black'}]} source={require('../assets/search.png')} />
            </View>
        </View>
        <View style={styles.paymentInfo}>
            <Image style={styles.creditCard} source={require('../assets/Card.png')} />
            <View style={styles.paymentOptionsContainers}>
            <View style={styles.paymentOptions}>
                <View style={styles.iconsContainer}>
                <Image style={[styles.icons, {tintColor: isDarkTheme ? 'white' : 'black'}]} 
                source={require('../assets/send.png')} />
                </View>
                <Text style={styles.optionsText}>Sent</Text>
            </View>
            <View style={styles.paymentOptions}>
                <View style={styles.iconsContainer}>
                <Image style={[styles.icons, {tintColor: isDarkTheme ? 'white' : 'black'}]} 
                source={require('../assets/recieve.png')} />
                </View>
                <Text style={styles.optionsText}>Receive</Text>
            </View>
            <View style={styles.paymentOptions}>
                <View style={styles.iconsContainer}>
                <Image style={[styles.icons, {tintColor: isDarkTheme ? 'white' : 'black'}]} 
                source={require('../assets/loan.png')} />
                </View>
                <Text style={styles.optionsText}>Loan</Text>
            </View>
            <View style={styles.paymentOptions}>
                <View style={styles.iconsContainer}>
                <Image style={[styles.icons, {tintColor: isDarkTheme ? 'white' : 'black'}]} 
                source={require('../assets/topUp.png')} />
                </View>
                <Text style={styles.optionsText}>Topup</Text>
            </View>
            </View>
        </View>
        <View style={styles.transactionsContainer}>
            <Text style={styles.transactionText}>Transaction</Text>
            <Text style={{ color: '#0066FF' }}>Sell All</Text>
        </View>
        <FlatList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <View style={styles.transactions}>
                <View style={styles.iconsContainer}>
                <Image style={item.name === 'Spotify'
                ? null : { tintColor: isDarkTheme ? 'white' : 'black' }}
                source={item.icon} />
                </View>
                <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionDescription}>{item.description}</Text>
                </View>
                <Text style={[ 
                styles.transactionAmount, 
                { color: item.amount.includes('$300') ? '#0066FF' : (isDarkTheme ? 'white' : 'black') }]}>
                {item.amount}
                </Text>
            </View>
            )}
        />
        </View>
    );
    }

    const createStyles = (isDarkTheme) => StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: 'column',
        padding: 50,
        backgroundColor: isDarkTheme ? '#0A0115' : '#ffffff', 
        paddingTop: 50,
    },
    headerContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 20,
        top: 5,
    },
    profileImage: {
        width: 45,
        height: 45,
        top: 30,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
    },
    welcomeText: { 
        height: 20,
        width: 100,
        marginTop: 30,
        fontSize: 14, 
        fontFamily: 'Poppins',
        opacity: 0.5,
        left: 5,
        color: isDarkTheme ? 'white' : 'black',
    },
    name: { 
        height: 30,
        width: 120,
        top: 40,
        right: 105,
        position: 'relative',
        fontSize: 18, 
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: isDarkTheme ? 'white' : 'black',
    },
    searchContainer: {
        width: 40,
        height: 40,
        backgroundColor: isDarkTheme ? '#1F1E2E' : '#F8F8F8',
        borderRadius: 100,
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditCard: {
        width: 330,
        height: 195,
        marginTop: 40,
        position: 'relative',
        right: 5,
    },
    paymentOptionsContainers: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        marginTop: 20,
        padding: 15,
    },
    paymentOptions: {
        flexDirection: 'column',  
        alignItems: 'center',  
        paddingLeft: 55,
        paddingRight: 55,
    },
    optionsText: {
        fontSize: 14, 
        marginTop: 5,
        color: isDarkTheme ? 'gray' : 'black',
    },
    iconsContainer: {
        width: 50, 
        height: 50, 
        backgroundColor: isDarkTheme ? '#1F1E2E': '#F8F8F8', 
        borderRadius: 100, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    icons: { 
    },
    transactionsContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 8,
        marginTop: 20,
    },
    transactionText: { 
        fontSize: 18, 
        fontWeight: '600',
        color: isDarkTheme ? 'white' : 'black',
    },
    transactions: { 
        flexDirection: 'row',  
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 30,
        top: 10,
    },
    transactionDetails: {
        flexDirection: 'column',
        flex: 1,
    },
    transactionDescription: { 
        color: isDarkTheme ? 'lightgray' : 'gray', 
        fontSize: 12, 
        fontWeight: '400',
        position: 'relative',
        left: 10,
        top: 10,
    },
    transactionName: { 
        fontSize: 16, 
        fontWeight: '500',
        position: 'absolute',
        left: 12,
        bottom: 5,
        color: isDarkTheme ? 'white' : 'black',
    },
    transactionAmount: {
    }
    });
