import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data || !id) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    console.log("Updated Product", productData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
      return;
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <div>
        <button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          {" "}
          <span role="img" aria-label="A pencil">
            📝
          </span>
          Edit Product
        </button>
        <button onClick={handleDeleteProduct} disabled={isEditMode}>
          <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span>{" "}
          Delete Product
        </button>
        {isEditMode && (
          <ProductForm
            onSubmit={handleEditProduct}
            value={data}
            isEditMode={true}
            valueName={data.name}
            valueDescription={data.description}
            valuePrice={data.price}
            valueCurrency={data.currency}
          ></ProductForm>
        )}{" "}
        <br />
        <StyledLink href="/">Back to all</StyledLink>
      </div>
    </ProductCard>
  );
}
