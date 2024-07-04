import { markAssetError } from "next/dist/client/route-loader";
import { DescriptionList, StyledCard } from "./Card.styled";

export default function Card({
  id,
  name,
  height,
  eyeColor,
  birthYear,
  hairColor,
  mass,
}) {
  return (
    <StyledCard>
      <h1>Name: {name}</h1>
      <DescriptionList>
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Height:</dt>
        <dd>{height}</dd>
        <dt>Mass:</dt>
        <dd>{mass}</dd>
        <dt>Eye Color:</dt>
        <dd>{eyeColor}</dd>
        <dt>Hair Color:</dt>
        <dd>{hairColor}</dd>
        <dt>Birth Year:</dt>
        <dd>{birthYear}</dd>
      </DescriptionList>
    </StyledCard>
  );
}
