# 🩹 گزارش رفع باگ موبایل — آریان پیشرو

**شاخه:** `arena/ed9ad305-arian-pishro` · **دستگاه تست:** Chromium 127 واقعی (headless) + اندازه‌های دقیق دستگاه
**تاریخ:** ۱۴۰۴/۰۷/۳۰ (2026-10-21)

---

## ۱. مشکل گزارش‌شده (بازتولید شد ✅)

> «نه بار بالای سایت می‌ره بیرون از صفحه، مشاهده محصول هم می‌زنی نصفش می‌ره بیرون»

در مرورگر واقعی با ویوپورت ۳۷۵×۶۶۷ بازتولید شد:

```
document.documentElement.scrollWidth = 597   ← صفحه ۲۲۲px از ویوپورت بزرگ‌تر بود
document.documentElement.clientWidth = 375
```

نتیجه: کل سایت (هدر + هیرو + همه سکشن‌ها) ۲۲۲ پیکسل به سمت راست رانده می‌شد و در RTL عملاً نیمهٔ صفحه بیرون از دید می‌رفت. اسکرین‌شات قبل از رفع: `docs/before-bug.jpg`.

---

## ۲. ریشهٔ واقعی باگ (نه حدس — اندازه‌گیری)

| # | علت | اندازه/مدرک | رفع |
|---|------|--------------|-----|
| **A** | `.chips` نوار فیلتر: فرزند flex با `min-width:auto` + `margin:0 -16px` + `flex-wrap:nowrap` → عرض به **min-content** یعنی ۵۹۷px رشد کرد و چون والدش `overflow` نداشت، کل صفحه را کشید | `chips scrollWidth=597 / clientWidth=597` در ویوپورت ۳۷۵ | `min-width:0; width:calc(100% + 32px); max-width:calc(100% + 32px); margin-inline:-16px` |
| **B** | `html` هیچ `overflow-x` نداشت؛ یک عنصر سرکش کل صفحه را جابه‌جا می‌کرد | — | `html{overflow-x:hidden;max-width:100%}` + `@supports(overflow:clip){html,body{overflow-x:clip}}` (clip، تا `position:sticky` هدر سالم بماند) |
| **C** | مودال محصول با `inset:50% auto auto 50%; transform:translate(-50%,-50%)` وسط‌چین شده بود؛ در RTL که آفست افقی صفحه وجود داشت، محاسبهٔ `left` منفی می‌شد → **مودال نیمه بیرون از صفحه** (باگ دوم گزارش شما) | قبل: `modal left=-103, right=257` در صفحهٔ ۳۷۵ | `position:fixed; inset:0; margin:auto; width:min(960px,calc(100% - 24px)); max-height:min(90dvh,900px)` |
| **D** | دراور سبد با `html[dir="rtl"] .drawer{translateX(-100%)}` بر `.drawer.is-open{translateX(0)}` **غلبه می‌کرد** (اسپسیفیکیتی بالاتر) → سبد خرید هیچ‌وقت باز نمی‌شد و فقط یک نوار باریک دیده می‌شد | قبل: `drawer left=-390, right=0` بعد از کلیک روی سبد | `html[dir="rtl"] .drawer.is-open{transform:translateX(0)}` |
| **E** | `width:min(420px,100vw)` در دراور + `width:96vw` در مودال، با اسکرول‌بار/ویوپورت موبایل اختلاف ایجاد می‌کرد | — | `min(420px,100%)` و `calc(100% - 20px)` |
| **F** | خطای JS: `Cannot access 'specLabel' before initialization` — تابع برچسب فارسی مشخصات بعد از اولین استفاده تعریف شده بود و باعث می‌شد **کل رندر محصولات و سبد خرید از کار بیفتد** | `PAGEERROR` در کنسول واقعی | بلوک `SPEC_LABELS` به بالای فایل منتقل شد |
| **G** | دو توست روی هم در دراور (سبد + «افزودن شد») روی دکمهٔ «ثبت سفارش» می‌افتاد | اسکرین‌شات `iphone14-07-drawer` | حذف توست تکراری + انتقال توست‌ها به بالای صفحه وقتی دراور باز است |

---

## ۳. مدرک بعد از رفع — تست واقعی مرورگر

اسکریپت تست: ۵ اندازهٔ دستگاه × ۲ تم × ۴ حالت (مودال / دراور / سرچ موبایل / منو)

```
✅ SE 375x667      light  scrollWidth=375 clientWidth=375
✅ SE 375x667      dark   scrollWidth=375 clientWidth=375
✅ iPhone 12 390   light  scrollWidth=390 clientWidth=390
✅ iPhone 12 390   dark   scrollWidth=390 clientWidth=390
✅ Pixel 360x740   light  scrollWidth=360 clientWidth=360
✅ Pixel 360x740   dark   scrollWidth=360 clientWidth=360
✅ Galaxy Fold 320 light  scrollWidth=320 clientWidth=320
✅ Galaxy Fold 320 dark   scrollWidth=320 clientWidth=320
✅ Plus 414x896    light  scrollWidth=414 clientWidth=414
✅ Plus 414x896    dark   scrollWidth=414 clientWidth=414
✅ Tablet 768x1024 light  scrollWidth=768 clientWidth=768
✅ iPad 768        dark   scrollWidth=768 clientWidth=768
✅ Desktop 1440    light  scrollWidth=1440 clientWidth=1440
✅ Desktop 1440    dark   scrollWidth=1440 clientWidth=1440

modal  : L10 R365 (vw 375) | T27  B640  (vh 667)   → کامل داخل صفحه
modal  : L10 R380 (vw 390) | T34  B810  (vh 844)
modal  : L10 R350 (vw 360) | T30  B710  (vh 740)
modal  : L10 R310 (vw 320) | T26  B614  (vh 640)
drawer : L0 R375 (vw 375) ✓   L0 R390 (vw 390) ✓   L0 R420 (vw 768) ✓
search : open=true L0 R375 sw=375 ✓
ALL PASS — zero horizontal overflow, zero off-screen overlays
```

نتیجه: `overflow = 0` در **۱۴ ترکیب** اندازه/تم و همهٔ لایه‌ها (مودال، دراور، سرچ، منو) ۱۰۰٪ داخل ویوپورت.

---

## ۴. اصلاحات کیفی همراه (که در حین تست دیده شد)

- **هیروی موبایل خوانا شد:** اسکریم گرادیانی عمودی + `opacity:.35` روی عکس → متن روی تصویر گم نمی‌شد (قبلاً متن روی کیس سبز ناخوانا بود).
- **تیتر انگلیسی:** `direction:ltr; unicode-bidi:isolate` → نقطهٔ جمله سر جای درست (`FOR GAMERS.`).
- **آیکن‌ها:** همهٔ ایموجی‌ها (🛡️🚚💳🔧⭐🚚📦🛠️🌱⚡👑✈✕) با **SVG خطی** جایگزین شدند؛ ایموجی روی اندروید/ویندوز شکل دیگری داشت و در بج/کارت زشت می‌شد.
- **برش‌های چیدمان:** پریست‌های سیستم‌ساز به گرید ۳ ستونی، استپر به ۴ ستون (قبلاً «قیمت نهایی» از کادر بیرون می‌زد)، تب‌های مودال `nowrap`.
- **برچسب مشخصات فارسی:** `vram → حافظه گرافیکی`، `bus → رابط حافظه`، `power → توان مصرفی`… (قبلاً `gpu/vram/bit/power` انگلیسی نشان داده می‌شد).
- **انتخاب مرتب‌سازی:** `.count` دیگر در `.select` له نمی‌شود (`white-space:nowrap`).

---

## ۵. اسکرین‌شات‌های واقعی (نه ماکاپ)

پوشهٔ `docs/screenshots/` — ۳۷ تصویر از **همین نسخهٔ کد** در مرورگر واقعی:

| فایل | محتوا |
|------|--------|
| `se-01-hero-light.jpg` / `se-02-hero-dark.jpg` | هیرو در ۳۷۵px، تم روشن/تیره |
| `iphone14-01…02` | هیرو در ۳۹۰px |
| `*-03-shop.jpg` | فروشگاه، چیپ‌های اسکرولی، کارت محصول |
| `*-04-search.jpg` | نوار جستجوی کشویی موبایل |
| `*-05-nav.jpg` | منوی برگر باز |
| `*-06-modal.jpg` | مودال محصول — کامل داخل صفحه |
| `*-07-drawer.jpg` | سبد خرید تمام‌عرض + safe-area |
| `iphone14-08-builder.jpg` | سیستم‌ساز، پریست‌ها و استپر |
| `iphone14-09-systems.jpg` | ریل سیستم‌های آماده |
| `desktop-*` | همان صفحات در ۱۴۴۰px برای مقایسه |

---

## ۶. فایل‌های تغییر یافته

| فایل | تغییر |
|------|--------|
| `assets/style.css` | `html{overflow-x:hidden}` + `overflow:clip`، رفع `.chips`، بازنویسی `.modal` (inset:0/margin:auto)، رفع اسپسیفیکیتی دراور RTL، هیروی موبایل، گرید پریست/استپر، آیکن‌های SVG، توست دراور |
| `assets/app.js` | جابه‌جایی `SPEC_LABELS` (رفع کرش)، برچسب فارسی مشخصات، حذف توست تکراری، آیکن‌های SVG در کارت/مودال |
| `index.html` | آیکن‌های SVG (تراست/پریست/بستن/تلگرام)، حذف ایموجی‌های تیکر، فلش‌های صحیح RTL |

---

## ۷. بازتولید تست (اختیاری)

بدون هیچ ابزار اضافه — در کنسول مرورگر (روی گوشی یا DevTools با عرض ۳۷۵px) این را اجرا کنید؛ باید `overflow = 0` بدهد:

```js
// 1) هیچ سرریز افقی نباید باشد
(() => {
  const de = document.documentElement;
  console.log('overflow =', de.scrollWidth - de.clientWidth); // باید 0 باشد
})();

// 2) مودال و دراور باید کامل داخل ویوپورت باشند
document.querySelector('[data-view]').click();
setTimeout(() => {
  const r = document.getElementById('productModal').getBoundingClientRect();
  console.log('modal inside:', r.left >= -1 && r.right <= document.documentElement.clientWidth + 1);
  document.getElementById('closeModal').click();
  document.getElementById('cartBtn').click();
  setTimeout(() => {
    const d = document.getElementById('cartDrawer').getBoundingClientRect();
    console.log('drawer inside:', d.left >= -1 && d.right <= document.documentElement.clientWidth + 1);
  }, 700);
}, 600);
```
