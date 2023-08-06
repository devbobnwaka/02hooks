import User from './components2/user';
import { MyProvider } from './context';


const App = () =>{

    return(
        <>
            <MyProvider>
                <User />
            </MyProvider>
        </>
    )
}


export default App