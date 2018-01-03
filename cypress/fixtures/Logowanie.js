export const Logowanie = function () {

//wejdz na beta.wfirma.pl
        cy.visit(Site + '/users/login');


//zaloguj sie
        cy.get('input#UserLogin')
            //.type(Login)
            .type('bartek.lazarowicz+22@wfirma.pl')
            .get('input#UserPassword')
            .type(Password)
            .get('button.btn.btn-lg.btn-primary.btn-block.btn-submit')
            .click()
            cy.visit(Site + '/user_companies/login/4414')
        //wyłączenie OneTimeInfo
        /*cy.find('fieldset[id="one-time-info-modal"]').then(($acceptbtn) => {
                if ($acceptbtn.find('a[id="accept"]')) {
                    cy.get('a[id="accept"]').click()
                }
            {}
         });*/

};