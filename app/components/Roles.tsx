const ROLES = [
  {
    lvl: 'التنفيذ',
    title: 'المنفِّذ',
    desc: 'المسؤول عن تنفيذ المهمة وإنجاز العمل المطلوب ضمن الموعد المحدد.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a4 4 0 105.6 5.6l-3.5 3.5L12 21l-4-1-1-4 9.7-9.7z" />
        <path d="M9 12l3 3" />
      </svg>
    ),
  },
  {
    lvl: 'المراجعة',
    title: 'المراجِع',
    desc: 'المسؤول عن مراجعة العمل والتأكد من جودته قبل رفعه للاعتماد.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.3-4.3M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    lvl: 'الاعتماد',
    title: 'مدير المشروع',
    desc: 'المعتمِد النهائي للمهمة، صاحب القرار في إغلاقها وإعادة توزيع الأعمال.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L3.2 7.7l5.4-.8z" />
      </svg>
    ),
  },
];

export function Roles() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head reveal">
          <p className="kick">مسؤوليات واضحة</p>
          <h2>ثلاثة أدوار لكل مهمة</h2>
          <p>توزيع مسؤوليات دقيق يضمن أن كل مهمة تُنفَّذ وتُراجَع وتُعتمَد بشكل صحيح.</p>
        </div>
        <div className="roles-grid">
          {ROLES.map((r, i) => (
            <div className="role reveal" key={i}>
              <div className="rc">{r.icon}</div>
              <p className="lvl">{r.lvl}</p>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
