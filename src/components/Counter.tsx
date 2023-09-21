import { useReducer } from "react";

const initialState={
    count:0
}
interface InitialStateType{
    count:number;
}

interface ActionType{
    type:"increment"|"decrement"|"reset",payLoad:number;
}

const reducer=(state:InitialStateType,action:ActionType)=>{
     switch(action.type){
        case"increment":{
            return {count:state.count+action.payLoad}
        }
        case"decrement":{
            return {count:state.count-action.payLoad}
        }
        case"reset":{
            return {count:0}
        }
        default:
            throw new Error();
     }
}
const Counter = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h3>Counter:{state.count}</h3>
            <button onClick={()=>{
                dispatch({
                    type:"increment",
                    payLoad:1
                })
            }}>Increment</button>
            <button onClick={()=>{
                dispatch({
                    type:"decrement",
                    payLoad:1
                })
               
            }} 
            disabled={state.count===0}
            style={{ marginLeft: '4px' }}>Decrement</button> <br />
            <button  onClick={()=>dispatch({type:"reset",payLoad:0})}
                
                style={{ marginTop: '8px' }}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;