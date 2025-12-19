describe("Calculatrice - Front E2E", () => {
  beforeEach(() => {
    cy.visit("/"); // baseUrl déjà défini dans cypress.config.js
  });

  // =============================
  //        ADDITION
  // =============================
  it("Addition valide : 5 + 3 = 8", () => {
    cy.get("#a").type("5");
    cy.get("#b").type("3");
    cy.contains("button", "+").click();

    cy.get("#result").should("contain", "8");
    cy.get("#error").should("be.empty");
  });

  it("Addition avec un seul chiffre erreur", () => {
    cy.get("#a").type("5");
    cy.get("#b").clear();
    cy.contains("button", "+").click();

    cy.get("#result").should("contain", "—");
    cy.get("#error").should("contain", "Both a and b must not be empty");
  });

  it("Addition avec un chiffre et un mot donne une erreur", () => {
    cy.get("#a").type("5");
    cy.get("#b").type("un");
    cy.contains("button", "+").click();

    cy.get("#result").should("contain", "—");
    cy.get("#error").should("contain", "Both a and b must be valid numbers");
  });

  // =============================
  //        SOUSTRACTION
  // =============================
  it("Soustraction valide : 5 - 3 = 2", () => {
    cy.get("#a").type("5");
    cy.get("#b").type("3");
    cy.contains("button", "−").click();

    cy.get("#result").should("contain", "2");
    cy.get("#error").should("be.empty");
  });

  // =============================
  //        MULTIPLICATION
  // =============================
  it("Multiplication valide : 5 * 3 = 15", () => {
    cy.get("#a").type("5");
    cy.get("#b").type("3");
    cy.contains("button", "×").click();

    cy.get("#result").should("contain", "15");
    cy.get("#error").should("be.empty");
  });

  // =============================
  //        DIVISION
  // =============================
  it("Division valide : 10 / 5 = 2", () => {
    cy.get("#a").type("10");
    cy.get("#b").type("5");
    cy.contains("button", "÷").click();

    cy.get("#result").should("contain", "2");
    cy.get("#error").should("be.empty");
  });

  it("Division par zéro -> erreur", () => {
    cy.get("#a").type("10");
    cy.get("#b").type("0");
    cy.contains("button", "÷").click();

    cy.get("#result").should("contain", "—");
    cy.get("#error").should("contain", "Division by zero");
  });
});
