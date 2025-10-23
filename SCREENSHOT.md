# 📸 Screenshot Alma Rehberi

Bu projede HTML dosyalarının ekran görüntüsünü CLI üzerinden almak için hazırlanmış araçlar.

## 🚀 Hızlı Kullanım

### Yöntem 1: NPM Script (Önerilen)

```bash
# Bağımlılıkları yükle (ilk kez)
npm install

# EKOK aracının screenshot'ını al
npm run screenshot:ekok
```

### Yöntem 2: Manuel

```bash
# Bağımlılıkları yükle
npm install

# İstediğiniz HTML dosyasının screenshot'ını al
node take-screenshot.js <html-dosyası> <çıktı-dosyası> [genişlik] [yükseklik]

# Örnek:
node take-screenshot.js ekok-nobet-hesaplama/hemsire-nobet-hedaplama.html screenshots/demo.png 1200 900
```

## 📋 Gereksinimler

- Node.js (v14+)
- npm
- Puppeteer (otomatik yüklenecek)

## 🛠️ Alternatif Araçlar

Eğer Puppeteer çalışmazsa, bu alternatifleri deneyebilirsiniz:

### 1. **Pageres CLI** (npx ile)

```bash
npx pageres file://$(pwd)/ekok-nobet-hesaplama/hemsire-nobet-hedaplama.html 1200x900 --filename=screenshots/demo
```

### 2. **Capture Website CLI**

```bash
# Önce bir HTTP server başlat
npx http-server -p 8080

# Başka bir terminalde:
npx capture-website-cli http://localhost:8080/ekok-nobet-hesaplama/hemsire-nobet-hedaplama.html --output=screenshots/demo.png
```

### 3. **Manuel Screenshot (En Basit)**

1. HTML dosyasını tarayıcıda aç
2. F12 → Console → Screenshot tool
3. Veya tarayıcı extension'ları kullan (Full Page Screen Capture gibi)

## 📝 Not

- Screenshot'lar `screenshots/` klasörüne kaydedilir
- `.gitignore` ile PNG dosyaları ignore edilir (boyutlar büyük olabilir)
- Her yeni HTML eklendiğinde package.json'a script eklenebilir

## 🐛 Sorun Giderme

**Puppeteer yüklenmiyor?**
```bash
# Chromium'u manuel indir
PUPPETEER_SKIP_DOWNLOAD=false npm install puppeteer
```

**Permission hatası?**
```bash
# Script'i executable yap
chmod +x take-screenshot.js
./take-screenshot.js ekok-nobet-hesaplama/hemsire-nobet-hedaplama.html screenshots/demo.png
```

**Lokal dosya erişim hatası?**
- HTTP server kullan (yukarıdaki Yöntem 2'ye bak)
