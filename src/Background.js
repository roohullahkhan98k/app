import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;