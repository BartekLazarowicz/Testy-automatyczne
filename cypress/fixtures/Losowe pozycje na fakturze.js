export const Losowepozycje = function () {

for (let PositionIndex=0; PositionIndex < InvoiceContentCount; ) {
    let RandomNumb = (Math.floor(Math.random() * 10001)); //liczby losowe dla pozycji
    //uzupełnianie danych produktu
    cy.get('input[name="data[InvoiceContent][' + PositionIndex + '][name]"]')
        .type(RandomNumb)
        .get('input[name="data[InvoiceContent][' + PositionIndex + '][count]"]')
        .type(RandomNumb)
        .get('input[name="data[InvoiceContent][' + PositionIndex + '][price]"]')
        .type(RandomNumb)
        .get('label')
        .contains('Nabywca')
        .click();
    //dodawanie nowej pozycji
    cy.get('a.btn.btn-mini.add-row')
        .click();
    PositionIndex++;
}};