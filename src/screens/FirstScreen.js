import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import image from '../../Assets/Images/image8.png';

const FirstScreen = ({navigation}) => {
  const qoute = 'اج کا شیر';
  const poetry = ` دِلِ ناداں تُجھے ہُوا کِیا ہے \n آخر اِس درد کی دوا کِیا ہے`;
  const Academy = 'Ghalib Academy, Karachi';
  const todaysSelection = "Today's Selection";
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={[styles.dewaneghalibText, styles.text]}>دیوانِ غالب</Text>
        <Pressable style={styles.rectangle15}>
          <Text style={[styles.text, {fontSize: 16, lineHeight: 42}]}>
            ReadDiwan-e-Ghalib
          </Text>
        </Pressable>
        <Pressable style={[styles.rectangle15, {marginTop: 145}]}>
          <Text style={[styles.text, {fontSize: 16, lineHeight: 42}]}>
            BookmarketCouplets
          </Text>
        </Pressable>
        <Pressable style={[styles.rectangle15, {marginTop: 215}]}>
          <Text style={[styles.text, {fontSize: 16, lineHeight: 42}]}>
            Instructions
          </Text>
        </Pressable>
        <Pressable style={[styles.rectangle15, {marginTop: 285}]}>
          <Text style={[styles.text, {fontSize: 16, lineHeight: 42}]}>
            About us
          </Text>
        </Pressable>
        <Text style={[styles.todaysQoute, styles.text]}>{qoute}</Text>
        <Text style={[styles.todaysSelection, styles.text, {color: '#EFDA7D'}]}>
          {todaysSelection}
        </Text>
        <Text
          style={[
            styles.poetry,
            styles.text,
            {fontFamily: 'Jameel Noori Nastaleeq'},
          ]}>
          {poetry}
        </Text>
        <Pressable style={styles.openButton}>
          <Text style={styles.openText}>Open</Text>
        </Pressable>
        <Text style={[styles.Academy, styles.text, {color: '#EFDA7D'}]}>
          {Academy}
        </Text>
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
  text: {
    position: 'absolute',
    fontFamily: 'IranNastaliq',
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
  },
  dewaneghalibText: {
    width: 182,
    height: 72,
    marginLeft: 97,
    marginTop: 15,
    fontSize: 56,
    lineHeight: 72,
    color: 'black',
  },
  todaysQoute: {
    width: 182,
    height: 72,
    marginLeft: 100,
    marginTop: 355,
    fontSize: 56,
    lineHeight: 80,
  },
  todaysSelection: {
    width: 205,
    height: 40,
    marginLeft: 87,
    marginTop: 435,
    fontSize: 21,
    lineHeight: 32,
  },
  poetry: {
    width: 250,
    height: 80,
    marginLeft: 53,
    marginTop: 475,
    fontSize: 26,
    lineHeight: 30,
  },
  Academy: {
    width: 250,
    height: 80,
    marginLeft: 58,
    marginTop: 610,
    fontSize: 15,
    lineHeight: 30,
    letterSpacing: 0.5,
  },
  openText: {
    fontFamily: 'Stolzl',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    position: 'absolute',
    width: 100,
    height: 20,
    textAlign: 'center',
    color: 'black',
  },
  rectangle15: {
    borderRadius: 20,
    width: 230,
    height: 54,
    marginLeft: 70,
    marginTop: 78,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
  openButton: {
    borderRadius: 10,
    width: 165,
    height: 42,
    marginLeft: 105,
    position: 'absolute',
    marginTop: 550,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
export default FirstScreen;
