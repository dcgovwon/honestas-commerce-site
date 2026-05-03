# VS Code + Gemini AI Setup on Windows

Step-by-step setup for editing the Honestas website with VS Code and
Google's Gemini AI on a Windows computer.

Total time: about 15–20 minutes, one time.

After this is done, the daily workflow is: open VS Code → edit (with
AI help) → click two buttons → site updates live in ~60 seconds.

---

## Before You Start

You will need:

- A Windows computer (Windows 10 or 11)
- A working internet connection
- The GitHub username you created earlier (you'll use it in Phase 3)
- A Google account (any personal Gmail works — you'll use it in Phase 4)

Read the headings below in order. Don't skip phases.

---

## PHASE 1 — Install Git for Windows (5 minutes)

Git is the underlying tool that pushes changes to GitHub. VS Code
depends on it, so we install it first.

### 1A. Download the installer

1. Open any web browser (Chrome, Edge, Firefox)
2. Go to: **https://git-scm.com/download/win**
3. The download starts automatically. A file called something like
   `Git-2.xx.x-64-bit.exe` lands in your Downloads folder
4. Click on it once it finishes downloading

### 1B. Run the installer

A blue window opens titled **Git Setup**. Click **Next** through
every screen accepting all defaults. You will see screens about:

- License → Next
- Destination location → Next
- Components to install → Next
- Start menu folder → Next
- Default editor → Next (it will choose VS Code automatically once
  you install VS Code in Phase 2)
- Initial branch name → **Override the default branch name for new
  repositories** is selected → leave the box as `main` → Next
- Path environment → Next
- HTTPS transport → Next
- Line ending conversions → Next
- Terminal emulator → Next
- Git Pull behavior → Next
- Credential helper → Next (must say "Git Credential Manager")
- Extra options → Next
- Experimental options → Next
- Click **Install**

Wait about 60 seconds. When done, click **Finish**.

### 1C. Verify it installed

Press the **Windows key** on your keyboard, type `cmd`, press Enter.
A black command window opens.

Type this and press Enter:
```
git --version
```

You should see something like `git version 2.43.0.windows.1`.

If you see that, Git is installed. Close the black window.

If you see "git is not recognized..." then the install didn't add Git
to your system path. Restart the computer and try the verify step again.

---

## PHASE 2 — Install VS Code (3 minutes)

VS Code is the editor your colleague will work in.

### 2A. Download the installer

1. In your browser, go to: **https://code.visualstudio.com/Download**
2. Click the **big blue Windows button** (says "Windows" with a
   download icon)
3. A file called `VSCodeUserSetup-x64-1.xx.x.exe` lands in Downloads
4. Click on it

### 2B. Run the installer

A window titled **Setup - Microsoft Visual Studio Code** opens.

- License agreement → choose **I accept** → Next
- Destination location → Next
- Start menu folder → Next
- Additional tasks → **CHECK ALL FOUR BOXES**:
  - ☑ Create a desktop icon
  - ☑ Add "Open with Code" action to Windows Explorer file context menu
  - ☑ Add "Open with Code" action to Windows Explorer directory context menu
  - ☑ Register Code as an editor for supported file types
  - ☑ Add to PATH
  - Click Next
- Ready to install → click **Install**

Wait about 30 seconds. Check the box **Launch Visual Studio Code** →
click **Finish**.

VS Code opens. You'll see a dark grey window with a "Welcome" tab.
**Leave it open and continue to Phase 3.**

---

## PHASE 3 — Sign in to GitHub from VS Code (2 minutes)

This connects VS Code to your GitHub account so it can push changes
to the repository.

### 3A. Find the Accounts icon

Look at the **far-left sidebar of VS Code**. There's a vertical
column of icons. The bottom two icons are:

- A small **person silhouette** icon (this is "Accounts")
- A **gear** icon below it (this is "Settings")

Click the **person silhouette icon** (Accounts).

### 3B. Sign in to GitHub

A small menu pops up. Click **Sign in with GitHub to use GitHub Pull
Requests and Issues**.

(If you see "Backup and Sync Settings" instead, that's something
different — look for another option that mentions GitHub specifically.)

Your default browser opens automatically. You'll see a GitHub page
asking permission to authorize Visual Studio Code.

1. If you're not already logged into GitHub, log in now using the
   account credentials your colleague created
2. Click the green **Authorize Visual Studio Code** button
3. The browser shows a "Success!" message and tries to redirect back
   to VS Code
4. If a popup asks "Visual Studio Code wants to open this link", click
   **Open Visual Studio Code**

Back in VS Code, the person silhouette icon now shows a small green
dot. If you click it, you'll see your GitHub username at the top.

**Phase 3 is complete.**

---

## PHASE 4 — Install Gemini Code Assist (3 minutes)

This is the AI helper that lives inside VS Code. Free for personal use.

### 4A. Open the Extensions panel

In the left sidebar of VS Code, find the **Extensions icon** — it
looks like **four small squares with one square detached** (the
fourth icon down by default).

Click it. A panel opens showing a search box at the top.

### 4B. Search for Gemini

In the search box, type: **`Gemini Code Assist`**

A list of extensions appears. Find the one that:
- Is named **Gemini Code Assist**
- Is published by **Google**
- Has a blue/colorful G logo

Click on it. A details page opens in the middle.

### 4C. Install it

Click the blue **Install** button at the top of the details page.

Installation takes about 15 seconds. When done, the button changes to
**Disable / Uninstall**.

### 4D. Sign in to Google

A new tab/welcome page opens called **Gemini Code Assist**. Click the
button **Sign in with Google**.

Your browser opens. Sign in with any Google account (a personal Gmail
is fine — it doesn't need to be related to Honestas). Click **Allow**
on the permissions page.

Back in VS Code, you'll see a confirmation that Gemini is ready.

A small **Gemini icon (sparkles)** now appears in the left sidebar.
You can click it any time to chat with Gemini.

**Phase 4 is complete.**

---

## PHASE 5 — Clone the Honestas Website Repository (2 minutes)

"Cloning" means downloading a copy of the website code from GitHub
onto this computer.

### 5A. Open the command palette

Press the keys: **`Ctrl + Shift + P`** all at once.

A box drops down from the top of VS Code with a text field. This is
the "command palette" — your shortcut to everything VS Code can do.

### 5B. Run the Git Clone command

In the box, type: **`Git: Clone`**

As you type, suggestions appear. Click **Git: Clone** when it shows up.

### 5C. Paste the repository URL

Another box appears asking for the repository URL. Paste this exact
URL:

```
https://github.com/dcgovwon/honestas-commerce-site.git
```

Press Enter.

### 5D. Choose where to save it on the computer

A Windows folder picker opens. **Navigate to a place that's easy to
find later** — recommended:

- Click **Documents** in the left sidebar
- Click **Select as Repository Destination** (or just click "Select
  Folder" depending on Windows version)

VS Code creates a new folder called `honestas-commerce-site` inside
Documents and downloads everything into it.

You'll see a notification at the bottom-right: "Cloning git repository..."

When done, another notification: **Would you like to open the cloned
repository?** → click **Open**.

VS Code reloads with the website files visible in the left sidebar:
`index.html`, `assets/`, `EDITING.md`, etc.

**Phase 5 is complete. The website is now editable on this computer.**

---

## PHASE 6 — Practice Edit (3 minutes)

Let's make one tiny visible edit so you can see the full loop work
end-to-end.

### 6A. Open the home page

In the left sidebar (Explorer panel), click **`index.html`**.

The file opens in the middle of the screen. It's a long file with
HTML code.

### 6B. Make a tiny test change

Press **`Ctrl + F`** to open the find box at the top.

Type: **`© 2025`**

The editor jumps to a line in the footer that says
`© 2025 Honestas Commercial Services. All rights reserved.`

Click into the file directly on the `2025`. Use backspace to delete it
and type `2026`. (We're just changing one digit as a test.)

VS Code auto-saves the change to the local file as you type. Look at
the file tab at the top — it briefly shows a small dot, then the dot
disappears once saved.

### 6C. Commit the change

Look at the **left sidebar**. The third icon down is **Source Control**
— it looks like a Y-shape with three dots, and now has a small
**blue badge with a "1"** on it (because 1 file changed).

Click it.

A panel opens. You'll see:
- A text box at the top with placeholder text "Message (Ctrl+Enter
  to commit on 'main')"
- Below that, under "Changes", a row showing **`index.html`** with
  a yellow **`M`** next to it (M = Modified)

In the message box, type: **`Test edit — change footer year`**

Click the blue **Commit** button just below the message box.

### 6D. Push the change to GitHub

After clicking Commit, the panel changes. The blue button now says
**Sync Changes**.

Click **Sync Changes**.

A small popup may appear asking "This action will pull and push from
'origin/main'. Would you like to proceed?" → click **OK** (and check
"Don't show again" if you want).

The notification at the bottom right shows progress, then disappears
when done.

### 6E. See it live

Wait 60 seconds.

Open a new browser tab → go to **https://honestas-commerce.com** →
scroll to the bottom of the page.

The footer now says **`© 2026 Honestas Commercial Services...`**

**You just published a change to the live website.** That's the entire
workflow.

---

## PHASE 7 — Using Gemini AI in VS Code

Now the fun part. Gemini lives inside VS Code and can help with edits.

### Two main ways to use it

**A) Inline edit (best for small changes)**

1. Open any file
2. Select some text by clicking and dragging with your mouse
3. Press **`Ctrl + I`** — a small AI prompt box appears right above
   your selection
4. Type what you want, e.g., `Make this paragraph sound warmer`
5. Press Enter → Gemini suggests a new version → click **Accept** if
   you like it, or **Discard** if not

**B) Chat panel (best for bigger questions or when you don't know the
exact code)**

1. Click the **Gemini icon (sparkles)** in the left sidebar
2. A chat panel opens
3. Type any question, e.g.:
   - `How do I change the main green color across the whole site?`
   - `Add a new card to the services section called "Logistics"`
   - `Make the home page hero text bigger on mobile`
4. Gemini responds in the chat, often with code blocks
5. Each code block has a small **Apply** or **Insert** button — click
   it to put the code into the right file

### Important tips for using Gemini well

- **Always be specific.** "Make the page nicer" → bad. "Make the home
  page hero text 20% larger and change the button color from olive to
  bright yellow-green" → good.

- **Reference files by name.** "In `index.html`, find the About Us
  section and rewrite it to sound more personal."

- **Ask Gemini to explain before changing big things.** "Explain how
  the navigation menu is built before I change it."

- **Always preview before committing.** After Gemini makes changes,
  go to Source Control panel, click on the changed file, and look at
  the side-by-side diff. Make sure Gemini didn't break anything you
  didn't want changed.

---

## DAILY WORKFLOW (after setup is done)

Every time your colleague wants to edit the website:

1. **Open VS Code** (icon on desktop or Start menu)

2. **Pull latest changes first** — click Source Control panel
   → click the **`...` menu** at the top → click **Pull**
   (This grabs any changes Dom or others made elsewhere. Skip the
   first time since you just cloned.)

3. **Edit files** in the editor, using Gemini for help when needed

4. **When done**: Source Control panel → type a short message →
   click **Commit** → click **Sync Changes**

5. **Wait ~60 seconds** → refresh https://honestas-commerce.com →
   confirm the change is live

That's it. The whole loop takes seconds once you're used to it.

---

## TROUBLESHOOTING

### "I don't see my changes on the live site after committing"

- Make sure you also clicked **Sync Changes** (Commit alone only saves
  to local Git history, not to GitHub)
- Wait the full 60 seconds and hard-refresh the browser:
  `Ctrl + Shift + R`
- Check https://github.com/dcgovwon/honestas-commerce-site/commits/main
  — your commit should appear at the top. If it does, GitHub has it
  and Pages just needs another minute.

### "Sync Changes button is greyed out"

- You haven't committed anything yet — Commit first, then Sync.

### "I get an error 'Push failed' or 'rejected'"

- Someone else pushed changes since you last pulled. Click **Pull**
  first (Source Control → `...` menu → Pull), then try Sync Changes
  again.
- If that creates a merge conflict you don't understand, message Dom
  before continuing. Don't randomly click "Resolve" or "Accept" buttons.

### "Gemini stopped working / says I'm out of quota"

- Free tier is generous (~60 chats/day) but not unlimited. Wait until
  tomorrow or upgrade if needed.
- Or use ChatGPT/Claude in a browser instead (paste code in, paste
  response back into VS Code).

### "VS Code asks me to log into GitHub again"

- This happens occasionally for security. Just click "Sign in" and
  authorize again — same flow as Phase 3.

### Anything else broken or confusing

- **Don't experiment to fix it** if you're not sure what you're doing.
  Message Dom first. Most things are reversible if caught quickly,
  but only if you stop touching things.

---

## QUICK REFERENCE CARD

```
OPEN VS CODE          desktop icon

OPEN A FILE           click the file name in the left sidebar

EDIT TEXT             click in the file, type your change

USE GEMINI INLINE     select text → Ctrl + I → describe change → Enter

USE GEMINI CHAT       click sparkles icon (left sidebar) → ask a question

SAVE LOCALLY          automatic (no action needed)

PUBLISH TO WEBSITE    Source Control icon → type message → Commit → Sync Changes

VIEW LIVE SITE        honestas-commerce.com  (refresh after ~1 minute)

PULL UPDATES          Source Control → ... menu → Pull   (do this when starting a session)

PROBLEM?              don't experiment. Message Dom.
```

---

That's everything. The first setup is the longest part — actual daily
editing is fast.
