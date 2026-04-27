import { ArrowLeft, Music, Star, Calendar, Mail } from 'lucide-react';

const title = "موقع بسيط عن ام كلثوم";
const desc = "موقع بسيط عن ام كلثوم";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground" dir="rtl">
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <strong className="text-lg">{title}</strong>
          <nav className="hidden gap-5 text-sm text-muted-foreground sm:flex">
            <a href="#about">نبذة</a><a href="#highlights">الأقسام</a><a href="#contact">تواصل</a>
          </nav>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"><Star className="h-4 w-4" /> نسخة أولية جاهزة للنشر</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{desc}</p>
          <a href="#about" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground"><ArrowLeft className="h-4 w-4" /> استكشف الموقع</a>
        </div>
        <div className="rounded-lg border border-border bg-secondary p-6 shadow-sm">
          <Music className="mb-8 h-12 w-12 text-primary" />
          <div className="grid gap-4">
            {['تصميم متجاوب للموبايل', 'صفحات أساسية كاملة', 'جاهز للبناء والنشر فورًا'].map((item) => <div key={item} className="rounded-md bg-background p-4 font-medium">{item}</div>)}
          </div>
        </div>
      </section>
      <section id="about" className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-4 text-3xl font-bold">نبذة</h2>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">تم تجهيز هذا الموقع كأساس عملي يحتوي على هيكل واضح ومحتوى أولي وتصميم مناسب للهاتف، ويمكن تطويره بإضافة صور، أقسام تفصيلية، ونماذج تواصل حسب الحاجة.</p>
        </div>
      </section>
      <section id="highlights" className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-3">
        {[['الرئيسية', 'واجهة واضحة ومقدمة قوية'], ['صفحة المعلومات', 'تعريف ومحتوى منظم'], ['التواصل', 'قسم جاهز للربط لاحقًا']].map(([h, p]) => <article key={h} className="rounded-lg border border-border p-5"><Calendar className="mb-4 h-6 w-6 text-accent" /><h3 className="mb-2 text-xl font-bold">{h}</h3><p className="text-muted-foreground">{p}</p></article>)}
      </section>
      <footer id="contact" className="border-t border-border px-4 py-8 text-center text-muted-foreground">
        <Mail className="mx-auto mb-3 h-5 w-5" /> جاهز للتخصيص والنشر على Cloudflare Pages
      </footer>
    </main>
  );
}

export default App;
