//javascript:
(function () {
  console.log('PPL');

  /* Poprzedni miesiąc */
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

  async function run(milisec) {
    /* Pobierz numer */
    document.querySelector('[href="javascript:getUs();"]').click();
    await sleep(1000);
    /* Piaseczno */
    document.querySelector('#us_1_msa_191').click();
    await sleep(500);
    /* Urząd skarbowy */
    document.querySelector('#us_2_msa_1').click();
    await sleep(500);
    /* PPL */
    document.querySelector('#us_3_msa_111').click();
    await sleep(500);
    /* 37101010100161862223000000 */
    document.querySelector('#us_4_msa_1').click();
    /* Zapisz */
    document.getElementById('37101010100161862223000000').click();
    /* M - Miesiąc */
    document.querySelector('#interval_msa_4').click();

    var previousDate = previousMonthAndYear();
    document.querySelector('#interv_msa_' + previousDate.month).click();

    /* Year */
    Array.prototype.slice.call(document.querySelectorAll('[id^="year_msa_"] '))
      .find(e => e.querySelector('span').textContent == previousDate.year).click()
  }
  run();
})();
