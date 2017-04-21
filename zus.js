//javascript:
(function () {
  function set(id, amount) {
    document.querySelector(id).click();
    document.querySelector('#payment_typ_msa_5').click();
    document.querySelector('[name="declaration_number"]').value = '01';

    function zusDeclarationDate() {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth();
      month = month < 10 ? '0' + month : month;
      var year = dateObj.getUTCFullYear();
      return '' + month + year;
    };
    document.querySelector('[name="declaration_date"]').value = zusDeclarationDate();
    document.querySelector('tr:nth-child(12) [name="amount"]').value = amount;
  }
  function spoleczne(){ set('#rb_msa_1', '749.94'); };
  function zdrowotne(){ set('#rb_msa_2', '297.28'); };
  function fundusz(){ set('#rb_msa_3', '62.67'); };
})();
