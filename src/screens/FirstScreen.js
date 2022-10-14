import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import backgroundImage from '../../Assets/Images/backgroundImage.png';

const FirstScreen = ({navigation}) => {
  const poetry = ` دِلِ ناداں تُجھے ہُوا کِیا ہے \n آخر اِس درد کی دوا کِیا ہے`;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <Text style={[styles.texts, {fontSize: 50}]}>دیوانِ غالب</Text>
          <Pressable
            style={[styles.rectangels, {marginBottom: 12}]}
            onPress={() => navigation.navigate('Second')}>
            <Text style={[styles.texts, styles.buttonsFont]}>
              ReadDiwan-e-Ghalib
            </Text>
          </Pressable>
          <Pressable style={[styles.rectangels, {marginBottom: 12}]}>
            <Text style={[styles.texts, styles.buttonsFont]}>
              BookmarketCouplets
            </Text>
          </Pressable>
          <Pressable style={[styles.rectangels, {marginBottom: 12}]}>
            <Text style={[styles.texts, styles.buttonsFont]}>Instructions</Text>
          </Pressable>
          <Pressable style={styles.rectangels}>
            <Text style={[styles.texts, styles.buttonsFont]}>About Us</Text>
          </Pressable>
          <Text style={[styles.texts, {fontSize: 50}]}>آج کا شعر</Text>
          <Text style={[styles.texts, styles.EnglishText]}>
            Today's Selection
          </Text>
          <Text style={[styles.texts, styles.poetryText]}>{poetry}</Text>
          <Pressable style={styles.openButtonRectangle}>
            <Text style={styles.openText}>Open</Text>
          </Pressable>
          <Text style={[styles.texts, styles.EnglishText]}>
            Ghalib Academy, Karachi
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#647C5A',
  },
  image: {
    flex: 1,
  },
  rectangels: {
    width: 230,
    height: 54,
    backgroundColor: 'background: rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    color: 'black',
    fontFamily: 'IranNastaliq',
    fontWeight: '400',
  },
  EnglishText: {color: '#EFDA7D', fontSize: 15},
  poetryText: {
    fontSize: 30,
    fontFamily: 'Jameel Noori Nastaleeq Regular',
  },
  openText: {
    fontFamily: 'Stolzl',
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    fontSize: 18,
  },
  buttonsFont: {
    fontSize: 15,
  },
  openButtonRectangle: {
    height: 36,
    width: 140,
    borderRadius: 10,
    backgroundColor: ' rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
});
export default FirstScreen;
