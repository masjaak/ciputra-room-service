import React, { useState, useEffect } from 'react';
import { Plus, Minus, ChevronRight, Star, Building2, QrCode, CreditCard, ChevronLeft, CheckCircle2, Clock, Bell, Upload, X, Info } from 'lucide-react';

// --- DATA MENU LENGKAP (40 ITEMS) ---
const MENU_ITEMS = [
  // APPETIZER
  {
    id: 1,
    name: "Lumpia Semarang",
    description: "Famous local spring rolls with bamboo shoots, served with sweet garlic sauce.",
    price: 45000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?auto=format&fit=crop&w=800&q=80",
    tag: "Local Icon",
    allergens: "Wheat, Shrimp"
  },
  {
    id: 2,
    name: "Tahu Gimbal",
    description: "Fried tofu, prawn fritters, egg, and vegetables with peanut sauce.",
    price: 55000,
    category: "Appetizer",
    image: "https://assets-pergikuliner.com/18yT7S_zJ4k1d6rL2e4k8pZ5nQk=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/1585549/picture-1568183594.jpg",
    tag: "Semarang Special",
    allergens: "Peanut, Egg, Shrimp"
  },
  {
    id: 3,
    name: "Classic Caesar Salad",
    description: "Romaine lettuce, parmesan cheese, beef bacon, croutons, and caesar dressing.",
    price: 85000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    tag: "Healthy",
    allergens: "Dairy, Egg"
  },
  {
    id: 4,
    name: "Calamari Rings",
    description: "Deep fried squid rings served with tartar sauce.",
    price: 75000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Seafood, Wheat"
  },
  {
    id: 5,
    name: "Cream of Mushroom Soup",
    description: "Rich creamy mushroom soup served with garlic bread.",
    price: 65000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy"
  },
  {
    id: 6,
    name: "Chicken Wings",
    description: "Fried chicken wings glazed with honey bbq sauce.",
    price: 70000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
    allergens: "Wheat"
  },
  {
    id: 7,
    name: "Gado Gado",
    description: "Indonesian vegetable salad with peanut dressing and crackers.",
    price: 60000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1625220249804-e85eb685959d?auto=format&fit=crop&w=800&q=80",
    tag: "Vegetarian",
    allergens: "Peanut"
  },
  {
    id: 8,
    name: "French Fries",
    description: "Shoestring fries served with chili sauce and mayonnaise.",
    price: 45000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: ""
  },
  {
    id: 9,
    name: "Nachos Grande",
    description: "Tortilla chips topped with melted cheese, salsa, and jalapenos.",
    price: 80000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
    tag: "Sharing",
    allergens: "Dairy, Corn"
  },
  {
    id: 10,
    name: "Tomato Bruschetta",
    description: "Toasted baguette topped with fresh tomatoes, basil, and olive oil.",
    price: 55000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1572695157369-a0eac0d6bbc9?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Wheat"
  },

  // MAIN COURSE
  {
    id: 11,
    name: "Nasi Goreng Ciputra",
    description: "Signature fried rice with satay, fried chicken, and sunny side up egg.",
    price: 115000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    tag: "Signature",
    allergens: "Egg, Peanut, Shrimp"
  },
  {
    id: 12,
    name: "Sop Buntut",
    description: "Legendary oxtail soup (fried/grilled/boiled) with rice and crackers.",
    price: 185000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80",
    tag: "Chef Rec",
    allergens: "Nutmeg"
  },
  {
    id: 13,
    name: "Soto Ayam Semarang",
    description: "Traditional turmeric chicken soup with glass noodles, served with rice.",
    price: 85000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80",
    tag: "Local",
    allergens: "Egg"
  },
  {
    id: 14,
    name: "Ciputra Club Sandwich",
    description: "Triple decker sandwich with chicken, bacon, egg, lettuce, tomato.",
    price: 95000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Wheat, Egg"
  },
  {
    id: 15,
    name: "Australian Sirloin Steak",
    description: "200g grilled sirloin served with potato wedges and mushroom sauce.",
    price: 250000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
    tag: "Premium",
    allergens: "Dairy"
  },
  {
    id: 16,
    name: "Norwegian Salmon",
    description: "Pan-seared salmon fillet with lemon butter sauce and mashed potatoes.",
    price: 210000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=800&q=80",
    tag: "Healthy",
    allergens: "Fish, Dairy"
  },
  {
    id: 17,
    name: "Beef Burger",
    description: "Juicy beef patty with cheese, caramelized onion, served with fries.",
    price: 110000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Wheat, Dairy"
  },
  {
    id: 18,
    name: "Spaghetti Bolognaise",
    description: "Classic pasta with minced beef and tomato sauce.",
    price: 95000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80",
    tag: "Kids Friendly",
    allergens: "Wheat"
  },
  {
    id: 19,
    name: "Mie Goreng Jawa",
    description: "Javanese style fried noodles with chicken and vegetables.",
    price: 85000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1612927601601-6638404e45e8?auto=format&fit=crop&w=800&q=80",
    tag: "Local",
    allergens: "Wheat, Egg"
  },
  {
    id: 20,
    name: "Fish and Chips",
    description: "Battered dory fish served with french fries and tartar sauce.",
    price: 90000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Fish, Wheat"
  },

  // DESSERT
  {
    id: 21,
    name: "Pisang Goreng Keju",
    description: "Fried banana topped with grated cheese and chocolate sprinkles.",
    price: 55000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1564665978126-4b54c5890833?auto=format&fit=crop&w=800&q=80",
    tag: "Local Fav",
    allergens: "Dairy"
  },
  {
    id: 22,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream.",
    price: 75000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
    allergens: "Dairy, Egg, Wheat"
  },
  {
    id: 23,
    name: "Tropical Fruit Platter",
    description: "Assorted seasonal fresh sliced fruits.",
    price: 50000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1519996529931-28324d1a6390?auto=format&fit=crop&w=800&q=80",
    tag: "Healthy",
    allergens: ""
  },
  {
    id: 24,
    name: "New York Cheesecake",
    description: "Creamy cheesecake with strawberry compote.",
    price: 70000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy, Wheat"
  },
  {
    id: 25,
    name: "Es Campur",
    description: "Indonesian mixed ice dessert with jelly, fruits, and syrup.",
    price: 55000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?auto=format&fit=crop&w=800&q=80",
    tag: "Refreshing",
    allergens: "Dairy"
  },
  {
    id: 26,
    name: "Creme Brulee",
    description: "Classic french custard with caramelized sugar crust.",
    price: 65000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy, Egg"
  },
  {
    id: 27,
    name: "Es Puter Conglik",
    description: "Traditional coconut ice cream with durian and avocado topping.",
    price: 55000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
    tag: "Semarang Icon",
    allergens: "Dairy"
  },
  {
    id: 28,
    name: "Apple Tart",
    description: "Warm apple tart served with vanilla sauce.",
    price: 65000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Wheat"
  },
  {
    id: 29,
    name: "Ice Cream Scoop",
    description: "Choice of Vanilla, Chocolate, or Strawberry.",
    price: 35000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy"
  },
  {
    id: 30,
    name: "Opera Cake",
    description: "Layers of almond sponge, coffee buttercream, and chocolate ganache.",
    price: 75000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy, Wheat, Nuts"
  },

  // BEVERAGE
  {
    id: 31,
    name: "Iced Cappuccino",
    description: "Freshly brewed espresso with cold milk and foam.",
    price: 45000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy, Caffeine"
  },
  {
    id: 32,
    name: "Fresh Orange Juice",
    description: "Squeezed from fresh oranges, no sugar added.",
    price: 55000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    tag: "Healthy",
    allergens: ""
  },
  {
    id: 33,
    name: "Avocado Coffee",
    description: "Creamy avocado juice topped with espresso shot and chocolate syrup.",
    price: 60000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80",
    tag: "Barista Rec",
    allergens: "Dairy, Caffeine"
  },
  {
    id: 34,
    name: "Wedang Jahe",
    description: "Traditional hot ginger drink with palm sugar.",
    price: 40000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1596803244618-8dabe4f9d771?auto=format&fit=crop&w=800&q=80",
    tag: "Local Healing",
    allergens: ""
  },
  {
    id: 35,
    name: "Iced Lemon Tea",
    description: "Refreshing black tea with fresh lemon slices.",
    price: 35000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: ""
  },
  {
    id: 36,
    name: "Watermelon Juice",
    description: "Freshly blended watermelon.",
    price: 50000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: ""
  },
  {
    id: 37,
    name: "Hot Chocolate",
    description: "Rich hot cocoa served with marshmallows.",
    price: 50000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy"
  },
  {
    id: 38,
    name: "Mineral Water (Equil)",
    description: "Premium natural sparkling mineral water (380ml).",
    price: 45000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1560130958-f69704284a37?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: ""
  },
  {
    id: 39,
    name: "Bintang Beer",
    description: "Indonesian pilsner beer (330ml).",
    price: 75000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1634486654235-5d4a5e2c7600?auto=format&fit=crop&w=800&q=80",
    tag: "21+",
    allergens: "Alcohol"
  },
  {
    id: 40,
    name: "Coca Cola",
    description: "Classic carbonated soft drink.",
    price: 35000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: ""
  }
];

const CATEGORIES = ["Appetizer", "Main Course", "Dessert", "Beverage"];

const BANKS = [
  { id: 'bca', name: 'BCA', code: '88010' },
  { id: 'mandiri', name: 'Mandiri', code: '89022' },
  { id: 'bni', name: 'BNI', code: '8241' }
];

export default function App() {
  // STATE
  const [view, setView] = useState('login'); 
  const [lang, setLang] = useState('EN');
  const [cart, setCart] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Main Course");
  
  // MODALS
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [userRating, setUserRating] = useState(0);
  
  // ITEM DETAILS
  const [itemQty, setItemQty] = useState(1);
  const [itemNote, setItemNote] = useState("");

  // CHECKOUT
  const [paymentMethod, setPaymentMethod] = useState("room");
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [transferProof, setTransferProof] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  // USER INFO
  const [roomNumber, setRoomNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginError, setLoginError] = useState("");
  const [orderStatus, setOrderStatus] = useState(0);

  // TRANSLATIONS
  const t: any = {
    EN: {
      subtitle: "Exquisite dining, delivered to your room",
      start: "Start Dining",
      room: "Room Number",
      phone: "Phone Number",
      help: "Trouble logging in? Call Our Staff",
      cart: "Your Cart",
      total: "Total",
      checkout: "Checkout",
      placeOrder: "Place Order",
      successTitle: "Order Received",
      trackTitle: "Order Status",
      rateTitle: "How was your meal?",
      rateDesc: "Tap a star to rate.",
      submit: "Submit Feedback",
      free: "COMPLIMENTARY",
      morning: "Good Morning,",
      afternoon: "Good Afternoon,",
      evening: "Good Evening,"
    },
    ID: {
      subtitle: "The Gallery Restaurant - Layanan Kamar",
      start: "Mulai Pesan",
      room: "Nomor Kamar",
      phone: "Nomor Handphone",
      help: "Kendala login? Hubungi Resepsionis",
      cart: "Keranjang",
      total: "Total",
      checkout: "Pembayaran",
      placeOrder: "Pesan Sekarang",
      successTitle: "Pesanan Diterima",
      trackTitle: "Status Pesanan",
      rateTitle: "Bagaimana makanan Anda?",
      rateDesc: "Ketuk bintang untuk menilai.",
      submit: "Kirim Ulasan",
      free: "GRATIS",
      morning: "Selamat Pagi,",
      afternoon: "Selamat Siang,",
      evening: "Selamat Malam,"
    }
  };

  const txt = t[lang];

  // --- LOGIC ---
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return txt.morning;
    if (hour < 18) return txt.afternoon;
    return txt.evening;
  };

  useEffect(() => {
    if (view === 'tracking') {
      setOrderStatus(0);
      const timer1 = setTimeout(() => setOrderStatus(1), 3000); 
      const timer2 = setTimeout(() => setOrderStatus(2), 7000); 
      const timer3 = setTimeout(() => {
        setOrderStatus(3); 
        setTimeout(() => setShowRatingModal(true), 1000); 
      }, 12000);
      return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
    }
  }, [view]);

  const handleLogin = () => {
    if (!roomNumber || !phoneNumber) {
      setLoginError("Please fill in all fields");
      return;
    }
    setLoginError("");
    setView('menu');
  };

  const openItemDetail = (item: any) => {
    setSelectedItem(item);
    setItemQty(1);
    setItemNote("");
  };

  const addItemToCart = () => {
    const newItem = { ...selectedItem, qty: itemQty, note: itemNote };
    setCart([...cart, newItem]);
    setSelectedItem(null);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleFileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setTransferProof(e.target.files[0]);
    }
  };

  const subtotal = cart.reduce((sum, item: any) => sum + (item.price * item.qty), 0);
  const taxService = subtotal * 0.21;
  const grandTotal = subtotal + taxService;

  const handleOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView('tracking');
      setCart([]);
      setShowCartModal(false);
      setPaymentMethod("room");
      setSelectedBank(null);
      setTransferProof(null);
    }, 2000);
  };
  
  const handleFinish = () => {
      setShowRatingModal(false);
      setUserRating(0);
      setRoomNumber("");
      setPhoneNumber("");
      setView('login');
  };

  // --- VIEW 1: LOGIN ---
  if (view === 'login') {
    return (
      <div className="fixed inset-0 w-full h-full flex flex-col justify-center items-center p-6 font-sans overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1763604584073-7f05efb157f9?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover opacity-70" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[280px] mx-auto flex flex-col h-full justify-center">
          <div className="absolute top-8 right-0">
            <div className="bg-black/30 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex gap-3 text-[10px] font-medium text-white shadow-lg cursor-pointer hover:bg-black/40 transition-all">
              <span onClick={() => setLang('ID')} className={`${lang === 'ID' ? 'text-white font-bold' : 'text-white/50'}`}>ID</span>
              <span className="text-white/20">|</span>
              <span onClick={() => setLang('EN')} className={`${lang === 'EN' ? 'text-white font-bold' : 'text-white/50'}`}>EN</span>
            </div>
          </div>

          <div className="text-center mb-8 animate-fade-in-up">
             <img src="https://i.ibb.co.com/JFzbjBqz/Logo-ciputra-copy.png" className="w-28 h-auto mx-auto mb-5 object-contain drop-shadow-2xl opacity-95" alt="Logo" />
             <h1 className="text-3xl font-serif text-white drop-shadow-lg tracking-wide mb-2">The Gallery</h1>
             <p className="text-white/80 text-xs mt-2 font-serif italic">"{txt.subtitle}"</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-6 rounded-[1.5rem] shadow-2xl ring-1 ring-white/30 w-full">
            <div className="space-y-3"> 
              <div className="group">
                <label className="text-[8px] font-bold text-white/80 tracking-[0.2em] uppercase mb-1 block ml-2">{txt.room}</label>
                <input type="number" placeholder="1024" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} className="block w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-black/40 transition-all text-sm text-center" />
              </div>
              <div className="group">
                <label className="text-[8px] font-bold text-white/80 tracking-[0.2em] uppercase mb-1 block ml-2">{txt.phone}</label>
                <input type="tel" placeholder="081..." value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="block w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-black/40 transition-all text-sm text-center" />
              </div>
              {loginError && (<p className="text-red-300 text-[10px] text-center font-bold bg-red-900/30 py-1 rounded animate-pulse">{loginError}</p>)}
              <div className="pt-2 flex justify-center">
                <button onClick={handleLogin} className="w-full bg-white text-slate-900 hover:bg-slate-100 py-3 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-all uppercase tracking-widest">{txt.start}</button>
              </div>
              <p className="text-center text-[9px] text-white/50 mt-3 cursor-pointer hover:text-white hover:underline transition-all">{txt.help}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: MENU (FIXED WIDTH FULL) ---
  if (view === 'menu') {
    return (
      // GUNAKAN w-full mutlak
      <div className="min-h-screen bg-slate-50 font-sans pb-32 w-full overflow-x-hidden">
        <div className="w-full bg-slate-50 min-h-screen relative">
            
            <div className="bg-white sticky top-0 z-30 px-6 pt-8 pb-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] w-full">
              <div className="flex items-center justify-between mb-6">
                 <div>
                   <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-1">{getGreeting()}</p>
                   <h2 className="text-xl font-serif font-bold text-slate-900">Room {roomNumber}</h2>
                 </div>
                 <div className="w-10 h-10 bg-orange-50 rounded-full overflow-hidden border border-orange-100"><img src={`https://api.dicebear.com/7.x/initials/svg?seed=${roomNumber}`} alt="user" /></div>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar w-full pr-6">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border flex-shrink-0 ${selectedCategory === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>{cat}</button>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-6 w-full">
              {MENU_ITEMS.filter(item => item.category === selectedCategory).map((item: any) => (
                <div key={item.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-slate-100 flex h-32 relative group active:scale-[0.99] transition-transform w-full" onClick={() => openItemDetail(item)}>
                  <div className="w-32 h-full flex-shrink-0">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                     <div>
                        <div className="flex justify-between items-start">
                             <h3 className="font-serif font-bold text-slate-900 leading-tight mb-1 line-clamp-1">{item.name}</h3>
                             {item.tag && <span className="text-[8px] font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded uppercase flex-shrink-0 ml-1">{item.tag}</span>}
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight line-clamp-2">{item.description}</p>
                     </div>
                     <div className="flex items-end justify-between mt-2">
                        <p className="font-bold text-sm text-slate-900">{item.price === 0 ? txt.free : `Rp ${item.price.toLocaleString()}`}</p>
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-white transition-colors">
                           <Plus className="w-4 h-4" />
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="fixed bottom-8 left-0 right-0 z-40 animate-slide-up flex justify-center w-full px-6">
                <div className="w-full">
                    <button onClick={() => setShowCartModal(true)} className="w-full bg-slate-900 text-white p-2 pr-6 rounded-full shadow-2xl shadow-slate-900/30 flex justify-between items-center">
                       <div className="flex items-center gap-4"><div className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">{cart.length}</div><div className="text-left"><p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">{txt.total}</p><p className="font-bold text-sm">Rp {grandTotal.toLocaleString()}</p></div></div>
                       <div className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase">{txt.cart} <ChevronRight className="w-4 h-4" /></div>
                    </button>
                </div>
              </div>
            )}

            {/* DETAIL MODAL */}
            {selectedItem && (
              <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end animate-fade-in justify-center w-full">
                <div className="bg-white w-full rounded-t-[2.5rem] p-8 animate-slide-up shadow-2xl max-h-[90vh] overflow-y-auto">
                   <div className="flex justify-between items-start mb-4">
                     <div className="max-w-[80%]"><h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">{selectedItem.name}</h2><p className="text-orange-600 font-bold text-lg">{selectedItem.price === 0 ? txt.free : `Rp ${selectedItem.price.toLocaleString()}`}</p></div>
                     <button onClick={() => setSelectedItem(null)} className="p-2 bg-slate-100 rounded-full"><X className="w-6 h-6 text-slate-500" /></button>
                   </div>
                   <p className="text-sm text-slate-500 mb-4">{selectedItem.description}</p>
                   
                   {selectedItem.allergens && (
                    <div className="bg-amber-50 p-4 rounded-xl mb-6 flex gap-3 items-start border border-amber-100">
                        <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Contains Allergens</p>
                            <p className="text-xs text-amber-700">{selectedItem.allergens}</p>
                        </div>
                    </div>
                   )}

                   <div className="mb-8">
                        <textarea className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-all" rows={2} placeholder="Notes (e.g. extra spicy, no onions)..." value={itemNote} onChange={(e) => setItemNote(e.target.value)}></textarea>
                   </div>

                   <div className="flex gap-4 items-center">
                     <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                       <button onClick={() => setItemQty(Math.max(1, itemQty - 1))} className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50 text-slate-900"><Minus className="w-4 h-4" /></button>
                       <span className="w-12 text-center font-bold text-slate-900 text-sm">{itemQty}</span>
                       <button onClick={() => setItemQty(itemQty + 1)} className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50 text-slate-900"><Plus className="w-4 h-4" /></button>
                     </div>
                     <button onClick={addItemToCart} className="flex-1 bg-slate-900 text-white py-4 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-transform">Add - {selectedItem.price === 0 ? txt.free : `Rp ${(selectedItem.price * itemQty).toLocaleString()}`}</button>
                   </div>
                </div>
              </div>
            )}

            {/* CART MODAL */}
            {showCartModal && (
              <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end animate-fade-in justify-center w-full">
                 <div className="bg-white w-full rounded-t-[2.5rem] p-8 max-h-[85vh] overflow-y-auto animate-slide-up shadow-2xl">
                   <div className="flex justify-between items-center mb-8"><h2 className="text-xl font-serif font-bold text-slate-900">{txt.cart}</h2><button onClick={() => setShowCartModal(false)} className="p-2 bg-slate-50 rounded-full"><X className="w-5 h-5 text-slate-400" /></button></div>
                   <div className="space-y-4 mb-8">
                     {cart.map((item: any, idx: number) => (
                       <div key={idx} className="flex justify-between items-start border-b border-slate-50 pb-4">
                          <div className="flex items-start gap-3">
                            <div className="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden"><img src={item.image} className="w-full h-full object-cover" /></div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{item.name} <span className="text-slate-400 text-xs">x{item.qty}</span></h4>
                                <p className="text-xs font-bold text-orange-600">{item.price === 0 ? txt.free : `Rp ${(item.price * item.qty).toLocaleString()}`}</p>
                                {item.note && <p className="text-[10px] text-slate-500 italic mt-1">"{item.note}"</p>}
                            </div>
                          </div>
                          <button onClick={() => removeFromCart(idx)} className="text-red-400 text-xs font-bold">Remove</button>
                       </div>
                     ))}
                   </div>
                   <button onClick={() => { setShowCartModal(false); setView('checkout'); }} className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl uppercase tracking-widest">{txt.checkout}</button>
                 </div>
              </div>
            )}
        </div>
      </div>
    );
  }

  // --- VIEW 3: CHECKOUT (FIX 100% FULL WIDTH) ---
  if (view === 'checkout') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-32 w-full overflow-x-hidden">
        <div className="w-full bg-slate-50 min-h-screen relative">
            
            {/* HEADER */}
            <div className="bg-white sticky top-0 z-30 px-6 pt-6 pb-4 shadow-sm flex items-center gap-4 w-full">
              <button onClick={() => setView('menu')} className="group flex items-center gap-3 pl-2 pr-5 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-all active:scale-95">
                 <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 group-hover:border-orange-200">
                    <ChevronLeft className="w-4 h-4 text-slate-900" />
                 </div>
                 <span className="text-xs font-bold text-slate-700 uppercase tracking-wider group-hover:text-slate-900">Back to Menu</span>
              </button>
              <div className="flex-1 text-right">
                 <h2 className="text-lg font-bold font-serif text-slate-900">{txt.checkout}</h2>
              </div>
            </div>

            <div className="p-6 space-y-6 w-full">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 w-full">
                 <h3 className="font-bold text-slate-900 mb-4">Payment Method</h3>
                 <div className="space-y-3">
                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all w-full ${paymentMethod === 'room' ? 'border-orange-500 bg-orange-50' : 'border-slate-100 hover:border-slate-200'}`}>
                        <input type="radio" name="pay" className="hidden" checked={paymentMethod === 'room'} onChange={() => setPaymentMethod('room')} />
                        <Building2 className={`w-6 h-6 flex-shrink-0 ${paymentMethod === 'room' ? 'text-orange-600' : 'text-slate-400'}`} />
                        <span className="font-bold text-sm text-slate-900">Charge to Room</span>
                    </label>

                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all w-full ${paymentMethod === 'qris' ? 'border-orange-500 bg-orange-50' : 'border-slate-100 hover:border-slate-200'}`}>
                        <input type="radio" name="pay" className="hidden" checked={paymentMethod === 'qris'} onChange={() => setPaymentMethod('qris')} />
                        <QrCode className={`w-6 h-6 flex-shrink-0 ${paymentMethod === 'qris' ? 'text-orange-600' : 'text-slate-400'}`} />
                        <span className="font-bold text-sm text-slate-900">QRIS / E-Wallet</span>
                    </label>

                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all w-full ${paymentMethod === 'bank' ? 'border-orange-500 bg-orange-50' : 'border-slate-100 hover:border-slate-200'}`}>
                        <input type="radio" name="pay" className="hidden" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                        <CreditCard className={`w-6 h-6 flex-shrink-0 ${paymentMethod === 'bank' ? 'text-orange-600' : 'text-slate-400'}`} />
                        <span className="font-bold text-sm text-slate-900">Bank Transfer</span>
                    </label>
                 </div>

                 {paymentMethod === 'bank' && (
                     <div className="mt-4 animate-fade-in pl-2 w-full">
                         <p className="text-xs font-bold text-slate-400 uppercase mb-2">Select Bank</p>
                         <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-1 w-full">
                             {BANKS.map(bank => (
                                 <button key={bank.id} onClick={() => setSelectedBank(bank.id)} className={`px-4 py-2 rounded-lg border text-xs font-bold whitespace-nowrap ${selectedBank === bank.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'}`}>{bank.name}</button>
                             ))}
                         </div>
                         {selectedBank && (
                             <div className="bg-slate-50 p-3 rounded-lg text-center mb-4 border border-slate-200 w-full">
                                 <p className="text-xs text-slate-500">Virtual Account Number</p>
                                 <p className="text-lg font-mono font-bold text-slate-900 tracking-widest">{BANKS.find(b => b.id === selectedBank)?.code}{phoneNumber}</p>
                             </div>
                         )}
                     </div>
                 )}

                 {paymentMethod === 'qris' && (
                     <div className="mt-4 animate-fade-in bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center w-full">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="w-40 h-40 opacity-90 mix-blend-multiply" />
                         <p className="text-[10px] text-slate-400 mt-2">Scan via GoPay/OVO/BCA Mobile</p>
                     </div>
                 )}

                 {(paymentMethod === 'qris' || (paymentMethod === 'bank' && selectedBank)) && (
                     <div className="mt-4 pt-4 border-t border-slate-100 animate-fade-in w-full">
                         <p className="text-xs font-bold text-slate-900 mb-2">Upload Payment Proof</p>
                         <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                             <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                 {transferProof ? (
                                     <div className="flex flex-col items-center text-green-600 px-4 text-center">
                                         <CheckCircle2 className="w-6 h-6 mb-2" />
                                         <p className="text-xs font-bold break-all line-clamp-1">{transferProof.name}</p>
                                         <p className="text-[10px] text-green-500">File selected</p>
                                     </div>
                                 ) : (
                                     <>
                                         <Upload className="w-6 h-6 text-slate-400 mb-2" />
                                         <p className="text-[10px] text-slate-500 font-bold">Click to upload screenshot</p>
                                         <p className="text-[9px] text-slate-400">JPG, PNG supported</p>
                                     </>
                                 )}
                             </div>
                             <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                         </label>
                     </div>
                 )}
              </div>

              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 w-full">
                <h3 className="font-bold text-slate-900 mb-4">Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>Rp {subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between text-slate-500"><span>Service & Tax (21%)</span><span>Rp {taxService.toLocaleString()}</span></div>
                  <div className="flex justify-between text-xl font-bold text-slate-900 mt-4 pt-4 border-t border-slate-100"><span>Total</span><span>Rp {grandTotal.toLocaleString()}</span></div>
                </div>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-40 p-6 bg-gradient-to-t from-white via-white to-transparent w-full">
               <button onClick={handleOrder} disabled={loading || (paymentMethod !== 'room' && !transferProof)} className={`w-full py-4 rounded-2xl font-bold text-sm shadow-xl flex justify-center items-center gap-2 transition-all ${loading || (paymentMethod !== 'room' && !transferProof) ? 'bg-slate-300 text-white cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'}`}>{loading ? 'Processing...' : (paymentMethod !== 'room' && !transferProof ? 'Upload Proof to Continue' : txt.placeOrder)}</button>
            </div>
        </div>
      </div>
    );
  }

  // --- VIEW 4: TRACKING (FIX 100% FULL WIDTH) ---
  if (view === 'tracking') {
    const steps = [
        { icon: <CheckCircle2 className="w-5 h-5" />, label: "Order Confirmed", sub: "We have received your request." },
        { icon: <Clock className="w-5 h-5" />, label: "Kitchen Preparing", sub: "Chef is cooking your meal." },
        { icon: <Bell className="w-5 h-5" />, label: "On the Way", sub: "Staff is heading to Room " + roomNumber },
        { icon: <Star className="w-5 h-5" />, label: "Delivered", sub: "Service completed. Bon Appetit!" }
    ];

    return (
      <div className="min-h-screen bg-slate-50 font-sans w-full overflow-hidden">
        <div className="w-full bg-white min-h-screen shadow-none relative flex flex-col">
            
            <div className="h-[35vh] bg-slate-900 relative overflow-hidden flex items-center justify-center w-full">
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
                <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-[0_0_40px_rgba(34,197,94,0.6)]">
                        <Clock className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-white font-serif text-2xl font-bold tracking-wide">{txt.trackTitle}</h2>
                    <p className="text-white/60 text-xs tracking-widest uppercase mt-2 bg-black/20 px-3 py-1 rounded-full inline-block">Est. Time: 20-30 Mins</p>
                </div>
            </div>

            <div className="flex-1 p-8 -mt-8 bg-white rounded-t-[2.5rem] relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] w-full">
                <div className="space-y-8 mt-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`flex gap-5 relative ${idx <= orderStatus ? 'opacity-100' : 'opacity-30 grayscale'}`}>
                            {idx !== steps.length - 1 && (
                                <div className={`absolute left-[19px] top-10 bottom-[-30px] w-0.5 ${idx < orderStatus ? 'bg-green-500' : 'bg-slate-100'}`}></div>
                            )}
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border-2 z-10 bg-white transition-all duration-500 ${idx <= orderStatus ? 'border-green-500 text-green-600 shadow-lg shadow-green-100 scale-110' : 'border-slate-100 text-slate-300'}`}>
                                {step.icon}
                            </div>
                            <div className={`${idx === orderStatus ? 'translate-x-2 transition-transform duration-500' : ''}`}>
                                <h4 className={`font-bold text-sm ${idx <= orderStatus ? 'text-slate-900' : 'text-slate-900'}`}>{step.label}</h4>
                                <p className="text-xs text-slate-500 leading-tight mt-1">{step.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showRatingModal && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in w-full">
                    <div className="bg-white w-full max-w-xs rounded-[2rem] p-8 text-center animate-slide-up shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="w-10 h-10 text-orange-500 fill-orange-500" />
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">{txt.rateTitle}</h3>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed">{txt.rateDesc}</p>
                        <div className="flex justify-center gap-3 mb-10">
                            {[1,2,3,4,5].map(s => (
                                <button key={s} onClick={() => setUserRating(s)} className="focus:outline-none transition-all hover:scale-125 active:scale-90">
                                    <Star className={`w-8 h-8 transition-colors duration-300 ${s <= userRating ? 'text-orange-400 fill-orange-400 drop-shadow-md' : 'text-slate-200'}`} />
                                </button>
                            ))}
                        </div>
                        <button onClick={handleFinish} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-transform">{txt.submit}</button>
                    </div>
                </div>
            )}
        </div>
      </div>
    );
  }

  return null;
}