
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';


export default function paiementScreen() {

  const [cardData, setCardData] = useState({});

//   const handleCardInput = (formData) => {
//     setCardData(formData);
//   };

//   const handlePay = () => {
//     if () {
//       Alert.alert('Paiement réussi', 'Votre paiement a été effectué avec succès.');
//     } else {
//       Alert.alert('Erreur', 'Veuillez vérifier les informations de votre carte.');
//     }
//   };

  return (
    <View style={styles.container}>
      <CreditCardInput
        requiresName
        requiresCVC
        validColor="black"
        invalidColor="red"
        placeholderColor="darkgray"
        // onChange={handleCardInput}
      />
      <View style={styles.buttonContainer}>
        <Link style={styles.buttonContainer}>Payer</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default paiementScreen;
