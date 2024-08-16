import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

// Mock categories and brands for dropdown
const categories = ['Category 1', 'Category 2', 'Category 3'];
const brands = ['Brand 1', 'Brand 2', 'Brand 3'];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ search: '', category: '', brand: '', minPrice: '', maxPrice: '' });
    const [sort, setSort] = useState('price-asc');
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        // Fetch products from backend
        axios.get('http://localhost:5000/api/products', { params: { ...filters, sort, page, limit: itemsPerPage } })
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, [filters, sort, page]);

    const handleSearch = (e) => {
        setFilters({ ...filters, search: e.target.value });
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1) {
            setPage(newPage);
        }
    };

    return (
        <div className="p-4">
            {/* Search and Filters Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                {/* Search Box */}
                <div className="flex items-center mb-4 md:mb-0">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={filters.search}
                        onChange={handleSearch}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
                {/* Filters */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="mb-2 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <select
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        className="mb-2 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Brands</option>
                        {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        className="mb-2 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        className="mb-2 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
                    />
                    <select
                        value={sort}
                        onChange={handleSortChange}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="date-desc">Newest First</option>
                    </select>
                </div>
            </div>
            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-purple-600 font-bold mb-2">${product.price}</p>
                        <p className="text-gray-500 text-sm mb-2">Category: {product.category}</p>
                        <p className="text-gray-500 text-sm mb-2">Brand: {product.brand}</p>
                        <p className="text-gray-500 text-sm mb-2">Ratings: {product.ratings} ⭐</p>
                        <p className="text-gray-500 text-sm mb-2">Added on: {new Date(product.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {page}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={products.length < itemsPerPage}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;