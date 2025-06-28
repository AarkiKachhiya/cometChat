import './App.css';
import CometChatPartnerPage from './components/heroPage/ComeChatPartnerPage.jsx';
import FAQSection from './components/FAQsection/FAQSection.jsx'
import Footer from './components/footer/Footer.jsx';
import GetStartedSection from './components/getStarted/GetStartedSection.jsx'
import PartnerBenefits from './components/partnerBenefits/PartnerBenefits.jsx';
import PartnerLogosPage from './components/partnerLogos/PartnerLogosPage.jsx'
import PartnerPage from './components/partnerPage/PartnerPage.jsx'
import PartnershipTypes from './components/partnershipTypes/PartnershipTypes.jsx';

function App() {
  return (
    <>
   <CometChatPartnerPage/>
   <PartnerLogosPage/>
   <PartnerPage/>
   <PartnerBenefits/>
   <PartnershipTypes/>
   <FAQSection/>
   <GetStartedSection/>
  <Footer/>
    </>
  );
}

export default App;
