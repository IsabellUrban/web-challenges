import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
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

export default function SingleProduct() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: singleProduct,
    isLoading,
    error,
  } = useSWR(`/api/products/${id}`);
  if (isLoading) return <p>... loading!</p>;
  if (error) return <p>failed to load </p>;

  return (
    <>
      <StyledListWrapper key={singleProduct.id}>
        <StyledListItem> Name : {singleProduct.name}</StyledListItem>
        <StyledListItem>
          Description: {singleProduct.description}
        </StyledListItem>
        <StyledListItem>Price: {singleProduct.price}</StyledListItem>
        <StyledListItem>Currency: {singleProduct.currency}</StyledListItem>
        <StyledListItem>Category: {singleProduct.category}</StyledListItem>
        <Link href={`/products`}>Go to back to all fishes</Link>
      </StyledListWrapper>
    </>
  );
}
