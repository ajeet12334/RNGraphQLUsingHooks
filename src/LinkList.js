import React,{useEffect,useContext} from 'react'
import {ScrollView, Text, ActivityIndicator} from 'react-native'
import Link from './Link'
import { useQuery } from '@apollo/react-hooks';
import {FEED_QUERY} from './glQueriesAndMutation'
//import articleReducer from './articleReducers'
import {CountryContext} from './index'


const LinkList = () => {
    
    //const [state, dispatch] = useReducer(articleReducer,{});

    const {state} = useContext(CountryContext);

    useEffect(() => {
        if(state.countryData)
        console.log("State in LinkList",state.countryData)

    },[state])

    console.log("LinkList")

    const { loading, error, data } = useQuery(FEED_QUERY);

    if (loading) return <ActivityIndicator/>
    if (error) return <Text>Error</Text>

    const linksToRender = data.countries
    if(state.countryData)
    linksToRender.splice(0, 0, state.countryData)

    return (
        <ScrollView>
            {linksToRender.map(link => <Link key={link.countryId} link={link} />)}
        </ScrollView>
    )
    
}

export default LinkList