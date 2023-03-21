import React from 'react';
import {View,Text,StyleSheet, Platform,ScrollView} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

const EducationScreen = () => {
    return(
 
    <View>    
       <View style={styles.card}>
          <Text style={styles.content}>
          <View style={styles.studyView}>
           <Text style={styles.study}>
               B.Tech - Computer Science (2018 - 2022)
           </Text>
           </View>
           <View>
           <Text style={styles.organization}>
               Symbiosis University Of Applied Sciences
           </Text>
           </View>
           <View>
           <Text style={styles.score}>
               SGPA - 9.2 || CGPA - 9.0
           </Text>
           </View>
           </Text> 
       </View>

       <View style={styles.card}>
          <Text style={styles.content}>
          <View style={styles.studyView}>
           <Text style={styles.study}>
              HSC - PCM (2017-2018)
           </Text>
           </View>
           <View>
           <Text style={styles.organization}>
              The Emerald Heights International School
           </Text>
           </View>
           <View>
           <Text style={styles.score}>
              85% percentage
           </Text>
           </View>
           </Text> 
       </View>

       <View style={styles.card}>
          <Text style={styles.content}>
          <View style={styles.studyView}>
           <Text style={styles.study}>
              SSC - (2017-2018)
           </Text>
           </View>
           <View>
           <Text style={styles.organization}>
              The Emerald Heights International School
           </Text>
           </View>
           <View>
           <Text style={styles.score}>
              CGPA - 9.4
           </Text>
           </View>
           </Text> 
       </View>

    </View>
      
    );
}

const styles=StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 50,
        borderRadius: 10,
        backgroundColor: '#abe3f3',
        margin:5,
        width:'80%',
        // height:'30%',
        marginHorizontal:45,
        marginVertical:20,
        borderBottomRightRadius:50,
        borderTopStartRadius:50
            // #abe3f3
       },
    content:{
        textAlign:'center',
        paddingVertical:60
    },
    study:{
       fontSize:14,
       fontFamily:'open-sans-bold',
      
    },
    organization:{
        fontSize:12,
        fontFamily:'open-sans-bold',
                
    },
    score:{
        fontFamily:'open-sans'
    }  
});

EducationScreen.navigationOptions = navData =>{
    return{
        headerTitle : 'Education',
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

export default EducationScreen;