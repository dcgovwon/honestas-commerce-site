# HCS Honestas Commercial Services — Marketing Site

Static site for [honestas-commerce.com](https://honestas-commerce.com), hosted on GitHub Pages.

## Stack

- Hand-written HTML / CSS / vanilla JS — no build step
- Google Fonts: Playfair Display (display), Montserrat (body)
- Hosted on GitHub Pages, custom domain via AWS Route 53
- Email (Zoho) MX records remain on Route 53 — DNS swap only touches A/CNAME

## Local preview

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

## Pages

- `index.html` — Home
- `insights.html` — Knowledge hub
- `b2g-trade-solutions.html` — Services / whitepaper
- `privacy-policy.html` — Privacy policy

## Deploy

Pushing to `main` auto-publishes via GitHub Pages. Custom domain configured via:
- `CNAME` file in repo root → `honestas-commerce.com`
- Route 53 A records → GitHub Pages IPs (185.199.108–111.153)
- Route 53 CNAME `www` → `dcgovwon.github.io`
