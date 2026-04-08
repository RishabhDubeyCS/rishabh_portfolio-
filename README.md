# 🚀 Rishabh Portfolio (Next.js + ShadCN + Three.js)

A modern developer portfolio built using **Next.js, Tailwind CSS, ShadCN UI, Framer Motion, and Three.js**.

---

## 📦 Tech Stack

* ⚡ Next.js (App Router)
* 🎨 Tailwind CSS
* 🧩 ShadCN UI
* 🎞️ Framer Motion
* 🌌 Three.js (3D Experience)
* 📧 EmailJS (Contact Form)
* 🎯 Lucide Icons

---

## 🛠️ Installation & Setup

### 1️⃣ Create Next.js App

```bash
npx create-next-app@latest rishabh-portfolio
cd rishabh-portfolio
```

---

### 2️⃣ Install Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge @emailjs/browser
```

---

### 3️⃣ Install 3D Libraries

```bash
npm install three @react-three/fiber @react-three/drei
```

---

### 4️⃣ Setup ShadCN UI

```bash
npx shadcn@latest init
```

Add components:

```bash
npx shadcn@latest add button card input dialog
```

---

### 5️⃣ Setup Utility Function (IMPORTANT)

Create file:

```bash
touch src/lib/utils.ts
```

Add this code:

```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
```

---

## ▶️ Run the Project

```bash
npm run dev
```

OR

```bash
yarn dev
```

OR

```bash
pnpm dev
```

OR

```bash
bun dev
```

---

## 🌍 Learn More

* Next.js Documentation
* Learn Next.js (Interactive Tutorial)
* Next.js GitHub Repository

---

## 🚀 Deployment

The easiest way to deploy your app is using **Vercel**.

👉 Deploy here: https://vercel.com

---

## 👨‍💻 Author

**Rishabh Dubey**

* 📍 Bhopal, India
* 💼 Full Stack Developer (MERN + Next.js)

---

##  Support

If you like this project, give it a ⭐ on GitHub!
