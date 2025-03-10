import { Image, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Button, Alert, } from 'react-native';
import {AsyncStorage} from 'react-native';

import { Link } from 'expo-router';
import { useRouter } from 'expo-router'

export default function LoginScreen() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    fetch('https://backend-astonvoyage.vercel.app/api/user/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: email,
        mdp: password,
      }),
    })
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Erreur de connexion');
        }
        return response.json();
      })
      .then((data) => {
        // Gérer la réponse de l'API, par exemple stocker le token JWT
        console.log(data);
        try {
         AsyncStorage.setItem('nom', data.token);
        AsyncStorage.setItem('prenom', data.nom);
        AsyncStorage.setItem('mail', data.mail);
        AsyncStorage.setItem('id', data.user._id);
        } catch (error) {
      console.error('erreur', error);
        }
      })
      .catch((error) => {
        console.error('NVEL Erreur:', error);
        Alert.alert('Erreur', 'Erreur de connexion.');
      });
   
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
      <Button title="Se connecter" onPress={handleLogin} />
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
