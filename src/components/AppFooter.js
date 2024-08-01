import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">&copy; 2024 skytravelclub</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Tallentor</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)