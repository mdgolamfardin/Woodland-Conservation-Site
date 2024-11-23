function ImageCard(props) {
  return (
    <div className="flex-row h-full space-y-4 bg-white p-2 pb-4 rounded-xl shadow">
      <img className="w-full rounded-md" src={props.url} alt="img" />
      <h3 className="text-left text-2xl mx-3">{props.title}</h3>

      <p className="text-justify mx-3">{props.description}</p>
      <audio className="px-2 w-full" controls></audio>
    </div>
  );
}
export default ImageCard;
