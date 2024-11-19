// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";

// Define the Gallery component as a functional component
const Gallery = () => {
    return (
        // Return the JSX to render the Gallery component
        <div className="absolute left-10 top-20">
            {/* A heading to describe the Gallery component */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                The Gallery will have two subcomponents:
            </h1>

            {/* Render the FloraFaunaFungi subcomponent */}
            <FloraFaunaFungi />

            {/* Render the ImgUpload subcomponent */}
            <ImgUpload />
        </div>
    );
}

// Export the Gallery component so it can be used in other parts of the app
export default Gallery;