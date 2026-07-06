import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { Phone, ChevronLeft, Star, Users, Utensils, Award, Flame } from 'lucide-react'
import { siteInfo, statistics, categoriesPreview, testimonials } from '../data/siteData'
import { bestSellers, specialOffers } from '../data/ItemsData'

// Simple icon map
const icons: Record<string, React.ReactNode> = {
  Users: <Users size={28} />,
  Utensils: <Utensils size={28} />,
  Award: <Award size={28} />,
  Star: <Star size={28} />,
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function BadgeLabel({ badge }: { badge?: string }) {
  if (!badge) return null
  const cls = badge === 'best' ? 'best-badge' : badge === 'new' ? 'new-badge' : 'special-badge'
  const label = badge === 'best' ? '⭐ الأكثر طلباً' : badge === 'new' ? '✨ جديد' : '🔥 مميز'
  return <span className={cls}>{label}</span>
}

export default function Home() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="bg-dark-radial relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 line-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chef Image */}
          <div className="lg:col-span-5 flex justify-center animate-scaleIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-2"
              style={{
                borderColor: 'rgb(144, 21, 34)',
                boxShadow: '0 0 40px rgb(213, 71, 2)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.2) 0%, rgba(14,11,8,0.9) 100%)'
              }}>
              <img
                src="/images/hero/hero-chef-2.png"
                alt="عمدة الأكل"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-radial via-transparent to-transparent opacity-60" />
            </div>
          </div>
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border animate-fadeIn"
              style={{
                background: 'rgba(174, 38, 0, 0.08)',
                borderColor: 'rgb(144, 21,34)',
                color: 'var(--copper-light)',
                fontFamily: 'Cairo, sans-serif',
                fontSize: 14
              }}>
              <Flame size={14} className="text-red-500 animate-pulse" />
              <span>مطعم سريع فاخر • Luxury Fast Food & Grill</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight animate-fadeInUp"
                style={{ fontFamily: 'Tajawal, sans-serif', color: 'var(--cream)', lineHeight: 0.95 }}>
                السادات
              </h1>
              <div className="text-3xl md:text-4xl font-extrabold text-gradient-copper animate-fadeInUp"
                style={{ fontFamily: 'Tajawal, sans-serif', animationDelay: '0.1s' }}>
                عُمدة الأكل
              </div>
            </div>

            {/* Slogan details */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl font-bold animate-fadeInUp"
                style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif', animationDelay: '0.2s' }}>
                "{siteInfo.slogan}"
              </p>
              <p className="text-sm md:text-base animate-fadeInUp leading-relaxed"
                style={{ color: 'var(--copper-light)', fontFamily: 'Cairo, sans-serif', animationDelay: '0.3s' }}>
                أكل فاخر بجودة عالية وطعم لا يُنسى مصنوع من أفضل المكونات الطازجة.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link to="/Items" className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base hover:scale-105 transition-all">
                <Utensils size={18} />
                عرض الأصناف
              </Link>
              <a href={`tel:${siteInfo.phone}`} target="_blank" rel="noreferrer"
                className="btn-outline flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base hover:scale-105 transition-all">
                <Phone size={18} />
                اطلب الآن
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-float pointer-events-none">
          <span className="text-[10px]" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>اسحب لأسفل</span>
          <div className="w-5 h-8 rounded-full border flex items-start justify-center pt-1"
            style={{ borderColor: 'rgb(144 ,21,  34)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section style={{ borderTop: '1px solid rgba(128, 7, 7, 0.99)', borderBottom: '1px solid rgba(128, 7, 7, 0.99)' }}>
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, i) => (
              <RevealSection key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(0, 0, 0, 1)', border: '1px solid rgb(144,21,34)', color: 'var(--red-light)' }}>
                  {icons[stat.icon]}
                </div>
                <div className="text-4xl font-black mb-1" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* سكشن كواليس الفيديو الجديد (تمت إضافته هنا قبل الأكثر طلباً) */}
      <section style={{ borderTop: '1px solid rgba(128, 7, 7, 0.99)' }} className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <RevealSection className="text-center mb-14">
            <div className="section-divider justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              معاك في كل مناسبه
            </h2>
            <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
              متقلش أكل .. قول السادات
            </p>
          </RevealSection>

          <RevealSection className="w-full flex justify-center">
            <div
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}
            >
              <video
                src="/images/Behind the scenes/El sadat.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section style={{ borderTop: '1px solid rgba(128, 7, 7, 0.99)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection className="text-center mb-14">
            <div className="section-divider justify-center mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              الأكثر طلباً
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((item) => (
              <RevealSection key={item.id}>
                <div
                  className="food-card-hover flex flex-col gap-3 overflow-hidden rounded-2xl h-full border transition-all duration-300 shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.96), rgba(103,17,2,0.95))',
                    borderColor: 'rgba(138,17,1,0.76)'
                  }}
                >
                  <div className="w-full h-48 relative overflow-hidden bg-zinc-900/50 shadow-lg flex items-center justify-center border-b border-red-800/30">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) parent.innerHTML = `<span class="text-5xl">${item.category === 'كريب' ? '🌯' : item.category === 'بيتزا' ? '🍕' : item.category === 'سوري' ? '🫓' : '🍔'}</span>`;
                        }}
                      />
                    ) : (
                      <div className="text-5xl">
                        {item.category === 'كريب' ? '🌯' : item.category === 'بيتزا' ? '🍕' : item.category === 'سوري' ? '🫓' : '🍔'}
                      </div>
                    )}

                    {item.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <BadgeLabel badge={item.badge} />
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <div className="font-bold text-base" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                      {item.name}
                    </div>

                    <div className="text-xs mb-2" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                      {item.category}
                    </div>

                    <div className="price-tag text-lg mt-auto">
                      {item.price}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY MOMENTS */}
      <section style={{ borderTop: '1px solid rgba(128, 7, 7, 0.99)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <RevealSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              لحظات مع عملاء السادات
            </h2>
            <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
              أحنا مش مطعم .. أحنا عيله
            </p>
          </RevealSection>

          <div className="flex flex-col items-center gap-12 w-full">
            {/* الصورة الأولى */}
            <div className="w-full max-w-3xl aspect-[1568/1024] rounded-xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}>
              <img
                src="/images/with family/1.png"
                alt="لحظات مع عملاء السادات"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* الصورة الثانية */}
            <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}>
              <img
                src="/images/with family/2.png"
                alt="لحظات مع عملاء السادات"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* الصورة الثالثة */}
            <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}>
              <img
                src="/images/with family/3.png"
                alt="لحظات مع عملاء السادات"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* الصورة الرابعة */}
            <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}>
              <img
                src="/images/with family/4.png"
                alt="لحظات مع عملاء السادات"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* الصورة الخامسة */}
            <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}>
              <img
                src="/images/with family/5.png"
                alt="لحظات مع عملاء السادات"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* الصورة السادسة */}
            <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
              style={{
                borderColor: 'rgba(135, 1, 1, 0.95)',
                boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
                background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}>
              <img
                src="/images/with family/6.png"
                alt="لحظات مع عملاء السادات"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <RevealSection className="text-center mb-14">
          <div className="section-divider justify-center mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            آراء عملائنا
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
            style={{
              borderColor: 'rgba(135, 1, 1, 0.95)',
              boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
              background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
            }}>
            <img
              src="/images/TESTIMONIALS/1.png"
              alt=" آراء عملائنا"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
            style={{
              borderColor: 'rgba(135, 1, 1, 0.95)',
              boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
              background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
            }}>
            <img
              src="/images/TESTIMONIALS/2.png"
              alt=" آراء عملائنا"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          <div className="w-full max-w-3xl aspect-[1536/1024] rounded-xl overflow-hidden border-2 relative"
            style={{
              borderColor: 'rgba(135, 1, 1, 0.95)',
              boxShadow: '0 0 30px rgba(140, 11, 1, 0.67)',
              background: 'linear-gradient(180deg, rgba(20,16,8,0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
            }}>
            <img
              src="/images/TESTIMONIALS/3.png"
              alt=" آراء عملائنا"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
      </section>

    </div>
  )
}