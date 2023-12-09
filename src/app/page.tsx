import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-170 mx-52 flex flex-col gap-16">
        <Body />
        <Catalog />
        <About />
        <Footer />
      </main>
    </div>
  );
}
