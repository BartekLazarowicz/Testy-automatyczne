export const Logowanie = function () {

//wejdz na beta.wfirma.pl
        cy.visit(Site + '/users/login');


//zaloguj sie
        cy.get('input#UserLogin')
            .type(Login)
            .get('input#UserPassword')
            .type(Password)
            .get('button.btn.btn-lg.btn-primary.btn-block.btn-submit')
            .click()
        //wyłączenie OneTimeInfo
        cy.get('fieldset[id="one-time-info-modal"]').then(($acceptbtn) => {
                if ($acceptbtn.find('a[id="accept"]')) {
                    cy.get('a[id="accept"]').click()
                }
         });

};