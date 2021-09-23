import "./Content.css"

import { Switch, Route } from 'react-router-dom'
import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
import Param from "../../views/examples/Param"
import NotFound from "../../views/examples/NotFound"

const Content = props => (
    <div className="Content">
        <Switch>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    </div>
)

export default Content;