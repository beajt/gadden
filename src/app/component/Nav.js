import Link from "next/link";
import Image from "next/image";
import Masonry from "../../assets/images/logo/logo-black.png";

function Nav() {
  return (
    <>
      <Image src={Masonry} alt="Gardener holding pot with plant" />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Service</Link>
        </li>
        <li>
          <Link href="/">Portfolio</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Pages</Link>
        </li>
        <li>
          <Link href="/">Get a Quote</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
