import React from "react";
import {View,Text,StyleSheet} from 'react-native';


// external components

import Colors from "../constants/Colors";

const  Header = props  => {
    return(
            <View style={styles.header} >
                <Text style={styles.headerText}>{props.title}</Text>     
            </View>
    )
}

// fontFamily
// Futura-CondensedExtraBold
// ArialHebrew-Bold
const styles = StyleSheet.create({

    header:{
        padding:40,
        height:120,
        backgroundColor:Colors.primary
    },

    headerText:{
        width:"100%",
        textAlign:"center",
        color:"#ffff",
        paddingTop:15,
        fontWeight:"bold",
        fontSize:20,
        fontFamily:"Futura-CondensedExtraBold"
    }

});

export default Header;