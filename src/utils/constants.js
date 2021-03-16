import cities_of_turkey from './cities/turkey.json';

export default {
  Birthday: "Please select your birthday",
  Cities: [
    {
      "label": "Please select the city you live",
      "value": null,
    },
  ].concat(cities_of_turkey.map(city => ({
    label: city.name,
    value: city.id,
  })).sort((a, b) => a.label.toLocaleLowerCase('tr').localeCompare(b.label.toLocaleLowerCase('tr'), 'tr', { sensitivity: 'base' }))),
  Genders: [
    {
      "label": "Please select your gender",
      "value": null,
    },
    {
      "label": "Male",
      "value": "male",
    },
    {
      "label": "Female",
      "value": "female",
    }
  ],
  Vaccines: [
    {
      "label": "Please select your vaccine type",
      "value": null,
    },
    {
      "label": "Comirnaty (BNT162b2) / Pfizer-BioNTech",
      "value": "1",
    },
    {
      "label": "Moderna (mRNA-1273)",
      "value": "2",
    },
    {
      "label": "Janssen (JNJ-78436735; Ad26.COV2.S)",
      "value": "3",
    },
    {
      "label": "AstraZeneca (AZD1222)",
      "value": "4",
    },
    {
      "label": "CoronaVac / Sinovac",
      "value": "5",
    },
    {
      "label": "Sputnik V",
      "value": "6",
    },
    {
      "label": "BBIBP-CorV",
      "value": "7",
    },
    {
      "label": "EpiVacCorona",
      "value": "8",
    },
    {
      "label": "Convidicea (Ad5-nCoV)",
      "value": "9",
    },
    {
      "label": "Covaxin",
      "value": "10",
    },
    {
      "label": "Other",
      "value": -1,
    }
  ],
  DEBUG: {
    "name": "John",
    "surname": "Doe",
    "gender": "male",
    "birthday": new Date(),
    "city": 6,
    "vaccineType": "1",
    "otherVaccineType": "experiment 1548-C"
  }
}