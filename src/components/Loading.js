import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = ({ isLoading }) => {
  return (
    <div>
      {
        isLoading &&
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-25 z-20 flex items-center justify-center cursor-wait">
          <FontAwesomeIcon className="text-white text-6xl animate-spin" icon={faSpinner} />
        </div>
      }
    </div>
  )
}

export default Loading
