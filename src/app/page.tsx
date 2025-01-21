
import NavBar from './components/NAVBAR';
import Hero from './components/Hero';
import Frame from './components/Frame';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Icon from './components/Iconraw';
import Differentiator from './components/Differentiators';
import AIServiceCards from './components/AIServiceCard';
import ProductPortfolios from './components/ProductPortfolio';
const Home: React.FC = () => {
  return (
    <div>

            <NavBar />
            <Hero/>
            <Icon/>
            <Frame/>
            <AIServiceCards/>
            <ProductPortfolios/>
            <Differentiator/>
            <Testimonial/>
            <Footer/>
            
         
    </div>
  );  
};

export default Home;
