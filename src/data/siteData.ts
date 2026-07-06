// EL SADAT - Site Data
export const siteInfo = {
  name: 'السادات',
  nameEn: 'El Sadat',
  slogan: 'الأكل مش مجرد طعم... دا مزاج',
  tagline: 'عشان كدا السادات .. عُمدة الأكل',
  description: 'مطعم سريع فاخر - El Sadat Luxury Fast Food & Grill House',
  phone: '01070285486',
  phoneDisplay: '01070285486',
  address: 'كفر حجازي',
  addressFull: 'كفر حجازي - بجوار مكتب البريد - قرب مسجد النادي',
  googleMaps: 'https://maps.app.goo.gl/herefcWdZNjBD9fS7',
  facebook: 'https://www.facebook.com/share/1EYWKqJX2u/',
  hours: 'من 12 ظهراً - 2 صباحاً',
};

export const navLinks = [
  { name: 'الرئيسية', href: '/' },
  { name: 'الأصناف', href: '/Items' },
  { name: 'العروض', href: '/offers' },
  { name: 'المعرض', href: '/gallery' },
  { name: 'كواليس', href: '/behind-scenes' },
  { name: 'من نحن', href: '/about' },
  { name: 'تواصل معنا', href: '/contact' },
];

export const statistics = [
  { value: '2K+', label: 'عميل سعيد', icon: 'Users' },
  { value: '50+', label: 'صنف متنوع', icon: 'Utensils' },
  { value: '1.5', label: 'سنوات خبرة', icon: 'Award' },
  { value: '7.9', label: 'تقييم العملاء', icon: 'Star' },
];

export const categoriesPreview = [
  { id: 'crepe', name: 'الكريب', nameEn: 'Crêpe', count: '13 صنف', icon: 'UtensilsCrossed' },
  { id: 'syrian', name: 'السوري', nameEn: 'Syrian', count: '11 صنف', icon: 'Sandwich' },
  { id: 'pizza', name: 'البيتزا', nameEn: 'Pizza', count: '5 أحجام', icon: 'Pizza' },
  { id: 'pasta', name: 'المكرونة', nameEn: 'Pasta', count: '4 أصناف', icon: 'CookingPot' },
  { id: 'dessert', name: 'الحلو', nameEn: 'Desserts', count: '4 أصناف', icon: 'Cookie' },
  { id: 'meals', name: 'الوجبات', nameEn: 'Meals', count: '2 وجبة', icon: 'ChefHat' },
];

export const whyChooseUs = [
  {
    title: 'مكونات طازجة',
    description: 'نستخدم أ freshest ingredients يومياً',
    icon: 'Leaf',
  },
  {
    title: 'جودة عالية',
    description: 'لا نتنازل عن الجودة أبداً',
    icon: 'Award',
  },
  {
    title: 'خدمة سريعة',
    description: 'طلبك جاهز في أسرع وقت',
    icon: 'Timer',
  },
];

export const behindScenesSteps = [
  {
    id: '1',
    title: 'الخامات',
    description: 'نختار أفضل الخامات الطازجة يومياً',
    image: "/images/Behind the scenes/1.png"
  },
  {
    id: '2',
    title: 'التحضير',
    description: 'تحضير دقيق تحت إشراف الشيف',
    image: "/images/Behind the scenes/2.png"
  },
  {
    id: '3',
    title: 'الطهي',
    description: 'شوي على الفحم بنكهة أصلية',
    image: "/images/Behind the scenes/3.png"
  },
  {
    id: '4',
    title: 'التغليف',
    description: 'تغليف ممتاز يحافظ على الطعم',
    image: "/images/Behind the scenes/4.png"
  },

];

export const galleryImages = [
  { id: '1', category: 'food', src: "/images/Gallery/كريب شاورما فراخ.png", alt: 'كريب شاورما فراخ' },
  { id: '2', category: 'food', src: "/images/Gallery/بيتزا فراخ.png", alt: 'بيتزا فراخ' },
  { id: '3', category: 'food', src: "/images/Gallery/سوري شاورما.png", alt: 'سوري شاورما' },
  { id: '4', category: 'food', src: "/images/Gallery/كريب بانيه كرسبي.png", alt: 'كريب بانيه كرسبي' },
  { id: '5', category: 'food', src: "/images/Gallery/نجرسكو فراخ.jpg", alt: 'نجرسكو فراخ' },
  { id: '6', category: 'food', src: "/images/Gallery/كريب زنجر.jpg", alt: 'كريب زنجر' },
  { id: '7', category: 'food', src: "/images/Gallery/كريب مكس لحوم.png", alt: 'كريب مكس لحوم' },
  { id: '8', category: 'food', src: "/images/Gallery/وجبة كرسبي.png", alt: 'وجبة كرسبي' },
  { id: '9', category: 'food', src: "/images/Gallery/سوري حلو.png", alt: 'سوري حلو' },
];

export const testimonials = [
  {
    id: '1',
    name: 'أحمد محمد',
    text: 'أفضل كريب شاورما جربته في حياتي! النكهة ممتازة والجودة عالية جداً',
    rating: 5,
  },
  {
    id: '2',
    name: 'سارة علي',
    text: 'البيتزا عندهم رهيبة! العجينة طرية والحشو كتير والطعم لا يقاوم',
    rating: 5,
  },
  {
    id: '3',
    name: 'محمد إبراهيم',
    text: 'خدمة سريعة وأكل نظيف وطازج. السوري عندهم ممتاز',
    rating: 5,
  },
];
