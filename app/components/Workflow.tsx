const STEPS = [
  { n: 1, h: 'لم يبدأ', p: 'المهمة جاهزة في قائمة الانتظار' },
  { n: 2, h: 'تحت التنفيذ', p: 'المنفّذ يعمل على المهمة' },
  { n: 3, h: 'تحت المراجعة', p: 'المراجع يدقّق العمل' },
  { n: 4, h: 'بانتظار الاعتماد', p: 'بانتظار موافقة مدير المشروع' },
  { n: 5, h: 'مغلقة', p: 'تم اعتماد المهمة وإنجازها' },
];

export function Workflow() {
  return (
    <section className="sec flow" id="workflow">
      <div className="container">
        <div className="sec-head reveal">
          <p className="kick">دورة عمل منظّمة</p>
          <h2>كل مهمة تمر بخمس مراحل</h2>
          <p>من اللحظة الأولى حتى الاعتماد النهائي، مع إشعارات تلقائية في كل انتقال.</p>
        </div>
        <div className="flow-track">
          {STEPS.map((s) => (
            <div className="fstep reveal" key={s.n}>
              <div className="num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
        <div className="flow-note reveal">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />
            </svg>{' '}
            إشعارات تلقائية لكل الأطراف عند كل انتقال بين المراحل
          </span>
        </div>
      </div>
    </section>
  );
}
