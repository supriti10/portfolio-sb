import React from 'react'

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      
      {/* Availability */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span className="font-medium text-white">Open to Opportunities</span>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">

        <a
          href="https://github.com/supriti10"
          target="_blank"
          rel="noreferrer"
          className="social-icon hover:scale-110 transition-transform duration-300"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://www.linkedin.com/in/supriti-basak-7bb461251/"
          target="_blank"
          rel="noreferrer"
          className="social-icon hover:scale-110 transition-transform duration-300"
        >
          <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://www.instagram.com/__.fleur_lovin.__/"
          target="_blank"
          rel="noreferrer"
          className="social-icon hover:scale-110 transition-transform duration-300"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>

      </div>
    </section>
  )
}

export default Footer