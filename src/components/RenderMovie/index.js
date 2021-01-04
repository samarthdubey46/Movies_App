import React, { useContext, useState, useRef, useEffect } from 'react'
import { View, Button, Text, Animated, Pressable, FlatList, TextInput, Image, ActivityIndicator } from 'react-native'
import { Context, MarginTop, WIDTH } from '../../state'
import { GetTheme } from '../../utilities/helpers'
import { PosterImage } from '../../utilities/urls';


const MovieComponent = ({ item, BottomLoading, IsLast,navigation }) => {
    let state = useContext(Context)
    const Theme = GetTheme(state)
    const { text_color, backgroundColor, borderColor, header, heading, subHeading, fontFamily, disabled_color, mainColor } = Theme
    return (
        <>
            <Pressable onPress={() => navigation.navigate('Single_Movie',{movie:item})} style={{ marginBottom: 5, borderBottomWidth: .2, borderBottomColor: borderColor, height: 200, backgroundColor: backgroundColor, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 5, }}>
                    <Image
                        style={{ width: 120, height: 170, marginRight: 5 }}
                        source={{ uri: `${PosterImage}${item.poster_path}` }}
                        resizeMode="cover"
                    />
                    <View style={{ marginLeft: 0, justifyContent: 'space-between', marginVertical: 10, flexShrink: 1 }}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: text_color }}>{item.title}</Text>
                            {(IsLast && BottomLoading) && (
                                <ActivityIndicator
                                    size="large"
                                    color={text_color}
                                />
                            )}
                        </View>
                        <Text style={{ fontSize: 14, flexWrap: 'wrap', flexShrink: 1, color: text_color, maxHeight: 100 }}>{item.overview}</Text>

                    </View>
                </View>
            </Pressable>

        </>
    )
}
export default MovieComponent