import React from "react";
import { View, StyleSheet} from "react-native";



const Card = props => {
    return (<View style={{...styles.card, ...props.style}}>{props.children}</View>)

}

const styles = StyleSheet.create({
     card:{
        backgroundColor:"white",
        alignItems:"flex-start" ,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius:30
     }
});

export default Card;