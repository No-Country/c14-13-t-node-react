# c14-13-t-node-react
SISTEMA DE GESTIÓN MANEJO DE TALLER

Nuestro software de gestión integral para talleres mecánicos es una herramienta avanzada diseñada para optimizar la administración y control de todos los procesos relacionados con la reparación de vehículos y la gestión de repuestos. Este sistema ofrece una experiencia completa tanto para los usuarios que desean seguir el progreso de la reparación de sus vehículos como para los administradores que buscan llevar un control detallado y eficiente de su taller.

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


[garage_guest.webm](https://github.com/No-Country/c14-13-t-node-react/assets/85122601/733eaf88-e5be-436d-ad63-1d1562917a20)

