import React, { useContext, useState, useRef, useEffect } from 'react'
import { View, Button, Text, Animated, Pressable, FlatList, TextInput, Image, ActivityIndicator } from 'react-native'
import { Context, dark_style, light_style, MarginTop, WIDTH } from '../../state'
import { GetTheme } from '../../utilities/helpers'
import { EvilIcons, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';


const RenderHeader = ({ Search, changeSearchFoucsed, changeSearch, SearchFocused }) => {
    let state = useContext(Context)
    state = state[0]
    const {Theme,changeTheme} = state
    const { text_color, backgroundColor, borderColor, header, heading, subHeading, fontFamily, disabled_color, mainColor } = Theme
    return (
        <View style={{ borderBottomColor: borderColor, borderBottomWidth: 1, marginBottom: 0, elevation: 5, flex: SearchFocused ? .21 : .15, backgroundColor: backgroundColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Animated.View style={{ width: WIDTH - 50, alignItems: 'center', height: 50, borderRadius: 10, backgroundColor: 'white', marginTop: MarginTop, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <EvilIcons name="search" size={30} style={{ marginTop: 2, marginRight: 5 }} color='black' />
                        <TextInput
                            placeholder="Search"
                            value={Search}
                            onFocus={() => changeSearchFoucsed(true)}
                            onBlur={() => changeSearchFoucsed(false)}
                            onChangeText={(t) => changeSearch(t)}
                        />
                    </View>
                </View>
                {String(Search).length > 0 && (<MaterialIcons onPress={() => changeSearch('')} name="cancel" size={24} style={{ marginRight: 10 }} color="black" />)}
            </Animated.View>
            <View style={{marginTop:MarginTop}}>
                {mainColor === 'black' ? <Feather onPress={() => changeTheme(light_style)} name="sunrise" size={24} color={text_color} /> : <Entypo onPress={() => changeTheme(dark_style   )} name="moon" size={24} color={text_color} />}
            </View>
        </View >
    )
}
export default RenderHeader