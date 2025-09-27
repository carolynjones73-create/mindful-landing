export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mindful Money App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is where your main journaling app will live
        </p>
        <a 
          href="/landing" 
          className="bg-gradient-to-r from-soft-clay to-muted-taupe text-white px-6 py-3 rounded-lg hover:from-muted-taupe hover:to-soft-clay transition-all duration-200"
        >
          ← Back to Landing Page
        </a>
      </div>
    </div>
  );
}