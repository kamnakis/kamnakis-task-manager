import React, { useState, useRef, useEffect } from 'react'
import Loading from './Loading'
import SettingsModal from './SettingsModal'
import api from '../utils/api'


const Dropdown = ({ label, history }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setMenuVisible(true)
  }

  const handleSettingClick = (e) => {
    e.preventDefault()
    setMenuVisible(false)
    setSettingsVisible(true)
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await api.USER_LOGOUT()
    localStorage.removeItem('taskManagerToken')
    history.push('/')
  }

  const menu = useRef(null)
  const button = useRef(null)

  const handleDocumentClick = e => {
    if (!menu.current.contains(e.target) && !menu.current.contains(e.target)) {
      setMenuVisible(false)
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span>
          <button
            className="inline-flex justify-center w-full text-xl leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            type="button"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={handleClick}
            ref={button}
          >
            {label}
            <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      </div>

      <div ref={menu}>
        {
          menuVisible &&
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  className="block w-full text-left px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                  role="menuitem"
                  onClick={handleSettingClick}
                >
                  Account Settings
              </button>

                <button
                  className="block w-full text-left px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  Sign out
              </button>
              </div>
            </div>
          </div>
        }
      </div>

      <SettingsModal isOpen={settingsVisible} onRequestClose={() => setSettingsVisible(false)} />

      <Loading isLoading={isLoading} />
    </div>
  )
}

export default Dropdown
