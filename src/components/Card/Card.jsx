import "./Card.css";

function Card({ title, img, description, isVisited }) {
  const visitedLabel = isVisited ? "✅ Visitata" : "❌ Non visitata";

  return (
    <>
      <div className="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-1/3 rounded-md shadow-md">
        <img
          alt="img"
          src={img}
          className="h-40 w-4/5 m-2 object-cover rounded-t-md"
        />
        <div className="p-2">
          <h2 className="text-2xl">{title}</h2>
          <p>{description}</p>
          {isVisited && <span>✅ Visitata</span>}
          {!isVisited && <span>❌ Non visitata</span>}
        </div>
      </div>
    </>
  );
}

export default Card;
