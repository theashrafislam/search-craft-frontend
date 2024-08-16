import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const categories = ['Electronics', 'Smartphones', 'Mobile Phones', 'Laptops'];
const brands = ['Tenda', 'Dell', 'Realme', 'Apple'];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        brand: '',
        minPrice: '',
        maxPrice: ''
    });
    const [sort, setSort] = useState('price'); // Default sort by price
    const [order, setOrder] = useState('asc'); // Default order ascending
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); // To handle total pages
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/information', {
                    params: {
                        ...filters,
                        sort,
                        order,
                        page,
                        limit: itemsPerPage
                    }
                });
                setProducts(response.data.data);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [filters, sort, order, page]);

    const handleSearch = () => {
        setPage(1); // Reset to page 1 whenever a new search is performed
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/information', {
                    params: {
                        ...filters,
                        sort,
                        order,
                        page: 1,
                        limit: itemsPerPage
                    }
                });
                setProducts(response.data.data);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSortChange = (e) => {
        const [sortBy, orderBy] = e.target.value.split('-');
        setSort(sortBy);
        setOrder(orderBy);
        setPage(1); // Reset to page 1 whenever the sort option is changed
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Search and Filters Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 md:gap-6 w-full md:w-auto">
                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="w-full md:w-auto p-2 border border-gray-400 rounded-md bg-white"
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
                        className="w-full md:w-auto p-2 border border-gray-400 rounded-md bg-white"
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
                        className="w-full md:w-auto p-2 border border-gray-400 rounded-md bg-white"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        className="w-full md:w-auto p-2 border border-gray-400 rounded-md bg-white"
                    />
                    <select
                        onChange={handleSortChange}
                        className="w-full md:w-auto p-2 border border-gray-400 rounded-md bg-white"
                    >
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="date-desc">Newest First</option>
                    </select>
                </div>
                {/* Search Box */}
                <div className="flex items-center border border-gray-400 rounded-md bg-white p-2 w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={filters.search}
                        name="search"
                        onChange={handleFilterChange}
                        className="flex-1 p-2 border-0 bg-transparent outline-none"
                    />
                    <button onClick={handleSearch} className="text-blue-500">
                        <FaSearch />
                    </button>
                </div>
            </div>
            {/* Products List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product._id} className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <p className="text-purple-600 font-bold mb-2">${product.price}</p>
                        <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
                        <p className="text-gray-600 mb-2">Category: {product.category}</p>
                        <p className="text-gray-600 mb-2">Ratings: {product.rating}</p>
                        <p className="text-gray-500">Created At: {new Date(product.createdAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2"
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-gray-700">{`Page ${page} of ${totalPages}`}</span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md ml-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;