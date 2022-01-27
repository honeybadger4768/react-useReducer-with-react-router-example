const initialState = {
    count: 0
}

const reducer = (prevState, action) => {
    switch (action.type){
        case "arttir":
                return {
                    ...prevState,
                    count: prevState.count + 1
                }
            break;
        case "azalt":
            return {
                ...prevState,
                count: prevState.count - 1
            }
            break;
        case "degerliAzalt":
            return {
                ...prevState,
                count: prevState.count - action.count,
            }
            break;
        case "degerliArttir":
            return {
                ...prevState,
                count: prevState.count + action.count
            }
            break;
    }
}

export {
    initialState, reducer
}