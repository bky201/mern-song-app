import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stat from "./pages/Stat";
import Navbar from "./components/nav/Navbar";
import Upload from "./pages/Upload";
import SongView from "./pages/SongView";
import Footer from "./components/nav/Footer";
import SongEdit from "./pages/SongEdit";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stat />} />
        <Route path="/song/addmusic" element={<Upload />} />
        <Route path="/song/:slug" element={<SongView />} />
        <Route path="/song/:slug/edit" element={<SongEdit />} />
      </Routes>
      <Footer />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
