// ========== Data ==========
const featuredSystems = [
  {
    id:'apex-force',
    code:'AP-SYS-001',
    brand:'ARIAN PISHRO',
    name:'APEX FORCE — هیولای 4K',
    img:'assets/images/hero-pc.jpg',
    badge:'پرفروش',
    specs:{gpu:'RTX 5080 16GB',cpu:'i7-14700K',ram:'32GB DDR5',ssd:'1TB NVMe Gen4'},
    price: 88900000,
    oldPrice: 96500000,
    discount:8,
  },
  {
    id:'nova-x',
    code:'AP-SYS-002',
    brand:'ARIAN PISHRO',
    name:'NOVA X — تعادل قدرت و قیمت',
    img:'assets/images/hero-pc.jpg',
    badge:'پیشنهاد ویژه',
    specs:{gpu:'RTX 5070 12GB',cpu:'Ryzen 7 7700X',ram:'32GB DDR5',ssd:'1TB NVMe'},
    price: 62900000,
    oldPrice: 68900000,
    discount:9,
  },
  {
    id:'zero',
    code:'AP-SYS-003',
    brand:'ARIAN PISHRO',
    name:'ZERO — اقتصادیِ گیمینگ',
    img:'assets/images/gpu.jpg',
    badge:'اقتصادی',
    specs:{gpu:'RTX 4060 8GB',cpu:'i5-14400F',ram:'16GB DDR5',ssd:'512GB NVMe'},
    price: 32900000,
    oldPrice: 35900000,
    discount:8,
  },
  {
    id:'titan',
    code:'AP-SYS-004',
    brand:'ARIAN PISHRO',
    name:'TITAN — ورک‌استیشن رندر',
    img:'assets/images/builder.jpg',
    badge:'ورک‌استیشن',
    specs:{gpu:'RTX 4090 24GB',cpu:'i9-14900K',ram:'64GB DDR5',ssd:'2TB NVMe'},
    price: 145000000,
    oldPrice: 159000000,
    discount:9,
  },
];

const products = [
  {id:'p1',code:'AP-GPU-5080',brand:'ASUS ROG',cat:'gpu',name:'کارت گرافیک ایسوس ROG RTX 5080 OC 16GB',img:'assets/images/gpu.jpg',specs:{gpu:'RTX 5080',vram:'16GB GDDR7',bus:'256-bit',power:'360W'},price:52900000,oldPrice:58900000,inStock:true,stars:5},
  {id:'p2',code:'AP-LAP-001',brand:'ASUS',cat:'laptop',name:'لپ‌تاپ گیمینگ ROG Strix G16 — i7 14700HX + RTX 4070',img:'assets/images/laptop.jpg',specs:{cpu:'i7-14700HX',gpu:'RTX 4070 8GB',ram:'16GB',ssd:'1TB NVMe'},price:74900000,oldPrice:79900000,inStock:true,stars:5},
  {id:'p3',code:'AP-CPU-14900',brand:'Intel',cat:'cpu',name:'پردازنده Intel Core i9-14900K — 24 هسته',img:'assets/images/gpu.jpg',specs:{cores:'24 هسته',threads:'32',freq:'6.0 GHz',cache:'36MB'},price:28900000,oldPrice:null,inStock:true,stars:4},
  {id:'p4',code:'AP-SYS-005',brand:'ARIAN PISHRO',cat:'system',name:'سیستم گیمینگ NOVA Lite — RTX 4060 Ti',img:'assets/images/hero-pc.jpg',specs:{gpu:'RTX 4060 Ti',cpu:'i5-14400F',ram:'16GB DDR5',ssd:'1TB NVMe'},price:42500000,oldPrice:46500000,inStock:true,stars:5},
  {id:'p5',code:'AP-PER-001',brand:'Razer',cat:'peripheral',name:'کیبورد مکانیکال Razer BlackWidow V4 — سبز',img:'assets/images/peripherals.jpg',specs:{switch:'Green',layout:'Full-size',light:'RGB Chroma',conn:'USB-C'},price:6900000,oldPrice:7900000,inStock:true,stars:5},
  {id:'p6',code:'AP-PER-002',brand:'Logitech',cat:'peripheral',name:'موس گیمینگ Logitech G502 X — 25K DPI',img:'assets/images/peripherals.jpg',specs:{dpi:'25,600',weight:'89g',switch:'Hybrid',battery:'—'},price:4200000,oldPrice:null,inStock:true,stars:4},
  {id:'p7',code:'AP-GPU-4090',brand:'MSI',cat:'gpu',name:'کارت گرافیک MSI RTX 4090 Gaming X Trio 24GB',img:'assets/images/gpu.jpg',specs:{gpu:'RTX 4090',vram:'24GB GDDR6X',bus:'384-bit',power:'450W'},price:89500000,oldPrice:99500000,inStock:false,stars:5},
  {id:'p8',code:'AP-LAP-002',brand:'Lenovo',cat:'laptop',name:'لپ‌تاپ Lenovo Legion Pro 7 — Ryzen 9 + RTX 4080',img:'assets/images/laptop.jpg',specs:{cpu:'Ryzen 9 7945HX',gpu:'RTX 4080 12GB',ram:'32GB',ssd:'1TB NVMe'},price:112000000,oldPrice:125000000,inStock:true,stars:5},
  {id:'p9',code:'AP-CPU-7800X3D',brand:'AMD',cat:'cpu',name:'پردازنده AMD Ryzen 7 7800X3D — شاهِ گیمینگ',img:'assets/images/gpu.jpg',specs:{cores:'8 هسته',threads:'16',freq:'5.0 GHz',cache:'104MB 3D'},price:18900000,oldPrice:20900000,inStock:true,stars:5},
];

const builderData = {
  gpu:[
    {id:'g1',name:'RTX 4060 8GB',price:18500000,watt:115},
    {id:'g2',name:'RTX 5070 12GB',price:32500000,watt:220},
    {id:'g3',name:'RTX 5080 16GB',price:52900000,watt:360},
    {id:'g4',name:'RTX 4090 24GB',price:89500000,watt:450},
  ],
  cpu:[
    {id:'c1',name:'i5-14400F',price:9800000,watt:65},
    {id:'c2',name:'i7-14700K',price:18900000,watt:125},
    {id:'c3',name:'Ryzen 7 7800X3D',price:18900000,watt:85},
    {id:'c4',name:'i9-14900K',price:28900000,watt:150},
  ],
  ram:[
    {id:'r1',name:'16GB DDR5 5200',price:3200000,watt:10},
    {id:'r2',name:'32GB DDR5 5600',price:5800000,watt:12},
    {id:'r3',name:'64GB DDR5 6000',price:11200000,watt:15},
  ],
};

// ========== Helpers ==========
const fmt = n => n.toLocaleString('fa-IR');
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function toast(msg, type=''){
  const c=$('#toasts');
  const el=document.createElement('div');
  el.className='toast'+(type?` toast--${type}`:'');
  el.textContent=msg;
  c.appendChild(el);
  setTimeout(()=>{el.style.opacity='0';el.style.transform='translateY(6px)';setTimeout(()=>el.remove(),300)},2500);
}

// Ripple + Shine (Google-level)
document.addEventListener('click', e=>{
  const btn=e.target.closest('[data-ripple]');
  if(!btn) return;
  const rect=btn.getBoundingClientRect();
  const ripple=document.createElement('span');
  ripple.className='ripple';
  const size=Math.max(rect.width,rect.height)*1.2;
  ripple.style.width=ripple.style.height=size+'px';
  ripple.style.left=(e.clientX-rect.left-size/2)+'px';
  ripple.style.top=(e.clientY-rect.top-size/2)+'px';
  btn.appendChild(ripple);
  setTimeout(()=>ripple.remove(),600);
});

// Shortcuts
document.addEventListener('keydown', e=>{
  if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k'){
    e.preventDefault(); $('#searchInput').focus();
  }
  if(e.key==='Escape'){ closeModal(); closeDrawer(); }
});

// ========== Hero stats counter ==========
function animateStats(){
  $$('#heroStats [data-count]').forEach(el=>{
    const target=+el.dataset.count;
    let cur=0;
    const step=Math.ceil(target/40);
    const id=setInterval(()=>{
      cur=Math.min(target,cur+step);
      el.textContent=cur.toLocaleString('fa-IR');
      if(cur===target) clearInterval(id);
    },30);
  });
}
animateStats();

// ========== Mobile nav ==========
$('#burger').addEventListener('click', ()=> $('#mobileNav').classList.toggle('is-open'));

// ========== Render Featured Rail ==========
function renderRail(){
  const rail=$('#systemsRail');
  rail.innerHTML=featuredSystems.map(s=>`
    <article class="rail__card">
      <div class="rail__media">
        <img src="${s.img}" alt="${s.name}" loading="lazy">
        <span class="rail__badge">${s.badge}</span>
      </div>
      <div class="rail__body">
        <h3 class="rail__title">${s.name}</h3>
        <div class="rail__code">${s.code} • ${s.brand}</div>
        <div class="specs">
          <span><b>گرافیک</b><strong>${s.specs.gpu}</strong></span>
          <span><b>پردازنده</b><strong>${s.specs.cpu}</strong></span>
          <span><b>رم</b><strong>${s.specs.ram}</strong></span>
          <span><b>حافظه</b><strong>${s.specs.ssd}</strong></span>
        </div>
        <div class="trust-line"><i>🛡️</i> ۱۲ ماه گارانتی • ۷ روز مهلت تست • اسمبل رایگان</div>
        <div class="rail__price">
          <b>${fmt(s.price)} <small style="font-size:11px">تومان</small></b>
          ${s.oldPrice?`<s>${fmt(s.oldPrice)}</s>`:''}
          ${s.discount?`<small>-${s.discount}%</small>`:''}
        </div>
        <div class="rail__actions">
          <button class="btn btn--primary" data-ripple data-add="${s.id}"><span>افزودن به سبد</span></button>
          <button class="btn btn--ghost" data-view="${s.id}">مشاهده</button>
        </div>
      </div>
    </article>
  `).join('');
}
renderRail();

// Rail scroll buttons
$('#railPrev').addEventListener('click', ()=> $('#systemsRail').scrollBy({left:380,behavior:'smooth'}));
$('#railNext').addEventListener('click', ()=> $('#systemsRail').scrollBy({left:-380,behavior:'smooth'}));

// ========== Shop ==========
let activeFilter='all';
let visibleCount=6;
let searchQuery='';

function getFiltered(){
  let list=[...products];
  // search
  if(searchQuery){
    const q=searchQuery.toLowerCase();
    list=list.filter(p=> p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
  }
  // filter
  if(activeFilter==='inStock') list=list.filter(p=>p.inStock);
  else if(activeFilter!=='all') list=list.filter(p=>p.cat===activeFilter);
  // sort
  const sort=$('#sortSelect').value;
  if(sort==='priceAsc') list.sort((a,b)=>a.price-b.price);
  if(sort==='priceDesc') list.sort((a,b)=>b.price-a.price);
  if(sort==='discount') list.sort((a,b)=> ( (b.oldPrice? (b.oldPrice-b.price)/b.oldPrice:0) - (a.oldPrice? (a.oldPrice-a.price)/a.oldPrice:0) ));
  return list;
}

function renderProducts(){
  const list=getFiltered();
  const show=list.slice(0,visibleCount);
  $('#resultCount').textContent=`${fmt(show.length)} از ${fmt(list.length)} کالا`;
  $('#productsGrid').innerHTML=show.map(p=>{
    const disc = p.oldPrice ? Math.round((p.oldPrice-p.price)/p.oldPrice*100) : 0;
    return `
    <article class="product" data-id="${p.id}">
      <div class="product__media">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="product__top">
          <span class="status ${p.inStock?'status--in':'status--out'}"><i></i> ${p.inStock?'موجود':'ناموجود'}</span>
          <span class="product__code">${p.code}</span>
        </div>
      </div>
      <div class="product__body">
        <span class="product__brand">${p.brand}</span>
        <h3 class="product__name">${p.name}</h3>
        <div class="product__specs">
          ${Object.entries(p.specs).map(([k,v])=>`<div><span>${k}</span><b>${v}</b></div>`).join('')}
        </div>
        <div class="trust-line"><i>✓</i> ۱۲ ماه گارانتی • ۷ روز مهلت تست</div>
        <div class="product__price">
          <b>${fmt(p.price)} <small>تومان</small></b>
          ${p.oldPrice?`<s>${fmt(p.oldPrice)}</s>`:''}
          ${disc?`<small style="background:rgba(255,0,0,.12);color:#ff5555;padding:2px 6px;border-radius:999px;font-size:11px">-${disc}%</small>`:''}
        </div>
        <div class="product__actions">
          <button class="btn btn--primary" data-ripple ${p.inStock?'':'disabled'} data-add="${p.id}"><span>${p.inStock?'افزودن به سبد':'ناموجود'}</span></button>
          <button class="btn--ghost-sm" data-view="${p.id}">مشاهده محصول</button>
        </div>
      </div>
    </article>`;
  }).join('') || `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted)">نتیجه‌ای یافت نشد</div>`;

  // choice overload controls
  const moreBtn=$('#loadMoreBtn');
  const hint=$('#loadMoreHint');
  if(list.length>visibleCount){
    moreBtn.style.display='inline-flex';
    moreBtn.textContent=`نمایش ${Math.min(3,list.length-visibleCount)} محصول دیگر ↓`;
    hint.textContent=`${fmt(visibleCount)} از ${fmt(list.length)} نمایش داده شده — برای جلوگیری از Choice Overload`;
  } else {
    moreBtn.style.display='none';
    if(list.length>6) hint.textContent='همه محصولات نمایش داده شد';
    else hint.textContent='';
  }

  // bind progressive disclosure: view
  $$('[data-view]').forEach(b=> b.addEventListener('click', ()=> openModal(b.dataset.view)));
  // add to cart with loading states
  $$('[data-add]').forEach(b=>{
    b.addEventListener('click', async ()=>{
      if(b.disabled) return;
      b.classList.add('is-loading');
      await new Promise(r=>setTimeout(r,600));
      b.classList.remove('is-loading');
      b.classList.add('is-done');
      const orig=b.querySelector('span').textContent;
      b.querySelector('span').textContent='✓ اضافه شد';
      addToCart(b.dataset.add);
      setTimeout(()=>{
        b.classList.remove('is-done');
        b.querySelector('span').textContent=orig;
      },1400);
    });
  });
}

// filters
$$('#filterChips .chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    $$('#filterChips .chip').forEach(c=>c.classList.remove('is-active'));
    chip.classList.add('is-active');
    activeFilter=chip.dataset.filter;
    visibleCount=6;
    renderProducts();
    toast(`فیلتر: ${chip.textContent.trim()}`);
  });
});
$('#sortSelect').addEventListener('change', ()=>{ renderProducts(); });
$('#loadMoreBtn').addEventListener('click', ()=>{
  visibleCount+=3;
  renderProducts();
  toast('۳ محصول دیگر نمایش داده شد');
});
$('#searchInput').addEventListener('input', e=>{
  searchQuery=e.target.value.trim();
  visibleCount=6;
  renderProducts();
  document.querySelector('#shop').scrollIntoView({behavior:'smooth',block:'start'});
});

// category tiles filter
$$('.cat[data-cat]').forEach(c=>{
  c.addEventListener('click', e=>{
    e.preventDefault();
    activeFilter=c.dataset.cat;
    $$('#filterChips .chip').forEach(ch=> ch.classList.toggle('is-active', ch.dataset.filter===activeFilter));
    visibleCount=6;
    renderProducts();
    document.querySelector('#shop').scrollIntoView({behavior:'smooth'});
  });
});

renderProducts();

// ========== Modal — Stockland detail ==========
const modal=$('#productModal');
const backdrop=$('#modalBackdrop');
function openModal(id){
  const p = [...products,...featuredSystems].find(x=>x.id===id) || products[0];
  // unify for featuredSystems
  const name=p.name;
  const code=p.code||'—';
  const brand=p.brand||'ARIAN PISHRO';
  const specs=p.specs||{};
  const price=p.price;
  const oldPrice=p.oldPrice;
  $('#modalInner').innerHTML=`
    <div class="modal-grid">
      <div class="modal-media"><img src="${p.img}" alt="${name}"></div>
      <div class="modal__info">
        <span class="eyebrow">${brand}</span>
        <h2>${name}</h2>
        <div class="modal__code">کد کالا: ${code} • ⭐ ${p.stars||5}.0 • موجودی: ${p.inStock===false?'<span style="color:#ff6b6b">ناموجود</span>':'<span style="color:var(--green)">موجود</span>'}</div>
        <div class="features">
          <div><b>ارسال فردا</b><span>سفارش تا ۱۵ امروز</span></div>
          <div><b>گارانتی ۱۲ ماهه</b><span>تعویض بی‌قید</span></div>
          <div><b>۷ روز مهلت تست</b><span>بازگشت آسان</span></div>
          <div><b>اسمبل رایگان</b><span>تست استرس کامل</span></div>
        </div>
        <div class="shipping">
          <div><b>🚚 پست پیشتاز</b><span>فردا • رایگان بالای ۵م</span></div>
          <div><b>📦 تیپاکس</b><span>فردا • پرداخت مقصد</span></div>
        </div>
        <div style="display:flex;align-items:baseline;gap:10px;margin:12px 0">
          <b style="font-size:20px;color:var(--green)">${fmt(price)} <small>تومان</small></b>
          ${oldPrice?`<s style="color:var(--dim);font-size:12px">${fmt(oldPrice)}</s>`:''}
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn--primary" data-ripple data-add="${p.id}" ${p.inStock===false?'disabled':''}><span>افزودن به سبد</span></button>
          <button class="btn btn--ghost" onclick="closeModal()">بستن</button>
        </div>
      </div>
    </div>
    <div class="tabs">
      <button class="tab is-active" data-tab="intro">معرفی</button>
      <button class="tab" data-tab="specs">مشخصات فنی</button>
      <button class="tab" data-tab="reviews">دیدگاه‌ها</button>
    </div>
    <div class="tab-panel" id="tab-intro">
      <p>${name} با قطعات اورجینال و اسمبل حرفه‌ای عرضه می‌شود. کابل‌کشی تمیز، ایر فلو بهینه و تست پایداری ۴۸ ساعته قبل از ارسال انجام می‌شود. مناسب گیمینگ 1440p/4K و کارهای رندر و استریم.</p>
      <p style="color:var(--muted)">ارسال: سفارش‌های تا ساعت ۱۴ با پست و تا ۱۵ با تیپاکس، فردا به دستتان می‌رسد. برای تهران ارسال فوری همان‌روز امکان‌پذیر است.</p>
    </div>
    <div class="tab-panel" id="tab-specs" style="display:none">
      <table class="spec-table">
        <tr><td>کد کالا</td><td>${code}</td></tr>
        ${Object.entries(specs).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        <tr><td>گارانتی</td><td>۱۲ ماه آریان پیشرو + گارانتی اصلی</td></tr>
        <tr><td>ارسال</td><td>پست پیشتاز / تیپاکس — فردایی</td></tr>
      </table>
    </div>
    <div class="tab-panel" id="tab-reviews" style="display:none">
      <p>⭐⭐⭐⭐⭐ ۴.۸ از ۵ — بر اساس ۴۳ دیدگاه تأییدشده</p>
      <div style="background:var(--card);border:1px solid var(--border);padding:12px;border-radius:10px;margin:8px 0"><b>امیر • تأییدشده</b><p>عالی بود، دقیقاً همون چیزی که سفارش دادم با بسته‌بندی امن رسید.</p></div>
      <div style="background:var(--card);border:1px solid var(--border);padding:12px;border-radius:10px"><b>نگار • تأییدشده</b><p>پشتیبانی تا نصب کامل همراهم بود. پیشنهاد می‌کنم.</p></div>
    </div>
  `;
  modal.classList.add('is-open');
  backdrop.classList.add('is-open');
  document.body.style.overflow='hidden';
  // tabs
  $$('.tab').forEach(t=>{
    t.addEventListener('click', ()=>{
      $$('.tab').forEach(x=>x.classList.remove('is-active'));
      t.classList.add('is-active');
      $('#tab-intro').style.display= t.dataset.tab==='intro'?'block':'none';
      $('#tab-specs').style.display= t.dataset.tab==='specs'?'block':'none';
      $('#tab-reviews').style.display= t.dataset.tab==='reviews'?'block':'none';
    });
  });
  // add from modal
  const addBtn=$('#modalInner [data-add]');
  if(addBtn) addBtn.addEventListener('click', async ()=>{
    addBtn.classList.add('is-loading');
    await new Promise(r=>setTimeout(r,600));
    addBtn.classList.remove('is-loading');
    addToCart(addBtn.dataset.add);
    toast('به سبد اضافه شد ✓','success');
  });
}
function closeModal(){
  modal.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  document.body.style.overflow='';
}
$('#closeModal').addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

// ========== Cart ==========
let cart = JSON.parse(localStorage.getItem('ap_cart')||'[]');

function saveCart(){
  localStorage.setItem('ap_cart', JSON.stringify(cart));
  updateCartUI();
}
function addToCart(id){
  const p=[...products,...featuredSystems].find(x=>x.id===id);
  if(!p) return;
  const ex=cart.find(c=>c.id===id);
  if(ex) ex.qty++;
  else cart.push({id:p.id,name:p.name,img:p.img,price:p.price,qty:1});
  saveCart();
  openDrawer();
  toast('به سبد اضافه شد ✓','success');
}
function updateCartUI(){
  const count=cart.reduce((a,c)=>a+c.qty,0);
  $('#cartCount').textContent=count;
  $('#drawerCount').textContent=count? `${fmt(count)} کالا` : 'خالی';
  const total=cart.reduce((a,c)=>a+c.price*c.qty,0);
  $('#cartTotal').textContent= total? `${fmt(total)} تومان` : '۰ تومان';
  const body=$('#cartItems');
  if(!cart.length){
    body.innerHTML=`<div style="text-align:center;padding:30px;color:var(--muted)">سبد خالی است<br><small>محصولی اضافه کنید تا اینجا ببینید</small></div>`;
    return;
  }
  body.innerHTML=cart.map(c=>`
    <div class="cart-item">
      <img src="${c.img}" alt="">
      <div class="cart-item__info">
        <strong>${c.name}</strong>
        <small>${fmt(c.price)} تومان</small>
        <div class="qty">
          <button onclick="changeQty('${c.id}',-1)">−</button>
          <span style="font-family:monospace">${fmt(c.qty)}</span>
          <button onclick="changeQty('${c.id}',1)">+</button>
          <button onclick="removeItem('${c.id}')" style="margin-inline-start:auto;color:#ff6b6b;border-color:rgba(255,0,0,.2)">✕</button>
        </div>
      </div>
    </div>
  `).join('');
}
window.changeQty=(id,d)=>{
  const it=cart.find(c=>c.id===id);
  if(!it) return;
  it.qty+=d;
  if(it.qty<=0) cart=cart.filter(c=>c.id!==id);
  saveCart();
}
window.removeItem=(id)=>{ cart=cart.filter(c=>c.id!==id); saveCart(); toast('از سبد حذف شد'); }

function openDrawer(){
  $('#cartDrawer').classList.add('is-open');
  $('#drawerBackdrop').classList.add('is-open');
}
function closeDrawer(){
  $('#cartDrawer').classList.remove('is-open');
  $('#drawerBackdrop').classList.remove('is-open');
}
$('#cartBtn').addEventListener('click', openDrawer);
$('#closeDrawer').addEventListener('click', closeDrawer);
$('#drawerBackdrop').addEventListener('click', closeDrawer);

// Checkout — Parkinson: prefill
const savedName=localStorage.getItem('ap_name');
const savedCity=localStorage.getItem('ap_city');
if(savedName) $('#coName').value=savedName;
if(savedCity) $('#coCity').value=savedCity;
const nlSaved=localStorage.getItem('ap_nl_name');
if(nlSaved) $('#nlName').value=nlSaved;

$('#checkoutForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name=$('#coName').value.trim();
  const city=$('#coCity').value.trim();
  if(name) localStorage.setItem('ap_name',name);
  if(city) localStorage.setItem('ap_city',city);
  if(!cart.length){ toast('سبد خالی است'); return; }
  toast('سفارش ثبت شد — همکاران ما تماس می‌گیرند ✓','success');
  cart=[]; saveCart();
  setTimeout(closeDrawer,800);
});

$('#newsletterForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name=$('#nlName').value.trim();
  if(name) localStorage.setItem('ap_nl_name',name);
  toast('عضویت انجام شد — تخفیف‌ها را خبر می‌دهیم ✓','success');
  e.target.reset();
  if(name) $('#nlName').value=name;
});

// ========== Builder ==========
let builderState={
  gpu:'g2',
  cpu:'c2',
  ram:'r2',
};

const presetsMap={
  eco:{gpu:'g1',cpu:'c1',ram:'r1'},
  pro:{gpu:'g2',cpu:'c2',ram:'r2'},
  flagship:{gpu:'g4',cpu:'c4',ram:'r3'},
};

function renderBuilder(){
  const container=$('#builderOptions');
  container.innerHTML=['gpu','cpu','ram'].map(cat=>{
    const title={gpu:'کارت گرافیک',cpu:'پردازنده',ram:'حافظه رم'}[cat];
    const watt = builderData[cat].find(o=>o.id===builderState[cat])?.watt||0;
    return `
      <div class="builder-group" data-cat="${cat}">
        <h4>${title} <small>${watt}W</small></h4>
        <div class="options">
          ${builderData[cat].map(o=>`
            <label class="option ${builderState[cat]===o.id?'is-selected':''}" data-opt="${o.id}" data-cat="${cat}">
              <div>
                <div class="option__name">${o.name}</div>
                <div class="option__meta">${o.watt} وات • موجود</div>
              </div>
              <div style="text-align:left">
                <div class="option__price">${fmt(o.price)}</div>
                <input type="radio" name="${cat}" ${builderState[cat]===o.id?'checked':''}>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // bind
  container.querySelectorAll('.option').forEach(el=>{
    el.addEventListener('click', ()=>{
      const cat=el.dataset.cat;
      builderState[cat]=el.dataset.opt;
      updateBuilderSummary();
      renderBuilder();
      // stepper
      const idx={gpu:1,cpu:2,ram:3}[cat];
      $$('.step').forEach(s=> s.classList.toggle('is-active', +s.dataset.step===idx));
    });
  });

  updateBuilderSummary();
}

function updateBuilderSummary(){
  const gpu=builderData.gpu.find(o=>o.id===builderState.gpu);
  const cpu=builderData.cpu.find(o=>o.id===builderState.cpu);
  const ram=builderData.ram.find(o=>o.id===builderState.ram);
  const parts=[gpu,cpu,ram];
  const total=parts.reduce((a,b)=>a+b.price,0) + 8500000; // case+board+psu+cooler base
  const watt=parts.reduce((a,b)=>a+b.watt,0)+120;
  const psu = watt<500? '650W Bronze' : watt<700? '750W Gold' : '850W Gold';
  const pct=Math.min(100, Math.round(watt/850*100));

  $('#builderSummary').innerHTML=`
    <h3>خلاصه سیستم</h3>
    <div class="summary-list">
      <div><span>کارت گرافیک</span><b>${gpu.name}</b></div>
      <div><span>پردازنده</span><b>${cpu.name}</b></div>
      <div><span>رم</span><b>${ram.name}</b></div>
      <div><span>کیس + مادربرد + خنک‌کننده</span><b>۸٫۵۰۰٫۰۰۰</b></div>
    </div>
    <div style="font-size:12px;color:var(--muted)">توان مصرفی: <b style="color:var(--text)">${watt}W</b> • پاور پیشنهادی: <b style="color:var(--green)">${psu}</b></div>
    <div class="meter"><i style="width:${pct}%"></i></div>
    <div style="font-size:11px;color:var(--muted)">${pct}% از ظرفیت 850W</div>
    <div class="summary-total"><span>قیمت نهایی</span><b>${fmt(total)} <small>تومان</small></b></div>
    <button class="btn btn--primary btn--full" data-ripple id="builderAdd">افزودن این سیستم به سبد</button>
    <small style="font-size:11px;color:var(--muted);display:block;margin-top:8px;text-align:center">قانون Von Restorff: قیمت نهایی متمایز — در ذهن می‌ماند</small>
  `;
  $('#builderAdd').addEventListener('click', ()=>{
    const id='custom-'+Date.now();
    cart.push({id,name:`سیستم سفارشی (${gpu.name} + ${cpu.name})`,img:'assets/images/builder.jpg',price:total,qty:1});
    saveCart(); openDrawer(); toast('سیستم سفارشی به سبد اضافه شد ✓','success');
  });
  // update stepper lines
  $$('.step').forEach(s=>{
    if(+s.dataset.step<=3 && builderState[['','gpu','cpu','ram'][+s.dataset.step]]){
      s.classList.add('is-active');
    }
  });
}

// presets
$$('.preset').forEach(p=>{
  p.addEventListener('click', ()=>{
    $$('.preset').forEach(x=>x.classList.remove('is-active'));
    p.classList.add('is-active');
    const preset=presetsMap[p.dataset.preset];
    builderState={...preset};
    renderBuilder();
    toast(`پریست ${p.querySelector('strong').textContent} اعمال شد`);
  });
});

renderBuilder();
updateCartUI();

// ========== Scroll header shadow ==========
window.addEventListener('scroll', ()=>{
  $('#header').style.boxShadow = window.scrollY>10? '0 4px 20px rgba(0,0,0,.4)' : 'none';
});

// ========== Theme — white default, dark lighter than pure black ==========
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ap_theme', theme);
}
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    toast(next==='dark' ? 'حالت تیره فعال شد 🌙' : 'حالت روشن فعال شد ☀️', next==='dark' ? '' : 'success');
  });
}

// ========== Init: respect reduced motion ==========
if(window.matchMedia('(prefers-reduced-motion:reduce)').matches){
  document.documentElement.style.setProperty('--ease','linear');
}
