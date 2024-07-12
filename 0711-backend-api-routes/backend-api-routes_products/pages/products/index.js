import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";

const StyledListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  width: 190px;
  padding: 20px;
  gap: 10px;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

export default function HomePage() {
  const { data: products, isLoading, error } = useSWR("api/products");
  if (isLoading) return <p>... loading!</p>;
  if (error) return <p>failed to load </p>;

  console.log("products", products);

  return (
    <>
      <h1> All Products: </h1>
      <ul>
        {products.map((product) => {
          return (
            <StyledListWrapper key={product.id}>
              <StyledListItem> Name : {product.name}</StyledListItem>
              <StyledListItem>
                Description: {product.description}
              </StyledListItem>
              <StyledListItem>Price: {product.price}</StyledListItem>
              <StyledListItem>Currency: {product.currency}</StyledListItem>
              <StyledListItem>Category: {product.category}</StyledListItem>
              <Link href={`/products/${product.id}`}>Go to {product.name}</Link>
            </StyledListWrapper>
          );
        })}
      </ul>
    </>
  );
}
