import ImageCard from "./ImageCard";
var link = "https://picsum.photos/400/350"
function Layer() {
  return (
    <div className="mb-12">
      <h2 className="text-left text-4xl font-bold text-subClr mb-5 pl-4">Heading</h2>
      <div className="flex justify-center space-x-10">
        <ImageCard
            url={link}
        />
        <ImageCard
            url={link}
        />
        <ImageCard
            url={link}
        />
      </div>
      <button class="mt-10 bg-white text-xl text-gray-600 px-6 py-3 rounded-full hover:bg-gray-200 ">
            Show More
</button>
    </div>
  );
}
export default Layer;
