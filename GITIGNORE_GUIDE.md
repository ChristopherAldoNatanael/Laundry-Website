# 📝 GITIGNORE - FILE YANG TIDAK DI-UPLOAD KE GITHUB

## 🔒 **PENTING: File-File yang TIDAK BOLEH di-upload ke GitHub**

File `.gitignore` sudah dikonfigurasi untuk melindungi data sensitif Anda.

---

## ✅ **File yang DI-IGNORE (Tidak akan ter-upload)**

### 1. **Environment Variables** 🔐
```
.env
.env.local
.env*.local
.env.development.local
.env.production.local
```
**Alasan:** Berisi nomor WhatsApp, email, dan data sensitif bisnis

**Yang AMAN di-upload:**
- ✅ `.env.example` - Template tanpa data real

---

### 2. **Dependencies** 📦
```
node_modules/
```
**Alasan:** 
- Ukuran sangat besar (100MB+)
- Akan di-download otomatis saat `npm install`
- Tidak perlu di-track di Git

---

### 3. **Build Output** 🏗️
```
.next/
out/
build/
dist/
```
**Alasan:** 
- File hasil build otomatis
- Akan di-generate ulang saat deployment
- Ukuran besar dan tidak perlu di-track

---

### 4. **Lock Files** 🔒
```
package-lock.json  ← Ignored (kita pakai pnpm)
yarn.lock          ← Ignored (kita pakai pnpm)
pnpm-lock.yaml     ← KEPT (jangan di-ignore!)
```
**Alasan:** 
- Hanya perlu 1 lock file (sesuai package manager)
- `pnpm-lock.yaml` DI-UPLOAD untuk reproducible builds

---

### 5. **OS Files** 💻
```
.DS_Store      ← Mac
Thumbs.db      ← Windows
Desktop.ini    ← Windows
```
**Alasan:** File sistem operasi yang tidak relevan

---

### 6. **Editor Files** 📝
```
.vscode/       ← VSCode settings (sebagian)
.idea/         ← IntelliJ IDEA
*.swp, *.swo   ← Vim
```
**Alasan:** Preferensi personal editor

**Yang AMAN di-upload:**
- ✅ `.vscode/extensions.json` - Rekomendasi ekstensi
- ✅ `.vscode/settings.json` - Shared settings

---

### 7. **Logs & Cache** 📋
```
npm-debug.log*
*.log
.cache
.eslintcache
```
**Alasan:** File temporary yang tidak perlu

---

### 8. **Sensitive Files** 🔐
```
*.pem          ← SSL certificates
*.key          ← Private keys
*.cert         ← Certificates
*.db           ← Databases
```
**Alasan:** File sensitif yang BERBAHAYA jika bocor

---

## ⚠️ **BAHAYA jika File Ini Ter-upload ke GitHub**

### Jika `.env` ter-upload:
```
❌ BAHAYA BESAR!
- Nomor WhatsApp Anda PUBLIK
- Email bisnis PUBLIK
- Bisa di-spam atau disalahgunakan
```

**Solusi jika sudah terlanjur:**
1. Hapus file dari Git history:
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all
```

2. Ganti semua credentials (nomor WA, email, dll)
3. Push force:
```bash
git push origin --force --all
```

---

## ✅ **CARA VERIFY Gitignore Bekerja**

### 1. Cek File yang Akan Di-Upload
```powershell
# Lihat file yang akan di-commit
git status

# Harus TIDAK ADA:
# - .env atau .env.local
# - node_modules/
# - .next/
# - *.log files
```

### 2. Test Gitignore
```powershell
# Coba buat file .env
echo "TEST=123" > .env.local

# Cek status
git status
# Harus TIDAK muncul .env.local

# Bersihkan
del .env.local
```

### 3. Check Remote Repository
Setelah push ke GitHub:
1. Buka repository di github.com
2. Verify TIDAK ADA:
   - ❌ `.env` atau `.env.local`
   - ❌ `node_modules/`
   - ❌ `.next/`

---

## 📋 **CHECKLIST Sebelum Push ke GitHub**

```
[ ] .env.local TIDAK muncul di `git status`
[ ] node_modules/ TIDAK muncul di `git status`
[ ] .next/ TIDAK muncul di `git status`
[ ] pnpm-lock.yaml MUNCUL di `git status` ✅
[ ] package.json MUNCUL di `git status` ✅
[ ] .env.example MUNCUL di `git status` ✅
[ ] Semua file .tsx, .ts MUNCUL di `git status` ✅
```

---

## 🚀 **WORKFLOW Git yang Aman**

### 1. First Commit (Pertama Kali)
```powershell
# Initialize git
git init

# Add all files (gitignore akan filter otomatis)
git add .

# Check apa yang akan di-commit
git status

# Pastikan TIDAK ADA .env, node_modules, .next
# Jika ada, cek .gitignore

# Commit
git commit -m "Initial commit: Laundry Modern website with security hardening"

# Connect to GitHub
git remote add origin https://github.com/username/laundry-modern.git

# Push
git push -u origin main
```

### 2. Regular Updates
```powershell
# Lihat perubahan
git status

# Add specific files (atau semua)
git add .

# Commit dengan pesan jelas
git commit -m "fix: Update contact form validation"

# Push
git push
```

### 3. Check Before Push
```powershell
# Lihat files yang akan di-push
git diff --cached --name-only

# Pastikan TIDAK ADA:
# - .env files
# - node_modules
# - build output
```

---

## 🔍 **Troubleshooting**

### Problem 1: ".env sudah ter-upload!"
**Solusi:**
```powershell
# Remove dari Git (tapi tetap ada di local)
git rm --cached .env

# Commit removal
git commit -m "security: Remove .env from repository"

# Push
git push

# ⚠️ PENTING: Ganti semua credentials di .env!
```

### Problem 2: "node_modules ter-upload!"
**Solusi:**
```powershell
# Remove dari Git
git rm -r --cached node_modules

# Commit
git commit -m "chore: Remove node_modules from repository"

# Push
git push
```

### Problem 3: ".gitignore tidak bekerja"
**Solusi:**
```powershell
# Clear Git cache
git rm -r --cached .

# Re-add semua files
git add .

# Commit
git commit -m "fix: Apply .gitignore properly"

# Push
git push
```

---

## 📚 **Resources**

### .gitignore Templates
- **Next.js:** https://github.com/vercel/next.js/blob/canary/.gitignore
- **Node.js:** https://github.com/github/gitignore/blob/main/Node.gitignore
- **GitHub Collection:** https://github.com/github/gitignore

### Check Your Repository
- **GitHub Security:** https://github.com/[username]/[repo]/security
- **GitGuardian:** https://www.gitguardian.com/ (scan for secrets)

---

## ✅ **Summary**

**File yang DI-UPLOAD (Safe):**
- ✅ Source code (`.tsx`, `.ts`, `.css`)
- ✅ Configuration (`.json`, `.config.js`)
- ✅ Documentation (`.md`)
- ✅ `.env.example` (template only)
- ✅ `pnpm-lock.yaml` (lock file)
- ✅ `.gitignore` (ini file)

**File yang TIDAK DI-UPLOAD (Protected):**
- ❌ `.env`, `.env.local` (secrets)
- ❌ `node_modules/` (dependencies)
- ❌ `.next/`, `out/` (build output)
- ❌ `*.log` (logs)
- ❌ `.DS_Store`, `Thumbs.db` (OS files)

---

**Last Updated:** February 12, 2026  
**Status:** ✅ Configured & Secure
