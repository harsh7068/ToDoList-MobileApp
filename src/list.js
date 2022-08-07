import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import 'localstorage-polyfill';

const List = () => {



  getLocalData = () => {

    const lists = localStorage.getItem('MyTodoList');
    if (lists) {
      return JSON.parse(lists);
    }
    else {
      return [];
    }
  };
  const [inputdata, setInputData] = useState('');
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState('');
  const [toogleButton, setToogleButton] = useState(false);


  const addItem = () => {
    console.log(inputdata);
    if (!inputdata) {
      alert('PLease fill the data');
    }
    else if (inputdata && toogleButton) {
      setItems(items.map((curElem) => {
        if (curElem.id === isEditItem) {
          return { ...curElem, name: inputdata };
        }
        return curElem;
      }));
      setInputData([]);
      setIsEditItem(null);
      setToogleButton(false);
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      setItems([...items, myNewInputData]);
      setInputData('');
    }
  };

  const editItems = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToogleButton(true);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };
  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem('MyTodoList', JSON.stringify(items));
  }, [items])




  return (

    <SafeAreaView style={styles.container}>


      <View style={styles.top}>
        <Image
          resizeMode='contain'
          source={require('../assets/todo.png')}
          style={{ height: '50%' }} />
        <Text style={styles.mainText}>Add your list here</Text>
      </View>
      <View style={styles.addItem}>
        <TextInput
          placeholder=" ✍️ Add Items"
          style={styles.form}
          placeholderTextColor={'#6D7661'}
          autoCorrect={false}
          //autoCapitalize='none'
          secureTextEntry={false}
          //returnKeyType={'done'}
          value={inputdata}
          //onChange={(event) => setInputData(event.target.value)}
          onChangeText={inputdata => setInputData(inputdata)}
        // onChange={handleChange}
        />

        <TouchableOpacity onPress={addItem}>
          {toogleButton ? <Image resizeMode='contain' style={{ right: 26, height: 40, width: 25 }} source={require('../assets/edit.png')}></Image> : <Image resizeMode='contain' style={{ right: 26, height: 50, width: 30 }} source={require('../assets/plus.png')}></Image>}
        </TouchableOpacity>
      </View>

      <View style={styles.view} >
        {items.map((curElem) => {
          return (
            <View style={styles.eachItem}>
              <Text style={{ color: 'black', fontSize: 15 }}>{curElem.name}</Text>
              <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => editItems(curElem.id)}>
                  <Image resizeMode='contain' style={{ height: 16, width: 20, right: 15, }} source={require('../assets/edit.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteItem(curElem.id)}>
                  <Image resizeMode='contain' style={{ height: 16, width: 20, }} source={require('../assets/trash.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}

      </View>

      <View style={styles.btnview}>
        <Button
          title='Mark all as done'
          style={styles.btn}
          color="green"
          onPress={removeAll}
        >
        </Button>
      </View>


    </SafeAreaView>

  )
}


export default List



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
    backgroundColor: 'white'

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
    top: 10,
    //position:'relative'
  },
  form: {
    fontSize: 18,
    left: 7,
    backgroundColor: 'white',
    color: 'rgb(58, 57, 57)',
    //height:"100%",
    width: '97%',
    alignSelf: 'center'
    //position:'relative'
  },
  view: {
    //height:"20%", 
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 6,

  },
  btnview: {
    width: '40%',
    alignSelf: 'center',
    top: 10,

  },
  eachItem: {
    flexDirection: 'row',


    width: '98%',
    marginBottom: 4,
    alignItems: 'center',

    justifyContent: 'space-between'

  }
});