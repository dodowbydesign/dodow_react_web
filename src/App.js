import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Metaverse from "./Pages/Metaverse";
import Gallery from "./Pages/Gallery"
import NotFound from "./Pages/NotFound";
import "./App.css";


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Home} />
                <Route path= "/about" exact component={About} />
                <Route path= "/contact" exact component={Contact} />
                <Route path= "/metaverse" exact component={Metaverse} />
                <Route path= "/Gallery" exact component={Gallery} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>

    )
}

export default App;