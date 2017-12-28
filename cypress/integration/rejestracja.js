describe('Rejestracja Wfirmy', function () {
    it('Register_Steps', function () {
        cy.visit('https://beta.wfirma.pl')
        cy.get('a.btn.btn-primary.btn-arrow').should('contain','darmo')
        cy.get('a.btn.btn-colored.btn-register').click()
        cy.get('input#UserLogin').type('bartek.lazarowicz+'+Math.floor(Math.random() * 10001)+'@wfirma.pl')
        cy.get('input#UserPassword').type('123123qwe')
        cy.get('input#CompanyNip').type('9151677484')
        cy.get('div.checkbox0').click()
        cy.get('button.btn-submit').click()
        cy.get('input#CompanyName').should('have.value','BUSINESS TAX Sp. z o. o.')
        cy.get('input#CompanyAddressMainStreet').should('have.value','Bolesława Krzywoustego')
        cy.get('input#CompanyAddressMainBuildingNumber').should('have.value','105')
        cy.get('input#CompanyAddressMainFlatNumber').should('have.value','21')
        cy.get('input#CompanyAddressMainZip').should('have.value','51-166')
        cy.get('input#CompanyAddressMainCity ').should('have.value','Wrocław')
        cy.get('button.btn-submit').click()
        cy.get('div.check-box.fa.fa-check.large.checkbox2').click()
        cy.get('a.btn-submit').click()

    });
});