// import React, {useState,useEffect,useRef} from 'react';
// import {View,Text,StyleSheet, Platform,Modal,Alert,TouchableHighlight,Button,FlatList,Image,ScrollView} from 'react-native';
// import {HeaderButtons,Item} from 'react-navigation-header-buttons';
// import {useDispatch,useSelector} from 'react-redux';

// import CustomHeaderButton from '../components/HeaderButton';
// import CarouselItem from '../components/CarouselItem';
// import Input from '../components/Input';
// import ImgPicker from '../components/ImagePicker';
// import Colors from '../constants/Colors';
// import * as achievementAction from '../store/actions/achievements';
// import Animated from 'react-native-reanimated';

// const AchievementsScreen = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [certificateDescription,setCertificateDescription] = useState();
//     const [selectedImage,setSelectedImage] = useState();

//     const scrollXIndex = React.useRef(new Animated.Value(0)).current;
//     const scrollXAnimated = React.useRef(new Animated.Value(0)).current;

//     React.useEffect(() => {
//       Animated.spring(scrollXAnimated,{
//         toValue:scrollXIndex,
//         useNativeDriver : true,
//       }).start();

//     });

//     const certificateDescriptionHandler = inputText => {
//         setCertificateDescription(inputText);
//     }

//     const selectedImageHandler = imagePath => {
//       setSelectedImage(imagePath);
//     }

//     const dispatch = useDispatch();

//     const achievements = useSelector(state => state.achievements.achievements);
//     // console.log(achievements);

//     const addAchievementHandler = () => {
//       dispatch(achievementAction.addAchievement(selectedImage,certificateDescription));
//     }

//     useEffect(() => {
//          dispatch(achievementAction.fetchAchievements());
//     })

//     return(
//   <ScrollView>   
//     <View>
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Add Achievements</Text>
            
//             {/* <View style={styles.imagePicker}> */}
//             <View>
//               <ImgPicker onSelectedImage={selectedImageHandler}/>
//             </View>
//             {/* </View> */}
//             <Input 
//                label='Description of the certificate' 
//                onChangeText={certificateDescriptionHandler}
//                value={certificateDescription}
//             />
            
//          <View style={styles.blocks}>  
//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: '#ff4c68' }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
                
//               }}
//             >
//                 <Text style={styles.textStyle}>Cancel</Text>
//             </TouchableHighlight>

//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: '#ff4c68' }}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//                 addAchievementHandler();      
//               }}
//             >
//               <Text style={styles.textStyle}>Add Certificate</Text>
//             </TouchableHighlight>
//             </View> 
//           </View>
//         </View>
//       </Modal>
//       <FlatList
//             data = {achievements}
//             keyExtractor = {item => item.id}
//             horizontal
//             inverted
//             contentContainerStyle={{
//               flex:1,
//               justifyContent:'center',
//               padding:20
//             }}
//             scrollEnabled={false}
//             removeClippedSubviews={false}
//             CellRendererComponent={({item,index,children,style,...props}) => {
//               const newStyle = [style,{zIndex: achievements.length - index}];
//               return(
//                 <View style={newStyle} index={index} {...props}>
//                    {children}
//                    </View>
//               );
//             }}
//             renderItem={({item,index}) => {
//               const inputRange = [index - 1,index,index + 1]
//               const translateX = scrollXAnimated.interpolate({
//                 inputRange,
//                 outputRange:[50,0,-100]
//               })
//               const scale =scrollXAnimated.interpolate({
//                 inputRange,
//                 outputRange:[0.8,1,1.3]
//               })
//               return(
//        <Animated.View style={{position:'absolute',left:-50,
//        transform:[{
//          translateX,
//        },{scale},
//        ],
//        }}
//        >
//            <CarouselItem image={item.imageUri} title={item.description} />
//        </Animated.View>  
//             )}
//             }
//        />
//        <View>
//           <Button 
//              color={Colors.primary} 
//              onPress={() =>{setModalVisible(true)}}
//              title='ADD ACHIEVEMENT'
//              style={styles.showButton}
//           />
//        </View>
  
//     </View> 
//   </ScrollView>     
//     );
// }

// const styles=StyleSheet.create({
//     modalView: {
//         margin: 20,
//         backgroundColor: "white",
//         borderRadius: 20,
//         padding: 35,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5
//       },
//       openButton: {
//         backgroundColor: "#F194FF",
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,
//         marginHorizontal:10
//       },
//       textStyle: {
//         color: "white",
//         fontWeight: "bold",
//         textAlign: "center"
//       },
//       modalText: {
//         marginBottom: 15,
//         textAlign: "center",
//         fontFamily:'open-sans-bold',
//         fontSize:20
//       },
//       centeredView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 22
//       },
//       blocks:{
//         // flex:1,
//         flexDirection:'row',
//         justifyContent:'space-between',
        
//     },
//     showButton:{
//       width:'100%',
//       marginVertical:30,
      
//     },
//     overflowContainer:{
//       // height:100,
//       // overflow:'hidden'
//       // position:'absolute',
//       left: -50
//     }
      
// });

// AchievementsScreen.navigationOptions = navData =>{
//     return{
//         headerTitle : 'Achievements',
//         headerLeft :() =>(
//            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//                <Item 
//                    title='Menu'
//                    iconName={Platform.OS==='android'?'md-menu':'ios-menu'}
//                    onPress={()=>{
//                        navData.navigation.toggleDrawer();
//                    }}
//                />
//            </HeaderButtons>
//         )
//     };
    
// };

// export default AchievementsScreen;

import React, {useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet, Platform,Modal,Alert,TouchableHighlight,Button,FlatList,Image,ScrollView} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useDispatch,useSelector} from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import CarouselItem from '../components/CarouselItem';
import Input from '../components/Input';
import ImgPicker from '../components/ImagePicker';
import Colors from '../constants/Colors';
import * as achievementAction from '../store/actions/achievements';
import Animated from 'react-native-reanimated';

const AchievementsScreen = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const [certificateDescription,setCertificateDescription] = useState();
    const [selectedImage,setSelectedImage] = useState();

    // const scrollXIndex = React.useRef(new Animated.Value(0)).current;
    // const scrollXAnimated = React.useRef(new Animated.Value(0)).current;

    // React.useEffect(() => {
    //   Animated.spring(scrollXAnimated,{
    //     toValue:scrollXIndex,
    //     useNativeDriver : true,
    //   }).start();
    // });

    const certificateDescriptionHandler = inputText => {
        setCertificateDescription(inputText);
    }

    const selectedImageHandler = imagePath => {
      setSelectedImage(imagePath);
    }

    const dispatch = useDispatch();

    const achievements = useSelector(state => state.achievements.achievements);
    // console.log(achievements);

    const addAchievementHandler = () => {
      dispatch(achievementAction.addAchievement(selectedImage,certificateDescription));
    }

    const modalHandler = useCallback(() => {
      setModalVisible(true);
    },[]);

    useEffect(() => {
      props.navigation.setParams({submit:modalHandler});
    },[modalHandler])

    useEffect(() => {
         dispatch(achievementAction.fetchAchievements());
    })

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
            <Text style={styles.modalText}>Add Achievements</Text>
            
            {/* <View style={styles.imagePicker}> */}
            <View>
              <ImgPicker onSelectedImage={selectedImageHandler}/>
            </View>
            {/* </View> */}
            <Input 
               label='Description of the certificate' 
               onChangeText={certificateDescriptionHandler}
               value={certificateDescription}
               autoCapitalize='words'
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
                addAchievementHandler();
                setCertificateDescription('');      
              }}
            >
              <Text style={styles.textStyle}>Add Certificate</Text>
            </TouchableHighlight>
            </View> 
          </View>
        </View>
      </Modal>
      <FlatList
            data = {achievements}
            keyExtractor = {item => item.id}
            // horizontal
            // inverted
            // contentContainerStyle={{
            //   flex:1,
            //   justifyContent:'center',
            //   padding:20
            // }}
            // scrollEnabled={false}
            // removeClippedSubviews={false}
            // CellRendererComponent={({item,index,children,style,...props}) => {
            //   const newStyle = [style,{zIndex: achievements.length - index}];
            //   return(
            //     <View style={newStyle} index={index} {...props}>
            //        {children}
            //        </View>
            //   );
            // }}
            renderItem={itemData => (
       <View style={styles.overflowContainer}>
           <CarouselItem image={itemData.item.imageUri} title={itemData.item.description} />
       </View>  
            )}
       />
       {/* <View>
          <Button 
             color={Colors.primary} 
             onPress={() =>{setModalVisible(true)}}
             title='ADD ACHIEVEMENT'
             style={styles.showButton}
          />
       </View> */}
  
    </View> 
  </ScrollView>     
    );
}

const styles=StyleSheet.create({
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
      blocks:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    showButton:{
      width:'100%',
      marginVertical:30,
      
    },
    // overflowContainer:{
    //   // height:100,
    //   // overflow:'hidden'
    //   // position:'absolute',
    //   left: -50
    // }
      
});

AchievementsScreen.navigationOptions = navData =>{

const submitFn = navData.navigation.getParam('submit');

    return{
        headerTitle : 'Achievements',
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

export default AchievementsScreen;