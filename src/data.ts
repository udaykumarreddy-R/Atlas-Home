import { resolveOptimizedAsset, resolveOptimizedGallery } from "./utils/resolveOptimizedAsset";

const logo = resolveOptimizedAsset("logo-removebg-preview (3).png");

const propertyImagePaths: Record<string, string[]> = {
    "201": [
        'airbnb201/img_11.jpg',
        'airbnb201/img_2.jpg',
        'airbnb201/img_3.jpg',
        'airbnb201/img_4.jpg',
        'airbnb201/img_5.jpg',
        'airbnb201/img_6.jpg',
        'airbnb201/img_7.jpg',
        'airbnb201/img_8.jpg',
        'airbnb201/img_9.jpg',
        'airbnb201/img_10.jpg',
    ],
    "202": [
        'airbnb202/img_1.jpg',
        'airbnb202/img_2.jpg',
        'airbnb202/img_3.jpg',
        'airbnb202/img_4.jpg',
        'airbnb202/img_5.jpg',
        'airbnb202/img_6.jpg',
        'airbnb202/img_7.jpg',
        'airbnb202/img_8.jpg',
        'airbnb202/img_9.jpg',
        'airbnb202/img_10.jpg',
    ],
    "301": [
        'airbnb301/img_1.jpg',
        'airbnb301/img_2.jpg',
        'airbnb301/img_3.jpg',
        'airbnb301/img_4.jpg',
        'airbnb301/img_5.jpg',
        'airbnb301/img_6.jpg',
        'airbnb301/img_7.jpg',
        'airbnb301/img_8.jpg',
        'airbnb301/img_9.jpg',
        'airbnb301/img_10.jpg',
    ],
    "101": [
        '101/img_1.jpg',
        '101/img_2.jpg',
        '101/img_3.jpg',
        '101/img_4.jpg',
        '101/img_5.jpg',
        '101/img_6.jpg',
        '101/img_7.jpg',
        '101/img_8.jpg',
        '101/img_9.jpg',
        '101/img_10.jpg',
    ],
    "102": [
        '102/img_1.jpg',
        '102/img_2.jpg',
        '102/img_3.jpg',
        '102/img_4.jpg',
        '102/img_5.jpg',
        '102/img_6.jpg',
        '102/img_7.jpg',
        '102/img_8.jpg',
        '102/img_9.jpg',
        '102/img_10.jpg',
    ],
    "302": [
        '302/img_1.jpg',
        '302/img_2.jpg',
        '302/img_3.jpg',
        '302/img_4.jpg',
        '302/img_5.jpg',
        '302/img_6.jpg',
        '302/img_7.jpg',
        '302/img_8.jpg',
        '302/img_9.jpg',
        '302/img_10.jpg',
    ],
};

const propertyImages: Record<string, string[]> = Object.fromEntries(
    Object.entries(propertyImagePaths).map(([key, paths]) => [key, resolveOptimizedGallery(paths)])
);

export const propertyData = [
    {
        id: 201,
        property_name: "Atlas Homes Room 201",
        property_description: `Imagine the convenience of being just 2 km from Hyderabad’s Cyber Towers while staying in a cozy 1BHK apartment designed for comfort. Atlas Homes Room 101, a 450 sq. ft. first-floor unit, blends affordability with modern amenities, making it ideal for professionals and families.

Indoor Spaces:
Step inside to discover a fully furnished living space with a spacious bedroom, hall, and open kitchen. The king-size bed ensures restful sleep, while the attached bathroom comes with a geyser, shower gel, shampoo, and towels. A 55-inch TV with access to 500+ channels and 17 OTT apps keeps you entertained. The unit also features a balcony and large windows for natural light.

Outdoor Spaces:
Enjoy fresh air from the attached balcony. Though there’s no garden, the neighborhood offers an authentic local vibe with easy access to nearby markets and entertainment hubs.

Additional Amenities:
High-speed Wi-Fi (150 Mbps, multiple ISPs), air-conditioning in the bedroom, a fully equipped kitchen (microwave, gas stove, RO filter, refrigerator, toaster), and housekeeping are included. Washing machine access is available at ₹150 per wash.`,
        property_location: "Hyderabad, Telangana",
        property_reviews: 59,
        property_rating: 4.9,
        property_price: 4996,
        property_img: propertyImages["201"],
        property_nearplaces: [
            "Cyber Towers (2 km)",
            "Local Markets",
            "Entertainment Hubs"
        ],
        property_amenities: [
            { amenities_icon: "king-size bed" },
            { amenities_icon: "air conditioning" },
            { amenities_icon: "wifi" },
            { amenities_icon: "55-inch tv" },
            { amenities_icon: "balcony" },
            { amenities_icon: "kitchen" },
            { amenities_icon: "microwave" },
            { amenities_icon: "gas stove" },
            { amenities_icon: "RO filter" },
            { amenities_icon: "refrigerator" },
            { amenities_icon: "toaster" },
            { amenities_icon: "housekeeping" },
            { amenities_icon: "washing machine (paid)" },
            { amenities_icon: "geyser" },
            { amenities_icon: "shower gel" },
            { amenities_icon: "shampoo" },
            { amenities_icon: "towels" },
            { amenities_icon: "pets allowed (paid)" },
            { amenities_icon: "smoking area" }
        ],
        property_mapSrc: "https://maps.google.com/maps?q=17.474651989736216,78.38721819843356&z=17&output=embed",
        property_policy_details: [
            { type: "Check-in", value: "11:00 AM" },
            { type: "Check-out", value: "9:00 AM" },
            { type: "Children Policy", value: "Children of all ages are welcome" },
            { type: "Extra Guests", value: "Extra guests beyond 2 are charged ₹400 per night" },
            { type: "Pets", value: "Allowed at ₹400 per day" },
            { type: "Washing Machine", value: "Access available at ₹150 per wash" },
            { type: "Smoking", value: "Permitted only in designated areas/balcony" },
            { type: "Music", value: "No loud music after 10 PM" },
            { type: "Parties/Decorations", value: "No parties or decorations without prior approval" },
            { type: "Cancellation Policy", value: "Non-refundable bookings. Free cancellation up to 24 hours before check-in." }
        ],
    },
    {
        id: 202,
        property_name: "Atlas Homes Room 202",
        property_description: `Welcome to Atlas Homes Room 202, a thoughtfully designed 450 sq. ft. 1BHK apartment in Hyderabad’s KPHB, just 2 km from Cyber Towers. This first-floor unit blends comfort and affordability, making it ideal for business travelers, couples, or families seeking a convenient stay near Hitech City.

Indoor Spaces:
The apartment features a cozy bedroom with a king-size bed, AC, and storage, plus a sofa cum bed in the hall for additional guests. The attached kitchen is equipped with essentials, while the bathroom comes with a geyser, toiletries, and towels. For entertainment, enjoy a 55-inch TV with 500+ channels, 17 OTT apps, and complimentary high-speed Wi-Fi. Natural light fills the space through large windows and a private balcony.

Outdoor Spaces:
Step onto the balcony to enjoy a refreshing breeze, or explore the surrounding neighborhood with its local shops, markets, and eateries.

Additional Amenities:
Complimentary Wi-Fi, air-conditioning, inverter backup, daily housekeeping, and CCTV in common areas. A fully equipped kitchen includes a microwave, gas stove, refrigerator, toaster, and RO water purifier. Washing machine facility available at ₹150 per wash.`,
        property_location: "Hyderabad, Telangana",
        property_reviews: 64,
        property_rating: 4.8,
        property_price: 5199,
        property_img: propertyImages["202"],
        property_nearplaces: [
            "Cyber Towers (2 km)",
            "KPHB Local Shops",
            "Markets",
            "Eateries"
        ],
        property_amenities: [
            { amenities_icon: "king-size bed" },
            { amenities_icon: "sofa cum bed" },
            { amenities_icon: "air conditioning" },
            { amenities_icon: "inverter backup" },
            { amenities_icon: "wifi" },
            { amenities_icon: "55-inch tv" },
            { amenities_icon: "balcony" },
            { amenities_icon: "kitchen" },
            { amenities_icon: "microwave" },
            { amenities_icon: "gas stove" },
            { amenities_icon: "RO water purifier" },
            { amenities_icon: "refrigerator" },
            { amenities_icon: "toaster" },
            { amenities_icon: "housekeeping" },
            { amenities_icon: "washing machine (paid)" },
            { amenities_icon: "geyser" },
            { amenities_icon: "toiletries" },
            { amenities_icon: "towels" },
            { amenities_icon: "CCTV in common areas" },
            { amenities_icon: "pets allowed (paid)" },
            { amenities_icon: "smoking area" }
        ],
        property_mapSrc: "https://maps.google.com/maps?q=17.474651989736216,78.38721819843356&z=17&output=embed",
        property_policy_details: [
            { type: "Check-in", value: "11:00 AM" },
            { type: "Check-out", value: "9:00 AM" },
            { type: "Base Occupancy", value: "2 guests" },
            { type: "Extra Guests", value: "Additional guests charged ₹400 per night" },
            { type: "Pets", value: "Allowed at ₹400 per day" },
            { type: "Washing Machine", value: "Access available at ₹150 per wash" },
            { type: "Smoking", value: "Permitted only on balcony" },
            { type: "Music", value: "No loud music after 10 PM" },
            { type: "Parties/Decorations", value: "Only with prior approval" },
            { type: "Cancellation Policy", value: "Non-refundable bookings" }
        ],
    },
    {
        id: 301,
        property_name: "Atlas Homes Room 301",
        property_description: `Welcome to Atlas Homes Room 301, a 450 sq. ft. apartment that offers the perfect balance of affordability and functionality in Hyderabad’s tech hub. Located in KPHB, just 2 km from Cyber Towers, this unit is ideal for both work and leisure stays.

Indoor Spaces
The apartment includes a king-size bed, AC, and a sofa cum bed in the hall. A 55-inch TV with OTT access keeps you entertained. The attached bathroom includes a geyser, toiletries, and towels. Large windows and a balcony ensure natural light and ventilation.

Outdoor Spaces
Enjoy your private balcony, perfect for sipping tea in the evenings, or explore nearby local eateries and shops within walking distance.

Additional Amenities
Complimentary Wi-Fi (150 Mbps), fully equipped kitchen (gas stove, microwave, refrigerator, toaster), air-conditioning, and housekeeping services.`,
        property_location: "Hyderabad, Telangana",
        property_reviews: 72,
        property_rating: 4.7,
        property_price: 5399,
        property_img: propertyImages["301"],
        property_nearplaces: [
            "Cyber Towers (2 km)",
            "KPHB Local Shops",
            "Markets",
            "Eateries"
        ],
        property_amenities: [
            { amenities_icon: "king-size bed" },
            { amenities_icon: "sofa cum bed" },
            { amenities_icon: "air conditioning" },
            { amenities_icon: "wifi" },
            { amenities_icon: "55-inch tv" },
            { amenities_icon: "balcony" },
            { amenities_icon: "kitchen" },
            { amenities_icon: "microwave" },
            { amenities_icon: "gas stove" },
            { amenities_icon: "refrigerator" },
            { amenities_icon: "toaster" },
            { amenities_icon: "housekeeping" },
            { amenities_icon: "geyser" },
            { amenities_icon: "toiletries" },
            { amenities_icon: "towels" },
            { amenities_icon: "pets allowed (paid)" },
            { amenities_icon: "smoking area" }
        ],
        property_mapSrc: "https://maps.google.com/maps?q=17.474651989736216,78.38721819843356&z=17&output=embed",
        property_policy_details: [
            { type: "Check-in", value: "1:00 PM" },
            { type: "Check-out", value: "11:00 AM" },
            { type: "Base Occupancy", value: "2 guests" },
            { type: "Extra Guests", value: "Additional guests charged ₹400 per night" },
            { type: "Pets", value: "Allowed at ₹400 per day" },
            { type: "Washing Machine", value: "Facility available at ₹150 per use (shared)" },
            { type: "Smoking", value: "Permitted only on balcony" },
            { type: "Music", value: "No loud music after 10 PM" },
            { type: "Parties/Decorations", value: "Extra charges apply for parties or damages" },
            { type: "Cancellation Policy", value: "Non-refundable booking" }
        ],
    },
    {
        id: 101,
        property_name: "Atlas Homes Room 101",
        property_description: `Imagine the convenience of being just 2 km from Hyderabad’s Cyber Towers while staying in a cozy 1BHK apartment designed for comfort. Atlas Homes Room 101, a 450 sq. ft. first-floor unit, blends affordability with modern amenities, making it ideal for professionals and families.

Indoor Spaces
Step inside to discover a fully furnished living space with a spacious bedroom, hall, and open kitchen. The king-size bed ensures restful sleep, while the attached bathroom comes with a geyser, shower gel, shampoo, and towels. A 55-inch TV with access to 500+ channels and 17 OTT apps keeps you entertained. The unit also features a balcony and large windows for natural light.

Outdoor Spaces
Enjoy fresh air from the attached balcony. Though there’s no garden, the neighborhood offers an authentic local vibe with easy access to nearby markets and entertainment hubs.

Additional Amenities
High-speed Wi-Fi (150 Mbps, multiple ISPs), air-conditioning in the bedroom, a fully equipped kitchen (microwave, gas stove, RO filter, refrigerator, toaster), and housekeeping are included. Washing machine access is available at ₹150 per wash.`,
        property_location: "Hyderabad, Telangana",
        property_reviews: 85,
        property_rating: 4.9,
        property_price: 4499,
        property_img: propertyImages["101"],
        property_nearplaces: [
            "Cyber Towers (2 km)",
            "Local Markets",
            "Entertainment Hubs"
        ],
        property_amenities: [
            { amenities_icon: "king-size bed" },
            { amenities_icon: "air conditioning" },
            { amenities_icon: "wifi" },
            { amenities_icon: "55-inch tv" },
            { amenities_icon: "balcony" },
            { amenities_icon: "kitchen" },
            { amenities_icon: "microwave" },
            { amenities_icon: "gas stove" },
            { amenities_icon: "RO filter" },
            { amenities_icon: "refrigerator" },
            { amenities_icon: "toaster" },
            { amenities_icon: "housekeeping" },
            { amenities_icon: "washing machine (paid)" },
            { amenities_icon: "geyser" },
            { amenities_icon: "shower gel" },
            { amenities_icon: "shampoo" },
            { amenities_icon: "towels" },
            { amenities_icon: "pets allowed (paid)" },
            { amenities_icon: "smoking area" }
        ],
        property_mapSrc: "https://maps.google.com/maps?q=17.474651989736216,78.38721819843356&z=17&output=embed",
        property_policy_details: [
            { type: "Check-in", value: "11:00 AM" },
            { type: "Check-out", value: "9:00 AM" },
            { type: "Children Policy", value: "Children of all ages are welcome" },
            { type: "Extra Guests", value: "Extra guests beyond 2 are charged ₹400 per night" },
            { type: "Pets", value: "Allowed at ₹400 per day" },
            { type: "Washing Machine", value: "Access available at ₹150 per wash" },
            { type: "Smoking", value: "Permitted only in designated areas/balcony" },
            { type: "Music", value: "No loud music after 10 PM" },
            { type: "Parties/Decorations", value: "No parties or decorations without prior approval" },
            { type: "Cancellation Policy", value: "Non-refundable bookings" }
        ],
    },
    {
        id: 102,
        property_name: "Atlas Homes Room 102",
        property_description: `Step into Atlas Homes Room 102, a spacious and affordable 450 sq. ft. 1BHK in KPHB, just minutes from Cyber Towers. This first-floor apartment combines homely comfort with modern conveniences, perfect for couples, business travelers, or small families.

Indoor Spaces
The apartment features a king-size bed in the bedroom and a sofa cum bed in the hall for additional guests. The attached bathroom is stocked with shower gel, shampoo, and towels. Entertainment includes a 55-inch TV, 500+ channels, and 17 OTT apps. Large windows and a balcony bring in natural light.

Outdoor Spaces
Relax on your private balcony or take a stroll in the neighborhood, known for its proximity to IT hubs, malls, and eateries.

Additional Amenities
Enjoy uninterrupted high-speed Wi-Fi, AC, and a fully equipped kitchen with gas stove, microwave, refrigerator, toaster, and RO water filter. Daily housekeeping is included. Washing machine access is available at ₹150 per wash.`,
        property_location: "Hyderabad, Telangana",
        property_reviews: 91,
        property_rating: 4.8,
        property_price: 4699,
        property_img: propertyImages["102"],
        property_nearplaces: [
            "Cyber Towers (2 km)",
            "IT Hubs",
            "Malls",
            "Eateries"
        ],
        property_amenities: [
            { amenities_icon: "king-size bed" },
            { amenities_icon: "sofa cum bed" },
            { amenities_icon: "air conditioning" },
            { amenities_icon: "wifi" },
            { amenities_icon: "55-inch tv" },
            { amenities_icon: "balcony" },
            { amenities_icon: "kitchen" },
            { amenities_icon: "microwave" },
            { amenities_icon: "gas stove" },
            { amenities_icon: "RO water filter" },
            { amenities_icon: "refrigerator" },
            { amenities_icon: "toaster" },
            { amenities_icon: "housekeeping" },
            { amenities_icon: "washing machine (paid)" },
            { amenities_icon: "geyser" },
            { amenities_icon: "shower gel" },
            { amenities_icon: "shampoo" },
            { amenities_icon: "towels" },
            { amenities_icon: "pets allowed (paid)" },
            { amenities_icon: "smoking area" }
        ],
        property_mapSrc: "https://maps.google.com/maps?q=17.474651989736216,78.38721819843356&z=17&output=embed",
        property_policy_details: [
            { type: "Check-in", value: "11:00 AM" },
            { type: "Check-out", value: "9:00 AM" },
            { type: "Children Policy", value: "Children of all ages are welcome" },
            { type: "Extra Guests", value: "Additional guests beyond 2 are charged ₹400 per night" },
            { type: "Pets", value: "Allowed at ₹400 per day" },
            { type: "Washing Machine", value: "Access available at ₹150 per wash" },
            { type: "Smoking", value: "Permitted only on balcony" },
            { type: "Music", value: "No loud music after 10 PM" },
            { type: "Parties/Decorations", value: "No parties or decorations without prior approval" },
            { type: "Cancellation Policy", value: "Non-refundable booking" }
        ],
    },
    {
        id: 302,
        property_name: "Atlas Homes Room 302",
        property_description: `Atlas Homes Room 302 is a stylish 450 sq. ft. third-floor unit designed for comfort and convenience. Located in the vibrant KPHB area, it is perfect for travelers looking to stay near Hyderabad’s IT corridor without compromising on modern amenities.

Indoor Spaces
This private 1BHK features a king-size bed, sofa cum bed, attached kitchen, and bathroom. A 55-inch TV with 17 OTT apps, AC, and high-speed Wi-Fi ensure a relaxing stay. The bathroom includes geyser, toiletries, and towels. The balcony adds a refreshing outdoor touch.

Outdoor Spaces
The attached balcony provides fresh air and a spot to relax, while the surrounding neighborhood offers easy access to cafes, malls, and shopping areas.

Additional Amenities
Fully equipped kitchen with microwave, refrigerator, RO water, toaster, and gas stove. Daily housekeeping included. Washing machine available at extra charge.`,
        property_location: "Hyderabad, Telangana",
        property_reviews: 77,
        property_rating: 4.85,
        property_price: 4899,
        property_img: propertyImages["302"],
        property_nearplaces: [
            "Cyber Towers (2 km)",
            "KPHB Cafes",
            "Malls",
            "Shopping Areas"
        ],
        property_amenities: [
            { amenities_icon: "king-size bed" },
            { amenities_icon: "sofa cum bed" },
            { amenities_icon: "air conditioning" },
            { amenities_icon: "wifi" },
            { amenities_icon: "55-inch tv" },
            { amenities_icon: "balcony" },
            { amenities_icon: "kitchen" },
            { amenities_icon: "microwave" },
            { amenities_icon: "gas stove" },
            { amenities_icon: "RO water" },
            { amenities_icon: "refrigerator" },
            { amenities_icon: "toaster" },
            { amenities_icon: "housekeeping" },
            { amenities_icon: "washing machine (paid)" },
            { amenities_icon: "geyser" },
            { amenities_icon: "toiletries" },
            { amenities_icon: "towels" },
            { amenities_icon: "pets allowed (paid)" },
            { amenities_icon: "smoking area" }
        ],
        property_mapSrc: "https://maps.google.com/maps?q=17.474651989736216,78.38721819843356&z=17&output=embed",
        property_policy_details: [
            { type: "Check-in", value: "1:00 PM" },
            { type: "Check-out", value: "11:00 AM" },
            { type: "Base Occupancy", value: "2 guests" },
            { type: "Extra Guests", value: "Additional guests beyond 2 are charged ₹400 per night" },
            { type: "Pets", value: "Allowed at ₹400 per day" },
            { type: "Washing Machine", value: "Available at extra charge (shared)" },
            { type: "Smoking", value: "Permitted only on balcony" },
            { type: "Music", value: "Quiet hours after 10 PM" },
            { type: "Cancellation Policy", value: "Non-refundable booking policy" }
        ],
    }
];


export const navbarData = {
    details: [
        {
            id: 1,
            icon: 'IoIosMail',
            data: 'atlashomeskphb@gmail.com'
        },
        {
            id: 2,
            icon: 'IoIosCall',
            data: '+91-7032493290'
        },
    ],
    logo: [
        {
            id: 1,
            image: logo, // Replace with the actual logo image path
            alt: "Company Logo"
        }
    ],
    navmenu: [
        {
            id: 1,
            title: "Destinations",
            link: "/",
            submenu: []
        },
        {
            id: 2,
            title: "Villas",
            link: "/",
        },
        {
            id: 3,
            title: "Apartments",
            link: "/",
            submenu: []
        },
        {
            id: 4,
            title: "About",
            link: "/about",
            submenu: []
        },
        {
            id: 5,
            title: "List Your Property",
            link: "/contact",
            submenu: []
        },

    ],
    button: [
        {
            id: 1,
            type: "primary",
            text: "Login"
        }

    ]
};


import {
    FaFacebook, FaTwitter, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { IoIosMail, IoIosCall, IoIosArrowForward } from 'react-icons/io';
// import { p } from "framer-motion/client";
// import ExclusiveService_Card from "./components/homepage_components/homepage_exclusiveservice/ExclusiveService_Card";

// Define icon keys as a union type
export type IconKey =
    | 'FaFacebook'
    | 'FaTwitter'
    | 'FaInstagram'
    | 'FaYoutube'
    | 'ImGithub'
    | 'IoIosMail'
    | 'IoIosCall'
    | 'IoIosArrowForward';

// Icon mapping interface
export interface IconMapping {
    [key: string]: React.ComponentType<{ className?: string }>;
}

// Social Links Interface
export interface SocialLink {
    icon: IconKey;
    link: string;
}

// Contact Info Interface
export interface ContactInfo {
    icon: IconKey;
    text: any;
}

// Villa Links Interface
export interface VillaLink {
    icon: IconKey;
    text: string;
    link: string;
}

// Footer Data Interface
export interface FooterDataInterface {
    socialLinks: SocialLink[];
    contactInfo: ContactInfo[];
    villaLinks: VillaLink[];
    mapSrc: string;
}

// Icon Mapping
export const iconMap: IconMapping = {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    ImGithub,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

export const footerData: FooterDataInterface = {
    socialLinks: [
        { icon: 'FaFacebook', link: 'https://www.facebook.com/profile.php?id=100040632723189' },
        { icon: 'FaInstagram', link: 'https://www.instagram.com/atlashomeskphb/' },
        { icon: 'FaTwitter', link: 'https://x.com/atlashomeskphb' },
        { icon: 'FaYoutube', link: 'https://www.youtube.com/@atlashomestays' },
    ],
    contactInfo: [
        { icon: 'IoIosMail', text: 'atlashomeskphb@gmail.com' },
        { icon: 'IoIosCall', text: ['+91-7032493290'] },
    ],
    villaLinks: [
        { icon: 'IoIosArrowForward', text: 'Vrindavan', link: '/' },
        { icon: 'IoIosArrowForward', text: 'Agra', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Kp', link: '/' },
        // { icon: 'IoIosArrowForward', text: 'Kharadi', link: '/' },
    ],
    mapSrc: 'https://maps.google.com/maps?q=17.474862392083217,78.38756293444445&z=17&output=embed'
};
