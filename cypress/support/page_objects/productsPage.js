class ProductsPage {
  addToCart(productName) {
    cy.contains(".card", productName).within(() => {
      cy.contains("Add to Cart").click();
    });
  }

  openCart() {
    cy.get("a[href='/cart']").click();
  }

  verifyCartItemCount(expectedCount) {
    cy.get(".cart-item").should("have.length", expectedCount);
  }

  verifyTotalQuantity(expectedQty) {
    let total = 0;
    cy.get(".cart-item-quantity").each(($el) => {
      total += parseInt($el.text());
    }).then(() => {
      expect(total).to.equal(expectedQty);
    });
  }

  updateQuantity(productName, quantity) {
    cy.contains(".cart-item", productName).within(() => {
      cy.get("input[type='number']").clear().type(quantity);
    });
  }
}

export default ProductsPage;
