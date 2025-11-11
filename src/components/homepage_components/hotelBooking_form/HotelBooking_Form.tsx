import { useState, useRef, useEffect } from 'react';
import { propertyData } from '../../../data.ts';
import { useNavigate } from 'react-router-dom';

const HotelBooking_Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destination: '',
        checkIn: '2025-03-26',
        checkOut: '2025-03-27',
        guests: '2 adults, 1 room'
    });

    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);

    // Unique locations
    const locations = Array.from(
        new Set(propertyData.map(item => item.property_location))
    );

    const guestOptions = [
        "1 adult, 1 room",
        "2 adults, 1 room",
        "2 adults, 2 rooms",
        "3 adults, 1 room",
        "4 adults, 2 rooms"
    ];

    const filteredLocations = formData.destination
        ? locations.filter((loc) =>
            loc.toLowerCase().includes(formData.destination.toLowerCase())
        )
        : [];

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === "destination") {
            setShowSuggestions(true);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Booking Search:', formData);

        const property = propertyData.find(
            (item) => item.property_location.toLowerCase() === formData.destination.toLowerCase()
        );

        if (property) {
            navigate(`/property_LocationDetails/${property.id}`, { state: { property } });
        } else {
            alert('No matching location found.');
        }
    };

    const formatDate = (dateString: any) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                event.target instanceof Node &&
                !inputRef.current.contains(event.target)
            ) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-6"
            >
                {/* Destination */}
                <div className="relative" ref={inputRef}>
                    <label className="text-sm text-gray-500 mb-1 block">Where do you want to stay?</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="Enter destination or hotel name"
                        className="w-full text-gray-800 placeholder-gray-500 border-b focus:outline-none pb-1"
                    />
                    {showSuggestions && filteredLocations.length > 0 && (
                        <div className="absolute z-50 bg-white border rounded shadow-md mt-2 w-full overflow-y-auto max-h-48">
                            {filteredLocations.map((loc, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setFormData(prev => ({
                                            ...prev,
                                            destination: loc
                                        }));
                                        setShowSuggestions(false);
                                    }}
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Check-in */}
                <div className="relative">
                    <label className="text-sm text-gray-500 mb-1 block">Check-in</label>
                    <div className="flex items-center justify-between border-b pb-1">
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleInputChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-gray-800">{formatDate(formData.checkIn)}</span>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                </div>

                {/* Check-out */}
                <div className="relative">
                    <label className="text-sm text-gray-500 mb-1 block">Check-out</label>
                    <div className="flex items-center justify-between border-b pb-1">
                        <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleInputChange}
                            min={formData.checkIn}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="text-gray-800">{formatDate(formData.checkOut)}</span>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                </div>

                {/* Guests */}
                <div className="relative">
                    <label className="text-sm text-gray-500 mb-1 block">Guests and rooms</label>
                    <div className="flex items-center justify-between border-b pb-1">
                        <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        >
                            {guestOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <span className="text-gray-800">{formData.guests}</span>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-primary hover:bg-[#e38a1f] text-white font-semibold py-3 px-6 rounded-lg w-full flex items-center justify-center transition duration-300 shadow-md"
                    >
                        <span>Search Hotels</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HotelBooking_Form;
