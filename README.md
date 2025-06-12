# 🎬 Mood Recommender - AI-Powered Entertainment Suggestions

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-brightgreen?style=for-the-badge&logo=vercel)](https://noanynameforme.github.io/Mood-Recommender/)
[![GitHub Stars](https://img.shields.io/github/stars/NoAnyNameForMe/Mood-Recommender?style=for-the-badge&logo=github)](https://github.com/NoAnyNameForMe/Mood-Recommender/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/NoAnyNameForMe)

**[English](#english) | [فارسی](#فارسی)**

![App Preview](https://github.com/user-attachments/assets/99f53f1f-6e3e-4ef1-874c-9740700f7bfa)

</div>

---

## English

### 🌟 Overview

Mood Recommender is an intelligent web application that analyzes your current mood and provides personalized recommendations for movies, TV series, and music. Powered by Google Gemini AI, it understands your emotional state from text input and delivers tailored entertainment suggestions.

### ✨ Key Features

🧠 **AI-Powered Mood Analysis** - Leverages Google Gemini's advanced language model to understand emotions from text

🎭 **Multi-Category Recommendations** - Get suggestions for movies, TV series, and music all in one place

🌍 **Bilingual Support** - Fully functional in both English and Persian (فارسی)

🔍 **Advanced Filtering** - Filter results by year range and preferred genres

📊 **Rich Media Integration** - Displays posters, IMDb ratings, and trailer links via TMDB and OMDb APIs

🎵 **Streaming Links** - Direct links to Spotify, YouTube Music, and SoundCloud for music tracks

❤️ **Favorites System** - Save your favorite recommendations with local storage

📱 **Responsive Design** - Beautiful, modern UI that works seamlessly across all devices

🔒 **Secure API Management** - All API keys are securely managed through Cloudflare Workers

### 🛠️ Technology Stack

**Frontend:**
- HTML5, CSS3 (Tailwind CSS)
- Vanilla JavaScript (ES6 Modules)
- Font Awesome Icons
- Google Fonts

**APIs & Services:**
- Google Gemini API (AI Analysis)
- The Movie Database (TMDb) API
- OMDb API (IMDb Integration)
- iTunes Search API
- ImgBB API (Image Hosting)

**Infrastructure:**
- Cloudflare Workers (API Proxy)
- GitHub Pages (Hosting)

### 🏗️ Architecture

This project uses a secure proxy-based architecture to protect API keys:

```
User Input → Frontend → Cloudflare Worker → External APIs → Response
```

1. **Frontend**: User enters mood description
2. **Cloudflare Worker**: Securely handles API requests with encrypted keys
3. **External APIs**: Process requests and return data
4. **Response**: Formatted results displayed to user

### 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NoAnyNameForMe/Mood-Recommender.git
   cd Mood-Recommender
   ```

2. **Set up Cloudflare Worker:**
   - Create a new Worker in your Cloudflare dashboard
   - Copy the contents of `worker.js` to your Worker
   - Add these environment variables as secrets:
     - `GEMINI_API_KEY`
     - `TMDB_API_KEY`
     - `OMDB_API_KEY`
     - `IMGBB_API_KEY` (for image hosting)

3. **Update Worker URL:**
   ```javascript
   const WORKER_URL = "https://your-worker-name.your-subdomain.workers.dev";
   ```

4. **Deploy to GitHub Pages:**
   - Push changes to your repository
   - Enable GitHub Pages in repository settings

### 📝 Usage

1. Visit the live demo or your deployed version
2. Describe your current mood in the text area
3. Optionally set year range and genre filters
4. Click "Get Recommendations" to receive AI-powered suggestions
5. Browse through movies, series, and music recommendations
6. Save favorites and enjoy!

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## فارسی

### 🌟 معرفی

پیشنهادگر هوشمند فیلم، سریال و موسیقی یک وب اپلیکیشن هوشمند است که بر اساس حس و حال شما، پیشنهادهای شخصی‌سازی شده برای فیلم، سریال و موسیقی ارائه می‌دهد. این برنامه با استفاده از هوش مصنوعی Google Gemini، حالت عاطفی شما را از متن ورودی تحلیل کرده و پیشنهادهای مناسب ارائه می‌کند.

### ✨ قابلیت‌های کلیدی

🧠 **تحلیل هوشمند حس و حال** - از مدل زبان پیشرفته Google Gemini برای درک احساسات از متن استفاده می‌کند

🎭 **پیشنهادهای چندگانه** - پیشنهاد فیلم، سریال و موسیقی در یک مکان

🌍 **پشتیبانی دوزبانه** - عملکرد کامل به زبان‌های انگلیسی و فارسی

🔍 **فیلترهای پیشرفته** - فیلتر نتایج بر اساس بازه سال و ژانرهای مورد علاقه

📊 **یکپارچگی رسانه غنی** - نمایش پوستر، امتیاز IMDb و لینک تریلر از طریق APIهای TMDB و OMDb

🎵 **لینک‌های استریمینگ** - لینک مستقیم به Spotify، YouTube Music و SoundCloud برای آهنگ‌ها

❤️ **سیستم علاقه‌مندی‌ها** - ذخیره پیشنهادهای مورد علاقه با حافظه محلی

📱 **طراحی واکنش‌گرا** - رابط کاربری زیبا و مدرن که در همه دستگاه‌ها عالی کار می‌کند

🔒 **مدیریت امن API** - تمام کلیدهای API به صورت امن از طریق Cloudflare Workers مدیریت می‌شوند

### 🛠️ پشته تکنولوژی

**فرانت‌اند:**
- HTML5، CSS3 (Tailwind CSS)
- JavaScript خالص (ES6 Modules)
- آیکون‌های Font Awesome
- فونت‌های Google

**APIها و سرویس‌ها:**
- Google Gemini API (تحلیل هوش مصنوعی)
- The Movie Database (TMDb) API
- OMDb API (یکپارچگی IMDb)
- iTunes Search API
- ImgBB API (میزبانی تصاویر)

**زیرساخت:**
- Cloudflare Workers (پراکسی API)
- GitHub Pages (میزبانی)

### 🏗️ معماری

این پروژه از معماری امن مبتنی بر پراکسی برای محافظت از کلیدهای API استفاده می‌کند:

```
ورودی کاربر ← فرانت‌اند ← Cloudflare Worker ← APIهای خارجی ← پاسخ
```

1. **فرانت‌اند**: کاربر توضیح حالت خود را وارد می‌کند
2. **Cloudflare Worker**: درخواست‌های API را با کلیدهای رمزگذاری شده به صورت امن مدیریت می‌کند
3. **APIهای خارجی**: درخواست‌ها را پردازش کرده و داده برمی‌گردانند
4. **پاسخ**: نتایج فرمت شده به کاربر نمایش داده می‌شود

### 🚀 شروع سریع

1. **کلون کردن مخزن:**
   ```bash
   git clone https://github.com/NoAnyNameForMe/Mood-Recommender.git
   cd Mood-Recommender
   ```

2. **راه‌اندازی Cloudflare Worker:**
   - یک Worker جدید در داشبورد Cloudflare خود ایجاد کنید
   - محتوای `worker.js` را در Worker خود کپی کنید
   - این متغیرهای محیطی را به عنوان secret اضافه کنید:
     - `GEMINI_API_KEY`
     - `TMDB_API_KEY`
     - `OMDB_API_KEY`
     - `IMGBB_API_KEY` (برای میزبانی تصاویر)

3. **به‌روزرسانی URL Worker:**
   ```javascript
   const WORKER_URL = "https://your-worker-name.your-subdomain.workers.dev";
   ```

4. **استقرار در GitHub Pages:**
   - تغییرات را به مخزن خود push کنید
   - GitHub Pages را در تنظیمات مخزن فعال کنید

### 📝 نحوه استفاده

1. از دموی زنده یا نسخه مستقر شده خود بازدید کنید
2. حالت فعلی خود را در ناحیه متن توضیح دهید
3. در صورت تمایل، فیلترهای بازه سال و ژانر را تنظیم کنید
4. روی "دریافت پیشنهادها" کلیک کنید تا پیشنهادهای مبتنی بر هوش مصنوعی دریافت کنید
5. پیشنهادهای فیلم، سریال و موسیقی را مرور کنید
6. موارد مورد علاقه را ذخیره کرده و لذت ببرید!

### 🤝 مشارکت

مشارکت‌ها خوشامد است! لطفاً برای ارسال Pull Request دریغ نکنید. برای تغییرات عمده، لطفاً ابتدا یک issue باز کنید تا در مورد آنچه می‌خواهید تغییر دهید بحث کنیم.

### 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است - برای جزئیات فایل [LICENSE](LICENSE) را ببینید.

---

<div align="center">

**ساخته شده با ❤️ توسط [NoAnyNameForMe](https://github.com/NoAnyNameForMe)**

⭐ اگر این پروژه برایتان مفید بود، لطفاً یک ستاره بدهید!

</div>
