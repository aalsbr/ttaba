import { BookingLink } from './booking/BookingLink';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="/assets/logo-black.svg" alt="تتبَّع" className="logo" />
            <p>
              منصة التشغيل المتكاملة للشركات ومكاتب الاستشارات — لإدارة العملاء
              والمشاريع والمهام والعقود بالذكاء الاصطناعي.
            </p>
            <div className="foot-soc">
              <a href="#" aria-label="تويتر">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L.9 2h7.2l5 6.6L18.9 2zm-1.2 18h1.9L7.1 4H5.1l12.6 16z" />
                </svg>
              </a>
              <a href="#" aria-label="لينكدإن">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18V10H5.7v8h2.6zM7 8.8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.3 18v-4.6c0-2.5-1.3-3.6-3.1-3.6-1.4 0-2 .8-2.4 1.3V10h-2.6v8h2.6v-4.4c0-.2 0-.5.1-.7.2-.5.6-1 1.4-1 1 0 1.4.8 1.4 1.9V18h2.6z" />
                </svg>
              </a>
              <a href="#" aria-label="انستغرام">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h5>المنتج</h5>
            <a href="#features">المميزات</a>
            <a href="#workflow">آلية العمل</a>
            <a href="#ai">الذكاء الاصطناعي</a>
            <BookingLink className="" as="a">العرض التجريبي</BookingLink>
          </div>
          <div className="foot-col">
            <h5>الشركة</h5>
            <a href="#">من نحن</a>
            <a href="#">المدوّنة</a>
            <a href="#">تواصل معنا</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </div>
          <div className="foot-col">
            <h5>قانوني</h5>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">شروط الاستخدام</a>
            <a href="#">أمان البيانات</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 تتبَّع. جميع الحقوق محفوظة.</span>
          <span>منصة التشغيل المتكاملة للشركات</span>
        </div>
      </div>
    </footer>
  );
}
