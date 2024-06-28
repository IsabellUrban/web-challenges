import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Cities of the World</h1>
      <Link href="./cities">
        Go to cities overview! <span>🌆</span>
      </Link>
    </div>
  );
}
