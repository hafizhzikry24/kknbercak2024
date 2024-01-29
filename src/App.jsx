import Profile from './components/profile' ;
import Header from './components/header' ;
import Structure from './components/structurte';
import Geographic from './components/geographic';
import Footer from './components/footer';
import Landing from './components/landing';
import Goals from './components/goals';



function App() {
  return (


    
    <div className="min-h-screen">
      <div>
        <Header />
        <Landing/>
        <Profile/>
        <Goals/>
        <Structure/>
        <Geographic/>
        <Footer/>
       
      </div>


    </div>
  );
}
 

export default App;
