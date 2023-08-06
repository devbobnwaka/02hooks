import { Component } from "react";
import UserItem from "./useritem";
import {MyContext} from '../context';

// ACCESS CONTEXT FROM A CLASS BASED COMPONENT
class User extends Component {

    // static contextType = MyContext;
    render(){
        // console.log(this.context)
        return(
            <>
                <MyContext.Consumer>
                    {/* YOu can access the context form inside here in a class based component */}
                    { context => (console.log(context))}
                </MyContext.Consumer>
                <UserItem/>
            </>
        )
    }
}

export default User;