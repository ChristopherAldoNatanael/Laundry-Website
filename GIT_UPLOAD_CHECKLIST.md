# ⚡ QUICK REFERENCE: Git Upload Checklist

## ✅ **AMAN DI-UPLOAD KE GITHUB**

```
✅ Source Code
   ├─ app/*.tsx
   ├─ components/**/*.tsx
   ├─ lib/**/*.ts
   └─ styles/*.css

✅ Configuration Files
   ├─ package.json
   ├─ pnpm-lock.yaml
   ├─ next.config.mjs
   ├─ tailwind.config.ts
   ├─ tsconfig.json
   └─ components.json

✅ Documentation
   ├─ README.md
   ├─ SECURITY_*.md
   ├─ *.md (semua dokumentasi)
   └─ .env.example ⭐ (template, bukan yang real!)

✅ Git Files
   ├─ .gitignore
   └─ .gitattributes

✅ Public Assets
   └─ public/*.svg, *.png, *.jpg
```

---

## ❌ **JANGAN DI-UPLOAD (Sudah Di-ignore)**

```
❌ SENSITIVE DATA
   ├─ .env ⚠️ BAHAYA!
   ├─ .env.local ⚠️ BAHAYA!
   ├─ .env*.local ⚠️ BAHAYA!
   └─ *.pem, *.key (certificates)

❌ DEPENDENCIES
   └─ node_modules/ (ukuran besar, auto-download)

❌ BUILD OUTPUT
   ├─ .next/
   ├─ out/
   └─ build/

❌ LOGS & CACHE
   ├─ *.log
   ├─ .cache
   └─ .eslintcache

❌ OS FILES
   ├─ .DS_Store (Mac)
   ├─ Thumbs.db (Windows)
   └─ Desktop.ini (Windows)

❌ EDITOR FILES
   └─ .vscode/* (sebagian besar)
```

---

## 🚀 **COMMANDS - Copy Paste**

### Check Apa yang Akan Di-Upload
```powershell
git status
```

### Pastikan File Aman
```powershell
# Cek tidak ada file sensitif
git status | Select-String -Pattern "\.env"
git status | Select-String -Pattern "node_modules"

# Harus return nothing
```

### Upload ke GitHub (First Time)
```powershell
git init
git add .
git status  # ⚠️ CHECK DULU!
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### Update (Regular)
```powershell
git add .
git status  # ⚠️ CHECK DULU!
git commit -m "update: Your message here"
git push
```

---

## ⚠️ **EMERGENCY: File Sensitif Sudah Ke-upload!**

### Hapus .env dari Git History
```powershell
# Remove file
git rm --cached .env

# Commit
git commit -m "security: Remove .env"

# Push
git push

# ⚠️ GANTI SEMUA CREDENTIALS!
# Edit .env dengan data baru
```

### Hapus node_modules dari Git
```powershell
git rm -r --cached node_modules
git commit -m "chore: Remove node_modules"
git push
```

---

## 📋 **PRE-PUSH CHECKLIST**

```
[ ] Run: git status
[ ] Verify: NO .env or .env.local
[ ] Verify: NO node_modules/
[ ] Verify: NO .next/ or out/
[ ] Verify: NO *.log files
[ ] Check: pnpm-lock.yaml EXISTS ✅
[ ] Check: .env.example EXISTS ✅
[ ] All good? → git push
```

---

## 🎯 **REMEMBER**

1. **ALWAYS** check `git status` before `git push`
2. **NEVER** upload `.env` files
3. **ALWAYS** keep `.env.example` updated (as template)
4. **IF LEAKED:** Change all credentials immediately!

---

Print this or bookmark this page! 🔖
