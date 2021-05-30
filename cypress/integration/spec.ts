it('loads examples', () => {
  cy.visit('/');
  cy.contains('Angular forms examples');
});
