
import { Switch,Route} from "react-router-dom";
import About from "../Pages/About";
import Examples from "../Pages/Examples";
import Home from "../Pages/Home";

export default function AllRoutes(){

    return (
        <>
            <Switch>
               <Route exact path="/">
                   <Home/>
               </Route>
               <Route exact path="/examples">
                  <Examples />
               </Route>
               <Route exact path="/about">
                   <About />
               </Route>
            </Switch>
        </>
    )
}