import {Logowanie} from './Logowanie';
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
        //uzupełnianie danych kontrahenta
        Danekontrahenta();
        //dodawanie określonej ilości pozycji z produktami
        Losowepozycje();
        //akceptacja formularza
        cy.get('div.dialogbox-content form')
            .submit();
    });
});