function ImageCard(props) {
  return (
    <div className="flex-row h-full space-y-4 bg-white p-4 rounded-xl shadow">
      <img className="w-full rounded-md" src={props.url} alt="img" />
      <h3 className="text-left text-2xl px-1">{props.title}</h3>

      <p className="text-justify px-1">{props.description}</p>
      <audio className="w-full" controls></audio>
    </div>
  );
}
export default ImageCard;
