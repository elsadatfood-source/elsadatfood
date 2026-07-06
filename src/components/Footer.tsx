
import { siteInfo, } from '../data/siteData'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid rgba(244,239,229,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Bottom */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(244,239,229,0.07)', color: 'var(--cream-muted)', fontFamily: 'Cairo, sans-serif' }}
        >
          <span>© {new Date().getFullYear()} {siteInfo.name} - جميع الحقوق محفوظة</span>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                // 1. التحقق إذا كنا بالفعل داخل صفحة الـ about
                if (window.location.pathname.includes('/about')) {
                  const element = window.document.getElementById('designer-ramzi');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  // 2. إذا كنا في صفحة أخرى، نتوجه لصفحة الـ about مع إرسال الـ ID في الرابط
                  window.location.href = '/about#designer-ramzi';
                }
              }
            }}
            className="inline-flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 text-right focus:outline-none"
          >
            <span className="inline-flex items-center justify-center relative transition-transform duration-300 hover:scale-110" title="Mohamed Ramzi">
              <svg
                width="32"
                height="36"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 8px rgba(212, 15, 35, 1))' }}
              >
                <path
                  d="M12 2L3 5V11C3 16.55 6.84 21.74 12 24C17.16 21.74 21 16.55 21 11V5L12 2Z"
                  fill="#000000ff"
                  stroke="rgba(255, 255, 255, 0.85)"
                  strokeWidth="1.5"
                />
                <text
                  x="12"
                  y="16"
                  fill="#C8001A"
                  fontSize="9"
                  fontWeight="1000"
                  fontFamily="sans-serif"
                  textAnchor="middle"
                  letterSpacing="-0.5"
                >
                  M R
                </text>
              </svg>
            </span>

            <strong className="transition-colors duration-300 hover:text-red-500" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              محمد رمزي
            </strong>
          </button>

        </div>
      </div>
    </footer>
  )
}
