import { Header } from "./components/Header";

import { ButtonHome } from "./components/ButtonHome";
import Routes from "./pages/Routes";
function App() {
  const { btnHome, btn2, btn3, btnCarrinho } = ButtonHome();

  //const { carrinho } = useCarrinhoContext();
  return (
    <>
      <Header
        titulo="CardStore"
        btnHome={btnHome}
        btn2={btn2}
        btn3={btn3}
        btnCarrinho={btnCarrinho}
      />
      <Routes />
    </>
  );
}

export default App;
