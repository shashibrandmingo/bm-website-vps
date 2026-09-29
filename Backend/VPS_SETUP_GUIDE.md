# 🚀 VPS Deployment & Setup Guide (Brandmingo)

Yeh guide aapko aapka Node.js backend aur React frontend kisi bhi Linux VPS (Hostinger VPS, DigitalOcean, AWS EC2, Hetzner, Linode) par deploy karne me step-by-step madad karegi.

---

## 📋 Pre-requisites (VPS par kya chahiye)
- OS: **Ubuntu 22.04 LTS** ya **Ubuntu 24.04 LTS**
- RAM: Minimum 1GB (2GB recommended)
- Domain: `brandmingo.com` (DNS A-record aapke VPS IP par point hona chahiye)

---

## 🛠️ Step 1: VPS Server Initial Setup

VPS me SSH se login karein:
```bash
ssh root@YOUR_VPS_IP
```

System packages update karein:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git ufw
```

---

## 📦 Step 2: Node.js (v20 LTS), PM2 aur Nginx Install Karein

### 1. Node.js 20 LTS Install:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v  # Check karein v20+ hona chahiye
npm -v
```

### 2. PM2 (Process Manager) Globally Install:
```bash
sudo npm install -g pm2
```

### 3. Nginx & Certbot (SSL ke liye) Install:
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

---

## 📁 Step 3: Project Files Upload / Clone Karein

VPS me project directory banayein:
```bash
sudo mkdir -p /var/www/brandmingo
sudo chown -R $USER:$USER /var/www/brandmingo
cd /var/www/brandmingo
```

Git se clone karein ya SCP/FileZilla se project upload karein:
```bash
# Agar Git use kar rahe hain:
git clone <YOUR_GIT_REPO_URL> .
```

---

## ⚙️ Step 4: Backend `.env` File Setup

Backend folder me jayein:
```bash
cd /var/www/brandmingo/Backend
cp .env.example .env
nano .env
```

`.env` me values confirm karein:
```env
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://itsbrandmingo:brandmingo123@cluster0.djx2vdz.mongodb.net/brandmingo
JWT_SECRET=brandmingosecretkey
CLOUDINARY_CLOUD_NAME=dqqgpii8v
CLOUDINARY_API_KEY=816897386674995
CLOUDINARY_API_SECRET=fbG1fEsaRJ-2G4xd_knSynaLCto
CLIENT_URL=https://brandmingo.com
```
Save karne ke liye: `CTRL + O`, `Enter`, fir `CTRL + X`.

---

## 🏃 Step 5: Backend Start Karein with PM2

Backend dependencies install karein:
```bash
cd /var/www/brandmingo/Backend
npm install --omit=dev
```

PM2 se server start karein:
```bash
pm2 start ecosystem.config.cjs --env production
```

Server status check karein:
```bash
pm2 status
pm2 logs brandmingo-backend
```

### VPS Reboot hone par auto-start setup:
```bash
pm2 startup
# (Terminal me jo command aayegi usko copy-paste karke run karein)
pm2 save
```

---

## 🌐 Step 6: Nginx Reverse Proxy & SSL Setup

### 1. Nginx Config Copy Karein:
```bash
sudo cp /var/www/brandmingo/Backend/nginx/brandmingo.conf /etc/nginx/sites-available/brandmingo
```

### 2. Symlink Create Karein:
```bash
sudo ln -s /etc/nginx/sites-available/brandmingo /etc/nginx/sites-enabled/
```

Default config remove karein:
```bash
sudo rm -f /etc/nginx/sites-enabled/default
```

### 3. Free SSL (Let's Encrypt / Certbot) Setup:
```bash
sudo certbot --nginx -d brandmingo.com -d www.brandmingo.com
```
*(Certbot aapse email aur terms accept karne bolega, fir auto SSL configure ho jayega)*

### 4. Nginx Test & Reload:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🛡️ Step 7: Firewall (UFW) Configure Karein

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## 🔄 Daily Deployment / Code Update Kaise Karein

Jab bhi aap naya code push karenge, VPS me sirf deployment script chala lijiye:
```bash
cd /var/www/brandmingo/Backend
chmod +x deploy.sh
./deploy.sh
```

Yeh script automatically:
1. Dependencies install karega
2. Frontend build banayega
3. PM2 ko bina downtime ke restart (`pm2 reload`) kar dega!

---

## 📊 Useful PM2 Commands

| Command | Kaam |
|---|---|
| `pm2 status` | Running apps ka status aur RAM usage check karein |
| `pm2 logs brandmingo-backend` | Real-time console logs dekhein |
| `pm2 reload brandmingo-backend` | Zero-downtime restart karein |
| `pm2 restart brandmingo-backend` | Hard restart |
| `pm2 stop brandmingo-backend` | App stop karein |
