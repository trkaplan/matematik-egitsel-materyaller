# Claude Code - Proje Kuralları ve İyi Pratikler

Bu dosya, Claude Code'un bu projede uygulayacağı kuralları ve standartları içerir.

---

## 📋 README Standartları

### ✅ Her README Mutlaka İçermeli:

1. **Adım Adım Kurulum/Kullanım Talimatları**
   - Projeyi nasıl çalıştıracağım?
   - Hangi bağımlılıklar gerekli?
   - Hangi komutları çalıştırmalıyım?

2. **Demo Linki**
   - Canlı demo varsa link ekle
   - GitHub Pages, Vercel, Netlify vs.
   - `🔗 [Canlı Demo](https://...)` formatında

3. **Ekran Görüntüsü veya GIF**
   - Projenin nasıl göründüğünü göster
   - `/screenshots` klasöründe sakla
   - README'de `![Önizleme](./screenshots/demo.png)` ile ekle

4. **Proje Amacı ve Ne Yaptığı**
   - Tek cümlelik özet
   - Problem çözümü açıklaması

5. **Teknoloji Stack'i**
   - Kullanılan diller, framework'ler
   - Versiyon bilgileri

### 📝 README Şablonu:

```markdown
# Proje Adı

Kısa açıklama (tek cümle)

## 🔗 Demo

[Canlı Demo](https://...)

## 📸 Önizleme

![Ekran Görüntüsü](./screenshots/demo.png)

## 🚀 Kurulum

1. Adım 1
2. Adım 2
3. Adım 3

## 💻 Kullanım

Kod örnekleri ve açıklamalar

## 🛠️ Teknolojiler

- Teknoloji 1
- Teknoloji 2

## 📬 İletişim

İletişim bilgileri
```

---

## 🎯 Genel Kod Standartları

### Git Workflow - ZORUNLU:
- **TÜM değişiklikler Pull Request (PR) ile yapılmalı**
- Direkt main branch'e commit yapma
- PR açıldığında otomatik staging preview oluşur
- Her PR'da preview URL'ini kontrol et
- PR merge edildikten sonra production'a otomatik deploy olur

### Git Commit'leri:
- Açıklayıcı commit mesajları (Türkçe veya İngilizce tutarlı olsun)
- Küçük, anlamlı commit'ler
- Emoji kullanımını kullanıcı istemediği sürece kullanma
- Her commit anlamlı bir değişiklik içermeli

### Branch Stratejisi:
- Feature: `feature/feature-name` veya `claude/feature-name`
- Bugfix: `fix/bug-description`
- Ana branch: `main` (sadece PR merge ile güncellenir)

### Dosya Organizasyonu:
- Her proje kendi klasöründe
- Screenshots için `/screenshots` klasörü
- Dokümantasyon için `/docs` (gerekirse)

### Kod Kalitesi:
- Temiz, okunabilir kod
- Açıklayıcı değişken isimleri
- Gerektiğinde yorum satırları

### Yeni Özellik Eklerken:
- Önce mevcut kodu anla
- Yeni branch oluştur
- Değişiklikleri yap
- PR aç ve staging'de test et
- README'yi güncelle
- Review sonrası merge

---

## 🔄 Proje Başlatırken Kontrol Listesi

- [ ] README.md eksiksiz mi?
- [ ] Demo linki var mı?
- [ ] Ekran görüntüsü eklendi mi?
- [ ] Kurulum adımları açık mı?
- [ ] Lisans dosyası var mı?
- [ ] .gitignore uygun mu?

---

## 💡 Hatırlatmalar

- **Yeni proje başlatırken**: `/setup-readme` komutunu kullan
- **README güncellemesi**: Demo ve screenshot'ları unutma
- **Commit öncesi**: README'nin güncel olduğunu kontrol et
- **Emoji kullanımı**: Kullanıcı açıkça istemediği sürece kullanma

---

## 🌐 Türkçe İçerik Standartları

- Teknik terimler İngilizce kalabilir (repository, commit, vs.)
- Açıklamalar Türkçe
- Kod içi yorumlar Türkçe veya İngilizce (proje diline göre)
- README dili proje hedef kitlesine göre belirle

---

**Son Güncelleme**: 2025-10-22
