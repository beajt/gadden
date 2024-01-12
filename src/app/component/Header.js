import Link from "next/link";
import Image from "next/image";
import Masonry from "../../assets/images/gallery/masonry-2.jpg"

function Header() {
  return (
    <header>
      <h1>Green Environments Make You Happy and Provide Oxygen</h1>
      <h2>We Provide Beautiful Gardening & Landscaping</h2>
      <ul>
        <li><Link href="/">Explore More</Link></li>
        <li><Link href="/">How It Works</Link></li>
      </ul>
      <Image src={Masonry} alt="Gardener holding pot with plant"/>
    </header>
  );
}

export default Header;
