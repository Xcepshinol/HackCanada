import React from 'react';

const ListingFilters: React.FC = () => {
    return (
        <div className="flex flex-col space-y-4 p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">Filter Listings</h2>
            <div className="flex flex-col">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <select id="category" className="border rounded p-2">
                    <option value="">All Categories</option>
                    <option value="help">Help</option>
                    <option value="rental">Rental</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="location" className="text-sm font-medium">Location</label>
                <input type="text" id="location" className="border rounded p-2" placeholder="Enter location" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="date" className="text-sm font-medium">Date</label>
                <input type="date" id="date" className="border rounded p-2" />
            </div>
            <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">Apply Filters</button>
        </div>
    );
};

export default ListingFilters;