import { useLocation } from "react-router-dom"
import Heading from "../../commonComponents/heading/Heading"
import '../../../App.css'
import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";
import Subheading from "../../commonComponents/subheading/Subheading";
import Homepage_form from "../hotelBooking_form/HotelBooking_Form";

const Homepage_LocationDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const locationViseData = location.state?.property?.properties;

    console.log(locationViseData, "loactionViseData")

    const renderIcon = (iconName: any) => {
        switch (iconName) {
            case 'bed':
                return <FaBed />;
            case 'shower':
                return <FaShower />;
            case 'pool':
                return <FaSwimmingPool />;
            case 'car':
                return <FaCar />;
            default:
                return null;
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (property_name: string) => {
        const slug = property_name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/property_details/${slug}`);
        console.log(slug, "Slugified property name");
    };


    // on the basis upon id 
    // const handleNavigate = (id: any) => {
    //     navigate(`/property_details/${id}`);
    // };

    const handleModal = (property: any) => () => {
        console.log(property), 'abc';

        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    // Add a check to handle cases where property data might not exist
    if (!Array.isArray(locationViseData) || locationViseData.length === 0) {
        return (
            <section className="select-none h-screen bg-gray-200 justify-center items-center flex flex-col gap-10 py-4 pt-14">
                <div>
                    <Subheading />
                </div>
                <div>
                    <Homepage_form />
                </div>
                <div className="mt-10 text-3xl font-bold text-center">
                    Exciting Properties Arriving Soon!
                </div>
            </section>
        );
    }

    return (
        <section>
            <section className="select-none h-fit bg-gray-200 flex flex-col justify-center items-center  gap-4 py-4 pt-14 md:pt-2">
                <div className="">
                    <Subheading />
                </div>
                <div>
                    <Homepage_form />
                </div>
            </section>
            <Heading title="Explore Our Hotels" />
            <section className="relative flex justify-center items-center px-4 lg:px-14 py-8 pb-10 md:pb-20">
                <div className=" flex flex-col gap-5  md:flex-row items-start">
                    {/* filters Left side  */}
                    <div className="flex-[1] md:sticky md:top-14 bg-white shadow-md rounded-md p-4 h-fit">
                        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Filter by:</h2>

                        {/* Price per night */}
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Price per night</h3>
                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Under ₹1,500
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    ₹1,500 – ₹2,000
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    ₹2,000 – ₹2,500
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    ₹2,500 – ₹3,000
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    ₹3,000 & above
                                </label>
                            </div>
                        </div>

                        {/* Other filters */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Other filters</h3>
                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Couple friendly
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Triple occupancy
                                </label>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="bg-blue-700 text-white text-center p-4 py-10 rounded-lg my-7">
                            <div className="font-semibold text-sm">Excellent sleep & shower</div>
                            <div className="text-xs mb-3"></div>
                            <div className="grid grid-cols-4 gap-4 text-xs">
                                <div className="flex flex-col items-center">
                                    <span>📶</span>
                                    Free WiFi
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>📺</span>
                                    TV
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>❄️</span>
                                    AC
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>🛡️</span>
                                    24×7 Security
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>🧼</span>
                                    Clean towels
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>💧</span>
                                    Hot water
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>🧴</span>
                                    Toiletries
                                </div>
                                <div className="flex flex-col items-center">
                                    <span>🛎️</span>
                                    Room service
                                </div>
                            </div>
                        </div>

                        {/* Amenities checkboxes */}
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h3>
                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                                <label className="flex items-center gap-2 text-gray-400">
                                    <input type="checkbox" disabled />
                                    Swimming Pool
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Lift
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    Gym
                                </label>
                                <label className="flex items-center gap-2 text-gray-400">
                                    <input type="checkbox" disabled />
                                    Study Table
                                </label>
                                <label className="flex items-center gap-2 text-gray-400">
                                    <input type="checkbox" disabled />
                                    Electric Kettle
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* our location wise properties = Right side  */}
                    <div className="flex-[3.5] w-full h-fit grid grid-cols-1 place-items-center gap-6">
                        {locationViseData.map((data: any) => (
                            <div
                                key={data.id}
                                className="group w-full flex flex-col md:flex-row gap-4 bg-white p-4 border border-gray-200 hover:border-primary rounded-md shadow-sm transition"
                            >
                                {/* Left: Image Slider */}
                                <div className="relative w-full md:w-2/5 h-60 rounded-md overflow-hidden">
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={0}
                                        navigation
                                        loop
                                        className="h-full w-full"
                                    >
                                        {data?.property_img.map((image: string, index: number) => (
                                            <SwiperSlide key={index}>
                                                <div
                                                    onClick={() => handleNavigate(data.property_name)}
                                                    className="h-full w-full cursor-pointer"
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${data.property_name} - Image ${index + 1}`}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Overlay Elements */}
                                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                        📷 {data?.property_img?.length || 0} photos
                                    </div>
                                    <span
                                        onClick={handleModal(data)}
                                        className="absolute right-2 top-2 cursor-pointer z-10 bg-white/60 hover:bg-white p-1 rounded-full"
                                    >
                                        <RxOpenInNewWindow size={18} />
                                    </span>
                                </div>

                                {/* Right: Textual Content */}
                                <div className="flex flex-col justify-between w-full md:w-3/5">
                                    <div className="flex flex-col gap-2 h-full">
                                        {/* Title + Subtitle */}
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900">{data.property_name}</h2>
                                            {data.property_subtitle && (
                                                <p className="text-sm text-gray-600 italic">{data.property_subtitle}</p>
                                            )}
                                        </div>

                                        {/* Location */}
                                        <div className="text-sm text-blue-600">{data.property_location}</div>

                                        {/* Description */}
                                        {data.property_description && (
                                            <p className="text-xs text-gray-500 line-clamp-3">{data.property_description}</p>
                                        )}

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-700">
                                            {data?.property_amenities?.slice(0, 4).map((amenity: any, index: number) => (
                                                <div key={index} className="flex items-center gap-1">
                                                    <span>{renderIcon(amenity.amenities_icon)}</span>
                                                    <span>
                                                        {amenity.amenities_count || amenity.amenities_availablity || amenity.amenities_type}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Address Summary */}
                                        <div className="text-xs mt-2 text-gray-400 flex flex-wrap gap-1">
                                            {data.property_address?.slice(0, 3).map((addr: any, i: number) => (
                                                <span key={i}>
                                                    {addr.value}
                                                    {i !== 2 && ','}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-3 mt-3 text-green-600 text-xs">
                                            <span>✔ Free cancellation</span>
                                            <span>✔ Pay @ hotel</span>
                                            <span>✔ Couple friendly</span>
                                            {data.additional_cost_note && (
                                                <span className="text-red-400">⚠ {data.additional_cost_note}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Modal */}
                {isModalOpen && (
                    <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
                )}
            </section>
        </section>
    )
}

export default Homepage_LocationDetails
