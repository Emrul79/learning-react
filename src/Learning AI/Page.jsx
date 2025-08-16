import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Demo content to show navbar in context */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Responsive Navbar Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Try resizing your browser window and toggling dark mode!
          </p>

          {/* Demo sections for anchor links */}
          {["home", "about", "services", "portfolio", "contact"].map(
            (section) => (
              <section
                key={section}
                id={section}
                className="py-20 border-b border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {section} Section
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  This is the {section} section content. The navbar will
                  smoothly scroll to this section when clicked.
                </p>
              </section>
            )
          )}
        </div>
      </main>
    </div>
  );
}
