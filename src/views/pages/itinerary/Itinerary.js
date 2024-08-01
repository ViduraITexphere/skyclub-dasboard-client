import React from 'react'
import { useLocation } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import ItineraryAccordion from '../../base/accordion/Accordion'

const ItineraryPage = () => {
  const location = useLocation()
  const itinerary = location.state?.itinerary || []

  console.log('Itinerary from location state:', itinerary)

  if (itinerary.length === 0) {
    return <div>No itinerary data available.</div>
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Itinerary</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Click the accordions below to expand/collapse the itinerary content.
            </p>
            <ItineraryAccordion itinerary={itinerary} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ItineraryPage
