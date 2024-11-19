// Import the Subcomponent component from the specified folder
import Subcomponent from "./subcomponents/SubExample";

// Define the Ecosystem component as a functional component
const Ecosystem = () => {
    return (
        // Return the JSX for rendering the Ecosystem component
        <div className="absolute left-10 top-20">
            {/* A large heading with specific styles */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                This is the Ecosystem component.
            </h1>

            {/* Another heading with the same styles, but different content */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                Himshree will work on this.
            </h1>

            {/* Render the imported Subcomponent */}
            <Subcomponent />
        </div>
    );
}

// Export the Ecosystem component so it can be used in other parts of the app
export default Ecosystem;