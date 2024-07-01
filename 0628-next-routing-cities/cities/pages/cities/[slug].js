import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 35%;
  background-color: orange;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-weight: 300;

  &:hover {
    background-color: lightgray;
    color: black;
    transform: scale (font: 700);
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCity = cities.find((city) => city.slug === slug);

  if (!currentCity || !slug) {
    return <p>No city found!</p>;
  }

  const cityIndex = cities.indexOf(currentCity);
  const prevCity = cityIndex > 0 && cities[cityIndex - 1];
  const nextCity = cityIndex < cities.length - 1 && cities[cityIndex + 1];

  return (
    <>
      <h1>{currentCity.name}</h1>
      <Image
        src={currentCity.image}
        alt={`${currentCity.image} image`}
        width={350}
        height={530}
      />
      <ul>
        <li>Country: {currentCity.country}</li>
        <li>Population: {currentCity.population}</li>
      </ul>
      <h2>Description:</h2>
      <p>{currentCity.description}</p>

      <StyledBox>
        {prevCity && (
          <StyledLink href={`/cities/${prevCity.slug}`}>
            Go to previous city: {prevCity.name}
          </StyledLink>
        )}

        {nextCity && (
          <StyledLink href={`/cities/${nextCity.slug}`}>
            Go to next city: {nextCity.name}
          </StyledLink>
        )}

        <StyledLink href="/cities">Go back to all cities!</StyledLink>
      </StyledBox>
    </>
  );
}
