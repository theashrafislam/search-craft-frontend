import React from 'react';

const Features = () => {
  const features = [
    "Product Pagination for efficient browsing.",
    "Search functionality to find products quickly.",
    "Filter by category, brand, and price range.",
    "Sort products by price and date added.",
    "User authentication with Google and Email/Password using Firebase.",
  ];

  return (
    <section className="mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;