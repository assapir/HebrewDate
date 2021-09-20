const libhdate = require('libhdate');

class HebrewDate {
  #hdate = new libhdate();
  #isDiaspora = false;
  #holiday = undefined;

  /**
   * @param {Date} [date] JS native Date object, defaults to new Date()
   * @param {boolean} [isDiaspora = false] Is the date in diaspora
   */
  constructor({ date, isDiaspora = false } = {}) {
    if (!date) {
      date = new Date();
    }

    // getMonth is zero-based, so we need to add one
    this.#hdate.setGdate(date.getDate(), date.getMonth() + 1, date.getFullYear());
    this.#isDiaspora = isDiaspora;
  }

  /**
   * Get the Hebrew year
   * @returns {number}
   */
  get year() {
    return this.#hdate.hd_year;
  }

  /**
   * Get the Hebrew month, zero-based, same as JS native Date.getMonth()
   * Where:
   * 0 - Tishri
   * 1 - Heshvan
   * 2 - Kislev
   * 3 - Tevet
   * 4 - Shevat
   * 5 - Adar
   * 6 - Nisan
   * 7 - Iyar
   * 8 - Sivan
   * 9 - Tammuz
   * 10 - Av
   * 11 - Elul
   * 12 - Adar I
   * 13 - Adar II
   * @returns {number}
  */
  get month() {
    return this.#hdate.hd_mon - 1;
  }

  /**
   * Get the Hebrew day of month
   */
  get date() {
    return this.#hdate.hd_day;
  }

  /**
   * Get a holiday in the Hebrew calendar, if any
   * @returns {number | undefined}
   */
  get holiday() {
    if (this.#holiday !== undefined) {
      return this.#holiday === 0 ? undefined : this.#holiday;
    }

    this.#holiday = this.#hdate.getHolyday(this.#hdate, this.#isDiaspora);
    return this.#holiday === 0 ? undefined : this.#holiday;
  }

  /**
   * Get the holiday name in Hebrew.
   * @returns {string | undefined}
   */
  get holidayName() {
    if (this.#holiday === 0) {
      return undefined;
    }

    return this.#hdate.getHolydayName(this.holiday);
  }
}

module.exports = HebrewDate;
