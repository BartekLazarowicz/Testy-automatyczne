/*export const Katalogpozycje = function () {

    cy.get('td.auto.input.inputer-good.column-name div div.btn-group.group-right')

};*/
import {Logowanie} from './Logowanie';
//import {Losowepozycje} from './Losowe pozycje na fakturze';
import {Losowepozycje} from './Losowe pozycje na fakturze';
import {Danekontrahenta} from './Uzupełnienie danych kontrahenta';

describe ('Sprzedaż', function ()  {
    it('Zwykła faktura VAT', function () {
        Logowanie();
        //przejdz do Przychody
        cy.visit( Site + '/invoices/index/all');
        // klik w Wystaw
        cy.get('span.menu-label:first')
            .click();


        //dodawanie określonej ilości pozycji z produktami
        cy.get('td.auto.input.inputer-good.column-name div div.btn-group.group-right')
            .click()
            .get('a[href="/goods/search"]')
            .click()




    });
});