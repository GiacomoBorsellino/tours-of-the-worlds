import React, { useState, useEffect } from "react";
import cities from "./cities";
import Card from "./components/Card/Card";
// import Style from "./Style.module.css";

const App = () => {
  const [tours, setTours] = useState([]);
  const [searchedTour, setSearchedTour] = useState('');
  
  const getTours = async () => {
    setTours(cities);
  };

  useEffect(() => {
    getTours();
  }, []);

  const search = (event) => {
    setSearchedTour(event.target.value);
  }

  const filteredTours = tours.filter(tour => 
    tour.title.toLowerCase().includes(searchedTour.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center font-semibold text-4xl m-8 text-white">Tours of the World</h1>
      <div className="w-1/6 flex items-center border-b border-gray-500 py-2 mx-auto bg-white rounded-md m-4">
        <input 
          onChange={search} 
          className="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
          type="text" 
          placeholder="Search your tour" 
          aria-label="tour"
        />
      </div>

      <section className="flex flex-row flex-wrap justify-center items-center gap-6 w-4/5 mx-auto">
        {
          filteredTours.map(tour => (
            <Card
              key={tour.id}
              title={tour.title}
              img={tour.img}
              description={tour.info}
              isVisited={tour.isVisited}
            />
          ))
        }
      </section>
    </>
  );
};

export default App;
