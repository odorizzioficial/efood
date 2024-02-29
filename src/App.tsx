import { BrowserRouter } from 'react-router-dom'
import { store } from './Store'
import GlobalStyle from './styles'
import Rotas from './router'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { Provider } from 'react-redux/es/exports'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <Rotas />
          <Footer></Footer>
          {/* <Cart></Cart> */}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
