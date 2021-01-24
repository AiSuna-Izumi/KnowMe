import React,{Component} from 'react';
import { ImageBackground, TouchableOpacity,Linking, StyleSheet, View, Image, Text, TextInput, } from 'react-native';



export default class Caunselor extends React.Component {
    render(){
    return (
        <ImageBackground style={styles.backgroundL}source={require("../assets/clip/background2.jpg")}>
            <View style={styles.logoBox}>
            <Image style={styles.logo} source={require("../assets/clip/dr.png")}></Image>
            </View>
            <Text style={styles.text}> If You are in crisis - please call the toll-free {'\n'}
            Lifeline at 013-9381521 to speak with {'\n'}
            a trained crisis counselor 24/7</Text>
            <TouchableOpacity style={styles.imageBox} onPress={ ()=>{ Linking.openURL('https://api.whatsapp.com/send?phone=60139381521')}}> 
                <Image style={styles.image2} source={require("../assets/clip/Call-Button-PNG-Picture.png")}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Homepage')}>
                <Image style={styles.buttonPng} source={require('../assets/UII/button.png')} />
                <Text style={styles.textLogin}>HOME</Text>
            </TouchableOpacity> 

        </ImageBackground >
        );
    }
}
const styles = StyleSheet.create({
    backgroundL: {
        flex: 1,
        // justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
    },
    loginButton: {
        width: 120,
        height: 50,
        // backgroundColor: "#f0f250",
        position: "absolute",
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: "flex-end",
    },
    buttonPng: {
        width: "100%",
        height: "90%",
    },
    textLogin: {
        position: "absolute",
        fontWeight: "bold",
        fontSize: 19,
    },
    image2:{
        alignSelf:'center',
        marginTop:'2%',
        height:'21%',
        width:'10%',
    },
    imageBox:{
        alignContent:'center',
        width:'100%',
        height:'100%',
    },
    text:{
        marginTop:'27%',
        backgroundColor:'rgba(0,0,0,0.1)',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
    logoBox:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        height:'70%',
    },
    logo:{
        height:'50%',
        width:'60%',
    },
})
