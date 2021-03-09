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
      "label": "Type 1",
      "value": "1",
    },
    {
      "label": "Type 2",
      "value": "2",
    },
    {
      "label": "Type 3",
      "value": "3",
    },
    {
      "label": "Type 4",
      "value": "4",
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