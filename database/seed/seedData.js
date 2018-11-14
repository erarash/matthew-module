const faker = require("faker");
const Comments = require("../models");

const fakeData = [];

for (let j = 1; j <= 1000000; j++) {
  const randomNumber = Math.floor(Math.random() * 40 + 10);
  for (let i = 0; i < randomNumber; i++) {
    const response = Math.random() > 0.5 ? null : faker.lorem.sentence();
    const header = Math.random() > 0.5 ? null : faker.lorem.sentence();
    const object = {
      user: faker.internet.userName(),
      prodRating: faker.random.number({ min: 1, max: 5 }),
      yesRating: faker.random.number({ min: 0, max: 200 }),
      noRating: faker.random.number({ min: 0, max: 200 }),
      date: faker.date.past(),
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

Comments.sync({ force: false }).then(() => {
  Comments.bulkCreate(fakeData).then(() =>
    console.log("fake comments seeded!")
  );
});
