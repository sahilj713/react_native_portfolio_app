import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet, Platform,TouchableHighlight,Linking,ScrollView,Modal,FlatList,Alert} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useDispatch,useSelector} from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import * as projectActions from '../store/actions/projects';



const ProjectsScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [languages,setLanguages] = useState('');
    const [links,setLinks] = useState('');
    const [duration,setDuration] = useState('');

    const titleInputHandler= inputText =>{
        setTitle(inputText);
      };

      const descriptionInputHandler= inputText =>{
        setDescription(inputText);
      };

      const languagesInputHandler= inputText =>{
        setLanguages(inputText);
      };

      const linksInputHandler= inputText =>{
        setLinks(inputText);
      };

      const durationInputHandler= inputText =>{
        setDuration(inputText);
      };

      const dispatch = useDispatch();

      const projects = useSelector(state => state.projects.projects);

      const addProjectHandler = async() => {
          await dispatch(projectActions.addProject(title,description,languages,links,duration));
      }

      useEffect(() => {
          dispatch(projectActions.fetchProjects());
      })


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
            <Text style={styles.modalText}>ADD PROJECT</Text>
            <Input 
               label='Project Title'
               autoCapitalize='characters'
               onChangeText={titleInputHandler}
               value={title} 
            />
            <Input label='Project Description' 
               onChangeText={descriptionInputHandler}
               value={description}
               />
            <Input label='Languages and Technologies used' 
               onChangeText={languagesInputHandler}
               value={languages}
               />
            <Input label='Project Links' 
               onChangeText={linksInputHandler}
               value={links}
               /> 
            <Input label='Project Duration' 
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
                // {technicalSkill ? addSkillHandler() : addInterpersonalSkillHandler()}
                addProjectHandler();
                setTitle('');
                setDescription('');
                setLanguages('');
                setLinks('');
                setDuration('');
              }}
            >
              <Text style={styles.textStyle}>Add Project</Text>
            </TouchableHighlight>
            </View> 
          </View>
        </View>
      </Modal>

           <View style={styles.card}>
                <View style={styles.addProject}>
                    <TouchableHighlight  onPress={() => {setModalVisible(true)}} >
                        <Text style={styles.plus}>+</Text>
                     
                    </TouchableHighlight>
                    <Text style={styles.newproject}>Add Project</Text>
                </View>
           </View>

           <FlatList
            data = {projects}
            keyExtractor = {item => item.id}
            renderItem={itemData => (                   
           

           <View style={styles.projectCard}>
               <View>
                   <Text style={styles.ProjectTitle}>
                       {itemData.item.title}
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectDescription}>
                       {itemData.item.description}
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectLanguages}>
                       Technology and languages used : {itemData.item.languages}
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectLinks}>
                       Project Links : <Text style={{color: Colors.primary}}
                                        onPress={() => Linking.openURL(itemData.item.links)}>
                                           {itemData.item.links}

                                        </Text>
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectDuration}>
                       {itemData.item.duration}
                   </Text>
               </View>
           </View>

            )}
            />

           {/* <View style={styles.projectCard}>
               <View>
                   <Text style={styles.ProjectTitle}>
                       Food App
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectDescription}>
                   A simple react native based food app which consist of descriptive details of food like ingredients and recipes where one can set filters and can mark their favourites too...
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectLanguages}>
                       Technology and languages used : React Native
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectLinks}>
                       Project Links : <Text style={{color: Colors.primary}}
                                        onPress={() => Linking.openURL('https://www.linkedin.com/posts/sahil-jain712_react-reactnative-mobileapp-activity-6718578542113771520-w5I-')}>
                                           https://www.linkedin.com/posts/sahil-jain712_react-reactnative-mobileapp-activity-6718578542113771520-w5I-
                                        </Text>
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectDuration}>
                       August,2020 - September,2020
                   </Text>
               </View>
           </View>

           <View style={styles.projectCard}>
               <View>
                   <Text style={styles.ProjectTitle}>
                       Online Shopping App
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectDescription}>
                   Here is a react native based online-shopping app with proper authentication where one can add items to their cart, place orders and can even add new items..
                </Text>
               </View>
               <View>
                   <Text style={styles.projectLanguages}>
                       Technology and languages used : React Native
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectLinks}>
                       Project Links : <Text style={{color: Colors.primary}}
                                        onPress={() => Linking.openURL('https://www.linkedin.com/posts/sahil-jain712_reactnative-onlineshopping-mobileappdevelopment-activity-6718593827164172288-p2Fm')}>
                                           https://www.linkedin.com/posts/sahil-jain712_reactnative-onlineshopping-mobileappdevelopment-activity-6718593827164172288-p2Fm
                                        </Text>
                   </Text>
               </View>
               <View>
                   <Text style={styles.projectDuration}>
                       August,2020 - September,2020
                   </Text>
               </View>
           </View> */}


       </View>
 </ScrollView> 
       
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
        // height:'50%',
        marginHorizontal:45,
        marginVertical:20,
        borderBottomRightRadius:70,
        borderTopStartRadius:70
            // #abe3f3
       },
       addProject:{
           paddingVertical:60
       },
       plus:{
           textAlign:'center',
           fontSize:30,
           color:Colors.primary,
           
       },
       newproject:{
           textAlign:'center',
           fontFamily:'open-sans-bold'
       },
       projectCard:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 20,
        borderRadius: 20,
        backgroundColor: '#ccc',
        margin:5,
        width:'100%',
        // height:'50%',
        // marginHorizontal:45,
        marginVertical:20,
        borderBottomLeftRadius:70,
        borderTopEndRadius:70
       },
       ProjectTitle:{
           fontSize:20,
           fontFamily:'open-sans-bold',
           textAlign:'center',
           margin:3,
           
       },
       projectDescription:{
           fontFamily:'open-sans',
           fontSize:16,
           margin:2,
           marginTop:7
       },
       projectLanguages:{
           fontSize:16,
           fontFamily:'open-sans-bold',
           margin:2,
           marginTop:10

       },
       projectLinks:{
        fontSize:16,
        fontFamily:'open-sans-bold',
        marginTop:10
       },
       projectDuration:{
        fontFamily:'open-sans',
        fontSize:16,
        margin:2,
        textAlign:'center',
        marginTop:10

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
        
    }
});

ProjectsScreen.navigationOptions = navData =>{
    return{
        headerTitle : 'Projects',
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

export default ProjectsScreen;