const FeaturesSection = () => {
    return (
  <section id="features" className="p-10 bg-blue-700">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-400 shadow-md rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your workouts and improvements.</p>
            </div>
            <div className="bg-blue-400  shadow-md rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">Nutrition Logs</h3>
              <p className="text-gray-600">Keep track of what you eat and stay on target.</p>
            </div>
            <div className="bg-blue-400  shadow-md rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">Goals & Reminders</h3>
              <p className="text-gray-600">Set fitness goals and get daily reminders.</p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default FeaturesSection;
