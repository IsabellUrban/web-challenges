import { volumes } from "../lib/data";
import { useRouter } from "next/router";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  console.log(volume);
  return (
    <>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            Ordinal Number: {book.ordinal} <br />
            Book Title: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt="Picture of the book"
        width={140}
        height={230}
      />
    </>
  );
}
