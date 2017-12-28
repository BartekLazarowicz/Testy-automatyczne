describe('Strona główna', function () {
    it('Main_public', function () {
        cy.visit('https://beta.wfirma.pl')
        cy.get('h1').should('contain','Wygodne narzędzia do księgowości')
        cy.get('div.collapse.navbar-collapse').should('exist')
        cy.get('a#learn-more').should('exist')
        cy.get('h2').should('contain','Jeden system, wiele możliwości').should('contain','Z nami zyskujesz więcej').should('contain','Dodatkowo').should('contain','wFirma w liczbach').should('contain','pomocy').should('contain','opinie')
        cy.get('div.panel.panel-warning').should('exist')
        cy.get('div.panel.panel-success').should('exist')
        cy.get('div.panel.panel-primary').should('exist')
        cy.get('div.dotted-line').should('exist')
        cy.get('div.right-column').should('exist')
        cy.get('div.container.nav-container').should('exist')
    });
});