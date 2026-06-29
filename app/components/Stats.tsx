const STATS = [
  { n: '9', l: 'منظومات في نظام واحد' },
  { n: '∞', l: 'مشاريع ومهام بلا حدود' },
  { n: '24/7', l: 'مساعد ذكي لا يتوقف' },
  { n: '100%', l: 'شفافية عبر سجل التغييرات' },
];

export function Stats() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head reveal">
          <p className="kick">القيمة الحقيقية</p>
          <h2>أكثر من مجرد برنامج مهام</h2>
        </div>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className="stat reveal" key={i}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
