describe("Planets", () => {
  it("Loads multiple people", () => {
    cy.visit("/people")

    cy.findByText(/Luke Skywalker/i).should("be.visible")
    cy.findByText(/C-3PO/i).should("be.visible")
  })

  it("Navigates to the person when a card is clicked on", () => {
    cy.visit("/people")

    cy.findByText(/Luke Skywalker/i).click()

    cy.url().should("contain", "/people/1")
  })

  it("Loads a single person", () => {
    cy.visit("/people/1")

    cy.findAllByText(/Luke Skywalker/i).should("be.visible")
    cy.findByText(/C-3PO/i).should("not.be.visible")
  })

  it("Back button takes you back to /people", () => {
    cy.visit("/people/1")

    cy.findByText(/Back/i).click()

    cy.url().should("not.contain", "/people/1")
    cy.url().should("contain", "/people")
  })
})
