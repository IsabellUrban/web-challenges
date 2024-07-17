import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);

      console.log("THE BODY", productData);

      response.status(201).json({ status: "Fish created!" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
