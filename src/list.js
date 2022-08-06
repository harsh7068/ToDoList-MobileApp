import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default class List extends Component {
  render() {
    return (
      
      <SafeAreaView style={styles.container}>
       
          <View style={styles.top}>
            <Image
              resizeMode='contain'
              source={require('../assets/todo.png')}
              style={{height:'50%'}} />
            <Text style={styles.mainText}>Add your list here</Text>
          </View>
          <View style={styles.addItem}>
            <TextInput
              placeholder=" ✍️ Add Items"
              style={styles.form}
              placeholderTextColor={'#6D7661'}
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={false}
              returnKeyType={'done'}
            //value={inputdata}
            // onChange={(event) => setInputData(event.target.value)}
            />
            {/* {toogleButton ? <i className="far fa-edit  add-btn" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>}  */}
             <TouchableOpacity>
              <Image resizeMode='contain' style={{ right: 26, height:50, width:30 }} source={require('../assets/plus.png')}></Image></TouchableOpacity>
          </View>
          
        <View style={styles.view}>
          <View>
            <Text>Apple</Text>
            <Text>Grapes</Text>
            <Text>Watermelon</Text>
          </View>
        </View>
        
          <View style={styles.btnview}>
            <Button
              title='Mark all as done'
              style={styles.btn}
              color="green"
              >
            </Button>
          </View>

       
      </SafeAreaView>
     
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060822',
    justifyContent: 'center',
  },
 
  top: {
    backgroundColor: 'transparent',
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    
  },
  searchArea: {
    //height: '7%',
    marginTop: '8%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    width: '92%',
    backgroundColor: ''
  },
  searchText: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#6D7661',
    height: '100%',
    width: '96%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor:'white'

  },
  mainText: {
    color: 'white',
    top: 15,
    //bottom:5,
    fontSize: 20,
    

  },
  addItem: {
    backgroundColor: '',
    //height: "10%",
    width: "90%",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    top:10,
    //position:'relative'
  },
  form: {
    fontSize: 18,
    left: 7,
    backgroundColor:'white',
    color: 'rgb(58, 57, 57)',
    //height:"100%",
    width:'97%',
    alignSelf:'center'
    //position:'relative'
  },
  view:{
    //height:"20%", 
    width:'80%',
    backgroundColor:'red',
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  btnview:{
    width:'40%',
    alignSelf:'center',
    top:10,
    
  },
  btn:{
    
  }
});