import HeroSection from "./Learning AI/HeroSection";
import Navbar from "./Learning AI/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <HeroSection />
      {/* Your app content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to Your App
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Your navbar is working perfectly with dark mode support!
          </p>
        </div>
      </main>
    </div>
  );
}
