import {ListaProdutos} from "./components/ListaProdutos"
import {Header} from "./components/Header"
function App() {


  //return <div><Header/></div>
  return <div style={{backgroundImage:`url("src/assets/bg.jpg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}><Header/><ListaProdutos/></div>
}

export default App
