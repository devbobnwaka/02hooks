import  React, {useRef} from 'react';
// import React, {Component} from 'react';

// Tutorial on useRef
const App = () =>{
    const textInput = useRef();

    const triggerHandler = () => {
        console.log(textInput);
    }

    return(
        <>
            <h1>Form:</h1>
            <InputComponent ref={textInput}/>
            <button onClick={triggerHandler}>Trigger</button>
        </>
    )
}

const InputComponent = React.forwardRef((props, ref) => {
    return(
        <input type="text" ref={ref}/>
    )
}, )


// Learning Useref in class base component
// class App extends Component{
//     constructor(props){
//         super(props);
//         this.textInput = React.createRef();
//     }

//     triggerHandler = () => {
//         console.log(this.textInput);
//     }

//     render(){
//         return(
//             <>
//                 <h1>Form:</h1>
//                 <input type="text" ref={this.textInput}/>
//                 <button onClick={this.triggerHandler}>Trigger</button>
//             </>
//         )
//     }
// }

export default App