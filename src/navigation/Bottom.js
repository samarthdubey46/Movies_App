import React, { useState, useContext } from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import Now_Playing from '../Screens/Now_Playing'
import Top_Rated from '../Screens/Top_Rated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Context } from '../state'
import { GetTheme } from '../utilities/helpers'
import { createStackNavigator } from '@react-navigation/stack';
import SingleMovie from '../Screens/Single_movie'

let Navigator = createBottomTabNavigator()

const Bottom = (props) => {
	let state = useContext(Context)
	const Theme = GetTheme(state)
    const { text_color, backgroundColor, borderColor, header, heading, subHeading, fontFamily, disabled_color, mainColor } = Theme

	return (
		<Navigator.Navigator tabBarOptions={{ labelStyle: { fontSize: 14 }, tabStyle:{backgroundColor:backgroundColor,elevation:10,borderTopColor:borderColor,borderTopWidth:1},activeTintColor:text_color,inactiveTintColor: disabled_color, }} >

			<Navigator.Screen name="Now Playing" options={{ tabBarIcon: (focused) => <MaterialCommunityIcons name="movie-open" color={focused ? text_color : disabled_color} size={18} />, }} component={Now_Playing} />

			<Navigator.Screen name="Top Rated" options={{ tabBarIcon: (focused) => <Ionicons name="ios-star-outline" color={focused ? text_color : disabled_color} size={18} />, }} component={Top_Rated} />

		</Navigator.Navigator>
	)


}
export default Bottom