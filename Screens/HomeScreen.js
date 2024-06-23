    import React from 'react';
    import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

    const transactions = [
    { id: '1',  name: 'Apple Store', description: ' Entertainment', amount: '- $5.99', icon: require('../assets/apple.png') },
    { id: '2',  name: 'Spotify', description: ' Music', amount: '- $12.99', icon: require('../assets/spotify.png') },
    { id: '3',  name: 'Money Transfer', description: ' Transaction', amount: '$3.00', icon: require('../assets/moneyTransfer.png') },
    { id: '4',  name: 'Grocery ', description: ' Shopping', amount: '- $88', icon: require('../assets/grocery.png') },
    ];

    export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style= {styles.headerContainer}>
                <Image style={styles.profileImage} source={require('../assets/RahKayy.jpg')} />
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.name}>Rahina Kayor</Text>
                <View style={styles.searchContainer}>
                    <Image style={styles.searchIcon} source={require('../assets/search.png')} />
                </View>
            </View>
            <View style={styles.paymentInfo}>
                <Image style={styles.creditCard} source={require('../assets/Card.png')} />
                <View style={styles.paymentOptionsContainers}>
                    <View style={styles.paymentOptions}>
                        <View style={styles.iconsContainer}>
                            <Image style={styles.icons} source={require('../assets/send.png')} />
                        </View>
                        <Text style={styles.optionsText}>Sent</Text>
                    </View>
                    <View style={styles.paymentOptions}>
                        <View style={styles.iconsContainer}>
                            <Image style={styles.icons} source={require('../assets/recieve.png')} />
                        </View>
                        <Text style={styles.optionsText}>Receive</Text>
                    </View>
                    <View style={styles.paymentOptions}>
                        <View style={styles.iconsContainer}>
                            <Image style={styles.icons} source={require('../assets/loan.png')} />
                        </View>
                        <Text style={styles.optionsText}>Loan</Text>
                    </View>
                    <View style={styles.paymentOptions}>
                        <View style={styles.iconsContainer}>
                            <Image style={styles.icons} source={require('../assets/topUp.png')} />
                        </View>
                        <Text style={styles.optionsText}>Topup</Text>
                    </View>
                </View>
            </View>
            <View style={styles.transactionsContainer}>
                <Text style={styles.transactionText}>Transaction</Text>
                <Text style= {{color: 'blue'}}>See All</Text>
            </View>
            <FlatList
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <View style={styles.transactions}>
                    <View style={styles.iconsContainer}>
                        <Image source={item.icon} />
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionName}>{item.name}</Text>
                        <Text style={styles.transactionDescription}>{item.description}</Text>
                    </View>
                    <Text style={[styles.transactionAmount, 
                        { color: item.amount.includes('$3.00') ? 'blue' : 'black' }]}>
                        {item.amount}
                    </Text>
                </View>
                )}
            />
        </View> 
    );
    }

    const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: 'column',
        padding: 50,
        backgroundColor: '#ffffff', 
        paddingTop: 50,
    },
    headerContainer: { 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems: 'center', 
        marginBottom: 20,
        top: 5,
    },
    profileImage: {
        width: 45,
        height: 45,
        top: 30,
        borderRadius: '100',
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
    },
    searchContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#F8F8F8',
        borderRadius: "100%",
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
    iconsContainer: {
        width: 50, 
        height: 50, 
        backgroundColor: '#F8F8F8', 
        borderRadius: '100%', 
        alignItems: 'center', 
        justifyContent: 'center',
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
        color: 'gray', 
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
    },
    });
