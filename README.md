# HebrewDate

A small wrapper around [libhdate](https://www.npmjs.com/package/libhdate) that should make it much easier to use.


## API

**new HebrewDate(options)**

Where options are:
* `date: Date` - optional - The day to user. Defaults to `new Date()`.
* `isDiaspora: Boolean` - optional - Should be calculated according to Israel (default) or diaspora.


**Instance properties**

* `year: number` - Returns the Hebrew year number, e.g. `5782`.
* `month: number` - Returns the Hebrew month number, zero based (same as native JS `Date` object).

|Month number | Month name (English) | Month name (Hebrew) |
|:-----------:|----------------------|--------------------:|
|     0       | Tishri               |                תשרי |
|     1       | Heshvan              |               חשוון |
|     2       | Kislev               |                כסלו |
|     3       | Tevet                |                 טבת |
|     4       | Shevat               |                 שבט |
|     5       | Adar                 |אדר (בשנה לא מעוברת) |
|     6       | Nisan                |                ניסן |
|     7       | Iyar                 |                אייר |
|     8       | Sivan                |               סיוון |
|     9       | Tammuz               |                תמוז |
|     10      | Av                   |                  אב |
|     11      | Elul                 |                אלול |
|     12      | Adar I               |              'אדר א |
|     13      | Adar II              |              'אדר ב |

* `date: number` - Returns the Hebrew numerical value of the day in the `month`.

* `holiday: number | undefined` - Returns the holiday in the Hebrew calendar, if any.

* `holidayName: string | undefined` - Returns the `holiday` name, in **Hebrew**, if any.

example:
```js
const HebrewDate = require('HebrewDate')

// With specific date object
const date = new Date('2021-09-21');
const hdate = new HebrewDate({ date });
console.log(`September 21st, 2021 hebrew date is: ${hdate.date}, in month ${hdate.month}, in Year ${hdate.year}, and holiday ${hdate.holiday} - which is ${hdate.holidayName}`)

// Outputs
// September 21st, 2021 hebrew date is: 15, in month 0, in Year 5782, and holiday 5 - which is סוכות
```
