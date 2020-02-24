import React from 'react'
import Link from 'next/link'

const links = [
  { href: '', label: 'About' },
  { href: '', label: 'Projects' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav className="flex justify-center bg-indigo-900 border-b-4 border-teal-300">
    <ul className="max-w-screen-xl w-full h-16 flex" >
      {links.map(({ key, href, label }) => (
        <li key={key} className="self-center" >
          <a href={href} className="font-heading font-light text-xl mx-5 text-gray-200" >{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
