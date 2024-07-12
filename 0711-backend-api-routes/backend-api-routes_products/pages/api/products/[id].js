import { getProductById } from "@/services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);

  if (request.method === "GET") {
    response.status(200).json(product);
  } else {
    response.status(404).json({ message: "METHOD NOT ALLOWED" });
  }
}
