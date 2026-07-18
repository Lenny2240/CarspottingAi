#!/bin/bash

# 🚀 Ninebot Tuning App - Release Script
# Dieses Skript erstellt automatisch ein GitHub Release mit der APK

set -e

echo "=================================="
echo "🛴 Ninebot Tuning App Release"
echo "=================================="

# Überprüfen ob wir im richtigen Verzeichnis sind
if [ ! -f "package.json" ]; then
    echo "❌ Fehler: Bitte führe dieses Skript im 'mobile' Verzeichnis aus!"
    exit 1
fi

# Version auslesen
VERSION=$(node -p "require('./package.json').version")
TAG="v$VERSION"

echo "📦 Version: $VERSION"
echo "🏷️  Tag: $TAG"
echo ""

# Überprüfen ob Tag bereits existiert
if git rev-parse "$TAG" >/dev/null 2>&1; then
    echo "⚠️  Tag $TAG existiert bereits!"
    read -p "Möchten Sie es überschreiben? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git tag -d "$TAG"
        git push origin --delete "$TAG" || true
    else
        echo "❌ Abgebrochen"
        exit 1
    fi
fi

echo "🔨 Baue APK..."
cd android
chmod +x gradlew
./gradlew clean
cd ..
npm run android-build

APK_PATH="android/app/build/outputs/apk/release/app-release.apk"

if [ ! -f "$APK_PATH" ]; then
    echo "❌ APK nicht gefunden: $APK_PATH"
    exit 1
fi

echo "✅ APK erfolgreich gebaut!"
echo "📊 Dateigröße: $(du -h "$APK_PATH" | cut -f1)"

# Git Tag erstellen
echo ""
echo "📤 Erstelle Git Tag..."
git tag -a "$TAG" -m "Release $TAG - Ninebot Tuning App"
git push origin "$TAG"

echo ""
echo "✅ Tag pushed! GitHub Actions Workflow startet automatisch..."
echo ""
echo "🔗 Release wird hier verfügbar sein:"
echo "   https://github.com/Lenny2240/CarspottingAi/releases/tag/$TAG"
echo ""
echo "⏳ Bitte warten Sie 2-5 Minuten bis die APK verfügbar ist..."
echo ""
