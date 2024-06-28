import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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

      <div>
        {prevCity && (
          <Link href={`/cities/${prevCity.slug}`}>
            Go to previous city: {prevCity.name}
          </Link>
        )}
      </div>
      <div>
        {nextCity && (
          <Link href={`/cities/${nextCity.slug}`}>
            Go to next city: {nextCity.name}
          </Link>
        )}
      </div>
      <Link href="/cities">Go back to all cities!</Link>
    </>
  );
}
