#!/bin/bash
# ══════════════════════════════════════════════════════════════
# Brandmingo VPS Deployment Script
# Usage: ./deploy.sh
# ══════════════════════════════════════════════════════════════

set -e # Exit immediately if a command exits with a non-zero status

echo "🚀 [1/5] Starting deployment..."

# Directory containing this script (Backend folder)
BACKEND_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$BACKEND_DIR")"

echo "📂 Project root: $PROJECT_ROOT"

# Optional Git pull (uncomment if deploying directly via git)
# cd "$PROJECT_ROOT"
# echo "📥 Pulling latest code from Git..."
# git pull origin main

# Backend Dependencies
cd "$BACKEND_DIR"
echo "📦 [2/5] Installing Backend dependencies..."
npm install --omit=dev

# Ensure logs directory exists
mkdir -p "$BACKEND_DIR/logs"

# Frontend Build (if Frontend folder exists)
if [ -d "$PROJECT_ROOT/Frontend" ]; then
    echo "🔨 [3/5] Building Frontend..."
    cd "$PROJECT_ROOT/Frontend"
    npm install
    npm run build
    
    echo "📋 Copying fresh build to Backend/dist..."
    rm -rf "$BACKEND_DIR/dist"
    cp -r "$PROJECT_ROOT/Frontend/dist" "$BACKEND_DIR/dist"
fi

# Reload PM2 with zero downtime
echo "🔄 [4/5] Reloading PM2 processes..."
cd "$BACKEND_DIR"
if pm2 list | grep -q "brandmingo-backend"; then
    pm2 reload ecosystem.config.cjs --env production
else
    pm2 start ecosystem.config.cjs --env production
fi

# Save PM2 process list so it survives reboot
pm2 save

echo "🧪 [5/5] Checking server health..."
sleep 2
curl -s http://127.0.0.1:5000/health || echo "⚠️ Could not connect to /health endpoint yet"

echo ""
echo "✅ Deployment completed successfully!"
