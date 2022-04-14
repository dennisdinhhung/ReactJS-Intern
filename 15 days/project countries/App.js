import styled from 'styled-components';
import './App.css'
import Header from './Components/Header'
import MainContent from './Components/MainContent';
import { ThemeContext } from './Components/ThemeContext/Themecontext'
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import CountryDetail from './Components/MainContent/CountriesDetails';

function App() {
  const themeContext = useContext(ThemeContext)
  return (
    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <ContentContainer>
          <Routes>
            <Route exact path='/' element={<MainContent />}></Route>
            <Route path='/:regionName' element={<MainContent />}></Route>
            <Route path='/country/:countryName' element={<CountryDetail />}></Route>
            <Route path='/search/:name' element={<MainContent />}></Route>
          </Routes>
        </ContentContainer>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
    height:100vh;
    width:100%;
    overflow:hidden;
`
const ContentContainer = styled.div`
    max-width:1100px;
    display:block;
    width:100%;
    margin: 0 auto;
`

