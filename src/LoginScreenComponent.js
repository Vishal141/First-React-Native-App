import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Button,ImageBackground} from 'react-native';
import firebase from 'firebase';

const image = { uri: 'https://cdn.pixabay.com/photo/2019/02/14/15/01/easter-3996763__340.jpg' };

const LoginScreenComponent = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <View>
        <ImageBackground source={image} style={styles.image}>
        <Text> Email: </Text>
        <TextInput 
            style={styles.textInputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(currentText) => setEmail(currentText) }
        />

        <Text> Password </Text>
        <TextInput 
            style={styles.textInputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(currentText) => setPassword(currentText)}
        />

        <View style={styles.buttonStyle}>
        <Button  
            title={"Log In"}
            onPress={() => firebase.auth().signInWithEmailAndPassword(email, password)}
        />
        </View>
        
        <View style={styles.buttonStyle}>
        <Button  
            title={"Sign Up"}
            onPress={() => {
                firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    setEmail("")
                    setPassword("")
                })
                .catch(() => {
                    console.log("Some error happened")
                })
                }
            }
        
        />
        </View>
        </ImageBackground>
        
    </View>
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: 300,
        borderWidth: 5,
        margin: 10,
        padding: 10,
        borderRadius: 3
    },
    buttonStyle: {
        margin: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
});


export default LoginScreenComponent;