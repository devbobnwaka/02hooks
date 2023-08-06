import React, { Component } from 'react';


// CREATING CONTEXT IN A FUNCTION BASED COMPONENT
const MyContext = React.createContext();

class MyProvider extends Component{

    state = {
        user : [
            {id:1, name:"Bob"},
            {id:2, name:"James"},
            {id:3, name:"Victory"},
        ],
        active:true,
    }

    toggleActive = () => {
        this.setState({active:!this.state.active})
    }

    render(){
        return(
            <MyContext.Provider value={{
                users:this.state.user,
                active:this.state.active,
                toggleActive:this.toggleActive,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export {MyProvider, MyContext};