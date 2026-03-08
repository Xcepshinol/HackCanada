import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission logic here
        console.log({ name, email, date, time, guests });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <Input
                type="number"
                placeholder="Number of Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                required
            />
            <Button type="submit">Book Now</Button>
        </form>
    );
};

export default BookingForm;