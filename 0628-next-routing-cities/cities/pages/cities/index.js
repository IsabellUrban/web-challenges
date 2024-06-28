import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cities() {
  const router = useRouter();

  return (
    <>
      <h1>All cities:</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`./cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
