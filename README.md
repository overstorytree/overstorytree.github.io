# Overstory Tree — Static Website

A clean, mobile-first static website for **Overstory Tree**, a premium tree service company based in Richmond, VA.

## Project Structure

```
overstory-tree/
├── index.html        ← Single-page site (all sections)
├── styles.css        ← All styles
├── script.js         ← Sticky header, mobile menu, gallery, lightbox, form
├── images/
│   ├── work-1.jpg    ← Your iPhone photo #1 (portrait/vertical)
│   ├── work-2.jpg    ← Your iPhone photo #2
│   ├── work-3.jpg    ← Your iPhone photo #3
│   ├── work-4.jpg    ← Your iPhone photo #4
│   └── work-5.jpg    ← Your iPhone photo #5
└── README.md         ← This file
```

## Features

- Single-page layout with anchor navigation
- Sticky header with scroll effect
- Responsive, mobile-first design
- Accessible (WCAG-friendly): keyboard nav, focus styles, ARIA labels
- SEO meta tags + Open Graph + Twitter Card
- Schema.org `LocalBusiness` JSON-LD
- Contact form that opens the user's email client via `mailto:` (no backend required)
- Smooth scroll for anchor links
- IntersectionObserver scroll-in animations
- No build step, no frameworks — pure HTML/CSS/JS

---

## Deploying to GitHub Pages

### 1. Create a GitHub repository

Go to [github.com/new](https://github.com/new) and create a new repository named `overstory-tree` (or any name you prefer). Make it **Public**.

### 2. Push the files

```bash
git init
git add .
git commit -m "Initial commit – Overstory Tree website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/overstory-tree.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Choose **main** branch and **/ (root)** folder.
5. Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/overstory-tree/` within a minute or two.

---

## Using a Custom Domain (overstorytree.com)

### Step 1 – Add domain in GitHub Pages settings

1. In **Settings → Pages**, enter your custom domain (e.g. `overstorytree.com`) in the **Custom domain** field and click **Save**.

This will automatically create a `CNAME` file in the repository.

### Step 2 – Configure DNS at your registrar

Add the following DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

**For an apex domain (`overstorytree.com`) — 4 × A records:**

| Type | Name | Value          |
|------|------|----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

**And a CNAME for `www`:**

| Type  | Name | Value                          |
|-------|------|--------------------------------|
| CNAME | www  | YOUR_USERNAME.github.io        |

### Step 3 – Enable HTTPS

After DNS propagates (up to 48 hours), return to **Settings → Pages** and check **Enforce HTTPS**.

---

## Customization Checklist

Before going live, update these placeholders:

## Adding Your Work Photos

1. Create an `images/` folder inside your project directory.
2. Rename your 5 iPhone photos to `work-1.jpg` through `work-5.jpg`.
3. Drop them into the `images/` folder.
4. That's it — they will appear in the **Recent Jobs** gallery section automatically.

**Tips for best results:**
- Keep each file under ~2MB (use [Squoosh](https://squoosh.app) to compress without quality loss)
- The gallery is designed for vertical/portrait iPhone photos (9:16 ratio)
- Landscape photos will still work but will be cropped to portrait in the strip

---

| Location | Placeholder | Replace with |
|----------|-------------|-------------|
| `index.html` | `(804) 555-0199` | Real phone number |
| `index.html` | `hello@overstorytree.com` | Real email |
| `index.html` | `og:image` meta tag URL | Real social share image |
| `index.html` | `https://overstorytree.com/` | Real domain URL |
| `script.js` | `RECIPIENT` constant | Real email address |
| `styles.css` | Colors / fonts | Brand adjustments |

## License

All code is proprietary to Overstory Tree. Not for redistribution.