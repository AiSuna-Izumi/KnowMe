import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, View, Image, Text, TextInput, TouchableOpacityBase } from 'react-native';

export default class Final extends React.Component {
    render(){
    return (
        <ImageBackground style={styles.backgroundL}source={require("../../assets/clip/background2.jpg")}>
        <View style={styles.box2}>
            <Text style={styles.textDepress}>
                Score
            </Text>            
            <Text style={styles.textDepress}>
                Severity Level
            </Text>

        </View>
        <View style={styles.box1}>
            <Text style={styles.textDepress}>
                Depression
            </Text>
            <Text style={styles.textDepress}>
                14
            </Text>
            <Text style={styles.textDepress}>
                Moderate
            </Text>
        </View>
        <View style={styles.box1}>
            <Text style={styles.textDepress}>
                Anxiety
            </Text>
            <Text style={styles.textDepress}>
                16
            </Text>
            <Text style={styles.textDepress}>
                Severe
            </Text>
        </View>
        <View style={styles.box1}>
            <Text style={styles.textDepress}>
                Stress
            </Text>
            <Text style={styles.textDepress}>
                16
            </Text>
            <Text style={styles.textDepress}>
                Mild
            </Text>
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomePage')}>
                <Image style={styles.buttonPng} source={require('../../assets/UII/button.png')} />
                <Text style={styles.textLogin}>Home</Text>
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
    textDepress:{
        fontSize:20,
        fontWeight:'bold',
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
   box1:{
        marginTop:20,
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        width:'80%',
        height:'10%',
        backgroundColor:'rgba(229,251,255,0.5)',
    },
    box2:{
        textAlign:'right',
        marginTop:20,
        position:'relative',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignSelf:'flex-end',
        width:'43%',
        height:'10%',
        marginRight:80,
        backgroundColor:'rgba(229,251,255,0.5)',
    },
})
