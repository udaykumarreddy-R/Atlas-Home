import React from "react";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data.ts";
import Heading from "../../commonComponents/heading/Heading";
import { LISTINGS } from "../../../data/listings";
import { loadListingImages } from "../../../utils/loadListingImages";
import styles from "../../../styles/listings.css?inline";
import "./homepage_location.css";

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  left: "12px",
  bottom: "12px",
  background: "rgba(0,0,0,.55)",
  color: "#fff",
  padding: "6px 10px",
  borderRadius: "8px",
  fontSize: "14px",
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
    <section className="pb-12 pt-10 md:pt-20 px-6 md:px-20 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="pb-10">
          <Heading title={"Our Homes"} />
        </div>
        <style>{styles}</style>
        <div className="listingsGrid">
          {items.map((listing) => {
            const property = propertyById.get(listing.id);
            const imgs = imagesByUnit[listing.id] || [];
            const cover = imgs[0];
            const cardClass = listing.featured ? "card featured" : "card";
            const ariaLabel = listing.featured ? "Penthouse 501 featured" : listing.title;

            const interactiveProps: React.HTMLAttributes<HTMLElement> = property
              ? {
                  onClick: () => handleNavigate(property),
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleNavigate(property);
                    }
                  },
                }
              : {};

            return (
              <article
                key={listing.id}
                className={cardClass}
                aria-label={ariaLabel}
                {...interactiveProps}
              >
                {cover ? (
                  <img src={cover} alt={`${listing.title} cover`} />
                ) : (
                  <div style={{ padding: 16 }}>No image</div>
                )}
                <div style={overlayStyle}>
                  <strong>{listing.title}</strong>
                  {listing.subtitle ? <div style={{ opacity: 0.9 }}>{listing.subtitle}</div> : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePage_Locations;
