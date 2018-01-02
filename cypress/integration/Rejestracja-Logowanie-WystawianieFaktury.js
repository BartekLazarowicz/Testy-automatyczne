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
var InvoiceContentCount = '5' //ilość pozycji na fakturze
var RandomNumbContractor = (Math.floor(Math.random() * 1000001))+'' //liczby losowe
var RandomZip = RandomNumbContractor.substr(0,2) + '-' + RandomNumbContractor.substr(2,3)



describe('Rejestracja Wfirmy', function () {
    it('Register_Steps', function () {

        cy.visit(Site)
        cy.get('a.btn.btn-primary.btn-arrow').should('contain','darmo')
        cy.get('a.btn.btn-colored.btn-register')
            .click()
        cy.get('input#UserLogin')
            .type(Login)
        cy.get('input#UserPassword')
            .type(Password)
        cy.get('input#CompanyNip')
            .type(NIP)
        cy.get('div.checkbox0')
            .click()
        cy.get('button.btn-submit')
            .click()
        cy.get('input#CompanyName')
            .should('have.value',CompanyName)
        cy.get('input#CompanyAddressMainStreet')
            .should('have.value',Street)
        cy.get('input#CompanyAddressMainBuildingNumber')
            .should('have.value',BuildingNumber)
        cy.get('input#CompanyAddressMainFlatNumber')
            .should('have.value',FlatNumber)
        cy.get('input#CompanyAddressMainZip')
            .should('have.value',Zip)
        cy.get('input#CompanyAddressMainCity ')
            .should('have.value',City)
        cy.get('button.btn-submit')
            .click()
        cy.get('div.check-box.fa.fa-check.large.checkbox2')
            .click()
        cy.get('a.btn-submit')
            .click()

    });
});

describe('Dokumenty sprzedaży', function () {
    it('Wystawianie Faktury', function () {
        //wejdz na beta.wfirma.pl
        cy.visit( Site + '/users/login')
        //zaloguj sie
        cy.get('input#UserLogin')
            .type(Login)
            .get('input#UserPassword')
            .type(Password)
            .get('button.btn.btn-lg.btn-primary.btn-block.btn-submit')
            .click()
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