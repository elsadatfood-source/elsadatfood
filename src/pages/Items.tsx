import { useState } from 'react'
import { menuCategories } from '../data/ItemsData'

const ICONS: Record<string, string> = {
  crepe: '🥙', syrian: '🫓', pizza: '🍕', pasta: '🍝', dessert: '🍫', meals: '🍱',
}

function BadgeLabel({ badge }: { badge?: string }) {
  if (!badge) return null
  const cls = badge === 'best' ? 'best-badge' : badge === 'new' ? 'new-badge' : 'special-badge'
  const label = badge === 'best' ? '⭐ الأكثر طلباً' : badge === 'new' ? '✨ جديد' : '🔥 مميز'
  return <span className={cls}>{label}</span>
}

function PriceDisplay({ price }: { price: string | { small: string; medium: string; large: string } }) {
  if (typeof price === 'string') {
    return <span className="price-tag text-lg">{price}</span>
  }
  return (
    <div className="flex gap-2 flex-wrap">
      <span className="text-xs px-2 py-1 rounded-lg" style={{ background: 'rgba(166,90,42,0.1)', color: 'var(--copper-light)', fontFamily: 'Cairo, sans-serif' }}>
        صغير: {price.small} EGP
      </span>
      <span className="text-xs px-2 py-1 rounded-lg" style={{ background: 'rgba(166,90,42,0.1)', color: 'var(--copper-light)', fontFamily: 'Cairo, sans-serif' }}>
        وسط: {price.medium} EGP
      </span>
      <span className="text-xs px-2 py-1 rounded-lg" style={{ background: 'rgba(166,90,42,0.1)', color: 'var(--copper-light)', fontFamily: 'Cairo, sans-serif' }}>
        كبير: {price.large} EGP
      </span>
    </div>
  )
}

export default function Menu() {
  const [activeId, setActiveId] = useState('all')

  const filtered = activeId === 'all'
    ? menuCategories
    : menuCategories.filter((c) => c.id === activeId)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-radial">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider justify-center mb-4"></div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            الأصناف
          </h1>
          <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            تشكيلة متنوعة من أشهى الأكلات
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveId('all')}
            className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300"
            style={{
              fontFamily: 'Cairo, sans-serif',
              background: activeId === 'all' ? 'var(--red)' : 'rgba(244,239,229,0.06)',
              color: activeId === 'all' ? '#fff' : 'var(--cream-muted)',
              border: '1px solid',
              borderColor: activeId === 'all' ? 'var(--red)' : 'rgba(244,239,229,0.1)',
            }}
          >
            الكل
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              id={cat.id}
              className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300"
              style={{
                fontFamily: 'Cairo, sans-serif',
                background: activeId === cat.id ? 'var(--red)' : 'rgba(244,239,229,0.06)',
                color: activeId === cat.id ? '#fff' : 'var(--cream-muted)',
                border: '1px solid',
                borderColor: activeId === cat.id ? 'var(--red)' : 'rgba(244,239,229,0.1)',
              }}
            >
              {ICONS[cat.id]} {cat.name}
            </button>
          ))}
        </div>

        {/* Menu sections */}
        {filtered.map((cat) => (
          <div key={cat.id} className="mb-14">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">{ICONS[cat.id]}</div>
              <div>
                <h2 className="text-2xl font-black" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  {cat.name}
                </h2>
                <span className="text-sm" style={{ color: 'var(--copper)', fontFamily: 'Cairo, sans-serif' }}>{cat.nameEn}</span>
              </div>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(166,90,42,0.4), transparent)' }} />
              <span className="text-sm" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                {cat.items.length} صنف
              </span>
            </div>

            {/* Items grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="food-card-hover flex flex-col gap-3 overflow-hidden rounded-2xl border transition-all duration-300 shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.96), rgba(103,17,2,0.95))',
                    borderColor: 'rgba(138,17,1,0.76)'
                  }}
                >
                  <div className="w-full h-48 relative overflow-hidden bg-zinc-900/50 border-b border-red-800/30 shadow-lg flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) parent.innerHTML = `<span class="text-4xl">${ICONS[cat.id] || '🍔'}</span>`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">{ICONS[cat.id]}</div>
                    )}

                    {item.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <BadgeLabel badge={item.badge} />
                      </div>
                    )}
                  </div>

                  {/* محتوى الكارد الداخلي */}
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <div className="font-bold text-base" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                      {item.name}
                    </div>

                    {item.description && (
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                        {item.description}
                      </p>
                    )}

                    <div className="mt-auto">
                      <PriceDisplay price={item.price} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
