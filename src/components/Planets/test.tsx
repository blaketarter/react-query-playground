import React from "react"
import { testRender } from "../../utils/testRender"
import { Planets } from "."

describe("Planets", () => {
  it("Renders a Planet[] with attributes", async () => {
    // Arrange
    // Act
    const { findByText } = testRender(<Planets />)

    const planet1 = await findByText("Tatooine")
    const planet2 = await findByText("Alderaan")

    // Assert
    expect(planet1).toBeInTheDocument()
    expect(planet2).toBeInTheDocument()
  })
})
