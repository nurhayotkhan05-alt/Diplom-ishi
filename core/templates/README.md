# NEWSROOM — Frontend

Bu loyiha PDF texnik topshirig‘idagi yangiliklar portali frontend sahifalari va yuborilgan Newspaper dizayn yo‘nalishi asosida tayyorlangan.

## Ishga tushirish
1. ZIP arxivni oching.
2. `index.html` faylini brauzerda oching yoki VS Code Live Server ishlating.

## Sahifalar
- `index.html` — bosh sahifa
- `news.html` — yangiliklar ro‘yxati, qidiruv va kategoriya filtri
- `article.html` — yangilik tafsiloti, ulashish, saqlash va izoh formasi
- `categories.html` — kategoriyalar
- `about.html` — biz haqimizda
- `contact.html` — aloqa formasi
- `login.html` — kirish
- `register.html` — ro‘yxatdan o‘tish
- `profile.html` — foydalanuvchi profili

## Django backendga ulash
- HTML fayllarni Django `templates/` ichiga ko‘chiring.
- `assets/` papkasini `static/` ichiga ko‘chiring.
- Har bir HTML ichidagi CSS/JS yo‘llarini Django `{% load static %}` va `{% static '...' %}` bilan almashtiring.
- Namuna yangilik kartalarini Django template loop (`{% for news in news_list %}`) bilan almashtiring.
- Login/register/comment/contact formalaridagi `action`, `method`, `csrf_token` va input `name` atributlarini backend viewlaringizga moslang.
- Bookmark, qidiruv va kategoriya filtrlari hozir demo frontend holatida; ularni Django view/API bilan bog‘lash kerak.
- Telegram integratsiyasi va admin panel backend vazifasi bo‘lib, bu frontend paketiga kiritilmagan.

## Eslatma
Hozirgi yangiliklar, profil va sanalar dizaynni ko‘rsatish uchun demo kontentdir. Haqiqiy ma’lumotlarni Django backenddan uzating.
