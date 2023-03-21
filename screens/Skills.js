import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet, Platform,Button,TouchableHighlight,ScrollView,Modal,Alert,FlatList} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useDispatch,useSelector} from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Skills from '../components/Skills';
import Input from '../components/Input';
import * as skillActions from '../store/actions/skills';

const SkillsScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [technicalSkill,setTechnicalSkill] = useState(true);
    const [skill,setSkill] = useState('');
    const [rating,setRating] = useState('');
    const [showTechSkills,setShowTechSkills] = useState(false);
    const [showSkills,setShowSkills] = useState(false);

    const skillInputHandler= inputText =>{
        setSkill(inputText);
      };

    const ratingInputHandler= inputText =>{
        setRating(inputText);
      }; 

    const skills= useSelector(state => state.skills.skills); 
    const interpersonalSkills = useSelector(state => state.skills.interpersonalSkills);
 
    const dispatch = useDispatch();


    const addSkillHandler = async() =>{
      await dispatch(skillActions.addSkill(skill,rating));
    }

    const addInterpersonalSkillHandler = async() =>{
      await dispatch(skillActions.addInterpersonalSkill(skill,rating));
    }

    // const combinedFunction = () =>{
    
    //   fetchSkillsDispatch();
    //   fetchInterpersonalSkillsDispatch();
      
    // }
    // const fetchSkillsDispatch = () => {
    //   dispatch(skillActions.fetchSkills());
    // }

    // const fetchInterpersonalSkillsDispatch = () =>{
    //   dispatch(skillActions.fetchInterpersonalSkills());
    // }

    // useEffect(() => {
    //        dispatch(skillActions.fetchSkills());

    // },[]);

  //   useEffect(() => {
  // },[dispatch])

    return(
    <ScrollView>
        <View>
        
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{technicalSkill ? 'TECHNICAL SKILL' : 'INTERPERSONAL SKILL'}</Text>
            <Input 
               label='What is your Skill?'
               onChangeText={skillInputHandler}
               value={skill} 
            />
            <Input label='Rate your skill between 1-5' 
               keyboardType='number-pad' 
               onChangeText={ratingInputHandler}
               value={rating}
               />
            
         <View style={styles.blocks}>  
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#ff4c68' }}
              onPress={() => {
                setModalVisible(!modalVisible);
                
              }}
            >
                <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#ff4c68' }}
              onPress={() => {
                setModalVisible(!modalVisible);
                {technicalSkill ? addSkillHandler() : addInterpersonalSkillHandler()}
                setSkill('');
                setRating('');
              }}
            >
              <Text style={styles.textStyle}>Add Skill</Text>
            </TouchableHighlight>
            </View> 
          </View>
        </View>
      </Modal>

         <View style={styles.blocks}>
         <View>
           <Text style={styles.heading}>Technical Skills</Text>
           </View>
           <View style={styles.button}>
           <TouchableHighlight  onPress={() =>{setModalVisible(true);setTechnicalSkill(true)}}>
               <Text style={styles.add}>+</Text>
           </TouchableHighlight>
           </View>
         </View> 

        <View style={styles.showButton}>
         <Button
        color={Colors.primary}
        title={showTechSkills ? 'Hide Skills' : 'Show Skills'}
        
        onPress={() => {
          setShowTechSkills(prevState => !prevState);
          dispatch(skillActions.fetchSkills());
          // setShowSkills(prevState => prevState);
          // if(showTechSkills){
          //   setShowSkills(prevState => !prevState);
          //   setShowTechSkills(false);
          // }

        }} 
        />
        </View>

        {showTechSkills && (
          <FlatList
            data = {skills}
            keyExtractor = {item => item.id}
            renderItem={itemData => (                   
            <Skills name={itemData.item.name} rating={itemData.item.rating} />
            )}
            /> )
        }    
        {/* <Skills name='MongoDB' />
        <Skills name='Python' />
        <Skills name='C/C++' />
        <Skills name='Java' />
        <Skills name='Node.js' />
        <Skills name='Express.js' />
        <Skills name='Mongoose' />
        <Skills name='HTML' />
        <Skills name='CSS' />
        <Skills name='Bootstrap' />
        <Skills name='React js' />
        <Skills name='Javascript' />
        <Skills name='JQuery' />
        <Skills name='MySQL' />
        <Skills name='.NET' />
        <Skills name='PHP' /> */}

        <View style={styles.blocks}>
         <View>
           <Text style={styles.heading}>Interpersonal Skills</Text>
           </View>
           <View style={styles.button}>
           <TouchableHighlight  onPress={() =>{setModalVisible(true);setTechnicalSkill(false);}}>
               <Text style={styles.add}>+</Text>
           </TouchableHighlight>
           </View>
         </View>
         <View style={styles.showButton}>
         <Button 
        color={Colors.primary}
        title={showSkills ? 'Hide Skills' : 'Show Skills'}
        
        onPress={() => {
          setShowSkills(prevState => !prevState);
          dispatch(skillActions.fetchInterpersonalSkills());
          // setShowTechSkills(prevState => prevState);
          // if(showSkills){
          //   setShowTechSkills(prevState => !prevState);
          //   setShowSkills(false);
          // }

        }}
      /> 
      </View>
         {showSkills && (
           <FlatList
             data = {interpersonalSkills}
             keyExtractor = {item => item.id}
             renderItem={itemData => (                   
             <Skills name={itemData.item.name} rating={itemData.item.rating} />
             )}
             /> )
         }
         {/* <Skills name='Leadership' />
         <Skills name='Teamwork' />
         <Skills name='Communication' />
         <Skills name='Management' />
         <Skills name='Problem Solving' />
         <Skills name='Critical Thinking' />
         <Skills name='Decision making' />
         <Skills name='Reliability' /> */}

         </View>
        
</ScrollView> 
     
    );
}

const styles=StyleSheet.create({
    heading:{
        fontSize:18,
        fontFamily:"open-sans-bold",
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        marginLeft:8,
        margin:5,
        marginTop:25,
        marginBottom:30,
        color:'black'
    },
    blocks:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    skillBlocks:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5,
        marginHorizontal:40
    },
    button:{
        height:'10%',
        width:'10%'
    },
    add:{
        marginTop:20,
        fontSize:30,
        color:Colors.primary
    },
    Skills:{
        fontFamily:"open-sans-bold",
        fontSize:15
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginHorizontal:10
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily:"open-sans-bold",
        fontSize:20
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    showButton:{
        width:'100%',
        marginVertical:30,
        
      },
     
});

SkillsScreen.navigationOptions = navData =>{
    return{
        headerTitle : 'Skills',
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


export default SkillsScreen;
