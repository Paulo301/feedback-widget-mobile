import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';
import { Camera, Trash } from 'phosphor-react-native';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: ScreenshotButtonProps) {

  return (
    <TouchableOpacity 
      onPress={screenshot ? onRemoveShot : onTakeShot}
      style={styles.container}
    >
      {
        screenshot
        ?
        <View>
          <Image
            source={{ uri: screenshot }}
            style={styles.image}
          />

          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight='fill'
            style={styles.removeIcon}
          />
        </View>
        :
        <Camera
          size={24}
          color={theme.colors.text_secondary}
          weight='bold'
        />
      }
    </TouchableOpacity>
  );
}