import React,{useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet, Platform,Image,ScrollView,Modal,Alert,FlatList,Button,TouchableHighlight} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useDispatch,useSelector} from 'react-redux';
import {Card} from 'react-native-elements';

import CustomHeaderButton from '../components/HeaderButton';
import * as experienceActions from '../store/actions/experiences';
import Input from '../components/Input';
import Colors from '../constants/Colors';


const ExperienceScreen = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const [role,setRole] = useState();
    const [logo,setLogo] = useState();
    const [companyName,setCompanyName] =useState();
    const [description,setDescription] = useState();
    const [duration,setDuration] = useState();

    const roleInputHandler = input => {
      setRole(input);
    }

    const logoInputHandler = input => {
      setLogo(input);
    }

    const companyNameInputHandler = input => {
      setCompanyName(input);
    }

    const descriptionInputHandler = input => {
      setDescription(input);
    }

    const durationInputHandler = input => {
      setDuration(input);
    }
    
    const dispatch = useDispatch();

    const addExperienceHandler = () => {
      dispatch(experienceActions.addExperience(role,logo,companyName,description,duration));
    }

    const Experiences = useSelector(state => state.experiences.experiences);

    useEffect(() => {
      dispatch(experienceActions.fetchExperience());
    })

    const modalHandler = useCallback(() => {
      setModalVisible(true);
    },[]);

    useEffect(() => {
      props.navigation.setParams({submit:modalHandler});
    },[modalHandler])

    return(
    <ScrollView>
       <View>
       <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Experience</Text>

            <Input 
               label='Your Role in the Company' 
               onChangeText={roleInputHandler}
               value={role}
               autoCapitalize = 'words'
            />

            <Input 
               label="Company's Logo" 
               onChangeText={logoInputHandler}
               value={logo}
            />

            <Input 
               label="Name of the Company" 
               onChangeText={companyNameInputHandler}
               value={companyName}
               autoCapitalize = 'words'

            />

            <Input 
               label="About the Company" 
               onChangeText={descriptionInputHandler}
               value={description}
            />

            <Input 
               label="Work Duration" 
               onChangeText={durationInputHandler}
               value={duration}
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
                addExperienceHandler();
                setRole('');
                setLogo('');
                setCompanyName('');
                setDescription('');
                setDuration('');      
              }}
            >
              <Text style={styles.textStyle}>Add Experience</Text>
            </TouchableHighlight>
            </View> 
          </View>
        </View>
      </Modal>
        
        <FlatList
          data = {Experiences}
          keyExtractor = {item => item.id}
          renderItem={itemData => (
           <Card style={styles.card}>
   
           <Card.Title>{itemData.item.role}</Card.Title>
           <Card.Divider />
           {/* <View style={styles.block}> */}
           <View style={styles.image}>
               <Card.Image style={styles.logo} source={{uri:itemData.item.logo}} />
            </View>   
               {/* <View style={styles.textBlock}> */}
               <Card.Title style={styles.text}>{itemData.item.companyName}</Card.Title>
               <Text style={styles.text}>{itemData.item.description}</Text>
               {/* </View> */}
           {/* </View> */}
           <View>
           <Card.Divider />
           </View>
           <Card.Title>{itemData.item.duration}</Card.Title>
       </Card>
          )}
          />

     

       

       </View>
    </ScrollView>   


    );
}

const styles=StyleSheet.create({
   card:{
    //    padding:10,
    //    margin:10,
    //    borderRadius:50,
    //    elevation:5,
    //    backgroundColor:'#ccc'
    width:'100%',
    elevation:10,
    backgroundColor:'#ccc'
   },
   logo:{
       width:100,
       height:100,

    //    flex:1
   },
   block:{
    //    flex:1,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center'
   },
   text:{
       marginHorizontal:5,
       overflow:'hidden',
       fontFamily:'open-sans',
       fontSize:14,
       margin:2,
       marginTop:7,
       textAlign:'center'
   },
   textBlock:{
    //    flexDirection:'column',
    
   },
   image:{
       alignItems:'center'
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
    fontFamily:'open-sans-bold',
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
  blocks:{
    // flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    
},
});

ExperienceScreen.navigationOptions = navData =>{
  const submitFn = navData.navigation.getParam('submit');

    return{
        headerTitle : 'Experience',
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
        ),
        headerRight:() => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Add"
              iconName={Platform.OS === 'android' ? 'md-add-circle' : 'ios-add-circle'}
              onPress={submitFn}
            />
          </HeaderButtons>
        )
    };
    
};

export default ExperienceScreen;