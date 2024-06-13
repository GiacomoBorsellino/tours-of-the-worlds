import "./Card.css";

function Card({ title, img, description, isVisited }) {
  const visitedLabel = isVisited ? "✅ Visitata" : "❌ Non visitata";

  return (
    <>
      {/* <div classNameNameName="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-1/3 rounded-md shadow-md">
        <img
          alt="img"
          src={img}
          classNameNameName="h-40 w-4/5 m-2 object-cover rounded-t-md"
        />
        <div classNameNameName="p-2">
          <h2 classNameNameName="text-2xl">{title}</h2>
          <p>{description}</p>
          {isVisited && <span>✅ Visitata</span>}
          {!isVisited && <span>❌ Non visitata</span>}
        </div>
      </div> */}
      
      <section className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100">
  <img className="w-full h-60 object-cover" src={img} alt={title}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base h-48 overflow-y-scroll">
      {description}
    </p>
    {isVisited && <span>✅ Visited</span>}
    {!isVisited && <span>❌ Not visited</span>}
  </div>
  
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</section>

    </>
  );
}

export default Card;
