import { rest } from "msw"
import React from "react"
import { server } from "../../mocks/server"
import { APIResponseMultiple } from "../../types/API"
import { Person } from "../../types/Person"
import { baseUrl } from "../../utils/API"
import { testRender } from "../../utils/testRender"
import { People } from "."

describe("People", () => {
  it("Renders a Person[] with attributes", async () => {
    // Arrange
    // Act
    const { findByText } = testRender(<People />)

    const person1 = await findByText("Luke Skywalker")
    const person2 = await findByText("C-3PO")

    // Assert
    expect(person1).toBeInTheDocument()
    expect(person2).toBeInTheDocument()
  })

  it("Renders a message when the API responds with []", async () => {
    // Arrange
    server.use(
      rest.get(`${baseUrl}/people/`, (_req, res, ctx) => {
        const response: APIResponseMultiple<Person[]> = {
          count: 0,
          next: null,
          previous: null,
          results: [],
        }

        return res.once(ctx.json(response))
      }),
    )

    // Act
    const { findByText } = testRender(<People />)
    const text = await findByText("No People Found")

    // Assert
    expect(text).toBeInTheDocument()
  })
})
