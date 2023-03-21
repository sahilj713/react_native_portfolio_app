import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import { createStore, combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import skillReducer from './store/reducers/skills';
import projectReducer from './store/reducers/projects';
import achievementReducer from './store/reducers/achievements';
import experienceReducer from './store/reducers/experiences';
import PortfolioNavigator from './navigation/PortfolioNavigator';

const rootReducer = combineReducers({
    skills:skillReducer,
    projects:projectReducer,
    achievements:achievementReducer,
    experiences:experienceReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() =>{
        setFontLoaded(true);
      }}
      />
    );
  }
  return (
    <Provider store = {store}>
    <PortfolioNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
