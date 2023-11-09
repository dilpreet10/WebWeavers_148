import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";

import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import MainContainer from "./components/Containers/MainContainer";

import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <PageContainer optionClass={"pageContainer"}>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          {/*Auth */}
          <Route path='/auth' element={<Auth />} />
          {/* Protected routes */}
          <Route>
            {/* home */}
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={
              <MainContainer>
                <span style={{ fontSize: '1.2rem' }}>404 page not found</span>
              </MainContainer>
            } />
          </Route>
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
