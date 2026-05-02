# How to Edit honestas-commerce.com

A step-by-step guide for editing the Honestas Commercial Services website,
written for someone who has never used GitHub before.

You will edit the website directly in your web browser — no software to
install. Changes you save go live on https://honestas-commerce.com within
about one minute.

---

## Part 1 — One-Time Setup (5 minutes)

You only do this section once.

### 1. Make a GitHub account

Go to https://github.com/signup and create a free account. Use any
email address. Pick any username — it doesn't have to be related to
Honestas.

### 2. Accept the invitation

The site owner (Dom) will add you to the repository. You will get an
email from GitHub titled something like:

> **dcgovwon invited you to honestas-commerce-site**

Open that email and click the green **View invitation** button. On the
page that opens, click the green **Accept invitation** button.

(If you cannot find the email, check your spam folder. You can also go
directly to: https://github.com/dcgovwon/honestas-commerce-site/invitations
once you are signed in.)

### 3. Confirm you have access

Go to:
https://github.com/dcgovwon/honestas-commerce-site

You should see a list of files (`index.html`, `assets`, etc). If you see
those files, you are in.

That is the entire setup. You will not need to do steps 1–3 again.

---

## Part 2 — Opening the Editor

Every time you want to edit the website, you do the same three things:

### 1. Go to the repository

Open https://github.com/dcgovwon/honestas-commerce-site in your browser.

### 2. Press the period (`.`) key

While viewing the repository page, **press the `.` key on your
keyboard**. That single keystroke opens a full code editor right inside
your browser. The page address will change from `github.com/...` to
`github.dev/...` — that is correct.

(If the period key does not work, you can also type the address manually:
https://github.dev/dcgovwon/honestas-commerce-site)

### 3. Wait for it to load

The first time it opens, it takes about 5–10 seconds. After that you
will see:

- **Left side:** a list of files (the file explorer)
- **Middle:** an empty area where files open when you click them
- **Bottom-left:** small icons including a Source Control icon (looks
  like a Y-shape with three dots)

You are now in the editor. You can leave this tab open and come back to
it any time.

---

## Part 3 — The Files You Will Edit

Here is what each file does. Click any file in the left sidebar to open it.

### Page files (the actual web pages)

| File | What it controls |
|---|---|
| `index.html` | The home page (https://honestas-commerce.com) |
| `insights.html` | The Insights page |
| `b2g-trade-solutions.html` | The Services page |
| `privacy-policy.html` | The Privacy Policy page |

If you want to change the **words** on a page, edit one of these files.

### Style files (the look and colors)

| File | What it controls |
|---|---|
| `assets/css/styles.css` | All colors, fonts, spacing, layout for the entire site |

If you want to change a **color**, **font**, **size**, or **spacing**,
edit this file.

### Image files

| Folder | What it contains |
|---|---|
| `assets/img/` | Every image used on the site (logo, hero photos, card pictures) |

If you want to **swap an image**, you upload the new one here and update
the file name in the relevant page.

### Files you should NOT touch

| File | Why |
|---|---|
| `CNAME` | This tells GitHub the website lives at honestas-commerce.com. Deleting it breaks the website. |
| `.nojekyll` | Tells GitHub to publish files as-is. Deleting it can break the site. |
| `.gitignore` | Tells GitHub which files to skip. Leave alone. |
| `README.md` | Project notes for developers. Not visible on the website. Safe to ignore. |

---

## Part 4 — Making a Change (Step by Step)

Here is the full workflow with an example.

### Example: change the homepage headline

1. **Open the editor.** Go to https://github.com/dcgovwon/honestas-commerce-site
   and press `.`

2. **Click `index.html`** in the left sidebar. The file opens in the middle.

3. **Use Find** to locate text. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac).
   Type the words you want to change, e.g. `Honestas Commercial Services`.
   The editor highlights each match.

4. **Edit the text.** Click into the file and type your change exactly
   like editing a Word document.

5. **Look for the warning signs.** If you accidentally delete or change
   anything that looks like `<` or `>` or `="..."`, you may break that
   line. If something looks wrong, press `Ctrl+Z` (Windows) or `Cmd+Z`
   (Mac) to undo. You can press undo as many times as you need.

6. **Save your change to the website.** This is the part that is unique
   to GitHub:

   a. Look at the bottom-left of the editor. Click the **Source Control**
      icon (the Y-shape with three dots). A new panel opens on the left.

   b. You will see your changed file listed under "Changes" with a
      `M` next to it (M = Modified).

   c. At the top of that panel there is a text box labeled
      **Message (Ctrl+Enter to commit on "main")**. Type a short note
      describing what you changed, for example:
      `Updated home page headline`

   d. Click the blue **Commit & Push** button just above the message box.
      (If you only see a "Commit" button and a separate "Sync Changes"
      button, click Commit first, then Sync Changes.)

7. **Wait about 1 minute.** Open https://honestas-commerce.com in a new
   tab and refresh — your change is live.

That is the entire process. Every change you ever make follows the
same steps: edit file → click Source Control icon → type message →
Commit & Push.

---

## Part 5 — Common Things You Might Want to Change

### Changing text on a page

Same as the example above. Open the page file (`index.html`,
`insights.html`, etc), find the text, edit it, commit & push.

### Changing a color across the whole site

1. Open `assets/css/styles.css`
2. Press `Ctrl+F` and search for `:root`. The first block of color
   variables is at the top of the file.
3. The site uses these main colors:
   - `--color-olive` (the muted green used for hover states)
   - `--color-dark-green` (the darker green for backgrounds)
   - `--color-accent` (the bright yellow-green accent)
4. Each color is written like `#979E49`. To change a color, replace
   that 6-character code with a new one. You can pick colors at
   https://htmlcolorcodes.com — copy the hex code and paste it.
5. Commit & push as usual.

### Swapping a hero background image

1. Find the new image you want to use. Make sure it is large
   (at least 1920 pixels wide for hero images).
2. In the editor's left sidebar, right-click on the `assets/img/`
   folder. Choose **Upload...** and select your image file.
3. Note the file name you uploaded (e.g. `new-hero.jpg`).
4. Open the page file you want to update. Look for the line that
   begins with `<section class="hero"` near the top. You will see
   something like:
   ```
   style="background-image:url('assets/img/hero-home.jpg');"
   ```
5. Replace `hero-home.jpg` with your new file name (e.g. `new-hero.jpg`).
6. Commit & push.

### Adding a new image somewhere

Same process: upload to `assets/img/`, then reference it in the page
HTML using `assets/img/your-file-name.jpg`.

---

## Part 6 — Using AI to Help You (Strongly Recommended)

You do not need to learn HTML or CSS to make significant changes.
Modern AI tools can write the code for you. You describe what you want,
the AI writes it, you paste it into the editor.

### Recommended AI tools (any of these work)

- **ChatGPT** — https://chat.openai.com (free tier is fine)
- **Claude** — https://claude.ai (free tier is fine)
- **Gemini** — https://gemini.google.com (free)

Pick whichever you prefer. The instructions below work the same for
all three.

### How to ask the AI for help

The trick is to give it **context** (what you have now) and a **request**
(what you want changed). Here is the exact pattern:

#### Step 1 — Copy the relevant file

In github.dev, open the file you want to change. Press `Ctrl+A` (Cmd+A
on Mac) to select all the text in the file. Then `Ctrl+C` to copy.

#### Step 2 — Paste it into the AI chat

Go to your AI tool. Paste the code, then below it write what you want.
Here is an example prompt you can copy:

> I am editing the home page of a small business website. Below is the
> current HTML. I want you to help me change the words in the "About Us"
> section so they sound warmer and more personal, but keep the same
> length and the same structure. Do not change any HTML tags or
> formatting — only the text inside.
>
> Here is the current file:
>
> [paste the entire file here]
>
> Please show me the full updated file with my requested changes.

#### Step 3 — Paste the AI's response back into github.dev

The AI will respond with the updated file. Copy its entire response.
Go back to github.dev. With your file open, press `Ctrl+A` to select
all, then paste over it with `Ctrl+V`.

#### Step 4 — Preview before committing

In the Source Control panel (the Y-shape icon), click on the file name
of what you changed. The editor will show a side-by-side comparison:
your old version on the left, new version on the right. **Read it
carefully.** If anything looks wrong — a tag missing, a quote
unbalanced, layout disrupted — you can press `Ctrl+Z` repeatedly to
undo back to before you pasted, then ask the AI to try again.

#### Step 5 — Commit & push

Once the comparison looks right, commit & push as normal.

### Sample prompts that work well

Copy any of these as a starting point and adjust them:

**To rewrite text on a page:**
> I have a website page below. Please rewrite the section about
> [whatever section] to sound more [professional / friendly / concise].
> Do not change any HTML tags. Only change the words a visitor would
> read. Show me the full updated file.

**To change a color across the site:**
> Below is my site's CSS file. I want to change the main green color
> from olive to a deeper forest green. Update only the color values,
> nothing else. Show me the full updated CSS file.

**To add a new section to a page:**
> Below is my home page. After the "Mission" section and before the
> "Services" section, please add a new section called "Our Values"
> that includes three cards: Integrity, Precision, Global Reach.
> Match the existing visual style of the other sections. Show me the
> full updated file.

**To debug something that broke:**
> Below is my HTML file. After my last edit, the [name of section]
> section disappeared. Please tell me what is wrong and show me the
> corrected file.

### Important: always preview before committing

AI is not perfect. It will sometimes:
- Forget a closing tag
- Change something you did not ask it to change
- Suggest a "small improvement" you did not want

**Always use the Source Control side-by-side preview before clicking
Commit & Push.** That preview is your last safety check.

---

## Part 7 — If Something Goes Wrong

### "I committed something and the website looks broken"

Every change you ever make is reversible. Here is how to undo:

1. Go to https://github.com/dcgovwon/honestas-commerce-site/commits/main
2. You will see a list of every change ever made, newest at the top.
3. Find the change that broke the site (it will have your commit
   message on it).
4. **Tell Dom what happened.** He can roll back to the previous version
   in about 30 seconds. Do not panic-edit trying to fix it on your own
   if you are not sure what broke.

### "The editor will not let me commit"

If the **Commit & Push** button is greyed out:
- Make sure you have typed a message in the message box first.
- Make sure you actually changed a file (the file should show `M` next
  to it in the Source Control panel).

### "I lost my changes / the editor closed"

Edits in github.dev are saved automatically as you type, but only
locally in your browser tab. If you close the tab without committing,
you lose your work. **Get into the habit of committing as soon as you
finish a change**, even small ones — you can always make more
commits later.

### "The site is not updating after I commit"

- Wait 60 seconds — GitHub Pages takes a moment to publish.
- Hard refresh the page: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Try opening the site in an incognito / private window.

If after 5 minutes it is still showing the old version, message Dom.

---

## Part 8 — Quick Reference Card

Print this section or keep it open in another tab while you work.

```
OPEN EDITOR     →  github.com/dcgovwon/honestas-commerce-site → press .

EDIT TEXT       →  click file → use Ctrl+F to find → type your change

UNDO            →  Ctrl+Z (or Cmd+Z on Mac)

SAVE TO WEBSITE →  Source Control icon (Y-shape, bottom-left)
                   → type message → Commit & Push

VIEW LIVE SITE  →  honestas-commerce.com (refresh after ~1 minute)

USE AI HELP     →  copy file → paste in ChatGPT/Claude → describe change
                   → paste AI response back → preview → commit & push

PROBLEM?        →  do not panic-edit. message Dom.
```

---

That is everything. Welcome to the project.
