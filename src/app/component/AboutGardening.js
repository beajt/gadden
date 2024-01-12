import Image from "next/image";
import About6 from "../../assets/images/about/about-6.png";
import AngleDoubleRight from "../../SVG /angle-double-right.svg";

function AboutGardening() {
  return (
    <>
      <Image src={About6} alt="4 photo collage with gardener" />
      <h2>About Gardening</h2>
      <h1>Perfect Gardening The Result Of Nature</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus voluptatem accusantiue
        doloremque laudantium totam rem aperiam, eaque ipsa quae abilloy
        inventore
      </p>
      <div>
        <Image src={AngleDoubleRight} alt="angle double arrow" />
        <h3>Gardens</h3>
        <p>Ut enim minima veniam nostrum exercitationem corporis</p>
      </div>
      <div>
        <Image src={AngleDoubleRight} alt="angle double arrow" />
        <h3>Urbans</h3>
        <p>Ut enim minima veniam nostrum exercitationem corporis</p>
      </div>
      <div>
        <Image src={AngleDoubleRight} alt="angle double arrow" />
        <h3>Maintenance</h3>
        <p>Ut enim minima veniam nostrum exercitationem corporis</p>
      </div>
      <div>
        <Image src={AngleDoubleRight} alt="angle double arrow" />
        <h3>Event & Programs</h3>
        <p>Ut enim minima veniam nostrum exercitationem corporis</p>
      </div>
    </>
  );
}

export default AboutGardening;
