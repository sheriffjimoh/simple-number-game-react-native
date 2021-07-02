import React,{useState} from "react";
import {View,Text,
       StyleSheet,TextInput,
       TouchableOpacity,
       TouchableWithoutFeedback,Keyboard,
       Button, Alert,
       Modal, Pressable
    } from "react-native";

// external component

import Card from "../components/Card";
import Colors from "../constants/Colors";

const StartGameScreen = props => {

    // process

const [enteredvalue, setenteredvalue] = useState("");
const [Confirmed, setConfirmed] = useState(false);
const [selectedNumber, setselectedNumber] = useState("");
const [modalVisible , setModalVisible] = useState(false);

const inputHandler = (inputText)=>{
    setenteredvalue(inputText);
}

const ResetInputHandler = () =>{
    setenteredvalue(' ');
    setConfirmed(false);
}

const ConfirmInputHandler =()=>{
  const choosenNumber = parseInt(enteredvalue);
  if(isNaN(choosenNumber) || choosenNumber <= 0 ||  choosenNumber > 99){
      Alert.alert(
          'invalid Number',
       'Number has to be between 1 and 99.',
       [{text:'okay', style:"destructive", onPress:ResetInputHandler}]);
  }else{

  setConfirmed(true);
  setenteredvalue('');
  setModalVisible(true);
  setselectedNumber(choosenNumber); 
}

}

let confirmedOuput;

if(Confirmed){
   confirmedOuput =<Text>Chosse Number::{selectedNumber}</Text>
  
}
// const
      return(
          <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss(),setModalVisible(false) }}>
          <View style={styles.screen}>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
         (!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            ></Pressable>

        </View>
        </View>
      </Modal>
              <Card style={styles.inputGroup}>
                
                  <Text style={styles.title}>{props.title}</Text>
                  <View style={styles.inputContainer}>
                  <TextInput 
                  keyboardType="number-pad" 
                  autoCorrect={false} 
                  maxLength={2}  
                  style={styles.input}
                  onChangeText={inputHandler}
                  value={enteredvalue}

                   />
                  </View>
                  
                  <View style={styles.buttonGroup}>
                      
                      <TouchableOpacity style={styles.buttonReset} onPress={ResetInputHandler}>
                          <Text style={ styles.buttonText}>Reset</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonSubmit} onPress={ConfirmInputHandler}>
                          <Text style={ styles.buttonText}>Confirm</Text>
                      </TouchableOpacity>
                  </View>

              </Card>
      

                    
    
          </View>
           
          </TouchableWithoutFeedback>
      )
}



const styles = StyleSheet.create({
  screen:{
      flex:1,
      alignItems:"center",
      top:80
  },

  title:{
      width:"100%",
      fontSize:25,
      fontFamily:"Futura-CondensedExtraBold",
      paddingBottom:40,
      textAlign:"center",
      justifyContent:"center",

  },

  inputContainer:{
     flex:1,
     width:"100%",
     justifyContent:"center",
     alignItems:"center"
  },

  inputGroup:{
        padding:40,
        width:350,
        height:350,
  },

  inputText:{
      
      fontSize:20,
      fontWeight:"bold",
      paddingBottom:15
 },

 input:{
    textAlign:"center",
    padding:20,
    borderBottomWidth:2,
    borderBottomColor:Colors.primary,
   

 },
 buttonGroup:{
     width:"100%",
     flex:1,
     flexDirection:"row",
     justifyContent:"space-between",
     paddingTop:68,
 },

 buttonReset:{
   alignItems: "center",
   backgroundColor:"#e09b84",
   maxHeight:30,
   width:120,
   paddingTop:5,
   color:"#fff",
   borderRadius:50
 },
 buttonSubmit:{
    alignItems: "center",
    backgroundColor:Colors.primary,
    maxHeight:30,
    width:120,
    paddingTop:5,
    color:"#fff",
    borderRadius:50
  },
  buttonText:{
    color:"#fff",
  },


//   modal

centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
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
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

})

export default  StartGameScreen;
