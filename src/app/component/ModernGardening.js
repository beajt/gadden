import Image from "next/image";
import Features10 from "../../assets/images/features/features-10.png";
import Arrow from "../../assets/images/shape/icon-1.png";

function ModernGardening() {
  return (
    <>
      <Image src={Features10} alt="Gardener holding pot with plant" />
      <h2>Modern Gardening</h2>
      <h1>We Offers Landscape & Tree Plantations</h1>
      <p>
        Quis autem vel eum iure reprehenderit qui in voluptate velit esse quam
        nihil molestiae consequatur vel illum qui dolorem
      </p>
      <Image src={Arrow} alt="Arrow pointing North East" />
      <h2>Quality Gardening</h2>
      <Image src={Arrow} alt="Arrow pointing North East" />
      <h2>Dedicated Team Members</h2>
      <Image src={Arrow} alt="Arrow pointing North East" />
      <h2>Guarantee Service & No Hidden Cost</h2>
    </>
  );
}

export default ModernGardening;
