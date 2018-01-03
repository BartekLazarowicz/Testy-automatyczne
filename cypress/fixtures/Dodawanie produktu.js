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


  /*


        for (var GoodsIndex=0; GoodsIndex < GoodsCount; ) {
            var RandomNumb = (Math.floor(Math.random() * 10001)) //liczby losowe dla pozycji






            GoodsIndex++;
    }*/
})});