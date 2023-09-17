import "./App.css";
import { Comments } from "./componentes/Comments";
import { Footer } from "./componentes/Footer/Footer";
import { GetEarly } from "./componentes/GetEarly/GetEarly";
import { Header } from "./componentes/Header/Header";
import { Nabvar } from "./componentes/Navbar/Nabvar";
import { Services } from "./componentes/Services/Index";
import { StayProductive } from "./componentes/StayProductive/StayProductive";

function App() {
  return (
    <>
      <Nabvar />
      <main>
        <Header />
        <Services />
        <StayProductive />
        <Comments />
      </main>
      <section>
        <GetEarly />
      </section>
      <Footer />
    </>
  );
}

export default App;
