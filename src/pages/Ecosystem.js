// Import the Subcomponent component from the specified folder
import Subcomponent from "./subcomponents/SubExample";

// Define the Ecosystem component as a functional component
const Ecosystem = () => {
    return (
       <div className="bg-gray-100 p-6 border-4 border-green-700 m-4 rounded-lg">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Woodland Conservation Site</h1>
        <h2 className="text-2xl italic text-green-700">EcoSystem</h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <p className="text-justify text-gray-700 mb-6 px-4">
            Woodlands play a crucial role in maintaining the balance of our
            ecosystem. They provide habitat for countless species, purify the
            air, and mitigate the effects of climate change. However, human
            activities like deforestation and urbanization threaten their
            existence. By understanding the value of conservation, we can take
            steps to protect these vital landscapes. Preservation efforts not
            only ensure the survival of biodiversity but also safeguard the
            resources that future generations depend on. From education to
            reforestation, there are numerous ways to contribute to the
            well-being of woodland ecosystems.
          </p>
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x300" // Replace with actual image URL
              alt="Woodland"
              className="rounded-lg"
            />
            <button className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
              Click on image for more details
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="relative mb-6">
            <img
              src="https://via.placeholder.com/400x300" // Replace with actual image URL
              alt="EcoSystem"
              className="rounded-lg"
            />
            <button className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
              Click on image for more details
            </button>
          </div>
          <p className="text-justify text-gray-700 px-4">
            Ecosystems are intricate networks of living organisms and their
            environments, working together to maintain balance. Woodland
            ecosystems, in particular, are among the most productive on Earth.
            Trees store carbon, control water cycles, and offer sanctuary to
            numerous creatures. Yet, they are fragile and susceptible to
            external pressures such as pollution, invasive species, and
            over-exploitation. Awareness and conservation are key to ensuring
            that these ecosystems continue to thrive. By supporting sustainable
            practices, we can minimize our impact and foster coexistence
            between human development and nature.
          </p>
        </div>
      </div>
        </div>
    );
}

// Export the Ecosystem component so it can be used in other parts of the app
export default Ecosystem;
