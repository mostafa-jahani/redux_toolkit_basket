import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
          <Provider store={store}>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>
          </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
