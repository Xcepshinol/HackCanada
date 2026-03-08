import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ListingForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, description, location, contactInfo });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Contact Information"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                required
            />
            <Button type="submit">Submit Request</Button>
        </form>
    );
};

export default ListingForm;