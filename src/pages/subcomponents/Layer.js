import ImageCard from "./ImageCard";

var link = "https://picsum.photos/400/300";

function createImageCard(imgInfo) {
  return (
    <ImageCard
      key={imgInfo.id} // Ensure each ImageCard has a unique key
      url={imgInfo.url}
      title={imgInfo.title}
      description={imgInfo.description}
    />
  );
}

function Layer(props) {
  return (
    <div className="mb-12 mt-2">
      <h2 className="text-left text-4xl font-bold text-subClr mb-5 pl-4">
        {props.heading}
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {props.data.map((imgInfo) => createImageCard(imgInfo))}

        {/* Example of hardcoded ImageCards */}
        <ImageCard url={link} />
        <ImageCard url={link} />
        <ImageCard url={link} />
      </div>
      <button className="mt-10 bg-white text-xl text-gray-600 px-6 py-3 rounded-full hover:bg-gray-200">
        Show More
      </button>
    </div>
  );
}

export default Layer;