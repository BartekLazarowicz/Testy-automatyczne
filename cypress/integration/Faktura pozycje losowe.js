import {Logowanie} from './Logowanie';
describe ('Dokumenty sprzedaży', function ()  {
    it('Wystawianie Faktury', function () {
        Logowanie();
        //przejdz do Przychody
        cy.visit( Site + '/invoices/index/all')
        // klik w Wystaw
        cy.get('span.menu-label:first')
            .click()
        //uzupełnianie danych kontrahenta
        cy.get('input[name="data[ContractorDetail][name]"]')
            .type('kontrahent' + RandomNumbContractor)
            .should('have.value', 'kontrahent' + RandomNumbContractor)
            .get('label')
            .contains('Nabywca')
            .click()
            .get('input[name="data[ContractorDetail][zip]"]')
            .type(RandomNumbContractor)
            .get('input[name="data[ContractorDetail][zip]"]')
            .should('have.value', RandomZip)
            .get('input[name="data[ContractorDetail][city]"]')
            .clear()
            .type('Miasto ' + RandomNumbContractor)
            .get('input[name="data[ContractorDetail][city]"]')
            .should('have.value', 'Miasto ' + RandomNumbContractor)
            .get('input[name="data[ContractorDetail][street]"]')
            .clear()
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