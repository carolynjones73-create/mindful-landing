export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Mindful Money
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your main app will go here
        </p>
        <a 
          href="/landing" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Landing Page
        </a>
      </div>
    </div>
  );
}