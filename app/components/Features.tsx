const FEATURES = [
  {
    title: 'إدارة العملاء',
    desc: 'ملف موحّد لكل عميل يجمع بياناته ومشاريعه وملفاته وعقوده وعروض أسعاره ومهامه.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'إدارة المشاريع',
    desc: 'عدد غير محدود من المشاريع، كل منها بأعضائه ومهامه وملفاته ومحادثاته وتقاريره.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      </svg>
    ),
  },
  {
    title: 'إدارة المهام',
    desc: 'قلب النظام: وصف وتاريخ استحقاق ومرفقات وتعليقات وقوائم تحقق ومهام فرعية.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: 'إدارة الملفات',
    desc: 'PDF و Word و Excel والصور، مرتبطة مباشرة بالعملاء والمشاريع والمهام.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <path d="M13 2v7h7" />
      </svg>
    ),
  },
  {
    title: 'الذكاء الاصطناعي',
    desc: 'يلخّص المشاريع والمهام، يحلّل الملفات، يستخرج المعلومات، ويجيب على أسئلتك.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21l2.3-7.1-6-4.5h7.6z" />
      </svg>
    ),
  },
  {
    title: 'أتمتة العقود',
    desc: 'أدخل بيانات العميل وسيُنشئ النظام عقداً وعرض سعر جاهزين من قوالبك المعتمدة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'صلاحيات متقدمة',
    desc: 'تحكّم دقيق لكل مستخدم في إنشاء وتعديل المهام والمشاريع والعملاء والعقود.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'التقارير',
    desc: 'رؤية واضحة لنسب الإنجاز والمتأخرات وأداء الفريق على كل مستوى.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.8L7 14.3" />
      </svg>
    ),
  },
  {
    title: 'سجل التغييرات',
    desc: 'كل عملية تُسجَّل تلقائياً مع المستخدم والوقت لشفافية كاملة ومساءلة دقيقة.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="sec" id="features">
      <div className="container">
        <div className="sec-head reveal">
          <p className="kick">منظومة متكاملة</p>
          <h2>نظام واحد يدير دورة عملك بالكامل</h2>
          <p>تسع منظومات متكاملة تعمل معاً لتمنحك سيطرة كاملة على شركتك.</p>
        </div>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div className="feat reveal" key={i}>
              <div className="fi">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
