import React from "react"
import { Route, MemoryRouter as Router } from "react-router-dom"
import { testRender } from "../../utils/testRender"
import { Planet } from "."

describe("Planet", () => {
  it("Renders a Planet with attributes", async () => {
    // Arrange
    // Act
    const { findByText } = testRender(
      <Router initialEntries={["/planets/1"]}>
        <Route path="/planets/:id">
          <Planet />
        </Route>
      </Router>,
    )

    const planet1 = await findByText("Tatooine")

    // Assert
    expect(planet1).toBeInTheDocument()
  })
})
