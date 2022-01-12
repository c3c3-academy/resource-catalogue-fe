describe("all resources", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("displays more than zero resources by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get(".SingleResource").should(($input) => {
      expect($input).to.not.have.length(0);
    });
    cy.get(".SearchInput").click();

    cy.get(".SearchInput").click().type("react");

    cy.get(".SingleResource").should("have.length", 3);
  });

  it("displays list of users", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.get(".userDropDown").should("exist");
    cy.get(".LoginSelector").click();
    cy.get(".userDropDown").children().should("have.length", 32);
  });

  it("log in is functional", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.get(".userDropDown").select("Emma").get(".nav-bar").should("exist");
  });

  it("Appheader h1 has correct text", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.get(".welcomeText").should("exist");
    cy.get(".welcomeText").should(
      "have.text",
      "Welcome to Cohort 3 Resource Catalogue"
    );
  });

  // it("if resource component has corrent information", () => {
  //   // We use the `cy.get()` command to get all elements that match the selector.
  //   // Then, we use `should` to assert that there are two matched items,
  //   // which are the two default items.

  //   // cy.get(".SingleResource").should("exist");
  //   // cy.get(".SingleResource").each(($resourceEL) => {
  //   //   cy.get("SingleResource").contains("Author");
  //     //  expect() $resourceEL.contains("URL");
  //     //  expect() $resourceEL.contains("Description");
  //     //  expect() $resourceEL.contains("Tags");
  //     //  expect() $resourceEL.contains("Content Type");
  //     //  expect() $resourceEL.contains("Reason");
  //     //  expect() $resourceEL.contains("Recommended Mark Stage");
  //     //  expect() $resourceEL.contains("Recommended");
  //   });
  // });
});
