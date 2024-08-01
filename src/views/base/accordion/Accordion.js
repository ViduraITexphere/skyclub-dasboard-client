import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

const ItineraryAccordion = ({ itinerary }) => {
  if (!Array.isArray(itinerary) || itinerary.length === 0) {
    return <p>No itinerary data available.</p>
  }

  return (
    <CAccordion>
      {itinerary.map((day) => (
        <CAccordionItem itemKey={day.day} key={day.day}>
          <CAccordionHeader>Day {day.day}</CAccordionHeader>
          <CAccordionBody>
            <h4>Places</h4>
            {day.places.length ? (
              <ul>
                {day.places.map((place) => (
                  <li key={place._id}>
                    <strong>{place.name}</strong>
                    <p>{place.description}</p>
                    <img
                      src={place.image}
                      alt={place.name}
                      style={{ width: '100%', maxHeight: '200px' }}
                    />
                    <p>Rating: {place.rating}</p>
                    <p>Reviews: {place.reviews}</p>
                    <p>Duration: {place.duration}</p>
                    <p>Hours: {place.hours}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No places listed for this day.</p>
            )}
            <h4>Restaurants</h4>
            {day.restaurants.length ? (
              <ul>
                {day.restaurants.map((restaurant) => (
                  <li key={restaurant._id}>
                    <strong>{restaurant.name}</strong>
                    <p>{restaurant.description}</p>
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      style={{ width: '100%', maxHeight: '200px' }}
                    />
                    <p>Rating: {restaurant.rating}</p>
                    <p>Reviews: {restaurant.reviews}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No restaurants listed for this day.</p>
            )}
          </CAccordionBody>
        </CAccordionItem>
      ))}
    </CAccordion>
  )
}

export default ItineraryAccordion
