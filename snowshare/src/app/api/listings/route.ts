import { NextResponse } from 'next/server';

export async function GET() {
    // Fetch listings from the database or an external API
    const listings = await fetchListings();

    return NextResponse.json(listings);
}

async function fetchListings() {
    // Placeholder for fetching listings logic
    return [
        { id: 1, title: 'Help with moving', description: 'Need assistance moving furniture.', location: 'New York' },
        { id: 2, title: 'Grocery shopping', description: 'Looking for someone to do grocery shopping.', location: 'Los Angeles' },
    ];
}