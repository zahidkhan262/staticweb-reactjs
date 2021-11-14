import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Products from './components/Products';
import Bigcard from './components/Bigcard';
import Trendingcard from './components/Trendingcard';
import Searchbar from './components/Searchbar';
import Companylogo from './components/Companylogo';
import Footers from './components/Footers';



function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
      <Banner />
      <Services />
      <Products />
      <Bigcard />
      <Trendingcard />
      <Searchbar />
      <Companylogo />
      <Footers />

    </>
  );
}

export default App;
