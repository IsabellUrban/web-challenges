import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
  };

  if (request.method === "GET") {
    response.status(200).json(character);
    return;
  } else {
    response.status(404).json({ message: "Not allowed!" });
  }
}
