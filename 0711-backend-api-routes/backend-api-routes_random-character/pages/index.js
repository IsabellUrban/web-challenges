import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data: character, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!character) {
    return;
  }

  const { firstName, lastName, age, gender } = character;

  return (
    <>
      <h1>Hello I am {character.firstName},</h1>;
      <li>First Name: {character.firstName}</li>
      <li>Last Name: {character.lastName}</li>
      <li>Age: {character.age}</li>
      <li>Gender: {character.gender}</li>
    </>
  );
}
