import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import backgroundImage from '../../Assets/Images/backgroundImage.png';
import BackImage from '../../Assets/Images/BackImage.png';
import Save from '../../Assets/Images/Save.png';
import Speaker from '../../Assets/Images/Speaker.png';
import OpenBook from '../../Assets/Images/OpenBook.png';
import Previous from '../../Assets/Images/Previous.png';
import Next from '../../Assets/Images/Next.png';
const SecondScreen = ({navigation}) => {
  const poetryArr = [
    `نقش فریادی ہے کس کی شوخیٔ تحریر کا \n کاغذی ہے پیرہن ہر پیکر تصویر کا `,
    `کاو کاو سخت جانی ہائے تنہائی نہ پوچھ \n صبح کرنا شام کا لانا ہے جوئے شیر کا`,
    `جذبۂ بے اختیار شوق دیکھا چاہیے \n سینۂ شمشیر سے باہر ہے دم شمشیر کا`,
    `آگہی دام شنیدن جس قدر چاہے بچھائے \n مدعا عنقا ہے اپنے عالم تقریر کا `,
  ];
  //const poetry = ;
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
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'stretch',
            }}>
            <Pressable onPress={() => navigation.navigate('First')}>
              <Image source={BackImage}></Image>
            </Pressable>
            <View style={styles.contentRectangle}>
              <Text style={[styles.texts, styles.contentText]}>
                Contents -{' '}
              </Text>
              <Text style={[styles.texts, styles.contentUrduText]}> فہرت</Text>
            </View>
          </View>
          <Text style={styles.numberText}>1</Text>

          {poetryArr.map((e, i) => {
            if (i === 1) {
              return (
                <>
                  <Text
                    style={[
                      styles.texts,
                      styles.poetryText,
                      {marginBottom: -5},
                    ]}>
                    {e}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'stretch',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={Previous}
                      style={{alignSelf: 'flex-start'}}></Image>
                    <Image
                      source={Next}
                      style={{alignSelf: 'flex-end'}}></Image>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={styles.buttonsView}>
                      <Text style={{color: 'black'}}>Roman</Text>
                      <Image source={OpenBook}></Image>
                    </View>
                    <Image
                      source={Speaker}
                      style={{marginHorizontal: 10}}></Image>
                    <View style={styles.buttonsView}>
                      <Text style={{color: 'black'}}>Save</Text>
                      <Image source={Save}></Image>
                    </View>
                  </View>
                </>
              );
            } else {
              return (
                <>
                  <Text style={[styles.texts, styles.poetryText]}>{e}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={styles.buttonsView}>
                      <Text style={{color: 'black'}}>Roman</Text>
                      <Image source={OpenBook}></Image>
                    </View>
                    <Image
                      source={Speaker}
                      style={{marginHorizontal: 10}}></Image>
                    <View style={styles.buttonsView}>
                      <Text style={{color: 'black'}}>Save</Text>
                      <Image source={Save}></Image>
                    </View>
                  </View>
                </>
              );
            }
          })}
          <Text style={styles.EnglishText}>Ghalib Academy,Karachi</Text>
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
  texts: {color: 'black'},
  contentRectangle: {
    height: 46,
    width: 162,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 38,
    flexDirection: 'row',
  },
  contentText: {
    fontFamily: 'IranNastaliq',
    fontSize: 15,
    lineHeight: 56,
  },
  numberText: {
    fontFamily: 'IranNastaliq',
    fontSize: 35,
    marginVertical: -20,
    color: 'black',
  },
  EnglishText: {
    fontFamily: 'IranNastaliq',
    color: '#EFDA7D',
    fontSize: 15,
    marginTop: 8,
  },
  contentUrduText: {
    fontFamily: 'Jameel Noori Nastaleeq Regular',
    fontSize: 24,
  },
  buttonsView: {
    width: 105,
    height: 32,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  poetryText: {
    fontFamily: 'jameel-noori-nastaleeq-italic-1',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default SecondScreen;
