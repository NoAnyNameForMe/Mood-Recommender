# 🎬 Mood Recommender - پیشنهادگر هوشمند فیلم، سریال و موسیقی

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://noanynameforme.github.io/Mood-Recommender/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?style=for-the-badge)](https://github.com/NoAnyNameForMe/Mood-Recommender)

این پروژه یک وب اپلیکیشن هوشمند است که بر اساس حس و حال (Mood) کاربر، به او فیلم، سریال و موسیقی مناسب پیشنهاد می‌دهد. این اپلیکیشن با استفاده از هوش مصنوعی (Google Gemini) متن ورودی کاربر را تحلیل کرده و پیشنهادهای شخصی‌سازی شده‌ای ارائه می‌کند.

![پیش‌نمایش اپلیکیشن](https://github.com/user-attachments/assets/99f53f1f-6e3e-4ef1-874c-9740700f7bfa)


[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://noanynameforme.github.io/Mood-Recommender/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?style=for-the-badge)](https://github.com/NoAnyNameForMe/Mood-Recommender)
---

## ✨ قابلیت‌های کلیدی

**دموی برنامه **: [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://noanynameforme.github.io/Mood-Recommender/)

**تحلیل هوشمند حس و حال**: با استفاده از قدرت مدل زبان بزرگ Google Gemini، احساسات کاربر از روی متن ورودی تحلیل می‌شود.

**پیشنهادهای متنوع**: ارائه لیستی از فیلم‌ها، سریال‌ها و موسیقی‌های متناسب با حال و هوای کاربر.

**پشتیبانی دو زبانه**: رابط کاربری کاملاً دو زبانه (فارسی و انگلیسی).

**فیلترهای پیشرفته**: امکان فیلتر کردن نتایج بر اساس بازه سال ساخت و ژانر دلخواه.

**واکشی اطلاعات تکمیلی**: نمایش پوستر، امتیاز IMDb، و لینک تریلر برای فیلم و سریال‌ها با استفاده از APIهای TMDB و OMDb.

**لینک به سرویس‌های استریم**: ارائه لینک مستقیم به Spotify, YouTube Music و SoundCloud برای آهنگ‌ها.

**لیست علاقه‌مندی‌ها**: قابلیت ذخیره کردن موارد مورد علاقه در حافظه مرورگر (LocalStorage).

**طراحی مدرن و واکنش‌گرا (Responsive)**: رابط کاربری زیبا و قابل استفاده در تمامی دستگاه‌ها (موبایل، تبلت و دسکتاپ).

**امنیت API Keyها**: تمام کلیدهای API از طریق یک Cloudflare Worker مدیریت می‌شوند تا در سمت کلاینت نمایش داده نشوند.

---

## 🛠️ تکنولوژی‌های استفاده شده

**فرانت‌اند**:
HTML5، Tailwind CSS، JavaScript (ES6 Modules)

**APIها و سرویس‌های خارجی**:
Google Gemini API، The Movie Database (TMDb) API، OMDb API، iTunes Search API

**زیرساخت و امنیت**:
Cloudflare Workers، GitHub Pages

---

## ⚙️ معماری پروژه

این پروژه برای افزایش امنیت و جلوگیری از افشای کلیدهای API، از یک معماری مبتنی بر پراکسی استفاده می‌کند:

1.  **Frontend (GitHub Pages)**: کاربر حس و حال خود را در رابط کاربری وارد می‌کند.
2.  **API Request**: اپلیکیشن به جای ارسال مستقیم درخواست به APIهای Gemini, TMDB و...، یک درخواست به Cloudflare Worker ارسال می‌کند.
3.  **Cloudflare Worker (Proxy)**:
    - درخواست را از کلاینت دریافت می‌کند.
    - کلید API مربوطه را از متغیرهای محیطی امن (Secret Variables) خود اضافه می‌کند.
    - درخواست را به سرویس API نهایی (مثلاً Gemini) ارسال می‌کند.
4.  **External APIs**: درخواست را پردازش کرده و پاسخ را به Worker برمی‌گردانند.
5.  **Response**: ورکر پاسخ را به اپلیکیشن فرانت‌اند برمی‌گرداند تا به کاربر نمایش داده شود.

> این معماری تضمین می‌کند که کلیدهای حساس شما هرگز در دسترس کاربر نهایی قرار نمی‌گیرند.

---

## 🚀 راه‌اندازی و نصب

اگر می‌خواهید این پروژه را به صورت شخصی اجرا کنید، مراحل زیر را دنبال کنید:

**۱. کلون کردن ریپازیتوری:**
برای شروع، پروژه را روی سیستم خود کلون کنید.
```bash
git clone [https://github.com/NoAnyNameForMe/Mood-Recommender.git](https://github.com/NoAnyNameForMe/Mood-Recommender.git)
cd Mood-Recommender
```

**۲. ساخت Cloudflare Worker:**
به داشبورد کلودفلر خود بروید و در بخش **Workers & Pages** یک Worker جدید بسازید. سپس محتوای فایل `worker.js` موجود در این ریپازیتوری را در ویرایشگر ورکر کپی کنید.

**۳. تنظیم متغیرهای محیطی (Secrets):**
در تنظیمات ورکر خود، به بخش **Variables** بروید و متغیرهای زیر را از نوع **Secret** تعریف کرده و کلیدهای API خود را وارد کنید:
`GEMINI_API_KEY`، `TMDB_API_KEY`، `OMDB_API_KEY`

**۴. به‌روزرسانی آدرس ورکر:**
پس از دیپلوی ورکر، آدرس آن (`your-worker-name.your-subdomain.workers.dev`) را کپی کنید. فایل `index.html` را باز کرده و در بخش اسکریپت، مقدار متغیر `WORKER_URL` را با آدرس ورکر خود جایگزین کنید:
```javascript
const WORKER_URL = "[https://your-worker-name.your-subdomain.workers.dev](https://your-worker-name.your-subdomain.workers.dev)";
```

**۵. دیپلوی در GitHub Pages:**
تغییرات خود را در ریپازیتوری پوش کنید. در تنظیمات ریپازیتوری گیت‌هاب، به بخش **Pages** بروید و سورس دیپلوی را روی شاخه اصلی (`main` یا `master`) تنظیم کنید تا وب‌سایت شما منتشر شود.

---

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.
