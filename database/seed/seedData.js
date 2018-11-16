const faker = require("faker");
const Comments = require("../models");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

Comments.sync({ force: false }).then(() => {
  console.log("table created");
});

const csvWriter = createCsvWriter({
  path: "./database/seed/seededData.csv",
  append: true,
  header: [
    { id: "user", title: "User" },
    { id: "prodRating", title: "prodRating" },
    { id: "yesRating", title: "yesRating" },
    { id: "noRating", title: "noRating" },
    { id: "date", title: "date" },
    { id: "body", title: "body" },
    { id: "verified", title: "verified" },
    { id: "recommend", title: "recommend" },
    { id: "size", title: "size" },
    { id: "width", title: "width" },
    { id: "comfort", title: "comfort" },
    { id: "quality", title: "quality" },
    { id: "response", title: "response" },
    { id: "prodId", title: "prodId" },
    { id: "header", title: "header" }
  ]
});

let generateFake = function() {
  let fakeData = [];
  for (let j = 1; j <= 1000; j++) {
    const randomNumber = Math.floor(Math.random() * 40 + 10);
    for (let i = 0; i < randomNumber; i++) {
      const response = Math.random() > 0.5 ? null : faker.lorem.sentence();
      const header = Math.random() > 0.5 ? null : faker.lorem.sentence();
      const object = {
        user: faker.internet.userName(),
        prodRating: faker.random.number({ min: 1, max: 5 }),
        yesRating: faker.random.number({ min: 0, max: 200 }),
        noRating: faker.random.number({ min: 0, max: 200 }),
        date: faker.date.past().toISOString(),
        body: faker.lorem.sentences(),
        verified: faker.random.boolean(),
        recommend: faker.random.boolean(),
        size: faker.random.number({ min: 1, max: 4 }),
        width: faker.random.number({ min: 1, max: 4 }),
        comfort: faker.random.number({ min: 1, max: 4 }),
        quality: faker.random.number({ min: 1, max: 4 }),
        response,
        prodId: j,
        header
      };
      fakeData.push(object);
    }
  }
  return fakeData;
};

function writer() {
  csvWriter
    .writeRecords(generateFake())
    .then(() => {
      console.log("...Done");
    })
    .catch(err => console.error(err));
}
let seedThis = function() {
  console.log("seeding");
  for (let i = 0; i <= 10; i++) {
    writer();
  }
};
let pls = function() {
  for (let i = 0; i <= 2; i++) {
    seedThis();
  }
};

pls();
