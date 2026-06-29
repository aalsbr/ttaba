import { BookingLink } from './booking/BookingLink';

export function TalkDemo() {
  return (
    <section className="talk" id="demo">
      <div className="container">
        <p className="kick reveal">طلب عرض توضيحي</p>
        <h2 className="reveal">تحدّث مع فريقنا</h2>
        <p className="reveal">
          احجز عرضاً توضيحياً مجانياً وشاهد كيف يجمع تتبَّع كل أعمال شركتك في منصة
          واحدة — دون أي التزام.
        </p>
        <div className="talk-actions reveal">
          <BookingLink className="btn btn-dark" as="button">احجز عرضًا</BookingLink>
          <a href="mailto:info@ttabba.com" className="mail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            تواصل معنا عبر البريد
          </a>
        </div>
      </div>
    </section>
  );
}
