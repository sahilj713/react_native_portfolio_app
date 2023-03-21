import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Ratings from '../components/Rating';

const Skills = props => {
    return(
        <View style={styles.skillBlocks}>
         <View>
           <Text style={styles.Skills}>{props.name}</Text>
           </View>
           <View >
           <Ratings startingValue={props.rating} />
           </View>
        </View>   
    );
}

const styles= StyleSheet.create({
    skillBlocks:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:15,
        marginHorizontal:40
    },
    Skills:{
        fontFamily:'open-sans-bold',
        fontSize:15
    }
});

export default Skills;