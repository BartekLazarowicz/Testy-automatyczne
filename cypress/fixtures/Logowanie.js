export const Logowanie = function () {

//wejdz na beta.wfirma.pl
        cy.visit(Site + '/users/login')


//zaloguj sie
        cy.get('input#UserLogin')
            .type(Login)
            .get('input#UserPassword')
            .type(Password)
            .get('button.btn.btn-lg.btn-primary.btn-block.btn-submit')
            .click()

};