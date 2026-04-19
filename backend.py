import http.server
import socketserver
import json
import os

PORT = 8000
DB_FILE = 'database.json'

DEFAULT_DB = {
    "projects": [
        { "name": "S.A Equipement — Warehouse App", "desc": "Full-stack mobile app for a real Moroccan electrical equipment company...", "tags": "Flutter, Firebase", "icon": "🏭", "link": "pages/projects/sa-equipement.html" },
        { "name": "JARVIS — AI Assistant", "desc": "A JARVIS-style AI agent accessible via Telegram. Runs on local Ollama LLMs with CrewAI.", "tags": "AI Agent", "icon": "🤖", "link": "pages/projects/jarvis.html" },
        { "name": "Tawleefa — Luxury E-Commerce", "desc": "Immersive 3D luxury web platform tailored for the modern market.", "tags": "Web, 3D", "icon": "🎁", "link": "pages/projects/tawleefa.html" },
        { "name": "Gold EA — XAUUSD Bot", "desc": "Expert Advisor for MetaTrader 5 targeting XAUUSD. Custom entry logic and risk management.", "tags": "Algo Trading", "icon": "📈", "link": "pages/projects/goldea.html" }
    ],
    "skills": [
        { "name": "Python", "icon": "🐍", "link": "pages/skills/python.html" }, { "name": "AI Agents", "icon": "🤖", "link": "pages/skills/ai-agents.html" }, { "name": "n8n", "icon": "🔄", "link": "pages/skills/n8n.html" },
        { "name": "Flutter", "icon": "📱", "link": "pages/skills/flutter.html" }, { "name": "Firebase", "icon": "🔥", "link": "pages/skills/firebase.html" }, { "name": "MQL5", "icon": "📊", "link": "pages/skills/mql5.html" }
    ],
    "certs": [
        { "title": "AI Agent Development", "issuer": "Anthropic / Claude", "icon": "🏅", "link": "pages/certs/anthropic.html" },
        { "title": "Python Automation", "issuer": "Google / Coursera", "icon": "🏅", "link": "pages/certs/python.html" }
    ]
}

# Initialize database if it doesn't exist
if not os.path.exists(DB_FILE):
    with open(DB_FILE, 'w', encoding='utf-8') as f:
        json.dump(DEFAULT_DB, f, indent=4, ensure_ascii=False)

class PortfolioAdminHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/db':
            # Auto-recreate protection
            if not os.path.exists(DB_FILE):
                with open(DB_FILE, 'w', encoding='utf-8') as f:
                    json.dump(DEFAULT_DB, f, indent=4, ensure_ascii=False)
                    
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            with open(DB_FILE, 'r', encoding='utf-8') as f:
                self.wfile.write(f.read().encode('utf-8'))
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/db':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            try:
                new_db_state = json.loads(post_data.decode('utf-8'))
                with open(DB_FILE, 'w', encoding='utf-8') as f:
                    json.dump(new_db_state, f, indent=4, ensure_ascii=False)
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True}).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Not Found")

# Prevent error if socket is lingering (optional config: ThreadingTCPServer or reuse_address)
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), PortfolioAdminHandler) as httpd:
    print(f"🚀 Neural Admin Server running locally at: http://localhost:{PORT}")
    print(f"➡️  Open: http://localhost:{PORT}/portfolio.html")
    httpd.serve_forever()
