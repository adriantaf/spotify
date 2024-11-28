import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SearchPage from "./search/SearchPage.jsx";
import { TokenProvider } from "./common/context/TokenProvider.jsx";
import Home from "./home/Home.jsx";
import { SearchProvider } from "./search/SearchProvider.jsx";
import Player from "./player/Player.jsx";
import Header from "./common/components/Header";
import Aside from "./aside/Aside.jsx";

function App() {
  return (
    <Router>
      <TokenProvider>
        <SearchProvider>
          <div id="app">
            <Header />
            <Aside />
            <main className='app-main'>
              <div className='app-main__container'>
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="/search" element={ <SearchPage /> } />
                </Routes>
              </div>
            </main>
            <footer className='app-footer'>
              <Player />
            </footer>
          </div>
        </SearchProvider>
      </TokenProvider>
    </Router>
  );
}

export default App;