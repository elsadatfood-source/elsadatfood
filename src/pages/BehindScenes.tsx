import { behindScenesSteps } from '../data/siteData'

export default function BehindScenes() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-radial">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-divider justify-center mb-4"></div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            كواليس السادات
          </h1>
          <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            من أول لحظة لآخر لحظة - شوف ازاي بنعمل أكلنا
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col gap-24 relative">
          {behindScenesSteps.map((step, i) => (
            <div key={step.id} className="relative flex flex-col items-center">

              {/* الخط الرابط الديناميكي: يمتد من أسفل الكارد الحالي إلى أعلى الكارد التالي */}
              {i < behindScenesSteps.length - 1 && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-0.5 z-0 hidden md:block"
                  style={{
                    top: '100%',
                    height: '96px', // نفس مسافة الـ gap بين العناصر (gap-24 تعادل 96px)
                    background: 'linear-gradient(180deg, var(--copper), var(--burgundy))'
                  }}
                />
              )}

              {/* هيكل الخطوة المستعرضة */}
              <div className={`flex gap-6 md:gap-12 items-center z-10 w-full justify-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>

                {/* المربع البرتقالي/النحاسي بداخله الرقم بحجم كبير */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black animate-copperGlow shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, var(--copper-dark), var(--copper))',
                      fontFamily: 'Tajawal, sans-serif',
                      color: '#fff',
                    }}>
                    {step.id}
                  </div>
                </div>

                {/* الكونتينر الرئيسي المحتوي على النص والصورة (مظبوط المقاس ومتسنتر) */}
                <div
                  className="p-6 rounded-xl flex flex-col items-center text-center gap-5 w-full max-w-xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    borderColor: 'rgba(135, 1, 1, 0.95)',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                    background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
                  }}
                >
                  {/* النصوص المتسنترة */}
                  <div className="max-w-md">
                    <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                      {step.title}
                    </h2>
                    <p className="leading-relaxed text-sm md:text-base" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>

                  {/* حاوية الصورة المتناسقة تماماً مع أبعاد 16:9 */}
                  {step.image && (
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative max-h-[280px] border border-white/5">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-xl p-10 text-center border-2"
          style={{
            borderColor: 'rgba(135, 1, 1, 0.95)',
            boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
            background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
          }}>
          <div className="text-5xl mb-4">❤️</div>
          <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            بنعمله بحب
          </h3>
          <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            كل صنف بيخرج من مطبخنا بعد مراحل دقيقة من التحضير والجودة
          </p>
        </div>
      </div>
    </div>
  )
}