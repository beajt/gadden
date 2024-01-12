import TopNav from "./component/TopNav";
import Nav from "./component/Nav";
import Header from "./component/Header";
import BodyTwo from "./component/BodyTwo"
import AboutGardening from "./component/AboutGardening";
import Gallery from "./component/Gallery";
import ModernGardening from "./component/ModernGardening";
import Footer from "./component/Footer";
import CopyRightFooter from "./component/CopyRightFooter";

export default function Page() {
  return (
    <main>
      <TopNav />
      <Nav />
      <Header />
      <BodyTwo />
      <AboutGardening />
      <Gallery />
      <ModernGardening />
      <Footer />
      <CopyRightFooter />
    </main>
  );
}
