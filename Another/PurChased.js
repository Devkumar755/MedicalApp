import React,{ Component} from 'react';
import {View,Text} from 'react-native';
import PurChasedItem from './PurChasedItem.js';

export default class PurChased extends Component
{

     
    render()
    {
        return(
            <View>
              <PurChasedItem />
            </View>
        );
    }
}