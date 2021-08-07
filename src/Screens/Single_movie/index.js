//import liraries
import React, { useContext, useState, useRef, useEffect } from 'react'
import { View, Button, Text, Animated, Pressable, FlatList, TextInput, Image, ActivityIndicator, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Context, dark_style, HEIGHT, light_style, MarginTop, WIDTH } from '../../state'
import { FormatDate, FormatPopularity, GetTheme } from '../../utilities/helpers';
import { backDropImage } from '../../utilities/urls';
import { MaterialCommunityIcons, AntDesign, Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { removeValue, storeData } from '../../utilities/AsyncStorage_func';
// create a component

const SingleMovie = ({ navigation, route }) => {
    const Movie = route.params.movie

    let state = useContext(Context)
    state = state[0]
    const { Theme, changeTheme } = state
    const { text_color, backgroundColor, borderColor, header, heading, subHeading, fontFamily, disabled_color, mainColor } = Theme
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .1, marginTop: 0, backgroundColor: backgroundColor, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', marginTop: MarginTop, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons onPress={() => navigation.pop()} name="md-arrow-back" size={24} color={text_color} />
                    <Text style={{ color: text_color, fontSize: 18, marginLeft: 7, bottom: 1 }}>Back</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: MarginTop, justifyContent: 'center', alignItems: 'center', bottom: 2 }}>

                    {mainColor === 'black' ? <Feather onPress={async () => {

                        changeTheme(light_style)
                        await removeValue('theme')
                    }} name="sunrise" size={24} color={text_color} /> : <Entypo onPress={ async () => {

                        changeTheme(dark_style)
                        await storeData('theme', 'dark')
                    }} name="moon" size={24} color={text_color} />}
                </View>
            </View>
            <View style={{ flex: .9 }}>
                <ScrollView>
                    <ImageBackground source={{ uri: `${backDropImage}${Movie.backdrop_path}` }} style={{ flex: 1, minHeight: HEIGHT + 20, }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }}>
                            <View style={{ minHeight: 380, backgroundColor: 'rgba(0,0,0,.6)', marginHorizontal: 30, }}>
                                <View style={{ marginHorizontal: 10, flex: 1 }}>
                                    <View style={{ flex: .22, justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{Movie.title}</Text>
                                    </View>
                                    <View style={{ flex: .78, paddingBottom: 20 }}>
                                        <Text style={{ color: 'white', fontSize: 15, opacity: .8 }}>{FormatDate(Movie.release_date)}</Text>
                                        <View style={{ flexDirection: 'row', marginHorizontal: 5, marginRight: 50, justifyContent: 'space-between', marginVertical: 8 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <MaterialCommunityIcons name="movie-open-outline" style={{ opacity: .8 }} size={24} color="white" />
                                                <Text style={{ color: 'white', fontSize: 15, opacity: .8, marginLeft: 5 }}>{FormatPopularity(Movie.popularity)}%</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <AntDesign name="like2" style={{ opacity: .8 }} size={24} color="white" />
                                                <Text style={{ color: 'white', fontSize: 15, opacity: .8, marginLeft: 5 }}>{Movie.vote_average}</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: 'white', fontSize: 15, letterSpacing: .5, lineHeight: 25 }}>{Movie.overview}</Text>

                                    </View>

                                </View>
                            </View>
                        </View>

                    </ImageBackground>
                </ScrollView>
            </View>
        </View>
    );
};

// define your styles


//make this component available to the app
export default SingleMovie;
