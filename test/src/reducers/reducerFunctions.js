
const useRduceFunction = (initialState, action) => {


    switch(action.type){

        case   'change-value' : return {
            ...initialState,
            value: initialState.value + action.payload } 

        case    'change-color': return {
            ...initialState,
            color: action.payload
        }
       
        default: return initialState
    }
};






export default useRduceFunction


//   case   'increment' : return {
//     ...initialState,
//     value: initialState.value +1} 

// case    'decrement': return {
//     ...initialState,
//     value:initialState.value-1
// }
// case 'green':return {
//     ...initialState,
//     color:'green'
// }
// case 'blue':return {
//     ...initialState,
//     color:'blue'
// }


// default: return initialState