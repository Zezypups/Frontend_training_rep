import MainWrapper from "./MainWrapper";
import Personal from "./Personal";
import './App.css';
import SearchBar from "./SearchBar";
import Hello from "./Hello"
import SubmitEmail from "./SubmitEmail"
import Header from "./Header";


function App() {

  return (
    <>
      <Header />  
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
