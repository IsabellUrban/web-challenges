import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Fish-Shop</h1>
      <Link href="/products">
        {" "}
        <strong>Go to all Fishes </strong>{" "}
      </Link>
    </div>
  );
}
