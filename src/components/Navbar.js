import { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data'
import './navbar.css'

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(() => {
    if (showLinks) {
      const linksHeight = linkRef.current.getBoundingClientRect().height
      console.log(linksHeight)
      linksContainerRef.current.style.height = linksHeight.toString() + 'px'
      console.log(linksContainerRef.current.style.height)
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2>BEHNAM</h2>
        </div>
        <div className='nav-links' ref={linksContainerRef}>
          <ul className='links' ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((item) => {
            const { id, url, icon } = item
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
        <FaBars className='bar-btn' onClick={() => setShowLinks(!showLinks)} />
      </div>
    </nav>
  )
}

export default Navbar
