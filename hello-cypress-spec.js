it('The Test To run in CI/CD', () => {
    cy.visit("https://the-internet.herokuapp.com/")
    .get("a").should("have.length",46);
});
it('The Test To run in CI/CD that fails', () => {
    cy.visit("https://the-internet.herokuapp.com/")
    .get("a").should("have.length",34);
});