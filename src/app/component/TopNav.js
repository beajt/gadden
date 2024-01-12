import Image from 'next/image';
import Facebook from "../../SVG /facebook.svg";
import Twitter from "../../SVG /twitter-alt.svg";
import Youtube from "../../SVG /youtube.svg";
import Pinterest from "../../SVG /pinterest.svg";


function TopNav() {
  return (
    <>
      <p>Welcome to Gadden a modern Gardening & Landscape</p>
      <ul>
        <li>
          <Image src={Facebook} alt="Facebook icon" />
        </li>
        <li>
          <Image src={Twitter} alt="Twitter icon" />
        </li>
        <li>
          <Image src={Youtube} alt="Youtube icon" />
        </li>
        <li>
          <Image src={Pinterest} alt="Pinterest icon" />
        </li>
      </ul>
    </>
  );
}

export default TopNav;
