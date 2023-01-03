import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({ handleChange , inputVal, clickedOk}) => {
    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize='none' 
                autoCorrect={false} 
                value={inputVal} 
                // onChangeText={(newVal) => handleChange(newVal)} 
                onChangeText={handleChange} 
                style={styles.inputStyle} 
                placeholder='Search'
                onEndEditing={clickedOk}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: 'lightgray',
        borderRadius: 6,
        height: 50,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
export default SearchBar