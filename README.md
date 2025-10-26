# 🎮 Itch.io Genre Filter

After **years**, Itch.io *still* doesn't let you exclude genres when browsing.  
**IT'S A DAMN BASIC FEATURE THAT TAKES 5 DAMN MINUTE TO DO!!!**

This little extension lets you **hide games by genre** right on the explore page.  
No more endless walls of Visual Novels when you just wanted to see horror platformers.

(No hate against Visual Novels, I just don't need 200 of them in a row.)

---

## ✨ Features
- Instantly hides games by genre (e.g., `Visual Novel`, `Horror`, etc.)
- Keeps filtering even as new games load
- Shows how many games were hidden
- 100% client-side : no tracking, no data collection
> Seriously, just look at the code 

---

## 🧩 Installation

### 🦊 Firefox (temporary, easiest)
1. Visit `about:debugging#/runtime/this-firefox`
2. Click **"Load Temporary Add-on..."**
3. Select `manifest.json` from this folder
4. Open [itch.io](https://itch.io/) and click the extension icon to show the filter UI  

> ⚠️ This only lasts until you close Firefox : thanks, Mozilla.

---

### 🦊 Firefox (permanent, advanced users)
> Since newer Firefox versions, you unfortunately need **`Firefox Developer Edition`** to install unsigned extensions.
You'll need to disable Mozilla's signature requirement for add-ons.

1. Go to `about:config`
2. Search for `xpinstall.signatures.required`
3. Set it to **false**
4. Restart Firefox
5. Download the latest `.xpi` file from the [Releases](../../releases) section of this repo  
6. Drag the file into Firefox and click **Add**

⚠️ **Important:**  
Turning off signature verification lets Firefox install *any* unsigned extension :including potentially malicious ones.  
Only do this if you understand the risk and trust the source of what you're installing.  
If that sounds sketchy, use the **temporary load method** instead :it's safer.


💡 **Note:**  
An `.xpi` file is literally just a `.zip` archive.  
You can rename it to `.zip` and open it to inspect the code yourself.  
Everything's local and open :no hidden code, no network calls.

---

### Chrome / Edge
1. Go to `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select this folder

---

## ❓ Why You Have to Go Through All This Nonsense

Because Firefox doesn't allow you to just install your own `.xpi` anymore unless it's **signed by Mozilla**.  
To get it signed, you have to:
- Create a developer account
- Enable two-factor authentication
- Upload your extension to their portal  
...just to get back the same file, now with a signature on it.

And honestly?  
I didn't feel like doing any of that.  
I'm lazy.

---

## ⚖️ Disclaimer

This project is **not affiliated with Itch.io**.  
It's a small, frustration-driven workaround for a missing **BASIC** feature.

Use at your own risk : **no warranty, no guarantees.**  
Everything runs locally, and you can inspect the code yourself.  

If Itch.io ever changes their source code and this breaks, feel free to fix it or fork it.  

---

## 🧠 Why This Exists

After a **YEARS**, we still can't **exclude genres** (in a clean way).  
So this tool does it for you.

---

## 🪶 License
MIT : do whatever you want, just don't sue me if your computer catches fire.

---

Made by someone who just wanted fewer slop in their feed.
