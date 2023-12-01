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
  const [numbers, useNumbers] = useState(false);
  const [symbols, useSymbols] = useState(false);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
