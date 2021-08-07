export const GetTheme = (state) => {
    let state_ = state[0]
    const { Theme } = state_
    return Theme
}
export const FormatDate = (date) => {
    let list = String(date).split('-')
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let finalString = `${months[parseInt(list[1]) - 1]} ${list[2]}, ${list[0]}`
    return finalString
}
export const FormatPopularity = (popularity) => {
    let str = ''
    if (String(popularity).length > 0) {
        str = String(popularity)[0]
    }
    if (String(popularity).length > 1) {
        str += String(popularity)[1]
    }
    return str
    

} 