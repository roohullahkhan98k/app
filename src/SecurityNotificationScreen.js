import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { black, blue } from './Constants';


const logoImage = require('./Components/logo.jpeg');

const SecurityNotificationScreen = ({ navigation }) => {
  const [randomMessage, setRandomMessage] = useState('');
  const [fadeInOut] = useState(new Animated.Value(0));

  useEffect(() => {
    const generateRandomMessage = () => {
      const messages = [
        'Power will be cut off from 10 PM to 6 AM tomorrow.',
        'Scheduled maintenance on the security system tonight.',
        'Emergency drill scheduled for next Monday.',
        'Temporary network outage expected tomorrow morning.',
        'Reminder: Change your security access code every month.',
      ];
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    };

    setRandomMessage(generateRandomMessage());

    Animated.timing(fadeInOut, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCheckedPress = () => {
    navigation.navigate('Mainpage'); // Navigate back to the main page
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.headerText}>Society Connect</Text>
        </View>
      </View>

      {/* Body */}
      <Animated.View style={[styles.body, { opacity: fadeInOut }]}>
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>{randomMessage}</Text>
        </View>
        <TouchableOpacity style={styles.checkedButton} onPress={handleCheckedPress}>
          <Text style={styles.checkedButtonText}>Checked</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.credits}>App Credits:</Text>
        <Text style={styles.creditItem}>Developed by John Doe</Text>
        <Text style={styles.creditItem}>Designed by Jane Smith</Text>
        <Text style={styles.creditItem}>Contributions by Alex Johnson</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: black,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBox: {
    padding: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkedButton: {
    backgroundColor: blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  credits: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  creditItem: {
    marginBottom: 3,
  },
});

export default SecurityNotificationScreen;
