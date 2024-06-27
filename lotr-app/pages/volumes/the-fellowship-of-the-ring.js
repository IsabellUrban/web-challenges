import { volumes } from "../lib/data";
import Image from "next/image";

export default function Volume1() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
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
        src="/images/the-fellowship-of-the-ring.png"
        alt="Picture of the The fellowship of the Ring"
        width={140}
        height={230}
      />
    </>
  );
}
