import React from "react"
import { Route, MemoryRouter as Router } from "react-router-dom"
import { testRender } from "../../utils/testRender"
import { Person } from "."

describe("Person", () => {
  it("Renders a Person with attributes", async () => {
    // Arrange
    // Act
    const { findByText } = testRender(
      <Router initialEntries={["/people/1"]}>
        <Route path="/people/:id">
          <Person />
        </Route>
      </Router>,
    )

    const person1 = await findByText("Luke Skywalker")

    // Assert
    expect(person1).toBeInTheDocument()
  })
})
