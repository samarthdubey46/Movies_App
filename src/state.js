"use strict";
import React, { useState, createContext, useEffect } from 'react'
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const dark_style = {
    text_color: 'white',
    backgroundColor: 'black',
    borderColor: 'rgba(255,255,255,.5)',
    header: 'rgba(0,0,0,.9)',
    heading: '#184050',
    subHeading: '#F8A000',
    fontFamily: 'sans-serif',
    disabled_color:'rgba(255,255,255,.4)',
    mainColor:'black',

}

export const light_style = {
    text_color: 'black',
    backgroundColor: '#fcb442',
    // rgba(252, 252, 250,.8)
    borderColor: 'rgba(0,0,0,.5)',
    header: 'white',
    heading: '#184050',
    subHeading: 'black',
    fontFamily: 'sans-serif',
    disabled_color:'rgba(0,0,0,.4)',
    mainColor:'white',
  
}

export const Context = createContext()
export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get('screen').height
export const MarginTop = Constants.statusBarHeight

const ThemeProvider = (props) => {

    const [Theme, changeTheme] = useState(light_style)


    return (
        <Context.Provider value={[{ Theme:Theme, changeTheme:changeTheme}]}>
            {props.children}
        </Context.Provider>
    )
}
export default ThemeProvider
//TODO:Clean File