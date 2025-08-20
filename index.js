const translations = {
  en: {
    logo: "viatours",
    currency: "USD",
    signup: "Sign Up",
    login: "Log In",
    hero_title: "Tours and Trip packages, Globally",
    hero_subtitle: "Search, compare and book 15,000+ traveling tours all over the world",
    search: "Search",
    featured_title: "Featured Trips",
    card_title: "Grand Canyon Tour",
    car_a:"USA - 4 Days",
    car_b:"From $225",
    car_qar:"All Inclusive Ultimate Circle Island Desert Tour by ATV",
     bek_zod:"Asia - 6 Days",
     md_od:"From $771"
  },
  ru: {
    logo: "виатурс",
    currency: "USD",
    signup: "Регистрация",
    login: "Войти",
    hero_title: "Туры и туристические пакеты по всему миру",
    hero_subtitle: "Ищите, сравнивайте и бронируйте более 15 000 туров по всему миру",
    search: "Поиск",
    featured_title: "Рекомендуемые поездки",
    card_title: "Тур по Гранд-Каньону",
    car_a:"США - 4 дня",
    car_b:"От 225 долларов",
    car_qar:"Тур по пустыне Ultimate Circle Island на квадроциклах по системе «все включено»",
     bek_zod:"Азия - 6 дней",
      md_od:"От 771 доллара"
  },
  uz: {
    logo: "viatours",
    currency: "USD",
    signup: "Ro‘yxatdan o‘tish",
    login: "Kirish",
    hero_title: "Butun dunyo bo‘ylab sayohat va tur paketlari",
    hero_subtitle: "Qidiring, taqqoslang va 15,000+ sayohat turlarini bron qiling",
    search: "Qidirish",
    featured_title: "Tanlangan sayohatlar",
     card_title: "Grand Canyon sayohati",
     car_a:" AQSH - 4 kun",
     car_b:"225 dollardan",
     car_qar:"ATV orqali All Inclusive Ultimate Circle Island cho'l sayohati",
    bek_zod:"Osiyo - 6 kun",
    md_od:"771 dollardan"
     
  }
};

// Matnlarni yangilovchi funksiya
function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    let key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("site-lang", lang); // foydalanuvchi tanlovini eslab qolamiz
}

// Default til yoki oldingi tanlangan til
const savedLang = localStorage.getItem("site-lang") || "en";
changeLanguage(savedLang);
document.getElementById("lang-switcher").value = savedLang;

// Select o'zgarganda
document.getElementById("lang-switcher").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});
