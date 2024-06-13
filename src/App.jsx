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

  function search() {

  }

  return (
    <>
      <h1 className="text-center font-semibold text-4xl m-8 text-white">Tours of the World</h1>
      {/* <form class="w-full max-w-sm mx-auto bg-white rounded-md">
  <div class="flex items-center border-b border-gray-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
    <button onClick={search} className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Search
    </button>
    <button onClick={reset} className="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-gray-800 text-sm py-1 px-2 rounded" type="button">
      Reset
    </button>
  </div>
</form> */}

      <section className="flex flex-row flex-wrap justify-center items-center gap-6 w-4/5 mx-auto">
        {
          tours.map((tour) => (
            <Card
              key={tour.id}
              title={tour.title}
              img={tour.img}
              description={tour.info}
              isVisited={tour.isVisited}></Card>
          ))
          // const { id, name, image, info, price } = tour;
        }
      </section>
    </>
  );
};

export default App;
