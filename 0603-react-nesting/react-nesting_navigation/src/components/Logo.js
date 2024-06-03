import logo from "../img/logo.jpg";
import { Image } from "./Image";
import { Link } from "./Link";

export function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo"></Image>
    </Link>
  );
}
