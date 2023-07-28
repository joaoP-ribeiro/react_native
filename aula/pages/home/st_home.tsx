import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container_p:{
      flex:1,
      flexDirection: "row"
    },
    
    container1:{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    container2:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#EA4335"
    },

    container_input:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
    },
  
    input:{
      border: "none",
      borderRadius: 3,
      backgroundColor: "#4285F4",
      textAlign: "center",
      outline: "none",
      padding: 8,
      width: 150,
      margin: 2, 
    },

    txt:{
      fontWeight: "bold",
      fontSize: 20,
      margin: 10,
    },

    bt_confirmar:{
      margin: 30,
      borderRadius: 9999,
      fontSize:15,
      fontWeight: "bold",
      border: "none",
      backgroundColor: "#3CBA54"
    },

    img_user:{
      width:100,
      height:100,
      margin: 5,
    },

    bt_ver:{
      backgroundColor: "transparent",
      border: "none",
      fontSize: 30
    }

  })