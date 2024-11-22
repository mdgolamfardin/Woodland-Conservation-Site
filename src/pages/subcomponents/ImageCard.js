function ImageCard(props) {
  return (
      <div className="flex-row space-y-4 bg-white p-5 rounded-xl">
      <img className="rounded-md" src={props.url} alt="img" />
      <h3 className="text-left text-2xl ">title</h3>
      <p className="text-justify">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Dis interdum diam
        finibus elit quam class per cras? Massa luctus ultrices quam porta
        turpis proin. Tristique euismod nec ornare blandit posuere non. Vehicula
     
      </p>
      <audio className="w-full" controls></audio>
    </div>
  );
}
export default ImageCard;
