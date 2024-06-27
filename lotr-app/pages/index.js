import { introduction } from "./lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <ul>
        <li>
          <Link href="/volumes">Click here to all Volumes!</Link>
        </li>
      </ul>
    </div>
  );
}
