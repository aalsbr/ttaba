'use client';

import { useEffect, useState } from 'react';
import { useBooking } from './BookingContext';

const MONTHS = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];
const WEEK = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

const pad = (n: number) => String(n).padStart(2, '0');

type Time = { h: number; mi: number };

function startOfToday() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return t;
}

export function BookingModal() {
  const { isOpen, close } = useBooking();

  const [mounted, setMounted] = useState(false);
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState<Date | null>(null);
  const [selDate, setSelDate] = useState<Date | null>(null);
  const [selTime, setSelTime] = useState<Time | null>(null);
  const [hourMode, setHourMode] = useState<12 | 24>(24);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Initialise dates on the client only — avoids SSR/CSR mismatch.
  useEffect(() => {
    const t = startOfToday();
    setToday(t);
    setView(new Date(t.getFullYear(), t.getMonth(), 1));
    setSelDate(new Date(t));
    setMounted(true);
  }, []);

  // Reset to the first step whenever the modal is (re)opened.
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelTime(null);
    }
  }, [isOpen]);

  // Escape to close.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  if (!mounted || !today || !view) return null;

  const fmtTime = (h: number, mi: number) => {
    if (hourMode === 24) return pad(h) + ':' + pad(mi);
    const ap = h < 12 ? 'ص' : 'م';
    let hh = h % 12;
    if (hh === 0) hh = 12;
    return hh + ':' + pad(mi) + ' ' + ap;
  };

  const dateLine = () =>
    !selDate
      ? ''
      : WEEK[selDate.getDay()] +
        '، ' +
        selDate.getDate() +
        ' ' +
        MONTHS[selDate.getMonth()] +
        ' ' +
        selDate.getFullYear();

  const timeRange = () => {
    if (!selTime) return '';
    const eh = selTime.mi === 30 ? selTime.h + 1 : selTime.h;
    const em = selTime.mi === 30 ? 0 : 30;
    return fmtTime(selTime.h, selTime.mi) + ' – ' + fmtTime(eh, em);
  };

  // ----- calendar cells -----
  const y = view.getFullYear();
  const m = view.getMonth();
  const first = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  const cells: React.ReactNode[] = [];
  for (let i = 0; i < first; i++) {
    cells.push(<div key={`e${i}`} className="cal-cell empty" />);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(y, m, d);
    const isPast = date < today;
    const isToday = date.getTime() === today.getTime();
    const isSel = !!selDate && date.getTime() === selDate.getTime();
    const cls = ['cal-cell'];
    if (!isPast) {
      cls.push('avail');
      if (isToday && !isSel) cls.push('today');
      if (isSel) cls.push('sel');
    }
    cells.push(
      <button
        key={d}
        className={cls.join(' ')}
        disabled={isPast}
        onClick={() => {
          setSelDate(date);
          setSelTime(null);
        }}
      >
        {d}
      </button>
    );
  }

  // ----- time slots -----
  const slots: React.ReactNode[] = [];
  if (selDate) {
    const now = new Date();
    const isToday = selDate.getTime() === today.getTime();
    for (let h = 9; h <= 22; h++) {
      for (const mi of [0, 30]) {
        if (h === 22 && mi === 30) continue; // آخر موعد 10:00 مساءً
        if (isToday && (h < now.getHours() || (h === now.getHours() && mi <= now.getMinutes()))) continue;
        slots.push(
          <button
            key={`${h}:${mi}`}
            className="slot"
            onClick={() => {
              setSelTime({ h, mi });
              setStep(2);
            }}
          >
            {fmtTime(h, mi)}
          </button>
        );
      }
    }
  }

  const prevDisabled = y === today.getFullYear() && m === today.getMonth();

  return (
    <div
      className={'modal' + (isOpen ? ' open' : '')}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="modal-card wide">
        <div className="book">
          {/* Info panel (right in RTL) */}
          <aside className="book-info">
            <div className="ava">تت</div>
            <div className="org">تتبَّع</div>
            <h4>عرض توضيحي للمنصة</h4>
            {step >= 2 && (
              <div className="meta hl" style={{ display: 'flex' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span dangerouslySetInnerHTML={{ __html: dateLine() + '<br>' + timeRange() }} />
              </div>
            )}
            <div className="meta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>{' '}
              30 دقيقة
            </div>
            <div className="meta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.5-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
              </svg>{' '}
              اجتماع عبر الإنترنت
            </div>
            <div className="meta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
              </svg>{' '}
              Asia/Riyadh — توقيت الرياض
            </div>
          </aside>

          {/* Main */}
          <div className="book-main">
            <button className="bclose" aria-label="إغلاق" onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* STEP 1: calendar + slots */}
            {step === 1 && (
              <div>
                <div className="cal-wrap">
                  <div className="cal-side">
                    <div className="cal-head">
                      <span className="mname">{MONTHS[m] + ' ' + y}</span>
                      <div className="cal-nav">
                        <button
                          aria-label="السابق"
                          disabled={prevDisabled}
                          onClick={() => setView(new Date(y, m - 1, 1))}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 6l6 6-6 6" />
                          </svg>
                        </button>
                        <button aria-label="التالي" onClick={() => setView(new Date(y, m + 1, 1))}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 6l-6 6 6 6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="cal-dow">
                      <span>الأحد</span><span>الإثنين</span><span>الثلاثاء</span>
                      <span>الأربعاء</span><span>الخميس</span><span>الجمعة</span><span>السبت</span>
                    </div>
                    <div className="cal-grid">{cells}</div>
                  </div>
                  <div className="slots-col">
                    <div className="slots-top">
                      <span className="slots-day">
                        {selDate ? WEEK[selDate.getDay()] + ' ' + selDate.getDate() : 'اختر يوماً'}
                      </span>
                      <div className="hr-toggle">
                        <button
                          className={hourMode === 12 ? 'on' : ''}
                          onClick={() => setHourMode(12)}
                        >
                          12س
                        </button>
                        <button
                          className={hourMode === 24 ? 'on' : ''}
                          onClick={() => setHourMode(24)}
                        >
                          24س
                        </button>
                      </div>
                    </div>
                    <div className="slots-list">
                      {!selDate ? (
                        <p className="slots-empty">اختر يوماً من التقويم لعرض الأوقات المتاحة.</p>
                      ) : slots.length === 0 ? (
                        <p className="slots-empty">لا توجد أوقات متاحة في هذا اليوم. اختر يوماً آخر.</p>
                      ) : (
                        slots
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: form */}
            {step === 2 && (
              <div>
                <form
                  className="book-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep(3);
                  }}
                >
                  <div className="bf-field">
                    <label>الاسم الكامل *</label>
                    <input type="text" name="name" placeholder="اكتب اسمك" required />
                  </div>
                  <div className="bf-field">
                    <label>البريد الإلكتروني *</label>
                    <input type="email" name="email" placeholder="name@company.com" required />
                  </div>
                  <div className="bf-field">
                    <label>رقم الجوال *</label>
                    <input type="tel" name="phone" placeholder="05xxxxxxxx" required />
                  </div>
                  <div className="bf-field">
                    <label>اسم الشركة / المكتب</label>
                    <input type="text" name="company" placeholder="اسم جهتك" />
                  </div>
                  <div className="bf-field">
                    <label>ملاحظات إضافية</label>
                    <textarea
                      name="notes"
                      placeholder="يُرجى مشاركة أي شيء من شأنه المساعدة على التحضير لاجتماعنا."
                    />
                  </div>
                  <div className="bf-actions">
                    <button type="submit" className="btn btn-dark">
                      تأكيد الحجز
                    </button>
                    <button type="button" className="bf-back" onClick={() => setStep(1)}>
                      عودة
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 3: success */}
            {step === 3 && (
              <div>
                <div className="book-success">
                  <div className="ok">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3>تم تأكيد موعدك بنجاح</h3>
                  <p>أرسلنا تفاصيل الاجتماع إلى بريدك الإلكتروني. نتطلّع للقائك في تتبَّع.</p>
                  <div className="sum">
                    <span>{dateLine()}</span>
                    <span>{timeRange()} — توقيت الرياض</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
