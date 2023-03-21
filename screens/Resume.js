import React from 'react';
import {View,Text,StyleSheet, Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

const ResumeScreen = () => {
    return(
       <View>
           <Text>
             The Resume screen
           </Text>
       </View>
    );
}

const styles=StyleSheet.create({
   
});

ResumeScreen.navigationOptions = navData =>{
    return{
        headerTitle : 'Resume',
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

export default ResumeScreen;