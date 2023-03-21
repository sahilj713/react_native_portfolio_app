import React, { version } from 'react';
import {View,Text,StyleSheet,Image,Button,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import Colors from '../constants/Colors'

const CarouselItem = props => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version >=21){
        TouchableCmp=TouchableNativeFeedback;
    }

    return(
        <View style={styles.product}>
        <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
        <View>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.image}} />
        </View>
        <Text style={styles.title}>{props.title}</Text>
       
        </View>
        </TouchableCmp>
        </View>
        </View>

    );
};

const styles= StyleSheet.create({
    product:{
        
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:'#ccc',
        height:400,
        margin:10,
        borderRadius:34,
        // overflow:'hidden'
        // marginHorizontal:20,
        // padding:40,
        // alignItems:'center',
        // backgroundColor:'#ccc',
        // borderRadius:34
    },
    touchable:{
        overflow:'hidden',
        borderRadius:10
    },
    imageContainer:{
        width:'100%',
        height:'75%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:14,
        marginVertical:4,
        textAlign:'center',
        height:'25%',
                
    },
    
});

export default CarouselItem;