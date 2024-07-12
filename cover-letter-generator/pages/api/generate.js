import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:1234/v1",
  apiKey: "lm-studio",
});

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const newUser = await User.create(request.body);
      response.status(201).json(newUser);
    } catch (error) {
      console.log("POST /api/users", error);
      response.status(500).json({ message: "Error creating new user" });
    }
    return;
  }

  if (request.method === "GET") {
    // ...
  }
  // ...rest of the handlers
}
