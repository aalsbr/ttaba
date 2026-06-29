function ClientGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee__group" aria-hidden={ariaHidden || undefined}>
      <span className="cli">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
        </svg>{' '}
        مكتب الإنجاز
      </span>
      <span className="cli">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </svg>{' '}
        رؤية المحاسبة
      </span>
      <span className="cli">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>{' '}
        الفهد للاستشارات
      </span>
      <span className="cli">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3 6 6 .8-4.5 4.3 1.2 6.4L12 16.5 6.3 19.5l1.2-6.4L3 8.8 9 8z" />
        </svg>{' '}
        نخبة الأعمال
      </span>
      <span className="cli">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>{' '}
        مجموعة المدى
      </span>
    </div>
  );
}

export function Clients() {
  return (
    <section className="clients">
      <p className="lbl reveal">موثوق به من شركات ومكاتب تعاملنا معها</p>
      <div className="marquee">
        <ClientGroup />
        <ClientGroup ariaHidden />
      </div>
    </section>
  );
}
