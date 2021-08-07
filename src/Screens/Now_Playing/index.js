import React, { useContext, useState, useRef, useEffect } from 'react'
import { View, Button, Text, Animated, Pressable, FlatList, TextInput, Image, ActivityIndicator, RefreshControl } from 'react-native'
import { Context, MarginTop, WIDTH } from '../../state'
import { GetTheme } from '../../utilities/helpers'
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { Get_Now_Playing_Movies } from '../../Api_Calls/Get_Now_Playing';
import { SwipeListView } from 'react-native-swipe-list-view';
import RenderEnd from '../../components/RenderEnd';
import RenderHeader from '../../components/Header';
import MovieComponent from '../../components/RenderMovie/index';




const Now_Playing = ({ navigation, route }) => {
    //#region Bringing The Variables From The state Managment 

    let state = useContext(Context)
    const Theme = GetTheme(state)
    const { text_color, backgroundColor, borderColor, header, heading, subHeading, fontFamily, disabled_color, mainColor } = Theme

    //#endregion

    //#region Local State Variables
    const [Refreshing, changeRefreshing] = useState(false)
    const OnRefresh  = async () => {
        changeRefreshing(true)
        changeSearch('')
        changePage(1)
        const res = await Get_Now_Playing_Movies(1)
        if (res.sucess) {
            changeLastPage(res.TotalPages)
            changeData(res.Results)
        }
        changeRefreshing(false)
    }
    const [Loading, changeLoading] = useState(false)
    const [Search, changeSearch] = useState('')
    const [SearchFocused, changeSearchFoucsed] = useState(false)
    const [Data, changeData] = useState([])
    const [Page, changePage] = useState(1)
    const [LastPage, changeLastPage] = useState(1)

    const [BottomLoading, changeBottomLoading] = useState(false)
    const [SearchData, changeSearchData] = useState([])

    //#endregion    


    //#region CallBacks
    useEffect(() => {
        (async () => {
            changeLoading(true)
            const res = await Get_Now_Playing_Movies(Page)
            if (res.sucess) {
                changeLastPage(res.TotalPages)
                changeData(res.Results)
            }
            changeLoading(false)
        })()
    }, [])
    useEffect(() => {
        changeSearchData(Data.filter(item => String(item.title).toLowerCase().includes(String(Search).toLowerCase())))
    }, [Search])
    useEffect(() => {
        (async () => {
            if (Page > 1) {
                changeBottomLoading(true)
                const res = await Get_Now_Playing_Movies(Page)
                if (res.sucess) {
                    changeData(prev => [...prev, ...res.Results])
                }
                changeBottomLoading(false)
            }
        })()
    }, [Page])
    //#endregion
    return (
        <View style={{ flex: 1, }}>
            <RenderHeader Search={Search} changeSearchFoucsed={changeSearchFoucsed} SearchFocused={SearchFocused} changeSearch={changeSearch} />
            <View style={{ marginHorizontal: 0, flex: SearchFocused ? .8 : .9, backgroundColor: backgroundColor }}>
                {Loading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator color={text_color} size="large" />
                    </View>
                ) : (
                        <SwipeListView
                            refreshControl={
                                <RefreshControl refreshing={Refreshing} onRefresh={OnRefresh} />
                            }
                            onEndReached={() => {
                                changePage(prev => prev + 1)
                            }}
                            data={Search.length > 0 ? SearchData : Data}
                            key={(item) => String(item.id)}
                            // keyExtractor={(item, index) => index.toString()}
                            renderItem={(item) => <MovieComponent navigation={navigation} IsLast={item.index === Data.length - 1} BottomLoading={BottomLoading} item={item.item} />
                            }
                            renderHiddenItem={({ item }) => <RenderEnd changeData={changeData} item={item} Search={Search} changeSearchData={changeSearchData} />}
                            rightOpenValue={-80}
                        />
                    )}
            </View>
        </View>
    )
}
export default Now_Playing