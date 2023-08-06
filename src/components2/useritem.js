import { useContext } from "react";
import { MyContext } from "../context";


// ACCESSING CONTEXT FROM FUNCTION BASED COMPONENT
const UserItem = () => {
    const context = useContext(MyContext);
    // console.log(context);
    return(
        <>
            {
                context.active ?
                    context.users.map((user)=>(
                        <div key={user.id}>
                            <div>Name: {user.name}</div>
                        </div>
                    ))
                : null
            }
            <button onClick={context.toggleActive}>Toggle Active</button>
        </>
    )
}

export default UserItem;