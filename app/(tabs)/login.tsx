import { Image, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Button, Alert, } from 'react-native';

import { Link } from 'expo-router';
import { useRouter } from 'expo-router'

export default function LoginScreen() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Ajoutez ici la logique de validation et d'authentification
    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Connexion réussie');
      router.navigate('/home'); // Rediriger vers la page d'accueil après la connexion réussie
    } else {
      Alert.alert('Email ou mot de passe incorrect');
    }
  };

    const newLocal = '';
    return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../../assets/images/logo.png')}/>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#8C52FF'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor={'#8C52FF'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Link style={styles.title} href="/home">Se connecter</Link>
      <Link style={styles.subtitle} href={"/inscription"}>Pas encore de compte? Inscrivez-vous</Link>
    </View>

    );
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#8C52FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderColor: '#8C52FF',
    backgroundColor: 'white',
    width: '80%',

  },
  img:{
    width: 250,
    height: 250,
    marginBottom: -25,
  },
  subtitle:{
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  }
});
