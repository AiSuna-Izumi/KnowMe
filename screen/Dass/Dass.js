import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, View, Image, Text, TextInput, TouchableOpacityBase } from 'react-native';

export default class Dass extends React.Component {
    render(){
    return (
        <ImageBackground style={styles.backgroundL}source={require("../../assets/clip/background2.jpg")}>
        <View style={styles.box1}>
            <Text style={styles.mental}>Instruction of DASS Test</Text>
            <Text style={styles.mentalText}>
                The rating scale is as follows:{"\n"}
                0 Did not apply to me at all{"\n"}
                1 Applied to me to some degree or some of the time{"\n"}
                2 Applied to me to a considerable degree or a good part of time{"\n"}
                3 Applied to me very much or most of the time{"\n"}
            </Text>

        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Dass1')}>
                <Image style={styles.buttonPng} source={require('../../assets/UII/button.png')} />
                <Text style={styles.textLogin}>Start</Text>
            </TouchableOpacity> 


        
    </ImageBackground >
        );
    }
}
const styles = StyleSheet.create({
    backgroundL: {
        flex: 1,
        justifyContent: 'center',
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
    
    mentalText:{
        letterSpacing:1.5,
        alignSelf:'flex-start',
        width:'80%',
        marginTop:40,
        marginLeft:'10%',
        textAlign:'left',
        fontSize:24,
        width:'100%',
        letterSpacing:2,
        lineHeight:30,
        // height:'40%',
   
        fontWeight:'bold',
    },
    mental:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        
    },
    box1:{
        position:'absolute',
        // justifyContent:'center',
        alignContent:'center',
        width:'100%',
        height:'50%',
        backgroundColor:'rgba(229,251,255,0.5)',
        // backgroundColor:'rgb(229,251,255)',
        
    },
})
