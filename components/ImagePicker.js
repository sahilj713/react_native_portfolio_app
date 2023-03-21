import React ,{useState} from 'react';
import {View,Button,Image,Text,StyleSheet,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';

const ImgPicker = props => {

//    const [pickedImage,setPickedImage] = useState();
   const [selectedImage,setSelectedImage] = useState();
   

     const verifyPermissions = async () => {
         const result = await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);

         if(result.status!=='granted'){
             Alert.alert('Insufficient permissions!',
             'You need to grant camera permissions to use this app.',
             [{text:'Okay'}]
             );
            return false;
         }
         return true;
     };

    

    //  const takeImageHandler = async() => {
    //      const hasPermission = await verifyPermissions();
    //      if(!hasPermission){
    //          return;
    //      }
    //      const image =await ImagePicker.launchCameraAsync({
    //           allowsEditing:true,
    //           aspect:[16,9],
    //           quality:0.5
    //       });
    //     // console.log(image);
    //       setPickedImage(image.uri);
    //       console.log(image);
    //  };

     const selectImageHandler = async() => {
        const hasGalleryPermission = await verifyPermissions();
        if(!hasGalleryPermission){
            return;
        }
        const selectedImg = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            aspect:[16,12],
            quality:0.5
        });
        setSelectedImage(selectedImg.uri);
        props.onSelectedImage(selectedImg.uri);
     };

     return(
         <View style={styles.imagePicker}>
             <View style={styles.imagePreview}>
                {/* {
                 !pickedImage  ? (
                 <Text>No image picked yet</Text>
                 ) : (
                    <Image style={styles.image} source={{ uri: pickedImage ?pickedImage:selectedImage }} /> 
                 )
                }     */}
                  

                {!selectedImage   ? (
                 <Text>No image picked yet</Text>
                 ) : (
                    <Image style={styles.image} source={{ uri: selectedImage }} />
                   )
                }
                
              
                

                
             </View>
             <Button 
                title='Open Gallery' 
                color={Colors.primary} 
                onPress = {selectImageHandler} 
              />
             {/* <Button 
                title='Take Image' 
                color={Colors.primary} 
                onPress = {takeImageHandler} 
              /> */}
         </View>
     );
};

const styles = StyleSheet.create({
imagePicker:{
    alignItems:'center',
    marginBottom:15
},
imagePreview:{
    width:350,
    height:200,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#ccc',
    borderWidth:1
},
image:{
    width:'100%',
    height:'100%'
}
});

export default ImgPicker;