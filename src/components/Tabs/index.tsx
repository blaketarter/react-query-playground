import {
  AppBar,
  Box,
  IconButton,
  Tabs as MUITabs,
  Tab,
} from "@material-ui/core"
import { Refresh } from "@material-ui/icons"
import React from "react"
import { useQueryCache } from "react-query"
import { useHistory, useLocation } from "react-router-dom"
import { prefetchPeople, prefetchPlanets } from "../../utils/API"

export function Tabs() {
  const location = useLocation()
  const history = useHistory()
  const cache = useQueryCache()

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between">
        <MUITabs value={/^\/planets/i.test(location.pathname) ? 0 : 1}>
          <Tab
            value={0}
            label="Planets"
            onClick={() => history.push("/planets")}
            onMouseOver={() => prefetchPlanets()}
          />
          <Tab
            value={1}
            label="People"
            onClick={() => history.push("/people")}
            onMouseOver={() => prefetchPeople()}
          />
        </MUITabs>
        <IconButton color="inherit" onClick={() => cache.invalidateQueries()}>
          <Refresh />
        </IconButton>
      </Box>
    </AppBar>
  )
}
