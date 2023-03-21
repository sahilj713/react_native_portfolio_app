import React from 'react';
import {View,Text,StyleSheet, Platform,ScrollView} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

const AboutScreen = () => {
    return(
    <ScrollView>
       <View>
         <Text style={styles.heading}>About</Text>
           <Text style={styles.about}>
           A target-driven computer science professional with the ability to grasp new skills quickly, having a diverse skill set, has a strong passion and interest for coding, mobile application development , web development and problem solving. 
           </Text>
           <Text style={styles.about}>
           Enthusiastic, highly-motivated and hardworking student with leadership capabilities, who likes to take initiative and seek out new challenges. 
           </Text>
           <Text style={styles.about}>
           I am keen to enhance my professional career. Possessing 2+ years of experience in the field, equipped with the core technologies through the emphasis on practical training and applied learning by means of various projects and internships at India's first skill-based university.
           </Text>
           <Text style={styles.about}>
           I am eager to have further training in this field while working as an intern to an experienced employer in a fast-paced working environment.
           </Text>
           <Text style={styles.heading}>Core Competencies:</Text>
           <View style={styles.blocks}>
           <View style={styles.card}>
           <Text style={styles.core} > Problem Solving </Text> 
           </View>
           <View style={styles.card}>
           <Text style={styles.core} > Critical Thinking </Text>
           </View>
           </View>
           <View style={styles.blocks}>

           <View style={styles.card}>
           <Text style={styles.core}> Communication </Text>
           </View>
           <View style={styles.card}>
           <Text style={styles.core}> Teamwork </Text>
           </View>
           </View>
           <View style={styles.blocks}>

           <View style={styles.card}> 
           <Text style={styles.core}> Ability to analyze complex technical information </Text>
           </View>
           </View>
           <View style={styles.blocks}>

           <View style={styles.card}>
           <Text style={styles.core}> quality leader </Text>
           </View>
           </View>
           <Text style={styles.heading}>COMMUNICATION LANGUAGES</Text>
           <View style={styles.blocks}>
           <View style={styles.card}> 
           <Text style={styles.language}>
            ENGLISH - Professional Working Proficiency
            </Text>
            </View>
            </View>
            <View style={styles.blocks}>
            <View style={styles.card}>
            <Text style={styles.language}>
            HINDI - Professional Working Proficiency
            </Text>
            </View>
            </View>
        
           <Text style={styles.heading}>
           HOBBIES AND INTEREST
           </Text>
           <View style={styles.blocks}>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Cricket 
                   </Text>
               </View>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Football 
                   </Text>
               </View>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Dancing 
                   </Text>
               </View>
           </View>
           <View style={styles.blocks}>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Exercising and Healthcare 
                   </Text>
               </View>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Gaming 
                   </Text>
               </View>
            </View>
            <View style={styles.blocks}>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Travel 
                   </Text>
               </View>
               <View style={styles.card}>
                   <Text style={styles.hobbies}>
                      Foody 
                   </Text>
               </View>
            </View>
            
       </View>
    </ScrollView>   
    );
}

const styles=StyleSheet.create({
   heading:{
       fontSize:18,
       fontFamily:'open-sans-bold',
       paddingHorizontal: 2,
       paddingVertical: 5,
       borderBottomColor: '#ccc',
       borderBottomWidth: 2,
       marginLeft:8,
       margin:5,
       marginTop:15
   },
   about:{
       fontSize:14,
       fontFamily:'open-sans',
       margin:5,
       marginLeft:8,

   },
   core:{
    fontSize:14,
    fontFamily:'open-sans-bold',
    margin:5,
    marginLeft:8,

   },
   language:{
    fontSize:14,
    fontFamily:'open-sans-bold',
    margin:5,
    marginLeft:8
   },
   hobbies:{
    fontSize:14,
    fontFamily:'open-sans-bold',
    margin:5,
    marginLeft:8
   },
   card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#abe3f3',
    margin:5
    // #abe3f3
   },
   blocks:{
       flex:1,
       flexDirection:'row'
   }

});

AboutScreen.navigationOptions = navData =>{
    return{
        headerTitle : 'About',
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

export default AboutScreen;