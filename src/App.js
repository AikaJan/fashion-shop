import Arrivals from "./components/arrivals/Arrivals";
import Favorite from "./components/favorite/Favorite";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Payday from "./components/payday/Payday";
import Promo from "./components/promo/Promo";
import Apps from "./components/app/Apps";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favorite />
      <Apps />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
