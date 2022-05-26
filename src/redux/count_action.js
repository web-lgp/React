import store from "./store"

export const createIncrementAction = data => {
    return { type: 'increment', data }
}
export const createDecrementAction = data => {
    return { type: 'decrement', data }
}
export const createIncrementAsyncAction=(data,time)=>{

    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}