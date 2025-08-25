import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
// import Header from './components/Header';
import Header2 from './components/Header2';
import HeroSection from './components/HeroSection';
// import Hero from './components/Hero';
// import RandomHero from './components/RandomHero';
import AboutSection from './components/AboutSection';
import CategoriesSection from './components/CategoriesSection';
import PopularStoresSection from './components/PopularStoresSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import HowItWorksSection from './components/HowItWorksSection';
import VendorsSection from './components/VendorsSection';
// import ProductSection from './components/ProductSection';
import TestimonialsSection from './components/TestimonialsSection';
// import HowItWorksSection from './components/HowItWorksSection';
// import PromoSection from './components/PromoSection';
import MobileAppSection from './components/MobileAppSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
// import DeliveryAreasSection from './components/DeliveryAreasSection';
// import PartnerBenefitsSection from './components/PartnerBenefitsSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/GDROP-Version03">
      {/* <Header /> */}
      <Header2 />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {/* <Hero /> */}
              {/* < RandomHero/> */}
              <AboutSection />
              <CategoriesSection />
              <PopularStoresSection />
              <WhyChooseUsSection />
              <HowItWorksSection />
              {/* <ProductSection /> */}
              <TestimonialsSection />
              {/* <HowItWorksSection /> */}
              {/* <PromoSection /> */}
              <MobileAppSection />
              <FAQSection />
              {/* <DeliveryAreasSection /> */}
              {/* <PartnerBenefitsSection /> */}
              <CTASection />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutSection />
              <Footer />
            </>
          }
        />

        {/* Categories Page */}
        <Route
          path="/categories"
          element={
            <>
              <CategoriesSection />
              <Footer />
            </>
          }
        />

        {/* Vendors Page */}
        <Route path="/vendors" element={<><VendorsSection /><Footer /></>} />

        {/* FAQ Page */}
        <Route
          path="/faq"
          element={
            <>
              <FAQSection />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <CTASection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
