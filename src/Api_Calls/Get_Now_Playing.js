export const Get_Now_Playing_Movies = async (page = 1) => {
    try {
        
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page=${page}`
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const json = await res.json()
        if(json !== null && json !== undefined){
            let Page = json.page
            let TotalPages = json.total_pages
            return {sucess:true,Page:Page,TotalPages:TotalPages,Results:json.results}
        }
        return {sucess:false,data:json}

    }
    catch (e) {
        console.log(e)
        return {sucess:false,data:null}
    }
}
