import { Clock } from 'lucide-react'
import { specialOffers } from '../data/ItemsData'

export default function Offers() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-radial">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider justify-center mb-4"><span className="text-2xl">🎯</span></div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            العروض
          </h1>
          <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            عروض حصرية لفترة محدودة - استفد دلوقتي!
          </p>
        </div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specialOffers.map((offer) => (
            <div key={offer.id}
              className="metal-card food-card-hover overflow-hidden relative flex flex-col h-full rounded-2xl border transition-all duration-300 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.96), rgba(103,17,2,0.95))',
                borderColor: 'rgb(144, 21, 34)',
                borderWidth: '3px'
              }}>

              {/* Top accent */}
              <div className="h-2" style={{ background: 'linear-gradient(90deg, var(--red), var(--burgundy))' }} />

              {/* Container الصورة المربع المطور ليناسب صور 1:1 بدون قص */}
              <div className="w-full aspect-square relative overflow-hidden bg-zinc-900/40 flex items-center justify-center border-b border-red-800/20 shadow-inner">
                {offer.image ? (
                  <img
                    src={offer.image}
                    alt={offer.title}
                    // استخدام object-contain يضمن ظهور الوجبة المربعة كاملة 100% بدون زووم أو قص
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.innerHTML = `<span class="text-6xl">🔥</span>`;
                    }}
                  />
                ) : (
                  <div className="text-6xl">🔥</div>
                )}

                {/* Badge فوق الصورة */}
                <div className="absolute top-4 left-4 z-10">
                  {offer.badge === 'best' && <span className="best-badge shadow-lg">⭐ الأكثر طلباً</span>}
                  {offer.badge === 'special' && <span className="special-badge shadow-lg">🔥 عرض مميز</span>}
                </div>
              </div>

              {/* محتوى الكارد الداخلي */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-black mb-3" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  {offer.title}
                </h2>

                <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                  {offer.description}
                </p>

                {/* Prices */}
                <div className="flex items-baseline gap-3 mb-4 mt-auto">
                  <span className="text-4xl font-black" style={{ color: 'var(--copper-light)', fontFamily: 'Tajawal, sans-serif' }}>
                    {offer.newPrice} EGP
                  </span>
                  <span className="text-lg line-through" style={{ color: 'var(--cream-muted)' }}>
                    {offer.oldPrice} EGP
                  </span>
                  <span className="text-sm px-2 py-1 rounded-lg font-bold"
                    style={{ background: 'rgba(200,0,26,0.15)', color: 'var(--red-light)' }}>
                    وفر {Number(offer.oldPrice) - Number(offer.newPrice)} EGP
                  </span>
                </div>

                {/* Time left */}
                <div className="flex items-center gap-2 text-sm mb-6"
                  style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                  <Clock size={14} style={{ color: 'var(--red)' }} />
                  العرض ينتهي في : {offer.expiryDate}
                </div>

                <button className="btn-primary w-full">
                  اطلب العرض دلوقتي
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="metal-card p-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgb(144, 21, 34), rgba(139, 38, 7, 0.36))', border: '1px solid rgb(144, 21, 34)' }}>
          <div className="text-5xl mb-4">📞</div>
          <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            مش لاقي عرض يناسبك؟
          </h3>
          <p className="mb-6" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            كلمنا وهنعملك عرض على حسب احتياجك
          </p>
          <a href="tel:01001234567" className="btn-primary inline-block">
            اتصل بينا
          </a>
        </div>
      </div>
    </div>
  )
}
