import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = ({ onPress = () => {} }) => {
//   return (
//     <Pressable
//       style={{ marginRight: 20 }}
//        onPress={onPress}
//     >
//       <Text style={{ fontSize: 16 }}>Skip</Text>
//     </Pressable>
//   );
// };
// const Next = ({ onPress = () => {} }) => {
//   return (
//     <Pressable
//       style={{ marginRight: 20 }}
//        onPress={onPress}
//     >
//       <Text style={{ fontSize: 16 }}>Next</Text>
//     </Pressable>
//   );
// };

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'white' : 'gray';

  return (
    <View
      style={{
        backgroundColor,
        width: 5,
        height: 5,
        marginHorizontal: 3,
      }}
    >

    </View>
  )
}

const Done = ({ onPress = () => {} }) => {
  return (
    <Pressable
      style={{ marginRight: 8 }} 
       onPress={onPress}
    >
      <Text style={{ fontSize: 16, color: 'white' }}>Done</Text>
    </Pressable>
  );
};


const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      // SkipButtonComponent={Skip}
      // NextButtonComponent={Next}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: 'blue',
          image: <Image source={require('../assets/img1.png')}  className="w-80 h-80" />,
          title: 'Gestion des données',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: 'orange',
          image: <Image source={require('../assets/img2.png')}  className="w-80 h-80" />,
          title: 'Site web responsive',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: 'purple',
          image: <Image source={require('../assets/img4.png')}  className="w-80 h-80" />,
          title: 'Gestion réseau social',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: 'red',
          image: <Image source={require('../assets/img5.png')}  className="w-80 h-80" />,
          title: 'Maintenance du site',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
  ]}
    />
  )
}

export default OnboardingScreen