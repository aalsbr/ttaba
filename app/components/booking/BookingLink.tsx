'use client';

import { useBooking } from './BookingContext';

/**
 * A trigger that opens the booking modal — mirrors the original behaviour where
 * every `a[href="#demo"]` (except the email link) and the "احجز عرضًا" button
 * opened the booking popup.
 */
export function BookingLink({
  as = 'a',
  className,
  children,
  onClick,
}: {
  as?: 'a' | 'button';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { open } = useBooking();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    open();
  };

  if (as === 'button') {
    return (
      <button type="button" className={className} onClick={handleClick}>
        {children}
      </button>
    );
  }

  return (
    <a href="#demo" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
