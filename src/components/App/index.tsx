import React from "react"
import { ReactQueryCacheProvider } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"
import { cache } from "../../utils/API"
import { People } from "../People"
import { Person } from "../Person"
import { Planet } from "../Planet"
import { Planets } from "../Planets"
import { Tabs } from "../Tabs"
import "./styles.css"

export function App() {
  return (
    <ReactQueryCacheProvider queryCache={cache}>
      <Router>
        <div className="App">
          <Tabs />
          <Switch>
            <Route path="/planets/:id" component={Planet} />
            <Route path="/planets" exact={true} component={Planets} />
            <Route path="/people/:id" component={Person} />
            <Route path="/people" exact={true} component={People} />
            <Redirect to="/planets" exact />
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
  )
}
