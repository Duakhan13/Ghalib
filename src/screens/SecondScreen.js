import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import image from '../../Assets/Images/image8.png';

const SecondScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>{'>'}</Text>
          </Pressable>
          <View style={styles.contentView}>
            <Text>Content-فہرت</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 375,
    height: 812,
    marginLeft: 0,
    marginTop: 0,
    backgroundColor: '#647C5A',
  },
  image: {
    flex: 1,
  },
  topView: {},
  backButton: {
    width: 28,
    height: 28,
    left: 16,
    top: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  backButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 28,
    left: 8,
  },
  contentView: {
    backgroundColor: 'background: rgba(255, 255, 255, 1)',
  },
});
export default SecondScreen;
