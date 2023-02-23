import './App.css';
import Comp from './components/Comp';

function App() {
  return (
    <div className="App">
      <Comp colorCode="#FF6663" colorName="PINK" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#333333" colorName="GRAY" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#000000" colorName="BLACK" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#38BB14" colorName="GREEN" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#C90B0B" colorName="RED" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#FF8000" colorName="ORANGE" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#FFF500" colorName="YELLOW" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#CCCCCC" colorName="LIGHTGRAY" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#7E41A2" colorName="PURPLE" boxShadow="0 0 10px gray"/>
      <Comp colorCode="#C14911" colorName="BROWN" boxShadow="0 0 10px gray"/>
    </div>
  );
}

export default App;
