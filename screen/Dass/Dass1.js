import React from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default class Dass1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
            question :1,
            soalan :"I found it hard to wind down",
            };
        
      }
      onPress0 = () => {
        this.setState({
          count: this.state.count + 0
        });
      };
      onPress1 = () => {
        this.setState({
          count: this.state.count + 1
        });
      };
      onPress2 = () => {
        this.setState({
          count: this.state.count + 2
        });
      };
      onPress3 = () => {
        this.setState({
          count: this.state.count + 3
        });
      };
      onPressQuestion = () => {
        this.setState({
          question: this.state.question + 1,
          soalan :"I was aware of dryness of my mouth"
        });
      };
      
    render(){
        const { count } = this.state;
        const { question } = this.state;
        const { soalan } = this.state;
        
    return (
        <ImageBackground style={styles.backgroundL}source={require("../../assets/clip/background2.jpg")}>
        <View style={styles.box1}>
            <Text style={styles.mental}>Question {question}</Text>
            <Text style={styles.mentalText}>
                {soalan}
            </Text>
            <View style={styles.answer}>
                <TouchableOpacity style={styles.answer1}  onPress={this.onPress0}>
                    <Text style={styles.answerText}>
                        0
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer1} onPress={this.onPress1}> 
                    <Text style={styles.answerText}>
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer1} onPress={this.onPress2}>
                    <Text style={styles.answerText}>
                        2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answer1} onPress={this.onPress3}>
                    <Text style={styles.answerText}>
                        3
                    </Text>
                </TouchableOpacity>
            </View>
        <Text>SCORE : {count}</Text>
        </View> 
        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Dass2')}>
                <Image style={styles.buttonPng} source={require('../../assets/UII/button.png')} />
                <Text style={styles.textLogin}>NEXT</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginButton1} onPress={() => this.props.navigation.navigate('HomePage')}>
                <Image style={styles.buttonPng} source={require('../../assets/UII/button.png')} />
                <Text style={styles.textLogin}>BACK</Text>
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
    answer1:{
        width:50,
        height:50,
        backgroundColor:'black',
        borderRadius:20,
    },
    answerText:{
        borderRadius:10,
        backgroundColor:'white',
        width:'85%',
        height:'85%',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
    },
    answer:{
        justifyContent:'space-between',
        alignContent:'center',
        width:'50%',
        alignSelf:'center',
        marginTop:'4%',
        flexDirection:'row',
        alignContent:'center',
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
    loginButton1: {
        width: 120,
        height: 50,
        // backgroundColor: "#f0f250",
        position: "absolute",
        bottom: 20,
        left: 20,
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
        width:'80%',
        marginTop:40,
        textAlign:'center',
        fontSize:24,
        width:'100%',
        letterSpacing:2,   
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
