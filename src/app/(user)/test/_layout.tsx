import { Stack } from 'expo-router'
import React from 'react'

const TestScreen = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{title: 'Testing'}} />
    </Stack>
  )
}

export default TestScreen