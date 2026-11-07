// Tek doğruluk kaynağı: whoami/cv/genel/Taha_Yunus_Demir_CV_{TR,EN}.yaml (07.11.2026).
// Buradaki her olgu whoami/.claude/skills/cv-hazirla/references/profil-gercekleri.md ile doğrulandı.
// Telefon numarası bilerek sitede yok.
import type { Lang } from "@/consts";

type L = Record<Lang, string>;
type LList = Record<Lang, string[]>;

export interface Experience {
  company: string;
  url?: string;
  position: L;
  location: L;
  start: string; // YYYY-MM
  end: string | null; // null = devam ediyor
  highlights: LList;
  stack: string[];
}

export interface CvProject {
  name: L;
  slug: string;
  url?: string;
  summary: L;
  start: string;
  end: string;
  highlights: LList;
}

export const summary: L = {
  tr: "Kotlin ve Jetpack Compose ile Android, Next.js ve TypeScript ile full stack web uygulamaları geliştiren bilgisayar mühendisi. İki staj, TÜBİTAK 2209-A projesi (Proje Yürütücüsü), Portekiz'de Erasmus+.",
  en: "Computer Engineering graduate building Android apps with Kotlin and Jetpack Compose and full stack web apps with Next.js, TypeScript and PostgreSQL. Two internships, a TÜBİTAK 2209-A project as Project Leader, Erasmus+ in Portugal.",
};

export const experience: Experience[] = [
  {
    company: "CineMention",
    url: "https://cinemention.com",
    position: { tr: "Kurucu ve Yazılım Geliştirici", en: "Founder and Software Developer" },
    location: { tr: "Uzaktan", en: "Remote" },
    start: "2026-08",
    end: null,
    highlights: {
      tr: [
        "Film keşfi odaklı sosyal platformu kurdum ve tek başıma geliştiriyorum: 140+ sayfalık web uygulaması yayında ve 30+ kullanıcıya ulaştı, Android uygulaması kapalı testte.",
        "Android uygulamasını (Kotlin, Jetpack Compose, Material 3, Hilt) 25 Gradle modülüne (14 feature, 9 core) ayırdım; Google ile giriş ve Firebase bildirimlerini entegre ettim.",
        "119 Kotlin test dosyası (Robolectric, Roborazzi ekran görüntüsü testleri), baseline profile, dev ve prod flavor yapısı ve GitHub Actions release iş akışlarıyla Android kalite sürecini otomatikleştirdim.",
        "Veritabanını 160 sürümlü SQL migration ile tasarladım; Vitest ve Playwright testlerini, Docker derlemesini ve GitHub Actions CI hattını yapılandırdım.",
      ],
      en: [
        "Founded and solely develop a film discovery social platform: web app live with 30+ users and 140+ pages (swipe recommendations, taste matching, clubs), Android app in closed testing, one Supabase backend.",
        "Structured the Android app (Kotlin, Jetpack Compose, Material 3, Hilt) into 25 Gradle modules (14 feature, 9 core) with Google sign in and Firebase push notifications.",
        "Automated Android quality with 119 Kotlin test files (Robolectric, Roborazzi screenshot tests), a baseline profile, dev and prod flavors and GitHub Actions release workflows.",
        "Designed the database across 160 versioned SQL migrations and set up unit tests (Vitest), end to end tests (Playwright), Docker builds and GitHub Actions CI.",
      ],
    },
    stack: ["Kotlin", "Jetpack Compose", "Hilt", "Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    company: "Demiray Software",
    position: { tr: "Yazılım Stajyeri", en: "Software Intern" },
    location: { tr: "Kütahya Tasarım Teknokent", en: "Kütahya, Türkiye" },
    start: "2026-04",
    end: "2026-06",
    highlights: {
      tr: [
        "Şirketin randevu ürünü RandevumOnline'da canlıda olan, 6 ekranlı, uçtan uca şifreli WhatsApp Flows formuyla randevu alan çok kiracılı mesajlaşma servisini geliştirdim (Python, FastAPI, MongoDB).",
        "Çalışma saati, izin, çakışma ve oda durumundan boş saatleri hesaplayan müsaitlik modülünü yazdım.",
        "İşletme verisiyle yanıt veren, randevu oluşturan ve gerekirse personele aktaran Instagram yapay zekâ asistanı ekledim (Groq).",
        "RandevumOnline'da canlıda olan konumlu mesai takip sistemini oluşturdum: haritada iş alanı tanımlanan Next.js paneli, ön plan servisiyle konum gönderen Kotlin ve Jetpack Compose uygulaması, anlık bildirimler.",
      ],
      en: [
        "Built a multi tenant messaging service (Python, FastAPI, MongoDB) for the booking product RandevumOnline that takes appointments over WhatsApp through a 6 screen, end to end encrypted WhatsApp Flows form.",
        "Wrote the availability engine that computes open slots from working hours, staff leave, bookings and rooms.",
        "Added an Instagram DM assistant (Groq, tool calling) that answers from business data, books appointments and hands off to staff.",
        "Developed a geofenced attendance system with a Next.js map panel, a Kotlin and Jetpack Compose app reporting location from a foreground service, and push alerts on status changes.",
      ],
    },
    stack: ["Python", "FastAPI", "MongoDB", "Next.js", "Kotlin", "Jetpack Compose"],
  },
  {
    company: "Bimser",
    position: { tr: "Android Geliştirici Stajyeri", en: "Android Developer Intern" },
    location: { tr: "Kocaeli Üniversitesi Teknopark", en: "Kocaeli University Technopark" },
    start: "2024-08",
    end: "2024-09",
    highlights: {
      tr: [
        "Şirket içi görev takip uygulamasını Kotlin, Jetpack Compose, MVVM ve Hilt ile kodladım; görev, durum, sorumlu, mesajlaşma ve profil ekranlarını Retrofit ile şirket servislerine bağladım.",
      ],
      en: [
        "Built an internal task tracking Android app (Kotlin, Jetpack Compose, MVVM, Hilt) with task, status, assignee, messaging and profile screens, connected to company REST services via Retrofit.",
      ],
    },
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit"],
  },
];

export const cvProjects: CvProject[] = [
  {
    name: {
      tr: "AYİKA · Acil Yardım ve İhtiyaç Koordinasyon Ağı",
      en: "AYİKA · Emergency Aid and Needs Coordination Network",
    },
    slug: "ayika",
    url: "https://github.com/tahayunusdemir/ayika",
    summary: {
      tr: "Proje Yürütücüsü · TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı",
      en: "Project Leader · TÜBİTAK 2209-A Research Project Support Programme for Undergraduate Students",
    },
    start: "2024-03",
    end: "2025-06",
    highlights: {
      tr: [
        "100+ kullanıcıya göre tasarlanan TÜBİTAK destekli yardım sisteminde üç kişilik ekibi yönettim; sonuç raporu kabul edildi.",
        "Django REST Framework ve PostgreSQL API üzerine React ve TypeScript yönetim panelini, 81 ildeki yardım noktalarını haritada gösteren Flutter uygulamasını hazırladım.",
      ],
      en: [
        "Led a three student team on a TÜBİTAK supported disaster response system designed for 100+ users, completed with its final report accepted.",
        "Built the React and TypeScript admin panel on a Django REST Framework and PostgreSQL API, and a Flutter app mapping aid points in all 81 provinces with GPS nearest point search.",
      ],
    },
  },
  {
    name: { tr: "Montanha Viva Yönetim Paneli", en: "Montanha Viva Dashboard" },
    slug: "montanha-viva",
    url: "https://github.com/tahayunusdemir/montanha-viva-dashboard",
    summary: {
      tr: "Full Stack Geliştirici · Universidade da Beira Interior, Erasmus+ dönem projesi",
      en: "Full Stack Developer · Universidade da Beira Interior, Erasmus+ semester project",
    },
    start: "2025-02",
    end: "2025-07",
    highlights: {
      tr: [
        "React ve Django REST Framework ile IoT grafikleri, QR ödülleri ve JWT girişi olan platformu hayata geçirdim.",
        "Bitki tanıma için YOLO (Ultralytics) modeli eğittim ve güven skorlarıyla Django REST uç noktasından sundum.",
      ],
      en: [
        "Built a React, TypeScript and Django REST Framework platform for a university sustainability project with IoT sensor charts, CSV export, QR code rewards and a flora and trail encyclopedia.",
        "Trained a YOLO (Ultralytics) plant identification model and served ranked predictions with confidence scores from a Django REST endpoint.",
      ],
    },
  },
];

export const education = [
  {
    institution: { tr: "Kütahya Dumlupınar Üniversitesi", en: "Kütahya Dumlupınar University" },
    area: { tr: "Bilgisayar Mühendisliği, Lisans", en: "B.Sc. in Computer Engineering" },
    location: { tr: "Kütahya", en: "Kütahya, Türkiye" },
    start: "2022-09",
    end: "2026-07",
  },
  {
    institution: { tr: "Universidade da Beira Interior", en: "Universidade da Beira Interior" },
    area: {
      tr: "Erasmus+ değişim dönemi, Bilgisayar Mühendisliği (30 ECTS)",
      en: "Erasmus+ Exchange, Informatics Engineering (30 ECTS)",
    },
    location: { tr: "Covilhã, Portekiz", en: "Covilhã, Portugal" },
    start: "2025-02",
    end: "2025-07",
  },
];

export const certifications: L[] = [
  {
    tr: "TÜBİTAK BİLGEM YTE Bootcamp 2023 (Çevrim içi, Ekim 2023): Java, Spring, Mikroservis Mimarileri, Kullanıcı Deneyimi, Figma ile Mock-Up",
    en: "TÜBİTAK BİLGEM YTE Bootcamp 2023 (Online, Oct 2023): Java, Spring, Microservice Architectures, User Experience, Mock-Up Design with Figma",
  },
];

export const skills: { label: L; items: string[] }[] = [
  { label: { tr: "Programlama dilleri", en: "Languages" }, items: ["Kotlin", "TypeScript", "Python", "Java", "Dart", "SQL"] },
  {
    label: { tr: "Mobil", en: "Mobile" },
    items: ["Android", "Jetpack Compose", "Material 3", "Hilt", "Retrofit", "Coroutines", "MVVM", "Flutter"],
  },
  {
    label: { tr: "Web ve backend", en: "Web and backend" },
    items: ["Next.js", "React", "Tailwind CSS", "Material UI", "FastAPI", "Django REST Framework", "Supabase", "REST API"],
  },
  {
    label: { tr: "Veri, test ve araçlar", en: "Data, testing and tools" },
    items: ["PostgreSQL", "MongoDB", "Redis", "YOLO", "Vitest", "Playwright", "pytest", "Docker", "GitHub Actions", "Git", "Figma"],
  },
];

export const spokenLanguages: L = {
  tr: "Türkçe (anadil), İngilizce (B1)",
  en: "Turkish (native), English (B1)",
};

export const cvPdf: Record<Lang, string> = {
  tr: "/cv/Taha_Yunus_Demir_CV_TR.pdf",
  en: "/cv/Taha_Yunus_Demir_CV_EN.pdf",
};
