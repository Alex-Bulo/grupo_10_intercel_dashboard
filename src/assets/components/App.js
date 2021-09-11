
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import '../css/App.css';

function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
