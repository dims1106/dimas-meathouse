"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <Link href="/" className="navbar-brand logo d-flex align-items-center gap-2">
          <i className="bx bxs-steak"></i> Dims Meathouse
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="/team" className={`nav-link ${pathname.startsWith('/team') ? 'active' : ''}`}>Team</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}