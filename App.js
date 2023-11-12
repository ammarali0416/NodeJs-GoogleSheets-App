import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

// App component as the functional component
const App = () => {
  // Define the state variables and their setter functions
  const [name, setName] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [favoriteAnimal, setFavoriteAnimal] = useState('');

  // Function to add data to the Google Sheet using the API
  // async function that can be called without blocking the code execution
  const addDataToSheet = async () => {
    try {
      const response = await axios.post('https://api.sheety.co/ee51c7df476bc5a7503d41b1b68eeb80/reactNativeGoogleSheetRw/sheet1', {
        sheet1: { // Replace with your actual sheet name
          name,
          favoriteColor,
          favoriteAnimal
        }
      });
      console.log('Data added', response.data);
    } catch (error) {
      console.error('Error adding data', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" onChangeText={setName} value={name} />
      <TextInput placeholder="Favorite Color" onChangeText={setFavoriteColor} value={favoriteColor} />
      <TextInput placeholder="Favorite Animal" onChangeText={setFavoriteAnimal} value={favoriteAnimal} />
      <Button title="Submit" onPress={addDataToSheet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
