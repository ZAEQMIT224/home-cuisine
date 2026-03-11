// ══════════════════════════════════════════════════
// EMAILJS CONFIGURATION
// 1. Sign up free at https://emailjs.com
// 2. Create an Email Service (Gmail / Outlook)
// 3. Create an Email Template with variables:
//    {{customer_name}}, {{customer_phone}},
//    {{delivery_address}}, {{order_items}},
//    {{order_total}}, {{special_notes}}, {{order_time}}
// 4. Replace the values below
// ══════════════════════════════════════════════════
const CONFIG = {
  emailjs_public_key:  'YOUR_PUBLIC_KEY',
  emailjs_service_id:  'YOUR_SERVICE_ID',
  emailjs_template_id: 'YOUR_TEMPLATE_ID',
  owner_email: 'homecuisine@gmail.com',
};
const ejsReady = CONFIG.emailjs_public_key !== 'YOUR_PUBLIC_KEY';
if (ejsReady) emailjs.init(CONFIG.emailjs_public_key);

// ── DISH DATA ──────────────────────────────────────
const DISHES = [
  {id:'peri-peri-pizza',name:'Peri Peri Chicken Pizza',tagline:'A fire-kissed neighbourhood legend',category:'pizza',price:99,badges:['Bestseller','Spicy'],
   desc:'Tender chicken marinated in house peri peri, laid over slow-cooked smoky red sauce, blanketed in stretchy mozzarella on a hand-stretched crispy base. The dish that started it all.',
   img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85',
   ingredients:[
     {name:'Hand-Stretched Base',desc:'Slow-fermented, crispy edge',img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80'},
     {name:'Peri Peri Chicken',desc:'Marinated in house spice blend',img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80'},
     {name:'Smoky Red Sauce',desc:'Slow-cooked tomato & herb',img:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80'},
     {name:'Mozzarella',desc:'Generously melted, pull-apart',img:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a318?w=400&q=80'},
   ]},
  {id:'cheese-burst-pizza',name:'Cheese Burst Pizza',tagline:'Liquid gold in every slice',category:'pizza',price:89,badges:['Popular'],
   desc:'A molten cheese-stuffed crust that oozes on the first bite — paired with rich tomato sauce and fresh herbs. Pure indulgence at a humble price.',
   img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=1200&q=85',
   ingredients:[
     {name:'Cheese-Stuffed Crust',desc:'Molten cheese inside the rim',img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80'},
     {name:'Rich Tomato Sauce',desc:'Fresh tomatoes, garlic, basil',img:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80'},
     {name:'Mozzarella Blend',desc:'Three-cheese melted top',img:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a318?w=400&q=80'},
     {name:'Fresh Herbs',desc:'Oregano, basil, chilli flakes',img:'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&q=80'},
   ]},
  {id:'veg-supreme',name:'Veg Supreme Pizza',tagline:'Garden freshness, every slice',category:'pizza',price:79,badges:[],
   desc:'Loaded with crisp garden-fresh vegetables — capsicum, onions, olives, corn — over a herbed tomato base and generous mozzarella. A celebration of freshness.',
   img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=85',
   ingredients:[
     {name:'Mixed Vegetables',desc:'Capsicum, onion, corn, olives',img:'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80'},
     {name:'Herbed Tomato Base',desc:'Classic Italian-style sauce',img:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80'},
     {name:'Mozzarella',desc:'Melted to a golden top',img:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a318?w=400&q=80'},
     {name:'Crispy Base',desc:'Thin and perfectly charred',img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80'},
   ]},
  {id:'chicken-burger',name:'Crispy Chicken Burger',tagline:'The burger that built our reputation',category:'burgers',price:59,badges:['Fan Favourite'],
   desc:'Golden-fried chicken thigh fillet, shatteringly crispy outside and juicy within. Fresh slaw, house sauce, pickles in a lightly toasted bun.',
   img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=85',
   ingredients:[
     {name:'Crispy Chicken Fillet',desc:'Buttermilk-marinated, golden fried',img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80'},
     {name:'Soft Bun',desc:'Lightly buttered and toasted',img:'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80'},
     {name:'Fresh Slaw',desc:'Crisp cabbage, carrot & dressing',img:'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&q=80'},
     {name:'House Sauce',desc:'Secret recipe, creamy & tangy',img:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80'},
   ]},
  {id:'double-patty',name:'Double Patty Burger',tagline:'Twice the joy, same great price',category:'burgers',price:89,badges:['New'],
   desc:'Two stacked chicken patties seasoned with our signature rub, loaded with caramelised onions, fresh tomatoes, lettuce, and extra house sauce. A meal in itself.',
   img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200&q=85',
   ingredients:[
     {name:'Double Patties',desc:'Two seasoned chicken fillets',img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80'},
     {name:'Caramelised Onions',desc:'Slow-cooked to sweet perfection',img:'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&q=80'},
     {name:'Fresh Tomato & Lettuce',desc:'Garden-fresh, crisp and cool',img:'https://images.unsplash.com/photo-1556801712-76c379fef7b0?w=400&q=80'},
     {name:'Sesame Bun',desc:'Toasted sesame-topped bun',img:'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80'},
   ]},
  {id:'aloo-tikki',name:'Aloo Tikki Burger',tagline:'A desi classic, elevated',category:'burgers',price:40,badges:[],
   desc:'Spiced potato tikki, tangy green chutney, crispy sev, sliced onions and fresh coriander nestled in a soft bun. Comfort food, reimagined.',
   img:'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=1200&q=85',
   ingredients:[
     {name:'Aloo Tikki',desc:'Spiced mashed potato patty',img:'https://images.unsplash.com/photo-1518977922922-7b90fcf96b54?w=400&q=80'},
     {name:'Green Chutney',desc:'Fresh mint & coriander blend',img:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80'},
     {name:'Crispy Sev & Onion',desc:'Crunchy texture, sharp bite',img:'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&q=80'},
     {name:'Soft Bun',desc:'Classic, lightly toasted',img:'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80'},
   ]},
  {id:'chicken-popcorn',name:'Chicken Popcorn',tagline:'The snack that won hearts',category:'snacks',price:49,badges:['Popular'],
   desc:'Bite-sized tender chicken pieces in a light seasoned crumb — shatteringly crispy outside, juicy within. Served with a zesty dipping sauce.',
   img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=1200&q=85',
   ingredients:[
     {name:'Tender Chicken',desc:'Carefully trimmed bite-sized pieces',img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80'},
     {name:'Seasoned Crumb',desc:'Light spiced breadcrumb coat',img:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80'},
     {name:'Zesty Dip',desc:'Tangy house-made dipping sauce',img:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80'},
     {name:'Secret Spice Blend',desc:'Paprika, garlic, herbs',img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80'},
   ]},
  {id:'french-fries',name:'Golden French Fries',tagline:'Simple. Perfect. Legendary.',category:'snacks',price:30,badges:[],
   desc:'Freshly cut potatoes, double-fried to a golden crisp, seasoned with fine sea salt and house spice. Light and airy inside, satisfying crunch outside.',
   img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&q=85',
   ingredients:[
     {name:'Fresh Potatoes',desc:'Selected for even sizing',img:'https://images.unsplash.com/photo-1518977922922-7b90fcf96b54?w=400&q=80'},
     {name:'Sea Salt',desc:'Fine-ground, perfectly seasoned',img:'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?w=400&q=80'},
     {name:'House Spice Dust',desc:'Paprika, cumin, garlic powder',img:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80'},
     {name:'Dipping Sauce',desc:'Ketchup or house special',img:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80'},
   ]},
  {id:'nuggets',name:'Chicken Nuggets',tagline:'Golden, juicy, irresistible',category:'snacks',price:55,badges:[],
   desc:'Plump, juicy chicken nuggets encased in a golden crumb — tender inside, crispy all around. A timeless favourite for all ages.',
   img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=1200&q=85',
   ingredients:[
     {name:'Chicken Breast',desc:'Lean, premium cut pieces',img:'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80'},
     {name:'Golden Crumb',desc:'Light, crispy outer coating',img:'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80'},
     {name:'Seasoning Mix',desc:'Salt, pepper, spice blend',img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80'},
     {name:'Dipping Sauce',desc:'Choice of sauce on the side',img:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80'},
   ]},
  {id:'cold-coffee',name:'Cold Coffee',tagline:'Chilled, creamy, indulgent',category:'drinks',price:40,badges:[],
   desc:'Freshly brewed strong coffee blended with cold milk, ice, and a touch of vanilla. Thick, creamy, and deeply satisfying.',
   img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&q=85',
   ingredients:[
     {name:'Fresh-Brewed Coffee',desc:'Strong aromatic house blend',img:'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80'},
     {name:'Cold Full-Fat Milk',desc:'Rich and creamy',img:'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80'},
     {name:'Crushed Ice',desc:'For that perfect chill',img:'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=400&q=80'},
     {name:'Vanilla Essence',desc:'A subtle sweet note',img:'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80'},
   ]},
  {id:'lemon-soda',name:'Fresh Lemon Soda',tagline:'The refresher you deserve',category:'drinks',price:25,badges:[],
   desc:'Hand-squeezed fresh lemon, sparkling soda, black salt, and mint leaves. Light, zesty, and incredibly refreshing.',
   img:'https://images.unsplash.com/photo-1534353473418-4cfa0e2d9ea3?w=1200&q=85',
   ingredients:[
     {name:'Fresh Lemons',desc:'Hand-squeezed, never concentrate',img:'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80'},
     {name:'Sparkling Soda',desc:'Chilled carbonated water',img:'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&q=80'},
     {name:'Black Salt & Sugar',desc:'Perfectly balanced seasoning',img:'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?w=400&q=80'},
     {name:'Fresh Mint',desc:'Aromatic garden-fresh garnish',img:'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80'},
   ]},
  {id:'soft-drink',name:'Soft Drinks',tagline:'Classic, chilled, satisfying',category:'drinks',price:20,badges:[],
   desc:'Pepsi, 7UP, Sprite or Coca-Cola — perfectly chilled and ready to pair with your meal.',
   img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=1200&q=85',
   ingredients:[
     {name:'Premium Soda',desc:'Pepsi, 7UP, Sprite, Coke',img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80'},
     {name:'Crushed Ice',desc:'Served ice-cold',img:'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=400&q=80'},
     {name:'Fresh Glass',desc:'Clean, chilled serving glass',img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80'},
     {name:'Choice of Flavour',desc:'Tell us your preference',img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80'},
   ]},
];

const CATEGORIES = [
  {id:'pizza',label:'🍕 Pizza'},
  {id:'burgers',label:'🍔 Burgers'},
  {id:'snacks',label:'🍟 Snacks'},
  {id:'drinks',label:'🥤 Drinks'},
];

// ── STATE ──────────────────────────────────────────
let cart = [];
let currentDish = null;
let currentQty = 1;

// ── BUILD FEATURED ─────────────────────────────────
function buildFeatured() {
  const featured = ['peri-peri-pizza','chicken-burger','chicken-popcorn','double-patty'];
  const grid = document.getElementById('dishes-grid');
  grid.innerHTML = DISHES.filter(d => featured.includes(d.id)).map(d => `
    <div class="dish-card" onclick="openDetail('${d.id}')">
      <img class="dish-card-img" src="${d.img}" alt="${d.name}" loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800'"/>
      <div class="dish-card-overlay">
        <div class="dish-badges">${d.badges.map(b=>`<span class="badge${b==='Spicy'?' spicy':''}">${b}</span>`).join('')}</div>
        <div class="dish-card-name">${d.name}</div>
        <div class="dish-card-sub">${d.tagline}</div>
        <div class="dish-card-footer">
          <div class="dish-card-price">₹${d.price}</div>
          <div class="dish-explore">Explore <div class="dish-explore-arrow">→</div></div>
        </div>
      </div>
    </div>`).join('');
}

// ── BUILD MENU ─────────────────────────────────────
function buildMenu() {
  const tabsEl = document.getElementById('menu-tabs');
  const panelsEl = document.getElementById('menu-panels');
  tabsEl.innerHTML = CATEGORIES.map((c,i) =>
    `<button class="tab${i===0?' on':''}" onclick="switchTab('${c.id}',this)">${c.label}</button>`).join('');
  panelsEl.innerHTML = CATEGORIES.map((c,i) => `
    <div class="menu-panel${i===0?' on':''}" id="panel-${c.id}">
      ${DISHES.filter(d=>d.category===c.id).map(d=>`
        <div class="menu-row reveal" onclick="openDetail('${d.id}')">
          <img class="menu-row-img" src="${d.img}" alt="${d.name}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300'"/>
          <div class="menu-row-body">
            <div class="menu-row-name">${d.name}</div>
            <div class="menu-row-desc">${d.tagline}</div>
            <div class="menu-row-price">₹${d.price}</div>
          </div>
        </div>`).join('')}
    </div>`).join('');
}

function switchTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.menu-panel').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('panel-'+id).classList.add('on');
  document.querySelectorAll('#panel-'+id+' .reveal').forEach(el=>revObs.observe(el));
}

// ── DISH DETAIL ────────────────────────────────────
function openDetail(id) {
  const d = DISHES.find(x=>x.id===id);
  if (!d) return;
  currentDish = d; currentQty = 1;
  document.getElementById('detail-qty').textContent = 1;
  const img = document.getElementById('detail-img');
  img.src = d.img;
  img.onerror = ()=>{ img.src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200'; };
  document.getElementById('detail-price').textContent = '₹'+d.price;
  document.getElementById('detail-name').textContent = d.name;
  document.getElementById('detail-tagline').textContent = d.tagline;
  document.getElementById('detail-desc').textContent = d.desc;
  document.getElementById('detail-badges').innerHTML = d.badges.map(b=>
    `<span class="badge${b==='Spicy'?' spicy':''}">${b}</span>`).join('');
  document.getElementById('detail-ingredients').innerHTML = d.ingredients.map(ing=>`
    <div class="ing-card">
      <img class="ing-img" src="${ing.img}" alt="${ing.name}" loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300'"/>
      <div class="ing-body">
        <div class="ing-name">${ing.name}</div>
        <div class="ing-desc">${ing.desc}</div>
      </div>
    </div>`).join('');
  document.getElementById('detail-overlay').classList.add('open');
  document.getElementById('detail-panel').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeDetail() {
  document.getElementById('detail-overlay').classList.remove('open');
  document.getElementById('detail-panel').classList.remove('open');
  document.body.style.overflow='';
}
function changeQty(d) {
  currentQty = Math.max(1,Math.min(10,currentQty+d));
  document.getElementById('detail-qty').textContent = currentQty;
}
function addCurrentToCart() {
  if (!currentDish) return;
  const ex = cart.find(i=>i.id===currentDish.id);
  if (ex) ex.qty += currentQty;
  else cart.push({id:currentDish.id,name:currentDish.name,price:currentDish.price,img:currentDish.img,qty:currentQty});
  updateCartUI(); closeDetail(); openCart();
}

// ── CART ───────────────────────────────────────────
function openCart() {
  renderCart();
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow='';
}
function renderCart() {
  const el = document.getElementById('cart-items');
  const cb = document.getElementById('checkout-btn');
  if (!cart.length) {
    el.innerHTML=`<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div>Your order is empty.<br/>Explore dishes to add.</div></div>`;
    cb.disabled=true; return;
  }
  el.innerHTML = cart.map(i=>`
    <div class="cart-item">
      <img class="cart-item-img" src="${i.img}" alt="${i.name}"
        onerror="this.src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200'"/>
      <div style="flex:1;min-width:0">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">₹${i.price*i.qty}</div>
      </div>
      <div class="cart-item-qty">
        <button class="cqb" onclick="cartQty('${i.id}',-1)">−</button>
        <div class="cqn">${i.qty}</div>
        <button class="cqb" onclick="cartQty('${i.id}',1)">+</button>
      </div>
    </div>`).join('');
  cb.disabled = false;
  updateCartUI();
}
function cartQty(id,d) {
  const it=cart.find(i=>i.id===id);
  if (!it) return;
  it.qty+=d;
  if (it.qty<=0) cart=cart.filter(i=>i.id!==id);
  renderCart();
}
function updateCartUI() {
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const count=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-count').textContent=count;
  document.getElementById('cart-total').textContent='₹'+total;
}

// ── CHECKOUT ───────────────────────────────────────
function openCheckout() {
  closeCart();
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const cosEl = document.getElementById('cos-wrap');
  cosEl.innerHTML=`
    <div class="cos-title">Order Summary</div>
    ${cart.map(i=>`<div class="cos-item"><span class="cos-name">${i.name} × ${i.qty}</span><span class="cos-price">₹${i.price*i.qty}</span></div>`).join('')}
    <div class="cos-total"><span class="cos-total-l">Total</span><span class="cos-total-v">₹${total}</span></div>`;
  if (!ejsReady) document.getElementById('setup-note').classList.add('show');
  document.getElementById('order-success').style.display='none';
  document.getElementById('checkout-form-area').style.display='block';
  document.getElementById('checkout-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCheckout() {
  document.getElementById('checkout-overlay').classList.remove('open');
  document.body.style.overflow='';
}
async function placeOrder() {
  const name=document.getElementById('f-name').value.trim();
  const phone=document.getElementById('f-phone').value.trim();
  const address=document.getElementById('f-address').value.trim();
  const notes=document.getElementById('f-notes').value.trim();
  if (!name||!phone||!address){alert('Please fill in name, phone and address.');return;}
  const btn=document.getElementById('place-btn');
  btn.disabled=true; btn.textContent='Sending…';
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const items=cart.map(i=>`${i.name} × ${i.qty} = ₹${i.price*i.qty}`).join('\n');
  const time=new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'});
  if (ejsReady) {
    try {
      await emailjs.send(CONFIG.emailjs_service_id, CONFIG.emailjs_template_id, {
        customer_name:name, customer_phone:phone, delivery_address:address,
        order_items:items, order_total:'₹'+total, special_notes:notes||'None', order_time:time
      });
      showSuccess(phone);
    } catch(e) { console.error(e); fallbackMail(name,phone,address,items,total,notes,time); }
  } else { fallbackMail(name,phone,address,items,total,notes,time); }
  btn.disabled=false; btn.textContent='Send Order';
}
function fallbackMail(name,phone,address,items,total,notes,time) {
  const subj=encodeURIComponent(`New Order from ${name} — Home Cuisine`);
  const body=encodeURIComponent(`NEW ORDER — Home Cuisine\n${'─'.repeat(30)}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nORDER:\n${items}\n\nTOTAL: ₹${total}\nNotes: ${notes||'None'}\nTime: ${time}`);
  window.location.href=`mailto:${CONFIG.owner_email}?subject=${subj}&body=${body}`;
  showSuccess(phone);
}
function showSuccess(phone) {
  document.getElementById('checkout-form-area').style.display='none';
  document.getElementById('success-phone').textContent=phone;
  document.getElementById('order-success').style.display='block';
  cart=[]; updateCartUI();
}

// ── NAV SCROLL ─────────────────────────────────────
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',scrollY>60);
});

// ── SCROLL REVEAL ──────────────────────────────────
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

// ── KEYBOARD ───────────────────────────────────────
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeDetail();closeCart();closeCheckout();}
});

buildFeatured();
buildMenu();
