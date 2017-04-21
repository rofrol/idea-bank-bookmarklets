//javascript:
(function () {
  console.log('PPL');

  /* Poprzedni miesiąc http://stackoverflow.com/a/605582/588759 */
  function previousMonthAndYear() {
    var dateObj = new Date();
    dateObj.setMonth(dateObj.getMonth() - 1);
    var month = dateObj.getUTCMonth() + 1;
    var year = dateObj.getUTCFullYear();
    return { month, year };
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function run(formularz_type) {
    /* Przelew do US */
    document.querySelector('[onclick="showform(\'transferUs\')"]').click();
    await sleep(1000);
    /* Pobierz numer */
    document.querySelector('[href="javascript:getUs();"]').click();
    await sleep(1000);
    /* Piaseczno */
    document.querySelector('#us_1_msa_191').click();
    await sleep(1000);
    /* Urząd skarbowy */
    document.querySelector('#us_2_msa_1').click();
    await sleep(1000);
    /* formularz_type */
    document.querySelector(formularz_type.id).click();
    await sleep(1000);
    /* select bank account */
    document.querySelector('#us_4_msa_1').click();
    await sleep(1000);
    /* Zapisz */
    document.getElementById(formularz_type.bank).click();
    await sleep(1000);
    /* M - Miesiąc */
    document.querySelector('#interval_msa_4').click();
    await sleep(1000);
    var previousDate = previousMonthAndYear();
    document.querySelector('#interv_msa_' + previousDate.month).click();
    await sleep(1000);
    /* Year */
    Array.prototype.slice.call(document.querySelectorAll('[id^="year_msa_"] '))
      .find(e => e.querySelector('span').textContent == previousDate.year).click()
  }
  var formularz = {
    ppl: { id: "#us_3_msa_111", bank: "37101010100161862223000000" },
    vat7: { id: "#us_3_msa_138", bank: "87101010100161862222000000" }
  };
  /* run(formularz.ppl); */
  /* run(formularz.vat7); */
})();
