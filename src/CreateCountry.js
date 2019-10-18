import React, {useState, useEffect,useCallback, useContext} from 'react'
import {TextInput, Button , View, ActivityIndicator, Text} from 'react-native'
import { useMutation } from '@apollo/react-hooks';
import {POST_MUTATION} from './glQueriesAndMutation'
//import articleReducers from './articleReducers'
import {CountryContext} from './index'

const CreateCountry = () => {

    const [countryName, setCountryName] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const currency = "INR"
    const currencySymbol = "Rs"
    const phoneCode= "91"

    const [addTodo,{ loading: mutationLoading, error: mutationError, data: toUseData },] = useMutation(POST_MUTATION);

    const {dispatch} = useContext(CountryContext);

    const updateData = useCallback(() => {
        if(toUseData && toUseData.addCountry){
            console.log("Returned",toUseData.addCountry)
            dispatch({ type: 'FETCH_SUCCESS',payload:toUseData.addCountry });
             console.log("Action dispatched")
        }
    },[toUseData,dispatch])

    useEffect( () =>{
        updateData();
    },[updateData])


        return (
            <View>
                <View>
                    <TextInput
                        value={countryName}
                        onChangeText={text => setCountryName(text)}
                        type="text"
                        placeholder="Country Name"
                    />
                    <TextInput
                        value={countryCode}
                        onChangeText={text => setCountryCode(text)}
                        type="text"
                        placeholder="Country Code"
                    />
                </View>

                {mutationLoading && <ActivityIndicator />}
                {mutationError && <Text>Error :( Please try again</Text>}

                <Button title="Press me" onPress={() => addTodo({variables: {countryName, countryCode, currency, currencySymbol, phoneCode}})} />
        
            </View>
     )
    
}

export default CreateCountry