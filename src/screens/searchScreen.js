import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import { useResults } from '../Hooks/useResults'

const SearchScreen = () => {
    const [inputVal, setInputVal] = useState('')
    const [searchApi, results, errMessage, isLoading] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(e => e.price === price)
    }

    return (
        <>
            <SearchBar inputVal={inputVal} handleChange={(newVal) => setInputVal(newVal)} clickedOk={searchApi}/>
            {errMessage && <Text>{errMessage}</Text>}
            <ScrollView>
            <ResultList result={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultList result={filterResultsByPrice('$$')} title="Bit Pricer" />
            <ResultList result={filterResultsByPrice('$$$')} title="Big Spender!" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen