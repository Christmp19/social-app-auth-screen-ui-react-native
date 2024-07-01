import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
          <Text>LoginScreen</Text>
          <Pressable
              onPress={() => navigation.navigate('Home')}
          >
              <Text>Click here</Text>
          </Pressable>
    </SafeAreaView>
  )
}

export default LoginScreen