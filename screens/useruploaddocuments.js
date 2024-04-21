import React, { useState } from "react";
import React from "react";
import {
  View,
  Text,
  button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import RegisterSvg from "../assets/svg/SignUp-person.svg";
import Logo from "../assets/svg/Logo.svg";
import { supabase } from '../lib/supabase';
import DocumentPicker from 'react-native-document-picker';

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;

export default function upload(){
    const selectdoc = async() => {
        try{
            const doc = await DocumentPicker.pick({allowMultiSelection: true});
            console.log(doc)
        } catch(err){
            if(DocumentPicker.isCancel(err)){
                console.log("User has cancelled upload",err);
            }
            else{
                console.log(err);
            }
        }
    }
    return(
        <view>
            <text style={styles.heading}> Upload documents </text>
            <view style={{marginHorizontal: 40}}>
                <button title="upload documents" onPress = {selectdoc} />
            </view>
        </view>
    )

}

const styles=StyleSheet.create({
    heading: {
        color: 'black',
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 40
    }
})