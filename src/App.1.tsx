import React, { useState, useEffect } from 'react';
import { ShoppingCart, Minus, ChevronRight, Search, Star, MapPin, Phone, Globe, X, Info, Building2, QrCode, CreditCard, ChevronLeft } from 'lucide-react';

// --- DATA MENU ---
const MENU_ITEMS = [
  {
    id: 1,
    name: "Nasi Goreng Ciputra",
    description: "Signature fried rice with satay, fried chicken, and sunny side up egg.",
    price: 95000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
    allergens: "Egg, Peanut, Shrimp"
  },
  {
    id: 2,
    name: "Soto Ayam",
    description: "Traditional turmeric chicken soup with glass noodles, cabbage, and egg.",
    price: 85000,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80",
    tag: "Chef Rec",
    allergens: "Egg"
  },
  {
    id: 3,
    name: "Lumpia Semarang",
    description: "Traditional spring rolls filled with bamboo shoots, served with sweet sauce.",
    price: 45000,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?auto=format&fit=crop&w=800&q=80",
    tag: "Local",
    allergens: "Wheat, Shrimp"
  },
  {
    id: 4,
    name: "Es Puter Conglik",
    description: "Traditional coconut ice cream with durian and avocado topping.",
    price: 40000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy"
  },
  {
    id: 5,
    name: "Iced Cappuccino",
    description: "Freshly brewed espresso with cold milk and foam.",
    price: 45000,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    tag: "",
    allergens: "Dairy, Caffeine"
  }
];

const CATEGORIES = ["Appetizer", "Main Course", "Dessert", "Beverage"];

export default function App() {
  const [view, setView] = useState('login'); 
  const [lang, setLang] = useState('EN');
  const [cart, setCart] = useState<any[]>([]); 
  const [selectedCategory, setSelectedCategory] = useState("Main Course");
  const [showCartModal, setShowCartModal] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [itemQty, setItemQty] = useState(1);
  const [itemNote, setItemNote] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("room");
  const [loading, setLoading] = useState(false);
  const [roomNumber, setRoomNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginError, setLoginError] = useState("");

  const t: any = {
    EN: {
      subtitle: "Exquisite dining, delivered to your room.",
      start: "Start Dining",
      room: "Room Number",
      phone: "Phone Number",
      help: "Trouble logging in? Call Our Staff",
      search: "Search menu...",
      add: "Add",
      cart: "Your Cart",
      total: "Total",
      checkout: "Checkout",
      placeOrder: "Place Order",
      ordering: "Processing...",
      successTitle: "Order Received",
      successMsg: "Thank you! The kitchen at The Gallery is preparing your order.",
      back: "Back to Home",
      addNote: "Add Special Request (Optional)",
      payment: "Payment Method",
      summary: "Order Summary",
      tax: "Tax & Service (21%)",
      subtotal: "Subtotal",
      errorRequired: "Please fill in all fields"
    },
    ID: {
      subtitle: "Hidangan lezat, diantar ke kamar Anda.",
      start: "Mulai Pesan",
      room: "Nomor Kamar",
      phone: "Nomor Handphone",
      help: "Kendala login? Hubungi Resepsionis",
      search: "Cari menu...",
      add: "Tambah",
      cart: "Keranjang",
      total: "Total",
      checkout: "Pembayaran",
      placeOrder: "Pesan Sekarang",
      ordering: "Memproses...",
      successTitle: "Pesanan Diterima",
      successMsg: "Terima kasih! Dapur The Gallery sedang menyiapkan pesanan Anda.",
      back: "Kembali ke Beranda",
      addNote: "Catatan Khusus (Opsional)",
      payment: "Metode Pembayaran",
      summary: "Ringkasan Pesanan",
      tax: "Pajak & Layanan (21%)",
      subtotal: "Subtotal",
      errorRequired: "Harap isi semua bidang"
    }
  };

  const txt = t[lang];

  const handleLogin = () => {
    if (!roomNumber || !phoneNumber) {
      setLoginError(txt.errorRequired);
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

  const subtotal = cart.reduce((sum, item: any) => sum + (item.price * item.qty), 0);
  const taxService = subtotal * 0.21;
  const grandTotal = subtotal + taxService;

  const handleOrder = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setView('success');
      setCart([]);
      setShowCartModal(false);
      setRoomNumber("");
      setPhoneNumber("");
    }, 2500);
  };

  // --- VIEW 1: LOGIN (FULL SCREEN FIXED - NO GRAY SPACE) ---
  if (view === 'login') {
    return (
      // UBAHAN PENTING: 'fixed inset-0' memaksa elemen nempel ke 4 sudut layar
      <div className="fixed inset-0 w-full h-full bg-black font-sans overflow-hidden">
        
        {/* BACKGROUND (Paku ke layar) */}
        <div className="absolute inset-0 z-0">
          {/* JANGAN LUPA GANTI LINK BACKGROUND HOTEL DISINI */}
          <img 
            src="https://images.unsplash.com/photo-1763604584073-7f05efb157f9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-full object-cover opacity-80" 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/30 to-black/70 backdrop-blur-[2px]"></div>
        </div>
        
        {/* CONTAINER TENGAH (Flexbox centering) */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6">
          
          {/* LANGUAGE TOGGLE (Absolute di pojok) */}
          <div className="absolute top-6 right-6">
            <div className="bg-black/30 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex gap-3 text-[10px] font-medium text-white shadow-lg cursor-pointer hover:bg-black/40 transition-all">
              <span onClick={() => setLang('ID')} className={`${lang === 'ID' ? 'text-white font-bold' : 'text-white/50'}`}>ID</span>
              <span className="text-white/20">|</span>
              <span onClick={() => setLang('EN')} className={`${lang === 'EN' ? 'text-white font-bold' : 'text-white/50'}`}>EN</span>
            </div>
          </div>

          {/* HEADER & LOGO */}
          <div className="text-center mb-10 animate-fade-in-up w-full max-w-[280px]">
             {/* JANGAN LUPA GANTI LINK LOGO DISINI */}
             <img 
               src="https://i.ibb.co.com/JFzbjBqz/Logo-ciputra-copy.png" 
               className="w-28 h-auto mx-auto mb-6 object-contain drop-shadow-2xl opacity-95" 
               alt="Logo" 
             />
             
             <h1 className="text-3xl font-serif text-white drop-shadow-lg tracking-wide mb-2">The Gallery Restaurant</h1>
             <p className="text-white/90 font-light text-[10px] tracking-widest uppercase border-t border-white/30 inline-block pt-2 px-4">
               {lang === 'EN' ? 'Hotel Ciputra Semarang' : 'Hotel Ciputra Semarang'}
             </p>
             <p className="text-white/80 text-xs mt-3 font-serif italic">"{txt.subtitle}"</p>
          </div>

          {/* FORM INPUT */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-8 rounded-[2rem] shadow-2xl ring-1 ring-white/30 w-full max-w-[300px]">
            <div className="space-y-4"> 
              <div className="group">
                <label className="text-[9px] font-bold text-white/80 tracking-[0.2em] uppercase mb-1.5 block ml-3">{txt.room}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-4 w-4 text-white/70" />
                  </div>
                  <input 
                    type="number" 
                    placeholder="1024" 
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className="block w-full pl-9 pr-3 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:bg-black/40 transition-all text-sm font-medium" 
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-[9px] font-bold text-white/80 tracking-[0.2em] uppercase mb-1.5 block ml-3">{txt.phone}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-white/70" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="081..." 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="block w-full pl-9 pr-3 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:bg-black/40 transition-all text-sm font-medium" 
                  />
                </div>
              </div>
              
              {loginError && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-2 animate-pulse">
                  <p className="text-red-100 text-[10px] text-center font-bold tracking-wide">{loginError}</p>
                </div>
              )}

              <div className="pt-2">
                <button 
                  onClick={handleLogin} 
                  className={`w-full py-3 rounded-xl font-bold text-[10px] shadow-lg active:scale-95 transition-all uppercase tracking-[0.2em] ${!roomNumber || !phoneNumber ? 'bg-white/20 text-white/50 cursor-not-allowed' : 'bg-white text-slate-900 hover:bg-slate-100 hover:shadow-xl'}`}
                >
                  {txt.start}
                </button>
              </div>
              
              <p className="text-center text-[9px] text-white/50 mt-2 cursor-pointer hover:text-white hover:underline transition-all">{txt.help}</p>
            </div>
          </div>
          
          <div className="absolute bottom-6 text-center w-full left-0">
             <p className="text-[8px] text-white/30 uppercase tracking-widest">© 2025 Swiss-Belhotel International</p>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: MENU ---
  if (view === 'menu') {
    const hour = new Date().getHours();
    let greeting = lang === 'EN' ? (hour < 12 ? "Good Morning," : hour < 18 ? "Good Afternoon," : "Good Evening,") : (hour < 11 ? "Selamat Pagi," : hour < 15 ? "Selamat Siang," : hour < 18 ? "Selamat Sore," : "Selamat Malam,");

    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-32">
        <div className="bg-white sticky top-0 z-30 px-6 pt-8 pb-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-6">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <span className={`w-2 h-2 rounded-full animate-pulse ${hour >= 7 && hour <= 22 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                 <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{hour >= 7 && hour <= 22 ? 'OPEN FOR SERVICE' : 'CLOSED'}</p>
               </div>
               <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">{greeting} <br/> {roomNumber ? `Room ${roomNumber}` : 'Guest'}</h2>
             </div>
             <div className="w-10 h-10 bg-orange-50 rounded-full overflow-hidden border border-orange-100"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="user" /></div>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-5 top-3.5 w-4 h-4 text-orange-400" />
            <input type="text" placeholder={txt.search} className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner" />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${selectedCategory === cat ? 'bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-200' : 'bg-white text-slate-500 border-slate-200 hover:border-orange-300 hover:text-orange-500'}`}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="flex items-center justify-between"><h3 className="font-bold text-lg text-slate-900">Featured Menu</h3><span className="text-xs text-orange-600 font-bold cursor-pointer">View All</span></div>
          {MENU_ITEMS.filter(item => item.category === selectedCategory).map((item: any) => (
            <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100 group">
              <div className="relative h-64 w-full">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 <div className="absolute top-5 left-5 flex gap-2">{item.tag && (<span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-sm tracking-wide uppercase">{item.tag}</span>)}</div>
                 <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
              </div>
              <div className="px-6 pb-8 -mt-8 relative z-10">
                 <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">{item.name}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed mb-6 pr-4">{item.description}</p>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      
                      {/* --- TOMBOL ADD (PAKE TEXT MANUAL BIAR MUNCUL!) --- */}
                      <button onClick={() => openItemDetail(item)} className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/40 hover:scale-110 active:scale-90 transition-transform">
                         <span className="text-2xl font-light pb-1 leading-none">+</span>
                      </button>

                      <p className="font-bold text-lg text-slate-900">Rp {item.price.toLocaleString()}</p>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><span className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center text-[8px]">i</span> 20m</div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-8 left-6 right-6 z-40 animate-slide-up">
            <button onClick={() => setShowCartModal(true)} className="w-full bg-orange-600 text-white p-1.5 pr-6 rounded-full shadow-2xl shadow-orange-500/50 flex justify-between items-center ring-4 ring-white">
               <div className="flex items-center gap-4"><div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold text-lg shadow-inner">{cart.length}</div><div className="text-left"><p className="text-[9px] text-orange-100 uppercase tracking-widest font-bold mb-0.5">{txt.total}</p><p className="font-bold text-sm">Rp {grandTotal.toLocaleString()}</p></div></div>
               <div className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase">{txt.cart} <ChevronRight className="w-4 h-4" /></div>
            </button>
          </div>
        )}

        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end animate-fade-in">
            <div className="bg-white w-full rounded-t-[2.5rem] p-8 max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
               <div className="flex justify-between items-start mb-6">
                 <div><h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">{selectedItem.name}</h2><p className="text-orange-600 font-bold text-lg">Rp {selectedItem.price.toLocaleString()}</p></div>
                 <button onClick={() => setSelectedItem(null)} className="p-2 bg-slate-100 rounded-full"><X className="w-6 h-6 text-slate-500" /></button>
               </div>
               {selectedItem.allergens && (<div className="bg-orange-50 p-4 rounded-2xl mb-6 flex gap-3 items-start"><Info className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" /><div><p className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1">Contains Allergens</p><p className="text-xs text-orange-700">{selectedItem.allergens}</p></div></div>)}
               
               {/* NOTES INPUT (WARNA GELAP BIAR KELIATAN) */}
               <div className="mb-8">
                 <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{txt.addNote}</label>
                 <textarea className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500 transition-all" rows={3} placeholder="E.g. No onions, extra spicy..." value={itemNote} onChange={(e) => setItemNote(e.target.value)}></textarea>
               </div>

               <div className="flex gap-4 items-center">
                 <div className="flex items-center bg-slate-100 rounded-full p-1">
                   <button onClick={() => setItemQty(Math.max(1, itemQty - 1))} className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-900 font-bold hover:bg-slate-50">
                     <span className="text-lg leading-none pb-1">-</span>
                   </button>
                   <span className="w-12 text-center font-bold text-slate-900">{itemQty}</span>
                   <button onClick={() => setItemQty(itemQty + 1)} className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-900 font-bold hover:bg-slate-50">
                     <span className="text-lg leading-none pb-1">+</span>
                   </button>
                 </div>
                 <button onClick={addItemToCart} className="flex-1 bg-slate-900 text-white py-4 rounded-full font-bold text-sm shadow-xl hover:bg-slate-800 active:scale-95 transition-all">Add to Cart - Rp {(selectedItem.price * itemQty).toLocaleString()}</button>
               </div>
            </div>
          </div>
        )}

        {/* --- CART MODAL --- */}
        {showCartModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end animate-fade-in">
             <div className="bg-white w-full rounded-t-[2.5rem] p-8 max-h-[85vh] overflow-y-auto animate-slide-up shadow-2xl">
               <div className="flex justify-between items-center mb-8"><h2 className="text-2xl font-serif font-bold text-slate-900">{txt.cart}</h2><button onClick={() => setShowCartModal(false)} className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-all"><X className="w-6 h-6 text-slate-400" /></button></div>
               <div className="space-y-6 mb-8">
                 {cart.map((item: any, idx: number) => (
                   <div key={idx} className="flex justify-between items-start border-b border-slate-50 pb-4 last:border-0">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shadow-sm"><img src={item.image} className="w-full h-full object-cover" /></div>
                        <div><h4 className="font-bold text-slate-900 text-sm mb-1">{item.name} <span className="text-slate-400 text-xs">x{item.qty}</span></h4><p className="text-xs font-bold text-orange-600">Rp {(item.price * item.qty).toLocaleString()}</p>{item.note && <p className="text-[10px] text-slate-400 mt-1 italic bg-slate-50 px-2 py-1 rounded-md inline-block">" {item.note} "</p>}</div>
                      </div>
                      <button onClick={() => removeFromCart(idx)} className="text-red-500 bg-red-50 px-3 py-1.5 rounded-full text-[10px] font-bold hover:bg-red-100 transition-colors">Remove</button>
                   </div>
                 ))}
               </div>
               <div className="bg-slate-50 rounded-2xl p-6 mb-6"><div className="flex justify-between text-lg font-bold text-slate-900"><span>Total Payment</span><span>Rp {grandTotal.toLocaleString()}</span></div></div>
               <button onClick={() => { setShowCartModal(false); setView('checkout'); }} className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-orange-500/30 hover:bg-orange-700 active:scale-95 transition-all uppercase tracking-widest flex justify-center items-center gap-2">{txt.checkout}</button>
             </div>
          </div>
        )}
      </div>
    );
  }

  // --- VIEW 3: CHECKOUT ---
  if (view === 'checkout') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-32">
        <div className="bg-white sticky top-0 z-30 px-6 pt-6 pb-4 shadow-sm flex items-center gap-4">
          <button onClick={() => setView('menu')} className="p-2 bg-slate-100 rounded-full"><ChevronLeft className="w-5 h-5" /></button>
          <h2 className="text-lg font-bold">{txt.checkout}</h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">{txt.payment}</h3>
            <div className="space-y-3">
              <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'room' ? 'border-orange-500 bg-orange-50' : 'border-slate-100'}`}>
                <input type="radio" name="payment" className="hidden" checked={paymentMethod === 'room'} onChange={() => setPaymentMethod('room')} />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'room' ? 'border-orange-500' : 'border-slate-300'}`}>{paymentMethod === 'room' && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}</div>
                <Building2 className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-bold text-slate-700">Charge to Room ({roomNumber})</span>
              </label>

              <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'qris' ? 'border-orange-500 bg-orange-50' : 'border-slate-100'}`}>
                <input type="radio" name="payment" className="hidden" checked={paymentMethod === 'qris'} onChange={() => setPaymentMethod('qris')} />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'qris' ? 'border-orange-500' : 'border-slate-300'}`}>{paymentMethod === 'qris' && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}</div>
                <QrCode className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-bold text-slate-700">QRIS / E-Wallet</span>
              </label>

              <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-orange-500 bg-orange-50' : 'border-slate-100'}`}>
                <input type="radio" name="payment" className="hidden" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bank' ? 'border-orange-500' : 'border-slate-300'}`}>{paymentMethod === 'bank' && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}</div>
                <CreditCard className="w-5 h-5 text-slate-600" />
                <span className="text-sm font-bold text-slate-700">Virtual Account</span>
              </label>
            </div>
            
            {paymentMethod === 'qris' && (<div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl flex flex-col items-center text-center animate-fade-in"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="w-32 h-32 opacity-80" /><p className="text-[10px] text-slate-400 mt-2">Scan to Pay</p></div>)}
          </div>

          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">{txt.summary}</h3>
            <div className="space-y-4 mb-6 border-b border-slate-100 pb-6">
              {cart.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm"><span className="text-slate-600">{item.qty}x {item.name}</span><span className="font-bold">Rp {(item.price * item.qty).toLocaleString()}</span></div>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-500"><span>{txt.subtotal}</span><span>Rp {subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-slate-500"><span>{txt.tax}</span><span>Rp {taxService.toLocaleString()}</span></div>
              <div className="flex justify-between text-lg font-bold text-slate-900 mt-4 pt-4 border-t border-slate-100"><span>{txt.total}</span><span>Rp {grandTotal.toLocaleString()}</span></div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-8 left-6 right-6 z-40">
           <button onClick={handleOrder} disabled={loading} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl active:scale-95 transition-all flex justify-center items-center gap-2">{loading ? <span className="animate-spin">⏳</span> : txt.placeOrder}</button>
        </div>
      </div>
    );
  }

  // --- VIEW 4: SUCCESS ---
  if (view === 'success') {
    return (
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-8 text-center font-sans">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-green-200 shadow-2xl mb-8 animate-bounce"><Star className="w-12 h-12 text-white fill-white" /></div>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">{txt.successTitle}</h2>
        <p className="text-slate-500 mb-10 leading-relaxed max-w-xs mx-auto">{txt.successMsg}</p>
        <button onClick={() => setView('login')} className="px-10 py-4 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm uppercase tracking-widest">{txt.back}</button>
      </div>
    );
  }

  return null;
}