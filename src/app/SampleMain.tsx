import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useAppSelector, useAppDispatch} from '../store/Hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../store/slice/AuthSlice';
import {Button, Text, Input, Stack, ScrollView} from 'native-base';

const LoginMain = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    console.debug('count');
  }, [count]);

  return (
    <ScrollView>
      <Stack space={2} p={10}>
        <Button bg={'amber.400'} onPress={() => dispatch(decrement())}>
          Minus
        </Button>
        <Text fontSize="2xl">{count}</Text>
        <Button onPress={() => dispatch(increment())}>Add</Button>
        <Input
          isFullWidth
          placeholder="Input"
          value={incrementAmount}
          onChangeText={e => setIncrementAmount(e)}
        />
        <Button onPress={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </Button>
        <Button onPress={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </Button>
        <Button onPress={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </Button>
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: '75%'},
});

export default LoginMain;
