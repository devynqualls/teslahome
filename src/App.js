
import './App.css';
import Header from './Components/Header'
import Item from './Components/Item.js'
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Roadster from './assets/Roadster.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
        title="Model S"
        desc="Plaid"
        descLink=""
        backgroundImg={ModelS}
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        />
        <Item
        title="Model 3"
        desc=""
        descLink=""
        backgroundImg={Model3}
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        />
        <Item
        title="Model X"
        desc="Plaid"
        descLink=""
        backgroundImg={ModelX}
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        />
        <Item
        title="Model Y"
        desc=""
        descLink=""
        backgroundImg={ModelY}
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        />
        <Item
        title="Roadster"
        desc="Fastest Car in the world"
        descLink=""
        backgroundImg={Roadster}
        leftBtnTxt="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        />
        
        <Item
        title="Lowest Cost Solar Panels in America"
        desc="Money back guarantee"
        descLink=""
        backgroundImg={SolarPanels}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        />
        <Item 
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        descLink=""
        backgroundImg={SolarRoof}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        />
      
      </div>
    </div>

  );
}

export default App;
