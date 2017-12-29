describe('Dokumenty sprzedaży', function () {
    it('Faktura', function () {
        //dane testowe
        var Site = 'https://beta.wfirma.pl' //adres testów
        var Login = 'bartek.lazarowicz+22@wfirma.pl' //login do konta
        var Password = '123123qwe' //hasło do konta
        var CompanyID = '4414' //ID firmy
        var InvoiceContentCount = '5' //ilość pozycji na fakturze
        var RandomNumbContractor = (Math.floor(Math.random() * 1000001)) //liczby losowe

        //wejdz na beta.wfirma.pl
        cy.visit( Site + '/users/login')
        //zaloguj sie
        cy.get('input#UserLogin')
            .type(Login)
            .get('input#UserPassword')
            .type(Password)
            .get('button.btn.btn-lg.btn-primary.btn-block.btn-submit')
            .click()
        //wybierz firme
        cy.visit( Site + '/user_companies/login/' + CompanyID)
        //przejdz do Przychody
        cy.visit( Site + '/invoices/index/all')
        // klik w Wystaw
        cy.get('span.menu-label:first')
            .click()
        //uzupełnianie danych kontrahenta
        cy.get('input[name="data[ContractorDetail][name]"]')
            .type('kontrahent' + RandomNumbContractor)
            .get('label')
            .contains('Nabywca')
            .click()
            .get('input[name="data[ContractorDetail][zip]"]')
            .type(RandomNumbContractor) //.get('input[name="data[ContractorDetail][zip]"]').contains(RandomNumbContractor)
            .get('input[name="data[ContractorDetail][city]"]')
            .clear()
            .type('Miasto ' + RandomNumbContractor)
            .get('input[name="data[ContractorDetail][city]"]')
            .should('have.value', 'Miasto ' + RandomNumbContractor)
            .get('input[name="data[ContractorDetail][street]"]')
            .type('Ulica ' + RandomNumbContractor)
            .get('input[name="data[ContractorDetail][street]"]')
            .should('have.value', 'Ulica ' + RandomNumbContractor)
            .get('label div.input-append.input-prepend.inputer.input-select:first')
            .click()
            .get('span')
            .contains('Inny')
            .click()
            .get('input[name="data[ContractorDetail][nip]"]')
            .type(RandomNumbContractor)
            .get('input[name="data[ContractorDetail][nip]"]')
            .should('have.value','' + RandomNumbContractor)
        //dodawanie określonej ilości pozycji z produktami
        for (var PositionIndex=0; PositionIndex < InvoiceContentCount; ) {
            var RandomNumb = (Math.floor(Math.random() * 10001)) //liczby losowe dla pozycji
            //uzupełnianie danych produktu
            cy.get('input[name="data[InvoiceContent][' + PositionIndex + '][name]"]')
                .type(RandomNumb)
                .get('input[name="data[InvoiceContent][' + PositionIndex + '][count]"]')
                .type(RandomNumb)
                .get('input[name="data[InvoiceContent][' + PositionIndex + '][price]"]')
                .type(RandomNumb)
                .get('label')
                .contains('Nabywca')
                .click()
            //dodawanie nowej pozycji
            cy.get('a.btn.btn-mini.add-row')
                .click()
            PositionIndex++;
        }
        //akceptacja formularza
        cy.get('div.dialogbox-content form')
            .submit()
    });
});