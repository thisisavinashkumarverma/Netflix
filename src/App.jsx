import { useState } from 'react'
import HeaderName from './components/header/headerName.jsx'
import MiddleBlock from './components/middleComponent/middleBlock.jsx';
import TrendingNew from './components/trendingNew/trendingNew.jsx';
import JoinReason from './components/joinReason/joinReason.jsx';
import FrequentlyAskedQuestion from './components/frequentlyAskedQuestion/frequentlyAskedQuestion.jsx';
import EmailSection from './components/emailSection/emailSection.jsx';
import Footer from './components/footer/footer.jsx';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderName/>
      <MiddleBlock/>
      <TrendingNew/>
      <JoinReason/>
      <FrequentlyAskedQuestion/>
      <EmailSection/>
      <Footer/>
      
    </>
  )
}

export default App
