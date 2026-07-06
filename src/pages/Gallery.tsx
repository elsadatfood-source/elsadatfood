import { useState } from 'react'
import { galleryImages } from '../data/siteData'



const EMOJIS: Record<string, string> = {
  food: '',
}

const BG_COLORS = [
  'rgb(144,21,34)',
  'rgba(190, 78, 9, 0.7)',
  'rgba(138,21,56,0.08)',
  'rgba(200,0,26,0.06)',
  'rgba(166,90,42,0.08)',
  'rgba(76,201,133,0.06)',
]

export default function Gallery() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? galleryImages : galleryImages.filter((g) => g.category === active)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-radial">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider justify-center mb-4"></div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            المعرض
          </h1>
          <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            شوف أشهى أكلاتنا بعيونك
          </p>
        </div>

        {/* Filter */}


        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="aspect-square rounded-2xl overflow-hidden food-card-hover flex flex-col relative border transition-all duration-300 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.96), rgba(103,17,2,0.95))',
                borderColor: 'rgba(138,17,1,0.76)'
              }}
            >
              {/* عرض الصورة كاملة بداخل المربع */}
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-zinc-900/40">
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.innerHTML = `<span class="text-6xl">${EMOJIS[img.category] || '🍽️'}</span>`;
                    }}
                  />
                ) : (
                  <div className="text-6xl">{EMOJIS[img.category] ?? ''}</div>
                )}
              </div>

              {/* شريط سفلي خفيف لاسم الصورة ليكون واضح دائماً */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 text-center">
                <div className="text-sm font-bold text-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {img.alt}
                </div>
              </div>

              {/* تأثير الـ Hover المميز باللون الأحمر الخاص بالسادات */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl p-4 text-center backdrop-blur-sm"
                style={{ background: 'rgba(138,17,1,0.88)' }}
              >
                <div>
                  <div className="text-4xl mb-2">{EMOJIS[img.category] ?? ''}</div>
                  <div className="font-bold text-white text-base" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {img.alt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
