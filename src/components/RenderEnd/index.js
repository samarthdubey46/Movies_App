import React, { useContext, useState, useRef, useEffect } from 'react'
import { View, Button, Text, Animated, Pressable, FlatList, TextInput, Image, ActivityIndicator } from 'react-native'
import { EvilIcons, AntDesign } from '@expo/vector-icons';

const RenderEnd = ({ changeData, Search, changeSearchData, item }) => {
    return (
        <Pressable
            onPress={() => {
                changeData(prev => prev.filter(item_ => item_ !== item))
                if (Search.length > 0) {
                    changeSearchData(prev => prev.filter(item_ => item_ !== item))
                }
            }}
            style={{
                alignSelf: 'flex-end',
                width: 75,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
                marginVertical: 5,
            }}
        >
            <AntDesign name="delete" size={24} color="white" />
            <Text style={{ fontSize: 15, color: 'white' }}>Delete</Text>
        </Pressable>
    )
}
export default RenderEnd
