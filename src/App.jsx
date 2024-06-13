import React, { useState, useEffect } from "react";
import cities from "./cities";
import Card from "./components/Card/Card";
// import Style from "./Style.module.css";

const App = () => {
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setTours(cities);
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <>
      <h1>Tours of the World</h1>
      <section className="flex flex-col flex-wrap justify-center items-center">
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
