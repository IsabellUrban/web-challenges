import { introduction } from "../lib/data";
import Link from "next/link";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";

export default function VolumesPage() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // volumes[0]

  function handleButton() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div>
      <h1>Lord of the Rings Volumes</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleButton}>
        Go to random volume!
      </button>
    </div>
  );
}
