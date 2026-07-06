import { useEffect } from 'react'
import { whyChooseUs, statistics, siteInfo } from '../data/siteData'
import { Flame, Award, Leaf, Timer } from 'lucide-react'

const REASON_ICONS: Record<string, React.ReactNode> = {
  Leaf: <Leaf size={28} />,
  Award: <Award size={28} />,
  Flame: <Flame size={28} />,
  Timer: <Timer size={28} />,
}

export default function About() {

  // دمج الـ Effect لضمان عمل الـ Smooth Scroll عند الانتقال من صفحات أخرى
  useEffect(() => {
    if (window.location.hash === '#designer-ramzi') {
      const timer = setTimeout(() => {
        const element = document.getElementById('designer-ramzi');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // تأخير بسيط بمقدار 100ms لضمان تحميل العناصر

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-radial">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20 w-full max-w-2xl mx-auto flex justify-center items-center">
          <div className="section-divider justify-center mb-4"></div>
          <div className="w-full aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
            style={{
              borderColor: 'rgba(135, 1, 1, 0.95)',
              boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
              background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
            }}>
            <img
              src="/images/logo-2.png"
              alt="السادات"
              className="w-full h-full object-cover object-center transition-transform duration-7900 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* طبقة تدرج ناعمة تتماشى مع الهوية */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              من نحن
            </h1>
            <div className="space-y-4" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}>
              <p>
                - بدأت رحلة السادات بحلم بسيط: إن الأكل اللذيذ يكون متاح للجميع بجودة عالية وسعر معقول.
              </p>
              <p>
                - طورنا أكتر من {statistics[1].value} صنف متنوع.
              </p>
              <p>
                - سرنا هو البساطة في الخامات والإتقان في التحضير. كل صنف بيطلع من مطبخنا بقلب وإيد محترف.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {statistics.map((stat, i) => (
              <div key={i} className="metal-card p-6 text-center food-card-hover" style={{ borderColor: 'rgba(135, 1, 1, 0.95)', boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)', background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
                <div className="text-4xl font-black mb-2" style={{ color: 'var(--copper-light)', fontFamily: 'Tajawal, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why us */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            ليه السادات؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="metal-card food-card-hover p-6 text-center" style={{ borderColor: 'rgba(135, 1, 1, 0.95)', boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)', background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(166,90,42,0.12)', border: '1px solid rgba(166,90,42,0.2)', color: 'var(--copper)' }}>
                  {REASON_ICONS[item.icon]}
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="metal-card p-10 text-center mb-16"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.96), rgba(103,17,2,0.95))', borderColor: 'rgba(138,17,1,0.76)' }}>
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            رسالتنا
          </h3>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}>
            "{siteInfo.slogan}" - {siteInfo.tagline}
          </p>
        </div>

        {/* Designer Mohamed Ramzy Section */}
        <div id="designer-ramzi" className="metal-card p-8 md:p-12 relative overflow-hidden"
          style={{
            borderColor: 'rgba(138, 17, 1, 0.76)',
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.96) 0%, rgba(103, 17, 2, 0.95) 100%)'
          }}>
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full" />

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between relative z-10">
            <div className="space-y-4 text-center lg:text-right flex-1">
              <div className="w-full max-w-2xl mx-auto flex justify-center items-center">
                <div className="w-full max-w-2xl mx-auto aspect-[1536/1024] rounded-2xl overflow-hidden border-2 relative"
                  style={{
                    borderColor: 'rgba(135, 1, 1, 0.95)',
                    boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                    background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
                  }}>
                  <img
                    src="/images/mohamed ramzi.png"
                    alt="المصمم محمد رمزي"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-205"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* طبقة تدرج ناعمة تتماشى مع الهوية */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>
              <h3 className="text-3xl font-black" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                محمد رمزي
              </h3>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(10, 0, 0, 1)', border: '1px solid rgba(199, 191, 191, 0.85)', color: 'var(--red)' }}>
                🔒 مهندس في مجال الشبكات و الأمن السيبراني🌐
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                تم تصميم وتطوير هذه التجربة الرقمية التفاعلية بواسطة المصمم والمطور <strong>محمد رمزي</strong> لتجسيد الفخامة والأصالة التي يستحقها عملاء مطعم السادات.
              </p>

              {/* كروت الخصائص الصغيرة */}
              <div className="flex gap-4 justify-center lg:justify-start pt-2 flex-wrap">
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ borderColor: 'rgba(135, 1, 1, 0.95)', boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)', background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
                  رؤية إبداعية
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ borderColor: 'rgba(135, 1, 1, 0.95)', boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)', background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
                  أداء فائق السرعة
                </span>
                <span className="text-xs px-3 py-1.5 rounded-lg" style={{ borderColor: 'rgba(135, 1, 1, 0.95)', boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)', background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)' }}>
                  UX/UI مخصص
                </span>
              </div>

              {/* زر واتساب بيزنس المطور */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <a
                  href="https://wa.me/201100652469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-102"
                  style={{
                    background: 'rgba(10, 0, 0, 0.6)',
                    border: '1px solid rgba(138, 17, 1, 0.4)',
                    color: 'var(--cream)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(138, 17, 1, 0.9)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(138, 17, 1, 0.4)'}
                >
                  <svg className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366" />
                  </svg>
                  <span dir="ltr">01100652469</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}