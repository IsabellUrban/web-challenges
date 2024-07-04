import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { Spinner } from "@nextui-org/spinner";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: character,
    isLoading,
    error,
  } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  console.log("character", character);

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <h1>
        Sorry, failed to load. <span>🧌</span>
      </h1>
    );

  const { name, height, mass, hair_color, eye_color, birth_year } = character;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        mass={mass}
        eyeColor={eye_color}
        hairColor={hair_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
