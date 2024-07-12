import { getAllProducts } from "@/services/productServices.js";

export default function handler(request, response) {
  const products = getAllProducts();

  if (request.method === "GET") {
    response.status(200).json(products);
    console.log("allProducts", products);
  } else {
    response.status(404).json({ message: "METHOD NOT ALLOWED" });
  }
}
