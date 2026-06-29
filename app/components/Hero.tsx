import { BookingLink } from './booking/BookingLink';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow reveal">تتبَّع</p>
        <h1 className="reveal">
          منصة التشغيل المتكاملة<br />لإدارة أعمال شركتك
        </h1>
        <p className="lead reveal">
          العملاء، المشاريع، المهام، الملفات، وأتمتة العقود — في نظام واحد مدعوم
          بالذكاء الاصطناعي. بدلاً من الأدوات المتفرّقة، كل شيء في مكان واحد.
        </p>
        <div className="hero-actions reveal">
          <BookingLink className="btn btn-dark" as="a">اطلب عرضاً تجريبياً</BookingLink>
          <a href="#features" className="tlink">
            تعرّف على المنصة
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-visual reveal">
        <div className="mockup">
          <div className="mockup-bar"><i></i><i></i><i></i></div>
          <div className="mockup-body">
            <aside className="mside">
              <img src="/assets/logo-black.svg" alt="" className="mlogo" />
              <nav className="mnav">
                <span className="act">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>{' '}
                  المهام
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>{' '}
                  العملاء
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                    <path d="M13 2v7h7" />
                  </svg>{' '}
                  الملفات
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>{' '}
                  العقود
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21l2.3-7.1-6-4.5h7.6z" />
                  </svg>{' '}
                  المساعد الذكي
                </span>
              </nav>
            </aside>
            <main className="mmain">
              <div className="mh">
                <b>لوحة المهام</b>
                <span className="mbtn">+ مهمة جديدة</span>
              </div>
              <div className="kanban">
                <div className="kcol">
                  <h5><span className="pill h"></span> تحت التنفيذ</h5>
                  <div className="kcard">
                    <div className="t">إعداد القوائم المالية — عميل ألفا</div>
                    <div className="meta"><span className="tag">محاسبة</span><span className="av">أح</span></div>
                  </div>
                  <div className="kcard">
                    <div className="t">مراجعة عقد التوريد</div>
                    <div className="meta"><span className="tag">عقود</span><span className="av">سا</span></div>
                  </div>
                </div>
                <div className="kcol">
                  <h5><span className="pill o"></span> تحت المراجعة</h5>
                  <div className="kcard">
                    <div className="t">تقرير الزكاة والضريبة</div>
                    <div className="meta"><span className="tag">ضريبة</span><span className="av">من</span></div>
                  </div>
                </div>
                <div className="kcol">
                  <h5><span className="pill"></span> مغلقة</h5>
                  <div className="kcard">
                    <div className="t">عرض سعر — مشروع بيتا</div>
                    <div className="meta"><span className="tag">منجز</span><span className="av">عب</span></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
