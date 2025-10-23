# 🚀 Deployment Rehberi

Bu proje, Cloudflare Pages ve GitHub Actions kullanarak otomatik CI/CD pipeline'ı ile deploy edilmektedir.

## 📋 Ön Gereksinimler

### 1. Cloudflare Hesabı
- [Cloudflare Dashboard](https://dash.cloudflare.com) üzerinden hesap oluşturun
- Account ID'nizi alın (Dashboard > Workers & Pages > Account ID)

### 2. Cloudflare API Token
1. Cloudflare Dashboard > My Profile > API Tokens
2. "Create Token" butonuna tıklayın
3. "Edit Cloudflare Workers" template'ini seçin
4. Permissions:
   - Account > Cloudflare Pages > Edit
   - Account > Account Settings > Read
5. Token'ı kopyalayın (bir daha gösterilmeyecek!)

### 3. GitHub Secrets Ayarları

GitHub repository'nizde şu secret'ları ekleyin:

**Settings > Secrets and variables > Actions > New repository secret**

- `CLOUDFLARE_API_TOKEN`: Cloudflare API token'ınız
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account ID'niz

## 🔄 CI/CD Workflow

### Pull Request Workflow

1. **Yeni branch oluştur**:
   ```bash
   git checkout -b feature/yeni-ozellik
   ```

2. **Değişikliklerinizi yapın ve commit edin**:
   ```bash
   git add .
   git commit -m "feat: Yeni özellik eklendi"
   git push origin feature/yeni-ozellik
   ```

3. **PR açın**:
   - GitHub'da Pull Request oluşturun
   - GitHub Actions otomatik olarak çalışır
   - Preview deployment yapılır

4. **Preview URL'i kontrol edin**:
   - PR comment'lerinde preview URL görünecek
   - Format: `https://[branch-name].matematik-egitsel-materyaller.pages.dev`

5. **Review ve Merge**:
   - Preview'da her şey çalışıyorsa PR'ı merge edin
   - Merge sonrası production'a otomatik deploy olur

### Production Deployment

- `main` branch'e merge edildiğinde otomatik olarak production'a deploy olur
- Production URL: `https://matematik-egitsel-materyaller.pages.dev`

## 🛠️ Lokal Test

### Wrangler ile Lokal Preview

```bash
# Bağımlılıkları yükle
npm install

# Lokal preview server başlat
npm run preview
```

### Manuel Deploy (Lokal)

```bash
# Production'a deploy
npm run deploy

# Belirli bir branch için deploy
npx wrangler pages deploy . --project-name=matematik-egitsel-materyaller --branch=feature-branch
```

## 📊 Deployment Status

### GitHub Actions
- Actions sekmesinden deployment durumunu kontrol edebilirsiniz
- Her PR için ayrı workflow çalışır
- Başarısız deployment'lar için log'ları inceleyebilirsiniz

### Cloudflare Dashboard
- [Cloudflare Dashboard](https://dash.cloudflare.com) > Workers & Pages
- Tüm deployment'ları ve log'ları görebilirsiniz
- Analytics ve performans metrikleri

## 🐛 Sorun Giderme

### Deployment Başarısız Oluyor

1. **GitHub Secrets kontrol edin**:
   - `CLOUDFLARE_API_TOKEN` doğru mu?
   - `CLOUDFLARE_ACCOUNT_ID` doğru mu?

2. **Cloudflare token permissions**:
   - Token'ın Cloudflare Pages edit yetkisi var mı?

3. **Build hatası**:
   - Lokal'de test edin: `npm run preview`
   - HTML dosyalarının yolları doğru mu?

### Preview URL Çalışmıyor

1. **DNS Propagation**:
   - Preview URL'lerin aktif olması birkaç dakika sürebilir

2. **Branch ismi**:
   - Branch isimlerinde özel karakter kullanmayın
   - Kebab-case kullanın: `feature/my-feature`

### API Token Hatası

```
Error: Authentication error
```

Çözüm:
1. Yeni API token oluşturun
2. GitHub secrets'ı güncelleyin
3. Workflow'u yeniden çalıştırın

## 🔒 Güvenlik

- API token'larını asla commit etmeyin
- `.env` dosyalarını `.gitignore`'a ekleyin
- GitHub Secrets kullanın
- Token'lara sadece gerekli yetkileri verin

## 📝 Önemli Notlar

- Her PR otomatik preview oluşturur
- Preview environment'lar otomatik temizlenir
- Production deployment'lar geri alınabilir (Cloudflare Dashboard'dan)
- Cloudflare Pages ücretsiz tier: 500 deployment/ay

## 🔗 Faydalı Linkler

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions Docs](https://docs.github.com/actions)
