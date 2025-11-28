import React from "react";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data.ts";
import Heading from "../../commonComponents/heading/Heading";
import { LISTINGS } from "../../../data/listings";
import { loadListingImages } from "../../../utils/loadListingImages";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import styles from "../../../styles/listings.css?inline";
import "./homepage_location.css";

// Function to generate a random rating between 4.5 and 5.0
const getRandomRating = (id: string) => {
  const ratings = [4.6, 4.7, 4.8, 4.9];
  const index = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % ratings.length;
  return ratings[index];
};

// Function to generate a random number of reviews between 10 and 50
const getRandomReviewCount = (id: string) => {
  const counts = [12, 18, 24, 32, 45];
  const index = id.split('').reduce((acc, char, i) => acc + (char.charCodeAt(0) * (i + 1)), 0) % counts.length;
  return counts[index];
};

interface PropertyCardProps {
  listing: any;
  property: any;
  cover: string;
  onNavigate: (property: any) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ listing, property, cover, onNavigate }) => {
  const interactiveProps = {
    onClick: () => onNavigate(property),
    role: "link",
    tabIndex: 0,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onNavigate(property);
      }
    },
  };

  return (
    <div className="property-card" {...interactiveProps}>
      <div className="property-image-container">
        {cover ? (
          <img 
            src={cover} 
            alt={`${listing.title} cover`} 
            className="property-image"
          />
        ) : (
          <div className="no-image">No image available</div>
        )}
      </div>
      <div className="property-details">
        <div className="property-title">{listing.title}</div>
        <div className="property-location">
          <FaMapMarkerAlt className="location-icon" />
          <span>Hyderabad, Telangana</span>
        </div>
        <div className="property-rating">
          <FaStar className="star-icon" />
          <span className="rating-text">
            {getRandomRating(listing.id).toFixed(1)} ({getRandomReviewCount(listing.id)})
          </span>
        </div>
        <div className="property-price">
          <span className="price-label">Price per night</span>
          <span className="price-amount">
            {property?.property_price ? `₹${property.property_price}` : 'Price on request'}
          </span>
        </div>
      </div>
    </div>
  );
};

const HomePage_Locations = () => {
  const navigate = useNavigate();

  const imagesByUnit = React.useMemo(() => loadListingImages(), []);

  const propertyById = React.useMemo(() => {
    const map = new Map<string, any>();
    propertyData.forEach((item) => {
      map.set(String(item.id), item);
    });
    return map;
  }, []);

  const items = React.useMemo(
    () => [...LISTINGS].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)),
    []
  );

  const handleNavigate = (property: any) => {
    const checkedLocation = property.property_name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/property_details/${checkedLocation}`, { state: { property } });
  };

  return (
    <section className="pb-12 pt-10 md:pt-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 px-4">
          <Heading title="Our Homes" />
        </div>
        <style>{styles}</style>
        <div className="listings-grid">
          {items.map((listing) => {
            const property = propertyById.get(listing.id);
            const imgs = imagesByUnit[listing.id] || [];
            const cover = imgs[0];

            return (
              <PropertyCard
                key={listing.id}
                listing={listing}
                property={property}
                cover={cover}
                onNavigate={handleNavigate}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePage_Locations;
