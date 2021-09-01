import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header: React.VFC = () => (
  <div className="bg-gray-800">
    <div className="items-center shadow-md">
      <div className="text-white p-4 text-center">
        <Link to="/" className="navbar-item" title="Logo">
          <StaticImage src="../../static/img/logo.png" alt="logo" width={150} />
        </Link>
        <p className="text-white text-sm mt-2">
          文系卒底辺エンジニアの成長記録
        </p>
      </div>
    </div>
  </div>
)

export default Header