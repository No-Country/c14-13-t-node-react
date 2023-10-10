This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Para el manejo del Dark / Light theme, se utiliza Next Theme,
Mas información:
https://github.com/pacocoursey/next-themes

Para el manejo de formularios se utiliza React Hook Form, junto a Zod para la
validación de los campos:
https://react-hook-form.com/
https://zod.dev/

Como referencia del funcionamiento, se puede tomar el componente SignUpForm ubicado en:
client/src/components/Auth/signUpForm/SignUpForm.tsx
