import './App.css';
import Menu  from './components/menu';
import Content from './components/content';
import Footer from './components/footer';

function App() { 
  return (
    <div className="App">
      <div className='Header'>
        <Menu />
      </div>
      <div className='Content'>
        <Content />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
