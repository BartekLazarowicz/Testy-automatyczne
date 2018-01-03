import {Logowanie} from './Logowanie';

describe ('Produkt', function ()  {
    it('Dodawanie', function () {
        Logowanie();
        cy.get('div.navbar.main-menu').then(($mainnavbar) => {
            if ($mainnavbar.find('li.warehouses')) {
                cy.visit(Site + '/warehouses')
            }
            else{
                cy.visit(Site + '/invoices/goods')
            }
        });
        for (let GoodsIndex=0; GoodsIndex < GoodsCount; ) {
            let RandomNumb = (Math.floor(Math.random() * 101)); //liczby losowe dla pozycji
            cy.get('span.menu-label:first')
                .click();
            cy.get('input[name="data[Good][name]"]')
                .type('produkt' + RandomNumb);
            cy.get('input[name="data[Good][netto]"]')
                .type(RandomNumb*RandomNumb);
            cy.get('div.dialogbox-content form')
                .submit();
            GoodsIndex++;
        }
    };
});