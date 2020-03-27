import React,{Component} from 'react';
import {View,Text,Platform,StyleSheet} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";


 export default class ImageSlider extends Component{
   constructor(props) {
  super(props);
  this.state = {
    images: [
/*
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
      */
    require('../image/imag1.png'),
      require('../image/img4.png'),
        require('../image/img5.jpg'),
          require('../image/img312.png'),

             // Local image
    ]
  };
}

render()
{
return(
    <View style={styles.container} onLayout={this.onLayout}>
            <SliderBox
                images={this.state.images}
                autoplay
                sliderBoxHeight={200}
                dotColor="#FFEE58"
                inactiveDotColor="#bbbdbb"
                  circleLoop
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                parentWidth={this.state.width}
                ImageComponentStyle={{borderRadius: 6,width:'95%',  marginTop: 10}}
                
                dotStyle={{
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 0,
  padding: 0,
  margin: 0,
  backgroundColor: "rgba(128, 128, 128, 0.92)"
}}
            />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {

    height:215,
  }
});
