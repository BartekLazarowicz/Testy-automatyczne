describe('Rejestracja Wfirma', function () {
        it('Rejestracja nowej firmy', function () {
            cy.visit(Site);
            cy.get('a.btn.btn-primary.btn-arrow')
                .should('contain','darmo');
            cy.get('a.btn.btn-colored.btn-register')
                .click();
            cy.get('input#UserLogin')
                .type(global.Login);
            cy.get('input#UserPassword')
                .type(Password);
            cy.get('input#CompanyNip')
                .type(NIP);
            cy.get('div.checkbox0')
                .click();
            cy.get('button.btn-submit')
                .click();
            cy.get('input#CompanyName')
                .should('have.value',CompanyName);
            cy.get('input#CompanyAddressMainStreet')
                .should('have.value',Street);
            cy.get('input#CompanyAddressMainBuildingNumber')
                .should('have.value',BuildingNumber);
            cy.get('input#CompanyAddressMainFlatNumber')
                .should('have.value',FlatNumber);
            cy.get('input#CompanyAddressMainZip')
                .should('have.value',Zip);
            cy.get('input#CompanyAddressMainCity ')
                .should('have.value',City);
            cy.get('button.btn-submit')
                .click();
            cy.get('div.check-box.fa.fa-check.large.checkbox2')
                .click();
            cy.get('a.btn-submit')
                .click()
        });
});
