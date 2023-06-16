
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import Coffeecard from './components/Coffeecard';
import { useState } from 'react';

function App() {
    const loadedCoffees = useLoaderData();

    const [coffees , setCoffees] = useState(loadedCoffees);
    console.log(coffees);

  return (
    <>
      <section className='section-padding'>
           <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading mb-[40px]">
                            <h1 className='font-bold text-[42px] text-center'>All Coffee List</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        coffees.map(coffee => <Coffeecard 
                        key={coffee._id} 
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        
                        >
                            
                        </Coffeecard>)
                    }
                </div>
           </div>
      </section>
    </>
  )
}

export default App
