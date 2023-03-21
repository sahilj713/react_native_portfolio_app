import React from 'react';
import {View,Text,StyleSheet, Platform,Image,Dimensions,ScrollView} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';


const ProfileScreen = () => {
    return(
   <ScrollView>    
    <View style={styles.screen}>
       <View style={styles.imageContainer}>
       <Image 
           source={require('../assets/sj.jpg')}
           style={styles.image}
       />
       </View>

       <View>
           <Text style={styles.info}>
               First Name -  Sahil
           </Text>
           <Text style={styles.info}>
               Last Name -  Jain
           </Text>
           <Text style={styles.info}>
               Father name - Mr. Sanjay Jain
           </Text>
           <Text style={styles.info}>
               Address - 26 Sector-c Sangam Nagar
           </Text>
           <Text style={styles.info}>
               City - Indore
           </Text>
           <Text style={styles.info}>
               State - Madhya Pradesh
           </Text>
           <Text style={styles.info}>
               Phone Number - +91 8839555422
           </Text>
           <Text style={styles.info}>
               Date Of Birth - 13/April/2000
           </Text>
           <Text style={styles.info}>
               Nationality - Indian
           </Text>
       </View>
    </View>
  </ScrollView>    
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    imageContainer:{
        width:Dimensions.get('window').width * 0.6,
        height:Dimensions.get('window').width * 0.6,
        borderRadius:Dimensions.get('window').width * 0.6 / 2,
        borderWidth: 5,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height / 15
    },
    image:{
        width:'100%',
        height:'100%'
    },
    info:{
        fontSize:16,
        fontFamily:'open-sans-bold',
        margin:5,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        marginLeft:8,
        color:'black'
    }
});

ProfileScreen.navigationOptions = navData =>{
    return{
        headerTitle : 'Profile',
        headerLeft :() =>(
           <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
               <Item 
                   title='Menu'
                   iconName={Platform.OS==='android'?'md-menu':'ios-menu'}
                   onPress={()=>{
                       navData.navigation.toggleDrawer();
                   }}
               />
           </HeaderButtons>
        )
    };
    
};

export default ProfileScreen;