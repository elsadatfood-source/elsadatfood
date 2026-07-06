// EL SADAT - Complete Menu Data
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string | { small: string; medium: string; large: string };
  category: string;
  badge?: 'new' | 'best' | 'special';
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'crepe',
    name: 'الكريب',
    nameEn: 'Crêpe',
    icon: 'UtensilsCrossed',
    items: [
      { id: 'crepe-shawarma-chicken', name: 'كريب شاورما فراخ', price: '80 EGP', category: 'crepe', image: '/images/food/01_كريب_شاورما_فراخ.png', badge: 'best' },
      { id: 'crepe-zinger', name: 'كريب زنجر', price: '80 EGP', category: 'crepe', image: '/images/food/01_كريب_زنجر.png', badge: 'best' },
      { id: 'crepe-shish', name: 'كريب شيش', price: '80 EGP', category: 'crepe', image: '/images/food/01_كريب_شيش.png' },
      { id: 'crepe-fahita', name: 'كريب فاهيتا', price: '80 EGP', category: 'crepe', image: '/images/food/01_كريب_فاهيتا.png' },
      { id: 'crepe-pane-crispy', name: 'كريب بانيه كرسبي', price: '50 EGP', category: 'crepe', image: '/images/food/01_كريب_بانيه_كرسبي.png' },
      { id: 'crepe-sausage', name: 'كريب سوسيس', price: '70 EGP', category: 'crepe', image: '/images/food/01_كريب_سوسيس.png' },
      { id: 'crepe-burger', name: 'كريب برجر', price: '70 EGP', category: 'crepe', image: '/images/food/01_كريب_برجر.png' },
      { id: 'crepe-hotdog', name: 'كريب هوت دوج', price: '70 EGP', category: 'crepe', image: '/images/food/01_كريب_هوت_دوج.png' },
      { id: 'crepe-shawarma-meat', name: 'كريب شاورما لحمة', price: '70 EGP', category: 'crepe', image: '/images/food/01_كريب_شاورما_لحمة.png' },
      { id: 'crepe-sogok', name: 'كريب سجق', price: '75 EGP', category: 'crepe', image: '/images/food/01_كريب_سجق.png' },
      { id: 'crepe-potato', name: 'كريب بطاطس', price: '40 EGP', category: 'crepe', image: '/images/food/01_كريب_بطاطس.png' },
      { id: 'crepe-mix-chicken', name: 'كريب مكس فراخ', price: '100 EGP', category: 'crepe', image: '/images/food/01_كريب_مكس_فراخ.png', badge: 'special' },
      { id: 'crepe-mix-meat', name: 'كريب مكس لحوم', price: '100 EGP', category: 'crepe', image: '/images/food/01_كريب_مكس_لحوم.png', badge: 'special' },
    ],
  },
  {
    id: 'syrian',
    name: 'السوري',
    nameEn: 'Syrian Sandwiches',
    icon: 'Sandwich',
    items: [
      { id: 'syrian-potato', name: 'سوري بطاطس', price: '30 EGP', category: 'syrian', image: '/images/food/01_سوري_بطاطس.png' },
      { id: 'syrian-potato-mozzarella', name: 'سوري بطاطس موتزاريلا', price: '35 EGP', category: 'syrian', image: '/images/food/01_سوري_بطاطس_موتزاريلا.png' },
      { id: 'syrian-shawarma-chicken', name: 'سوري شاورما فراخ', price: '70 EGP', category: 'syrian', image: '/images/food/01_سوري_شاورما_فراخ.png', badge: 'best' },
      { id: 'syrian-shawarma-meat', name: 'سوري شاورما لحمة', price: '65 EGP', category: 'syrian', image: '/images/food/01_سوري_شاورما_لحمة.png' },
      { id: 'syrian-zinger', name: 'سوري زنجر', price: '70 EGP', category: 'syrian', image: '/images/food/01_سوري_زنجر.png' },
      { id: 'syrian-fahita', name: 'سوري فاهيتا', price: '70 EGP', category: 'syrian', image: '/images/food/01_سوري_فاهيتا.png' },
      { id: 'syrian-pane-crispy', name: 'سوري بانيه كرسبي', price: '40 EGP', category: 'syrian', image: '/images/food/01_سوري_بانيه_كرسبي.png' },
      { id: 'syrian-pane-potato', name: 'سوري بانيه على بطاطس', price: '60 EGP', category: 'syrian', image: '/images/food/01_سوري_بانيه_على_بطاطس.png' },
      { id: 'syrian-wazy', name: 'سوري وزي', price: '60 EGP', category: 'syrian', image: '/images/food/01_سوري_وزي.png' },
      { id: 'syrian-sogok', name: 'سوري سجق', price: '60 EGP', category: 'syrian', image: '/images/food/01_سوري_سجق.png' },
      { id: 'syrian-sausage', name: 'سوري سوسيس', price: '60 EGP', category: 'syrian', image: '/images/food/01_سوري_سوسيس.png' },
    ],
  },
  {
    id: 'pizza',
    name: 'البيتزا',
    nameEn: 'Pizza',
    icon: 'Pizza',
    items: [
      { id: 'pizza-chicken', name: 'بيتزا فراخ', price: { small: '100', medium: '130', large: '160' }, category: 'pizza', image: '/images/food/01_بيتزا_فراخ.png', badge: 'best' },
      { id: 'pizza-meat', name: 'بيتزا لحمة', price: { small: '100', medium: '130', large: '160' }, category: 'pizza', image: '/images/food/01_بيتزا_لحمة.png' },
      { id: 'pizza-sogok', name: 'بيتزا سجق', price: { small: '100', medium: '130', large: '160' }, category: 'pizza', image: '/images/food/01_بيتزا_سجق.png', badge: 'best' },
      { id: 'pizza-zinger', name: 'بيتزا زنجر', price: { small: '100', medium: '130', large: '160' }, category: 'pizza', image: '/images/food/01_بيتزا_زنجر.png' },
      { id: 'pizza-tuna', name: 'بيتزا تونة', price: { small: '110', medium: '140', large: '160' }, category: 'pizza', image: '/images/food/01_بيتزا_تونة.png' },
    ],
  },
  {
    id: 'pasta',
    name: 'المكرونة',
    nameEn: 'Pasta',
    icon: 'CookingPot',
    items: [
      { id: 'pasta-negresco-chicken', name: 'نجرسكو فراخ', price: { small: '75', medium: '75', large: '85' }, category: 'pasta', image: '/images/food/01_نجرسكو_فراخ.png' },
      { id: 'pasta-negresco-meat', name: 'نجرسكو لحمة', price: { small: '75', medium: '80', large: '85' }, category: 'pasta', image: '/images/food/01_نجرسكو_لحمة.png' },
      { id: 'pasta-negresco-mix-chicken', name: 'نجرسكو مشكل فراخ', price: { small: '100', medium: '110', large: '120' }, category: 'pasta', image: '/images/food/01_نجرسكو_مشكل_فراخ.png', badge: 'special' },
      { id: 'pasta-negresco-mix-meat', name: 'نجرسكو مشكل لحوم', price: { small: '90', medium: '110', large: '120' }, category: 'pasta', image: '/images/food/01_نجرسكو_مشكل_لحوم.png' },
    ],
  },
  {
    id: 'dessert',
    name: 'السوري الحلو',
    nameEn: 'Desserts',
    icon: 'Cookie',
    items: [
      { id: 'dessert-nutella', name: 'سوري نوتيلا', price: '35 EGP', category: 'dessert', image: '/images/food/01_سوري_نوتيلا.png' },
      { id: 'dessert-nutella-cream', name: 'سوري نوتيلا وكريميل', price: '40 EGP', category: 'dessert', image: '/images/food/01_سوري_نوتيلا_وكريميل.png' },
      { id: 'dessert-nutella-caramel', name: 'سوري نوتيلا كراميل وهوفر', price: '50 EGP', category: 'dessert', image: '/images/food/01_سوري_نوتيلا_كراميل_وهوفر.png' },
      { id: 'dessert-nutella-mix', name: 'سوري مكس نوتيلا', price: '60 EGP', category: 'dessert', image: '/images/food/01_سوري_مكس_نوتيلا.png', badge: 'special' },
    ],
  },
  {
    id: 'meals',
    name: 'الوجبات',
    nameEn: 'Meals',
    icon: 'ChefHat',
    items: [
      { id: 'meal-crispy', name: 'وجبة كرسبي', description: '٢ قطعة فراخ + أرز بسمتي + تومية + مخلل + عيش', price: '130 EGP', category: 'meals', image: '/images/food/01_وجبة_كرسبي.png', badge: 'best' },
      { id: 'meal-brost', name: 'وجبة بروست', description: '٢ قطعة فراخ + بطاطس + تومية + مخلل + عيش', price: '150 EGP', category: 'meals', image: '/images/food/01_وجبة_بروست.png', badge: 'special' },
    ],
  },
];

export const bestSellers = [
  { id: 'crepe-shawarma-chicken', name: 'كريب شاورما فراخ', price: '80 EGP', category: 'كريب', image: '/images/food/01_كريب_شاورما_فراخ.png', badge: 'best' as const },
  { id: 'pizza-sogok', name: 'بيتزا سجق', price: "130 EGP", category: 'بيتزا', image: '/images/food/01_بيتزا_سجق.png', badge: 'best' as const },
  { id: 'syrian-shawarma-chicken', name: 'سوري شاورما فراخ', price: '70 EGP', category: 'سوري', image: '/images/food/01_سوري_شاورما_فراخ.png', badge: 'best' as const },
  { id: 'meal-crispy', name: 'وجبة كرسبي', price: '130 EGP', category: 'وجبات', image: '/images/food/01_وجبة_كرسبي.png', badge: 'best' as const },
];

export const specialOffers = [
  {
    id: 'offer-1',
    title: 'عرض العائلة',
    description: '2 كريب + 1 بيتزا وسط ',
    oldPrice: '290',
    newPrice: '275',
    badge: 'special' as const,
    expiryDate: '24:5:2026 ',
    image: '/images/Offers/عرض العائلة.png',
  },
  {
    id: 'offer-2',
    title: 'عرض المكس',
    description: 'كريب مكس فراخ + كريب مكس لحوم',
    oldPrice: '200',
    newPrice: '180',
    badge: 'best' as const,
    expiryDate: '4:6:2026 ',
    image: '/images/Offers/عرض المكس.png',
  },
];