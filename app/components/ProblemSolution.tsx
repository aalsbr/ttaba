import { Check, Cross } from './icons';

const TRADITIONAL = [
  'مهام ضائعة بين محادثات الواتساب والإيميل',
  'ملفات وعقود متناثرة في عشرات المجلدات',
  'لا رؤية واضحة لحالة العمل أو المتأخرات',
  'كتابة العقود وعروض الأسعار يدوياً في كل مرة',
  'لا سجل واضح لمن فعل ماذا ومتى',
];

const WITH_TATABBA = [
  'كل مهمة بأدوارها ومراحلها وإشعاراتها التلقائية',
  'ملف موحّد لكل عميل: مشاريع وملفات وعقود ومهام',
  'الذكاء الاصطناعي يلخّص ويحلّل ويتابع نيابةً عنك',
  'عقود وعروض أسعار جاهزة بضغطة زر من قوالبك',
  'سجل تغييرات كامل وشفافية مطلقة داخل النظام',
];

export function ProblemSolution() {
  return (
    <section className="sec ps">
      <div className="container">
        <div className="sec-head reveal">
          <p className="kick">من الفوضى إلى النظام</p>
          <h2>أعمالك مبعثرة؟ تتبَّع يجمعها</h2>
          <p>إدارة العملاء والمهام عبر الواتساب والإيميل والإكسل تُضيّع الوقت وتُفقدك السيطرة.</p>
        </div>
        <div className="ps-grid">
          <div className="ps-card light reveal">
            <h3>الطريقة التقليدية</h3>
            <ul>
              {TRADITIONAL.map((t, i) => (
                <li key={i}><Cross /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="ps-card dark reveal">
            <h3>مع تتبَّع</h3>
            <ul>
              {WITH_TATABBA.map((t, i) => (
                <li key={i}><Check /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
