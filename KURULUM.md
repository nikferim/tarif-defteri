# 📖 Tarif Defterim — Kurulum Rehberi

## Dosyalar
- `index.html` → Uygulamanın kendisi
- `manifest.json` → PWA ayarları
- `sw.js` → Çevrimdışı çalışma dosyası
- `icons/` → Uygulama ikonları (oluşturmanız gerekiyor)

---

## 🖥 Bilgisayarda Test Etmek

Dosyalara çift tıklayarak açamazsınız — küçük bir yerel sunucu gereklidir.

### En Kolay Yol: VS Code + Live Server
1. VS Code'u indirin: https://code.visualstudio.com
2. "Live Server" eklentisini yükleyin
3. `index.html` dosyasını açın → sağ tık → "Open with Live Server"

### Python ile (terminal kullanıcıları):
```bash
cd tarif-defteri
python -m http.server 8000
```
Tarayıcıda: `http://localhost:8000`

---

## 📱 Telefona Yüklemek (PWA Kurulumu)

### iPhone (Safari):
1. Siteyi **Safari** ile açın
2. Alt ortadaki **Paylaş** ikonuna tıklayın (kare + ok)
3. **"Ana Ekrana Ekle"** seçeneğine tıklayın
4. Uygulama ana ekranda görünecek ✅

### Android (Chrome):
1. Siteyi **Chrome** ile açın
2. Tarayıcı menüsüne (⋮) tıklayın
3. **"Ana ekrana ekle"** veya **"Uygulamayı yükle"** seçeneğine tıklayın
4. Uygulama ana ekranda görünecek ✅

---

## 🌐 Ücretsiz Yayınlama (İnternete Koyma)

### Netlify Drop (En Kolay — Sürükle Bırak):
1. https://app.netlify.com/drop adresine gidin
2. `tarif-defteri` klasörünü sürükleyip bırakın
3. Anında link alırsınız (örn: `https://amazing-xyz.netlify.app`)
4. Bu linki telefonunuzda açın ve ana ekrana ekleyin

### GitHub Pages (Ücretsiz):
1. GitHub'da ücretsiz hesap oluşturun
2. Yeni repo açın, dosyaları yükleyin
3. Settings → Pages → Branch: main → Save

---

## 🎨 Uygulama İkonları

`icons/` klasörüne şu dosyaları eklemeniz gerekiyor:
- `icon-192.png` (192×192 piksel)
- `icon-512.png` (512×512 piksel)

Hızlı oluşturmak için: https://favicon.io adresine gidin, metin veya emoji ile ikon oluşturun.

---

## ✨ Özellikler
- ✅ Tarif ekleme, düzenleme, silme
- ✅ Kategorilere göre filtreleme
- ✅ Tarif arama (isim veya malzemeye göre)
- ✅ Favorilere ekleme
- ✅ İstatistik ekranı
- ✅ Tarifleri çevrimdışı görüntüleme
- ✅ Telefona uygulama olarak kurma
- ✅ Tüm veriler telefonda saklanır (localStorage)
