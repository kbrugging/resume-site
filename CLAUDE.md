# Resume Site

## Project
- Static resume/portfolio site for meetkrijn.dev
- Plain HTML + CSS, no build step
- Deployed to Raspberry Pi 5 at `/var/www/resume/`

## Deployment
- **Pi SSH:** `ssh -p 2222 admin-pi@192.168.2.16`
- **Deploy:** `rsync -avz --delete ./ admin-pi@192.168.2.16:/var/www/resume/ -e 'ssh -p 2222'`
- Site served by Nginx behind Cloudflare proxy

## Conventions
- Keep it simple — no frameworks, no build tools
- Test locally before deploying (open index.html in browser)
- All assets (CSS, images) in project root or subdirectories

## Security
- Follow best security practices at all times
- No inline JavaScript or inline styles — use external files with CSP in mind
- No third-party scripts, fonts, or CDN resources unless explicitly approved
- Sanitize any dynamic content; prefer static content
- Ensure all links use HTTPS
- No sensitive/personal data (phone, address) hardcoded — keep it professional
