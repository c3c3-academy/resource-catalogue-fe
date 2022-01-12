describe("add resource page tests", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/add-resources");
  });

  it("log out button should be visible", () => {
    cy.get(".LogOut").should("be.visible");
  });
});
