# 🛴 Ninebot E-Scooter Tuning App

Eine vollständige App zum Tunen und Optimieren von Ninebot E-Scootern mit erweiterten Funktionen wie Speed-Modulation, Batterie-Management und Performance-Tracking.

## 🎯 Features

### 🔧 Tuning & Optimierung
- **Speed Limiters Entfernen/Anpassen** - Geschwindigkeitsbegrenzungen überschreiben
- **Motor Power Boost** - Motorleistung erhöhen (bis 200%)
- **Brake System Tuning** - Bremsverhalten optimieren
- **Battery Management** - Batterie-Profile erstellen & speichern
- **Firmware Updates** - Custom Firmware installieren

### 📊 Performance Tracking
- **Real-time Telemetrie** - Live GPS, Speed, Motor-Temp
- **Trip Statistics** - Distanz, Zeit, Durchschnittsgeschwindigkeit
- **Battery Analysis** - Akku-Zustand, Verbrauch, Reichweite
- **Performance Logs** - Alle Tuning-Änderungen tracken

### 🎮 Szenen & Profile
- **City Mode** - Optimiert für Stadtverkehr (20-30 km/h)
- **Sport Mode** - Maximale Leistung
- **Eco Mode** - Maximale Reichweite
- **Custom Profiles** - Eigene Profile erstellen

### 🔐 Sicherheit & Wartung
- **Error Codes Decoder** - Fehlercodes verstehen
- **Maintenance Reminders** - Wartungs-Planungen
- **Safety Checks** - Sicherheitsprüfungen
- **Backup & Restore** - Einstellungen sichern

## 📁 Projektstruktur

```
ninebot-tuning-app/
├── frontend/               # Next.js/React Frontend
│   ├── app/               # App Router
│   ├── components/        # React Components
│   ├── pages/            # Seiten
│   ├── public/           # Statische Assets
│   └── styles/           # Tailwind CSS
├── backend/              # Node.js/Express Backend
│   ├── routes/           # API Routes
│   ├── controllers/      # Business Logic
│   ├── models/           # Datenmodelle
│   ├── services/         # Externe Services
│   └── middleware/       # Auth, Validation
├── mobile/               # React Native App
│   ├── screens/         # App Screens
│   ├── components/      # Native Components
│   └── services/        # Native Services
├── docs/                 # Dokumentation
└── docker-compose.yml   # Docker Setup
```

## 🚀 Quick Start

### Voraussetzungen
- Node.js 18+
- Docker (optional)
- Git

### Installation

```bash
# Repository klonen
git clone https://github.com/Lenny2240/CarspottingAi.git
cd CarspottingAi

# Dependencies installieren
npm install

# Environment Setup
cp .env.example .env.local

# Development Server starten
npm run dev
```

### Mit Docker

```bash
docker-compose up -d
```

## 🔌 Ninebot API Integration

Die App verbindet sich über:
- **BLE (Bluetooth Low Energy)** für direkte Kommunikation
- **Ninebot SDK** für Firmware-Zugriff
- **Custom Protokolle** für erweiterte Tuning-Features

## 📱 Verfügbare Plattformen

- **Web App** - Progressive Web App (PWA)
- **Android App** - React Native
- **iOS App** - React Native (auf Anfrage)
- **Desktop** - Electron (optional)

## 🔧 Tuning-Möglichkeiten

### Geschwindigkeit
- Standard Limit: 25 km/h (EU) / 32 km/h (US)
- Tuning Range: Bis 65 km/h

### Motor Power
- Standard: 250W (EU) / 250-600W (US)
- Boost: Bis 800W möglich

### Bremsen
- Regenerative Bremsen: 0-100%
- Verschleiß-Management

### Battery
- Kapazität Monitor
- Ladezyklen Optimierung
- Batterie-Profile

## ⚠️ Wichtige Sicherheitshinweise

⚠️ **Rechtlicher Hinweis**: Bitte beachte die lokalen Gesetze und Vorschriften für E-Scooter in deiner Region. Einige Tuning-Funktionen können illegal sein.

✅ Empfohlen vor dem Tuning:
- Sicherheitsprüfung durchführen
- Helm tragen
- Nur auf privaten Grundstücken testen
- Versicherung überprüfen

## 📚 Dokumentation

- [API Dokumentation](./docs/API.md)
- [Tuning Guide](./docs/TUNING_GUIDE.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)
- [Ninebot Hardware Info](./docs/NINEBOT_HARDWARE.md)

## 🤝 Beitragen

Contributions sind willkommen! Bitte erstelle einen Pull Request.

## 📄 Lizenz

MIT License - Siehe LICENSE Datei

## 🆘 Support

Bei Fragen oder Problemen:
- Issues erstellen auf GitHub
- Dokumentation lesen
- Community Forum besuchen

---

**Made with ❤️ for E-Scooter Enthusiasts**
