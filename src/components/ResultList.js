import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetails from './ResultsDetails'

const ResultList = ({ title, result, navigation }) => {
    if (!result.length) return null
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id} 
                data={result} 
                renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}><ResultDetails item={item} /></TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultList)