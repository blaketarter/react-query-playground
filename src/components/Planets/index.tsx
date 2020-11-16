import React from "react"
import { useHistory } from "react-router-dom"
import { usePlanets } from "../../utils/API"
import { getId } from "../../utils/getId"
import { Card } from "../Card"
import { List } from "../List"

export function Planets() {
  const { status, data } = usePlanets()
  const history = useHistory()

  return (
    <List>
      {status === "success" && data !== undefined && data.results
        ? data.results.map((planet) => (
            <Card
              key={planet.name}
              header={planet.name}
              onClick={() => history.push(getId(planet.url))}
            >
              <p>{planet.population}</p>
              <p>{planet.climate}</p>
              <p>{planet.terrain}</p>
            </Card>
          ))
        : null}
    </List>
  )
}
