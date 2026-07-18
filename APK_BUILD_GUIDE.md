# 🚀 APK BUILD GUIDE - Ninebot Tuning App

## ⚠️ WICHTIG: Diese Anleitung MÜSSEN Sie auf Ihrem Computer ausführen!

### 📋 Schritt 1: Voraussetzungen installieren

#### Windows:
```bash
# 1. Node.js installieren (v18+)
# Downloaden von: https://nodejs.org/

# 2. Java JDK 11 installieren
# Downloaden von: https://adoptopenjdk.net/

# 3. Android Studio installieren
# Downloaden von: https://developer.android.com/studio

# Nach Installation in Android Studio:
# - SDK Manager öffnen
# - API Level 33 installieren
# - Build Tools 33.0.0 installieren
```

#### macOS/Linux:
```bash
brew install node
brew install openjdk@11
# Android Studio von https://developer.android.com/studio
```

---

## 📥 Schritt 2: Projekt klonen & Setup

```bash
# Repository klonen
git clone https://github.com/Lenny2240/CarspottingAi.git
cd CarspottingAi/mobile

# Dependencies installieren
npm install

# Android spezifische Setup
npm install react-native-chart-kit
npm install react-native-svg
```

---

## 🔨 Schritt 3: APK bauen (Release Version)

```bash
# Terminal/CMD in "mobile" Verzeichnis öffnen

# Android Project vorbereiten
cd android
./gradlew clean
cd ..

# Release APK bauen (dauert 5-10 Minuten)
npx react-native build-android --mode=release
```

**Die APK wird hier erstellt:**
```
mobile/android/app/build/outputs/apk/release/app-release.apk
```

---

## 📱 Schritt 4: APK auf Samsung Installation

### Methode A: USB-Kabel
```bash
# 1. USB-Debugging auf Samsung aktivieren:
#    Einstellungen → Über Telefon → 7x tippen auf "Build-Nummer"
#    → Entwickleroptionen → USB-Debugging aktivieren

# 2. Samsung mit USB verbinden

# 3. APK installieren:
npx react-native run-android
```

### Methode B: Manuell (einfacher)
1. APK-Datei auf Google Drive/Dropbox hochladen
2. Link teilen
3. Auf Samsung öffnen → Installieren

---

## 🌐 Schritt 5: GitHub Release mit Download-Link

```bash
# 1. APK komprimieren (optional)
cd mobile/android/app/build/outputs/apk/release/
zip ninebot-tuning-v1.0.0.zip app-release.apk

# 2. GitHub Release erstellen:
# - Zu https://github.com/Lenny2240/CarspottingAi/releases/new gehen
# - Tag: v1.0.0
# - Title: "🛴 Ninebot Tuning App v1.0.0"
# - Description: "Mobile App für E-Scooter Tuning"
# - APK Datei hochladen
# - Veröffentlichen

# Download Link wird dann:
# https://github.com/Lenny2240/CarspottingAi/releases/download/v1.0.0/app-release.apk
```

---

## ✅ Fertig!

Ihre APK ist jetzt bereit und kann auf jedem Samsung-Handy installiert werden!

### Häufige Fehler:

**"gradlew command not found"**
```bash
# Lösung:
chmod +x android/gradlew
```

**"Java nicht gefunden"**
```bash
# JAVA_HOME setzen:
export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
```

**"SDK nicht gefunden"**
```bash
# ANDROID_HOME in .bashrc/.zshrc hinzufügen:
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
```

---

## 🔗 Nützliche Links

- Android Studio: https://developer.android.com/studio
- JDK Download: https://adoptopenjdk.net/
- React Native Docs: https://reactnative.dev/
- GitHub Releases: https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository

**Bei Fragen: GitHub Issues erstellen!** 🛴
