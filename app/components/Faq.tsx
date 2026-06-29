'use client';

import { useEffect, useRef, useState } from 'react';

const ITEMS = [
  {
    q: 'لمن صُمّم برنامج تتبَّع؟',
    a: 'صُمّم تتبَّع خصيصاً للشركات ومكاتب الاستشارات المهنية والمحاسبية والفرق التي تدير عدداً كبيراً من العملاء والمشاريع والمهام وتحتاج لتوحيد أعمالها في منصة واحدة.',
  },
  {
    q: 'كيف يساعدني الذكاء الاصطناعي فعلياً؟',
    a: 'يلخّص المشاريع والمهام، يحلّل الملفات ويستخرج منها المعلومات، يجيب على أسئلتك، ويتابع حالة الأعمال ليساعد المدير في معرفة المتأخرات ونسب الإنجاز فوراً.',
  },
  {
    q: 'هل يمكنني التحكم في صلاحيات كل موظف؟',
    a: 'نعم، يعتمد النظام على صلاحيات متقدمة تُخصَّص بشكل مستقل لكل مستخدم: إنشاء وتعديل وحذف المهام، وإدارة المشاريع والعملاء والعقود والمستخدمين.',
  },
  {
    q: 'كيف تعمل أتمتة العقود وعروض الأسعار؟',
    a: 'يحتوي النظام على نماذج عقود وعروض أسعار جاهزة. تُدخل بيانات العميل فيقوم تتبَّع بإنشاء عقد وعرض سعر جاهزين تلقائياً باستخدام قوالبك المعتمدة.',
  },
  {
    q: 'هل تُحفظ كل التغييرات داخل النظام؟',
    a: 'نعم، تُسجَّل جميع العمليات تلقائياً مع اسم المستخدم والوقت، مثل تغيير حالة مهمة من مرحلة لأخرى، لتوفير شفافية كاملة ومساءلة دقيقة.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  // Reveal state is owned by React so re-renders (on click) never drop the
  // `in` class — otherwise the clicked item would fall back to opacity:0.
  const [revealed, setRevealed] = useState<boolean[]>(() => ITEMS.map(() => false));
  const headRef = useRef<HTMLDivElement | null>(null);
  const [headIn, setHeadIn] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          if (el === headRef.current) {
            setHeadIn(true);
          } else {
            const idx = Number(el.dataset.idx);
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );
    if (headRef.current) io.observe(headRef.current);
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" id="faq" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div ref={headRef} className={'sec-head reveal' + (headIn ? ' in' : '')}>
          <p className="kick">الأسئلة الشائعة</p>
          <h2>كل ما تريد معرفته</h2>
        </div>
        <div className="faq-wrap">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              data-idx={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={
                'faq-item reveal' +
                (revealed[i] ? ' in' : '') +
                (open === i ? ' open' : '')
              }
            >
              <button
                className="faq-q"
                onClick={() => setOpen((cur) => (cur === i ? null : i))}
              >
                {item.q} <span className="pl"></span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
