## Para iniciar el proyecto en local:

Una vez clonado el proyecto se debe ejecutar:
```bash
cd c14-13-t-node-react/
cd client/
npm install
npm run prisma:generate
npm run dev
```
Adicionalmente se deben añadir las siguientes variables de ambiente en un archivo .env.local:

```bash
//.env.local
DATABASE_URL
NEXTAUTH_SECRET
DISCORD_CLIENT_ID
DISCORD_CLIENT_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
```


Abrir [http://localhost:3000](http://localhost:3000) con su navegador.




Para el manejo del Dark / Light theme, se utiliza Next Theme,
Mas información:

https://github.com/pacocoursey/next-themes

Para el manejo de formularios se utiliza React Hook Form, junto a Zod para la
validación de los campos:

https://react-hook-form.com/

https://zod.dev/

Como referencia del funcionamiento, se puede tomar el componente SignUpForm ubicado en:
client/src/components/Auth/signUpForm/SignUpForm.tsx
