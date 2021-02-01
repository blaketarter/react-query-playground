describe("Planets", () => {
  it("Loads multiple planets", () => {
    cy.visit("/")

    cy.findByText(/Tatooine/i).should("be.visible")
    cy.findByText(/Alderaan/i).should("be.visible")
  })

  it("Navigates to the planet when a card is clicked on", () => {
    cy.visit("/planets")

    cy.findByText(/Tatooine/i).click()

    cy.url().should("contain", "/planets/1")
  })

  it("Loads a single planet", () => {
    cy.visit("/planets/1")

    cy.findAllByText(/Tatooine/i).should("be.visible")
    cy.findByText(/Alderaan/i).should("not.be.visible")
  })

  it("Back button takes you back to /planets", () => {
    cy.visit("/planets/1")

    cy.findByText(/Back/i).click()

    cy.url().should("not.contain", "/planets/1")
    cy.url().should("contain", "/planets")
  })
})
