import React from "react"
import { useHistory } from "react-router-dom"
import { usePeople } from "../../utils/API"
import { getId } from "../../utils/getId"
import { Card } from "../Card"
import { List } from "../List"

export function People() {
  const { status, data } = usePeople()
  const history = useHistory()

  return (
    <List>
      {status === "success" && data !== undefined && data.results
        ? data.results.map((person) => (
            <Card
              key={person.name}
              header={person.name}
              onClick={() => history.push(getId(person.url))}
            >
              <p>{person.birth_year}</p>
              <p>{person.gender}</p>
              <p>{person.height}</p>
            </Card>
          ))
        : null}
    </List>
  )
}
