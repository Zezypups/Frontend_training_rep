import MainWrapper from "./MainWrapper";
import Personal from "./Personal";
import './App.css';
import SearchBar from "./SearchBar";
import Hello from "./Hello"
import SubmitEmail from "./SubmitEmail"


function App() {

  return (
    <>
      <MainWrapper>
      <SubmitEmail />
      <SearchBar />
      <Personal />
      <Hello />
      </MainWrapper>
    </>
      
    
    
  );
}

export default App;
