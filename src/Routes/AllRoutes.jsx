
import { Switch,Route} from "react-router-dom";
import Home from "../Pages/Home";

export default function AllRoutes(){

    return (
        <>
            <Switch>
               <Route exact path="/">
                   <Home/>
               </Route>
               <Route>

               </Route>
            </Switch>
        </>
    )
}