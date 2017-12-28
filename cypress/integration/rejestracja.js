describe('Rejestracja Wfirmy', function () {
    it('Register_Steps', function () {
        var Site = 'https://beta.wfirma.pl'
        var Login = 'bartek.lazarowicz+'+Math.floor(Math.random() * 10001)+'@wfirma.pl'
        var NIP = '9151677484'
        var Password = '123123qwe'
        var CompanyName = 'BUSINESS TAX Sp. z o. o.'
        var Street = 'ul. Bolesława Krzywoustego'
        var BuildingNumber = '105'
        var FlatNumber = '21'
        var Zip = '51-166'
        var City = 'Wrocław'


        cy.visit(Site)
        cy.get('a.btn.btn-primary.btn-arrow').should('contain','darmo')
        cy.get('a.btn.btn-colored.btn-register').click()
        cy.get('input#UserLogin').type(Login)
        cy.get('input#UserPassword').type(Password)
        cy.get('input#CompanyNip').type(NIP)
        cy.get('div.checkbox0').click()
        cy.get('button.btn-submit').click()
        cy.get('input#CompanyName').should('have.value',CompanyName)
        cy.get('input#CompanyAddressMainStreet').should('have.value',Street)
        cy.get('input#CompanyAddressMainBuildingNumber').should('have.value',BuildingNumber)
        cy.get('input#CompanyAddressMainFlatNumber').should('have.value',FlatNumber)
        cy.get('input#CompanyAddressMainZip').should('have.value',Zip)
        cy.get('input#CompanyAddressMainCity ').should('have.value',City)
        cy.get('button.btn-submit').click()
        cy.get('div.check-box.fa.fa-check.large.checkbox2').click()
        cy.get('a.btn-submit').click()

    });
});