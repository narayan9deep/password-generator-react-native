/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//Form validation
import * as Yup from 'yup';
const Password = Yup.object({
  passwordLength: Yup.number()
    .min(4, 'Should be atleast 4 character long')
    .max(16, 'Should be atleast 16 characters long')
    .required('This field cannot be empty'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [passwordGenerated, isPasswordGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  //generate password string:
  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberDigits = '0123456789';
    const symbolList = '!@#$%^&*()_+';

    if (lowercase) {
      characterList += lowerChars;
    }
    if (uppercase) {
      characterList += upperChars;
    }
    if (numbers) {
      characterList += numberDigits;
    }
    if (symbols) {
      characterList += symbolList;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    isPasswordGenerated(true);
  };

  //create password:
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < characters.length; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  //reset password generator state:
  const resetPasswordState = () => {
    setPassword('');
    isPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
