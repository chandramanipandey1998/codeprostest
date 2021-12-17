import { Features } from "./component/feature";
import { Meals } from "./component/meals";
import { Navbar } from "./component/navbar";
import bg from './component/images/background.jpg';

import './_app.scss';
import { WhyChooseUs } from "./component/whyChooseUs";
import { Banner } from "./component/banner";
import { Footer } from "./component/footer";
import {  Note } from "./component/constant/mock";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="background" style={{ height:'336px',backgroundImage: `url(${bg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover" }} >

     </div>
     <Meals/>
     <Features/>
     <WhyChooseUs data={Note}/>
     <Banner/>
     <Footer/>
    </div>
  );
}

export default App;
