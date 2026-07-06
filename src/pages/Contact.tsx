import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Send, Facebook, Navigation } from 'lucide-react'
import { siteInfo } from '../data/siteData'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-dark-radial">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-divider justify-center mb-4"><span className="text-2xl">📞</span></div>
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
            تواصل معنا
          </h1>
          <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
            إحنا هنا في أي وقت - كلمنا وهنرد عليك
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">

          <a href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
            style={{ background: 'var(--red)', color: '#fff', fontFamily: 'Tajawal, sans-serif' }}>
            <Phone size={18} /> {siteInfo.phoneDisplay}
          </a>
          <a href={siteInfo.facebook} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
            style={{ background: '#1877F2', color: '#fff', fontFamily: 'Tajawal, sans-serif' }}>
            <Facebook size={18} /> فيسبوك
          </a>
          <a href={siteInfo.googleMaps} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
            style={{ background: 'var(--copper)', color: '#fff', fontFamily: 'Tajawal, sans-serif' }}>
            <Navigation size={18} /> الموقع على الخريطة
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              بياناتنا
            </h2>

            {/* Phone */}
            <a href={`tel:${siteInfo.phone}`} className="metal-card p-5 flex items-center gap-4 food-card-hover block"
              style={{ textDecoration: 'none' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(200,0,26,0.12)', border: '1px solid rgba(200,0,26,0.25)', color: 'var(--red-light)' }}>
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: 'var(--copper)', fontFamily: 'Cairo, sans-serif' }}>التليفون</div>
                <div className="font-bold text-lg" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif', direction: 'ltr' }}>
                  {siteInfo.phoneDisplay}
                </div>
              </div>
            </a>


            {/* Facebook */}
            <a href={siteInfo.facebook} target="_blank" rel="noreferrer"
              className="metal-card p-5 flex items-center gap-4 food-card-hover block" style={{ textDecoration: 'none' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(24,119,242,0.12)', border: '1px solid rgba(24,119,242,0.25)', color: '#1877F2' }}>
                <Facebook size={20} />
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: 'var(--copper)', fontFamily: 'Cairo, sans-serif' }}>فيسبوك</div>
                <div className="font-bold" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  صفحتنا على فيسبوك
                </div>
              </div>
            </a>

            {/* Location */}
            <a href={siteInfo.googleMaps} target="_blank" rel="noreferrer"
              className="metal-card p-5 flex items-center gap-4 food-card-hover block" style={{ textDecoration: 'none' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(166,90,42,0.12)', border: '1px solid rgba(166,90,42,0.25)', color: 'var(--copper-light)' }}>
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: 'var(--copper)', fontFamily: 'Cairo, sans-serif' }}>العنوان</div>
                <div className="font-bold" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  {siteInfo.addressFull}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--copper)', fontFamily: 'Cairo, sans-serif' }}>
                  اضغط لفتح Google Maps ←
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="metal-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(201,146,42,0.12)', border: '1px solid rgba(201,146,42,0.2)', color: '#C9922A' }}>
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs mb-1" style={{ color: 'var(--copper)', fontFamily: 'Cairo, sans-serif' }}>مواعيد العمل</div>
                <div className="font-bold" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                  {siteInfo.hours}
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="metal-card overflow-hidden" style={{ height: '200px' }}>
              <a href={siteInfo.googleMaps} target="_blank" rel="noreferrer"
                className="flex items-center justify-center h-full gap-3 transition-all hover:opacity-80"
                style={{ background: 'linear-gradient(135deg, rgba(166,90,42,0.1), rgba(200,0,26,0.08))', textDecoration: 'none' }}>
                <Navigation size={32} style={{ color: 'var(--copper-light)' }} />
                <div>
                  <div className="font-black text-lg" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
                    افتح الموقع على الخريطة
                  </div>
                  <div className="text-sm" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                    {siteInfo.addressFull}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black mb-8" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              ابعتلنا رسالة
            </h2>

            {sent ? (
              <div className="metal-card p-10 text-center"
                style={{ border: '1px solid rgba(76,201,133,0.3)', background: 'rgba(76,201,133,0.06)' }}>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--new)', fontFamily: 'Tajawal, sans-serif' }}>
                  تم إرسال رسالتك!
                </h3>
                <p style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                  هنتواصل معاك في أقرب وقت
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="metal-card p-8 space-y-5">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                    الاسم *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{
                      background: 'rgba(244,239,229,0.05)', border: '1px solid rgba(244,239,229,0.12)',
                      color: 'var(--cream)', fontFamily: 'Cairo, sans-serif',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--copper)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(244,239,229,0.12)' }}
                    placeholder="اسمك الكريم"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                    التليفون
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{
                      background: 'rgba(244,239,229,0.05)', border: '1px solid rgba(244,239,229,0.12)',
                      color: 'var(--cream)', fontFamily: 'Cairo, sans-serif',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--copper)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(244,239,229,0.12)' }}
                    placeholder="رقم تليفونك"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                    الرسالة *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                    style={{
                      background: 'rgba(244,239,229,0.05)', border: '1px solid rgba(244,239,229,0.12)',
                      color: 'var(--cream)', fontFamily: 'Cairo, sans-serif',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--copper)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(244,239,229,0.12)' }}
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={16} />
                  ابعت الرسالة
                </button>

                {/* Alternative contact */}
                <div className="pt-4 text-center" style={{ borderTop: '1px solid rgba(244,239,229,0.08)' }}>
                  <p className="text-xs mb-3" style={{ color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}>
                    أو تواصل معنا مباشرة
                  </p>
                  <div className="flex gap-3 justify-center">

                    <a href={siteInfo.facebook} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
                      style={{ background: '#1877F2', color: '#fff', fontFamily: 'Cairo, sans-serif' }}>
                      <Facebook size={14} /> فيسبوك
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
