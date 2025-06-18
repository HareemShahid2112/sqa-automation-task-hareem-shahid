import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/page_objects/productsPage";

const productsPage = new ProductsPage();

Given("I open the products list page", () => {
  cy.visit("https://qa-practice.netlify.app/products_list");
});

When("I add {string} to the cart", (productName) => {
  productsPage.addToCart(productName);
});

Then("the cart should contain {int} items", (expectedCount) => {
  productsPage.openCart();
  productsPage.verifyCartItemCount(expectedCount);
});

Given("I open the cart", () => {
  productsPage.openCart();
});

Then("the total quantity should be {int}", (quantity) => {
  productsPage.verifyTotalQuantity(quantity);
});

When("I increase the quantity of {string} to {int}", (productName, qty) => {
  productsPage.updateQuantity(productName, qty);
});

When("I decrease the quantity of {string} to {int}", (productName, qty) => {
  productsPage.updateQuantity(productName, qty);
});
