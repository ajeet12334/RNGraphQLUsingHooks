import React,{useReducer} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import CreateCountry from './CreateCountry';
import LinkList from './LinkList'
import articleReducers from './articleReducers'

export const CountryContext = React.createContext();

const Index = () => {

  const [state, dispatch] = useReducer(articleReducers,{});
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <CountryContext.Provider value={{state,dispatch}}>
            <CreateCountry />
            <LinkList />
          </CountryContext.Provider>
        </SafeAreaView>
      </>
    );
  };
  
  export default Index;