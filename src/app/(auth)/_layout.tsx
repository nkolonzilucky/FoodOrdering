import { Stack } from 'expo-router'
import React from 'react'

const AuthStack = () => {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{title: 'Sign In'}} />
      <Stack.Screen name='sign-up' options={{title: 'Sign In'}} />
    </Stack>
  )
}

export default AuthStack