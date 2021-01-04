import React, { useState, useContext } from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Context } from '../state'
import { GetTheme } from '../utilities/helpers'
import { createStackNavigator } from '@react-navigation/stack';
import SingleMovie from '../Screens/Single_movie'
import Bottom from './Bottom';

let Navigator = createStackNavigator()

const Stack = (props) => {
	let state = useContext(Context)
	const Theme = GetTheme(state)
    const { text_color, backgroundColor, borderColor, header, heading, subHeading, fontFamily, disabled_color, mainColor } = Theme

	return (
		<Navigator.Navigator >
            <Navigator.Screen options={{headerShown:false}} name="Bottom" component={Bottom}/>
            <Navigator.Screen options={{headerShown:false}} name="Single_Movie" component={SingleMovie}/>

		</Navigator.Navigator>
	)


}
export default Stack