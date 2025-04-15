
import Hero from './component/Hero';

const App = () => {

  const itemObj={
    name:"tanvir",
    age:"23",
    city:"Dhaka"}

    const tanvir = h =>{ return(
      <div>
        <h1>hello react {h}</h1>
      </div>
    )}

    const childBtn = () =>{

      alert('hello programmer!!');

    }
  

  return (
    <div>

      <Hero title="react js for design" des="leran react and make web design beautiful!!" item={itemObj} tanvir={tanvir} 
      childBtn={childBtn}
      />
    </div>
  );
};

export default App;