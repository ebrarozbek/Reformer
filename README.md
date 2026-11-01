# Reformer Rotation Program: standalone app

This folder is the full app. It doesn't need Claude or any account to run.
Everything you add (your workouts, your own moves with photos and videos, favorites, checkmarks and history) is stored on the device you use it on.

## What's in the folder

| File or folder | What it is |
|---|---|
| `index.html` | The app |
| `sw.js` | Lets the app open without internet |
| `manifest.webmanifest` | Name and icon used when you install the app |
| `lib/` | The 3D animation library |
| `fonts/` | The app's fonts |
| `icons/` | App icons |

Upload all of them together and keep the folder structure as it is.

## Step 1: Bring over your data from the Claude version (do this first)

1. Open the Claude version of the app.
2. Tap **Export data** (next to Library, History and New workout).
3. Accept the download. You get a file named `reformer-backup-YYYY-MM-DD.json`.
4. Keep it somewhere you can reach from your phone, for example iCloud Drive, Google Drive or by emailing it to yourself.

The file contains your own moves with their photos and videos, your workouts, favorites, changes to the built-in workouts, checkmarks and history.

## Step 2: Put the app online once (free, with GitHub)

Your iPhone needs to load the app from a web address once. After that it works offline.

1. Go to [github.com](https://github.com) and create a free account. Use an email address that isn't tied to your Claude account.
2. Click **+** (top right), then **New repository**.
   - Repository name: `reformer`
   - Choose **Public** (GitHub Pages is free for public repositories; your personal data is never uploaded, it stays on your devices)
   - Click **Create repository**.
3. On the next page click **uploading an existing file**.
4. Open the `ReformerApp` folder on your computer, select **everything inside it** (`index.html`, `sw.js`, `manifest.webmanifest`, `README.md` and the `lib`, `fonts` and `icons` folders) and drag it all into the browser window.
5. Wait until every file is listed, then click **Commit changes**.
6. Go to **Settings**, then **Pages** (left menu).
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Set **Branch** to **main** and the folder to **/ (root)**, then click **Save**.
7. Wait one or two minutes and refresh the page. GitHub shows your app's address, for example:
   `https://YOUR-USERNAME.github.io/reformer/`

## Step 3: Install it on your iPhone

1. Open the address from Step 2 in **Safari** (not another browser).
2. Tap **Share** (the square with the arrow), then **Add to Home Screen**. If you see **Open as Web App**, leave it on. Tap **Add**.
3. Open the app from the home screen **once while you're online**. It then stores its files on the phone.
4. Tap **Backup**, then under **Restore from a backup** choose the file from Step 1 and tap **Restore this backup** twice.

From now on the app works without internet, even in flight mode. Only the "See photos" and "Watch video tutorials" links inside the app need internet.

## Step 4: Install it on your computer

- **Chrome or Edge:** open the same address, then click the **Install app** icon at the right of the address bar. The app gets its own window and a desktop or Start-menu shortcut.
- **Without internet or GitHub:** double-click `index.html` in the folder. It runs in your browser.

Each device and each browser keeps its own data. Use **Backup** to move data between them.

## Keep a backup

Because your data lives on the device, a lost or reset phone means lost data unless you have a backup.

- Tap **Backup**, then **Download backup** now and then, especially after adding your own moves or workouts.
- On iPhone the backup opens the share sheet: choose **Save to Files** and pick iCloud Drive.
- **Restore** replaces everything on that device with the backup.

## Updating the app later

If you get a new version of `index.html`:

1. Upload the new file to the same GitHub repository (**Add file**, then **Upload files**) and commit.
2. Open `sw.js` and change `reformer-v1` to `reformer-v2` (then v3, and so on), so phones fetch the new version.
3. On the phone, open the app twice while online.

Your data is not affected by updates.
