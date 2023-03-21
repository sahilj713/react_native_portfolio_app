import React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';

import Colors from '../constants/Colors';


const Ratings = (props) =>{
   return(
    <Rating
    //  showRating
    {...props}
     imageSize={20}
   //   startingValue={props.rating}
     readonly
     minValue={1}
     ratingBackgroundColor={Colors.accent}
    //  onFinishRating={ratingCompleted}
     style={{ paddingVertical: 5 }}
   />
   );
}

export default Ratings;