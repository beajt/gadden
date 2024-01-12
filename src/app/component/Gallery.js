import Image from "next/image";
import Gallery1 from "../../assets/images/gallery/g-2.jpg";
import Gallery2 from "../../assets/images/gallery/project-2.jpg";
import Gallery3 from "../../assets/images/gallery/project-3.jpg";
import Gallery4 from "../../assets/images/gallery/project-4.jpg";

function Gallery() {
  return (
    <>
      <Image src={Gallery1} alt="gardener holding pot" />
      <Image src={Gallery2} alt="gardener holding watering can" />
      <Image src={Gallery3} alt="hedge trimmer" />
      <Image src={Gallery4} alt="two gardeners embracing" />
    </>
  );
}

export default Gallery;
