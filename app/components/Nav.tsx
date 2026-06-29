'use client';

import { useEffect, useState } from 'react';
import { BookingLink } from './booking/BookingLink';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);

  // Flip nav to white text/logo while it overlaps the dark sections.
  useEffect(() => {
    const header = document.getElementById('nav');
    if (!header) return;
    const darks = Array.from(document.querySelectorAll('.statement, .flow'));
    const update = () => {
      const line = header.offsetHeight * 0.5;
      let over = false;
      darks.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= line && r.bottom >= line) over = true;
      });
      setOverDark(over);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={'nav' + (overDark ? ' over-dark' : '')} id="nav">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <img src="/assets/logo-black.svg" alt="تتبَّع" className="logo" />
          </a>
          <nav className="nav-links">
            <a href="#features">المميزات</a>
            <a href="#workflow">آلية العمل</a>
            <a href="#ai">الذكاء الاصطناعي</a>
            <a href="#faq">الأسئلة</a>
            <BookingLink className="" as="a">تواصل معنا</BookingLink>
          </nav>
          <div className="nav-cta">
            <BookingLink className="btn btn-dark" as="a">احجز موعدًا</BookingLink>
          </div>
          <button
            className="menu-toggle"
            aria-label="القائمة"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        <a href="#features" onClick={closeMenu}>المميزات</a>
        <a href="#workflow" onClick={closeMenu}>آلية العمل</a>
        <a href="#ai" onClick={closeMenu}>الذكاء الاصطناعي</a>
        <a href="#faq" onClick={closeMenu}>الأسئلة</a>
        <BookingLink className="btn btn-dark" as="a" onClick={closeMenu}>احجز موعدًا</BookingLink>
      </div>
    </>
  );
}
