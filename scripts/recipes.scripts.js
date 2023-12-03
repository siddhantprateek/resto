const { faker } = require('@faker-js/faker');
const fs = require('fs');

const getLocationData = () => {
    // Generate fake property details using Faker
    const recipeData = {
        id: faker.string.uuid(),
        propertyName: faker.location.street(),
        location: faker.location.city(),
        owner: faker.person.firstName(),
        price: faker.finance.amount(10, 100, 2),
        currency: "USD",
        pictures: faker.image.urlLoremFlickr({ category: 'food' })
    };

    return recipeData;
}

// Save the generated data to a JSON file
const saveLocationDataToJsonFile = (data, fileName) => {
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile(fileName, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
        } else {
            console.log(`Data saved to ${fileName}`);
        }
    });
}

const recipesArray = [];
for (let i = 0; i < 1550; i++) {
    recipesArray.push(getLocationData());
}

saveLocationDataToJsonFile(recipesArray, '../bin/data/recipe.json');