import Image from "next/image";
import Arrow from "../../assets/images/shape/icon-1.png";

function BodyTwo() {
  return (
    <>
      <p>Welcome to Gadden a modern Gardening & Landscape</p>
      <ul>
        <li>
          {"Gardening "}
          <Image src={Arrow} alt="Arrow pointing North East" />
        </li>
        <li>
          {"Landscape "}
          <Image src={Arrow} alt="Arrow pointing North East" />
        </li>
        <li>
          {"Garden Overhauls "}
          <Image src={Arrow} alt="Arrow pointing North East" />
        </li>
        <li>
          {"Nature Green "}
          <Image src={Arrow} alt="Arrow pointing North East" />
        </li>
      </ul>
    </>
  );
}

export default BodyTwo;
