import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import axios from '../axios'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id =  navigation.getParam('id')
    const getResult = async() => {
        const response = await axios.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(()=>{
        getResult()
    },[])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item})=> <Image style={styles.image} source={{uri: item}} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen