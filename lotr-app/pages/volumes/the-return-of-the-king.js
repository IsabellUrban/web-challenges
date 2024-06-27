import { volumes } from "../lib/data";
import Image from "next/image";

export default function Volume3() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
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
        src="/images/the-return-of-the-king.png"
        alt="Picture of the return of the king"
        width={140}
        height={230}
      />
    </>
  );
}
