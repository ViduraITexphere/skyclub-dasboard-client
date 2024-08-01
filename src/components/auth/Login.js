import React, { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode' // Ensure this is correctly imported

function Login() {
  const navigate = useNavigate()
  const [itinerary, setItinerary] = useState(null)
  console.log('itinerary😅:', itinerary)

  const handleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse

      // Decode the token received from Google
      const decodedToken = jwtDecode(credential)
      console.log('Decoded Token:', decodedToken)

      // Save the Google ID directly to localStorage
      localStorage.setItem('googleId', decodedToken.sub) // 'sub' contains the Google ID
      console.log('Google ID saved:', decodedToken.sub)

      // Fetch itinerary using the token in the Authorization header
      const itineraryResponse = await axios.get(
        'https://skyclub-dashboard.vercel.app/api/itinerary',
        {
          headers: {
            Authorization: `Bearer ${credential}`, // Use the credential token directly
          },
          params: {
            googleId: decodedToken.sub, // Use the correct Google ID field
          },
        },
      )

      console.log('itinerary🥵:', itineraryResponse.data)
      setItinerary(itineraryResponse.data) // Update the state with the response data

      // Navigate to ItineraryPage with the fetched data
      navigate('/itinerary', { state: { itinerary: itineraryResponse.data } })
    } catch (error) {
      console.error('Error fetching itinerary:', error)
    }
  }

  return (
    <GoogleOAuthProvider clientId="874892976318-boa6tptdvtnq2hqoam5rpti83rsjqn8r.apps.googleusercontent.com">
      <GoogleLogin
        theme="filled_black"
        shape="pill"
        type="standard"
        color-type="dark"
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </GoogleOAuthProvider>
  )
}

export default Login
