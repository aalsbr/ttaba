import { Check } from './icons';

export function AIShowcase() {
  return (
    <section className="show" id="ai">
      <div className="container show-grid">
        <div className="show-text reveal">
          <p className="kick">الذكاء الاصطناعي</p>
          <h2>مساعد ذكي يعرف كل شيء عن أعمالك</h2>
          <p>
            جزء أساسي من تتبَّع — يقرأ مشاريعك وملفاتك ومهامك، ويمنحك الإجابات
            والملخصات التي تحتاجها فوراً.
          </p>
          <ul>
            <li><Check /> تلخيص المشاريع والمهام وتحليل الملفات</li>
            <li><Check /> استخراج المعلومات من المستندات</li>
            <li><Check /> متابعة حالة الأعمال ورصد المتأخرات ونسب الإنجاز</li>
          </ul>
        </div>
        <div className="show-visual reveal">
          <div className="visual-card">
            <div className="chat-head">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21l2.3-7.1-6-4.5h7.6z" />
                </svg>
              </div>
              <div>
                <b>مساعد تتبَّع</b>
                <br />
                <small>● متصل الآن</small>
              </div>
            </div>
            <div className="bubble u">ما حالة مشروع عميل ألفا؟ وهل توجد مهام متأخرة؟</div>
            <div className="bubble a">
              مشروع <span className="hl">عميل ألفا</span> منجز بنسبة{' '}
              <span className="hl">84%</span>. توجد <span className="hl">3 مهام متأخرة</span>:
              مراجعة العقد، تقرير الضريبة، وتدقيق الفواتير. هل ترغب أن ألخّص آخر التحديثات؟
            </div>
            <div className="bubble u">نعم، ولخّص لي العقد المرفق</div>
            <div className="bubble a">
              <div className="typing"><i></i><i></i><i></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WeeklySchedule() {
  const days = [
    { h: 'السبت', tasks: [['إعداد الميزانية', ''], ['مراجعة فواتير', 'o']] },
    { h: 'الأحد', tasks: [['عقد عميل جديد', '']] },
    { h: 'الإثنين', tasks: [['تقرير ضريبي', 'o'], ['متابعة عميل', '']] },
    { h: 'الثلاثاء', tasks: [['تدقيق حسابات', '']] },
    { h: 'الأربعاء', tasks: [['عرض سعر', ''], ['اجتماع فريق', 'o']] },
    { h: 'الخميس', tasks: [['إقفال أسبوعي', '']] },
  ];
  return (
    <section className="show">
      <div className="container show-grid rev">
        <div className="show-text reveal">
          <p className="kick">الجدول الأسبوعي</p>
          <h2>نظّم أسبوع فريقك بالسحب والإفلات</h2>
          <p>
            لكل موظف لوحة أسبوعية من السبت إلى الخميس. اسحب المهام وأفلتها بين
            الأيام، وأعد توزيعها حسب الصلاحيات.
          </p>
          <ul>
            <li><Check /> لوحة أسبوعية مستقلة لكل موظف</li>
            <li><Check /> سحب وإفلات سلس بين أيام الأسبوع</li>
            <li><Check /> المدير يعيد توزيع المهام حسب الأولوية</li>
          </ul>
        </div>
        <div className="show-visual reveal">
          <div className="visual-card">
            <div className="week">
              {days.map((d, i) => (
                <div className="wday" key={i}>
                  <h6>{d.h}</h6>
                  {d.tasks.map(([t, o], j) => (
                    <div className={'wtask' + (o ? ' o' : '')} key={j}>{t}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContractAutomation() {
  return (
    <section className="show">
      <div className="container show-grid">
        <div className="show-text reveal">
          <p className="kick">أتمتة العقود</p>
          <h2>عقود وعروض أسعار جاهزة بضغطة زر</h2>
          <p>
            لا مزيد من الكتابة اليدوية. أدخل بيانات العميل، وسيُولّد تتبَّع عقداً
            وعرض سعر احترافياً من قوالبك المعتمدة في ثوانٍ.
          </p>
          <ul>
            <li><Check /> قوالب عقود وعروض أسعار معتمدة</li>
            <li><Check /> تعبئة بيانات العميل تلقائياً</li>
            <li><Check /> توفير ساعات من العمل المتكرر في كل صفقة</li>
          </ul>
        </div>
        <div className="show-visual reveal">
          <div className="visual-card">
            <div className="doc">
              <div className="dh">
                <b>عقد تقديم خدمات</b>
                <span className="stamp">جاهز ✓</span>
              </div>
              <div className="line m"></div>
              <div className="line"></div>
              <div className="line s"></div>
              <div className="doc-fields">
                <div className="df">اسم العميل</div>
                <div className="df">القيمة</div>
                <div className="df">المدة</div>
              </div>
              <div className="line" style={{ marginTop: 18 }}></div>
              <div className="line m"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuditLog() {
  const logs = [
    { a: 'أح', body: (<><b>أحمد</b> غيّر حالة المهمة من <span className="badge-s">تحت التنفيذ</span> إلى <span className="badge-s">تحت المراجعة</span><time>اليوم 10:32 ص</time></>) },
    { a: 'سا', body: (<><b>سارة</b> أضافت مرفقاً جديداً إلى مشروع عميل بيتا<time>اليوم 09:15 ص</time></>) },
    { a: 'من', body: (<><b>منى</b> أنشأت عرض سعر جديداً لعميل ألفا<time>أمس 04:48 م</time></>) },
    { a: 'عب', body: (<><b>عبدالله</b> اعتمد المهمة وأغلقها<time>أمس 02:20 م</time></>) },
  ];
  return (
    <section className="show">
      <div className="container show-grid rev">
        <div className="show-text reveal">
          <p className="kick">الشفافية والمساءلة</p>
          <h2>سجل تغييرات كامل وصلاحيات محكمة</h2>
          <p>
            كل عملية داخل النظام تُسجَّل تلقائياً مع اسم المستخدم والوقت. تعرف من
            فعل ماذا ومتى — شفافية مطلقة وأمان كامل لبياناتك.
          </p>
          <ul>
            <li><Check /> تسجيل تلقائي لكل التغييرات والإجراءات</li>
            <li><Check /> صلاحيات مخصصة بدقة لكل مستخدم</li>
            <li><Check /> حماية ومساءلة على مستوى كل عملية</li>
          </ul>
        </div>
        <div className="show-visual reveal">
          <div className="visual-card">
            {logs.map((l, i) => (
              <div className="log-item" key={i}>
                <div className="la">{l.a}</div>
                <div className="lt">{l.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
