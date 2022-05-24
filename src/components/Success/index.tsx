import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import successImg from '../../assets/success.png';

import { styles } from './styles';
import { theme } from '../../theme';
import { Copyright } from '../Copyright';

interface SuccessProps {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: SuccessProps) {

  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agredecemos o feedback
      </Text>

      <TouchableOpacity 
        onPress={onSendAnotherFeedback}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}