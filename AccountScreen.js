import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles.js'

export function AccountScreen() {
  return(
    
    <View style={styles.centerting}>
      <Text>Account Information!</Text>

      <Text> </Text>

      <Text style={styles.input}>Username: nangafor</Text>
      <Text style={styles.input}>Email: nangafor@u.rochester.edu</Text>
      <Text style={styles.input}>Points: 9999999</Text>
      <Text style={styles.input}>Achievements: Gud man :0</Text>

    </View>   
    
    
  );
}


