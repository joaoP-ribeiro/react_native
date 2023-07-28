import {useState, useEffect} from "react"

import {View, Text, StyleSheet, TextInput, Button, Image} from "react-native"
import {styles} from "./st_home"
import { AiFillEyeInvisible } from "react-icons/ai"

export default function Home(){

  const[login, set_login] = useState(0);
  const[senha, set_senha] = useState(true);


  const mudar = (login:number) =>{
    set_login(login+1)
  }

  const ver_senha = (senha:boolean) =>{
    if(!senha){
      set_senha(true)
    }
    else{
      set_senha(false)
    }
  }




  return(
    <View style={styles.container_p}>

      <View style={styles.container1}>

        <View style={styles.container_input} >
          <View>
            <Image style={styles.img_user} source={require("../../assets/user.png")}></Image>
          </View>
          <Text style={styles.txt} >Login</Text>
          <TextInput style={styles.input} placeholder="User"/>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={senha}/>
          <button style={styles.bt_ver} onClick={()=>{ ver_senha(senha) }}><AiFillEyeInvisible/></button>
          <br />
          <Button  title="somar" onPress={()=>{mudar(login)}}/>
          <br />
          <Button title="ver" onPress={()=>{ alert(login) }}/>
          <br />
          
        </View>

      </View>

      <View style={styles.container2}>
        <Text style={styles.txt}>Senai</Text>
      </View>

    </View>
    
  )
}

