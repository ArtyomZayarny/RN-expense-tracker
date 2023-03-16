import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

export const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.color.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  flatText: {
    color: GlobalStyles.color.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.color.primary100,
    borderRadius: 4,
  },
});
