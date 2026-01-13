# API REST con Node.js, Express y TypeScript

Este proyecto es una API REST construida con Node.js, Express y TypeScript. Incluye funcionalidades de autenticación utilizando JSON Web Tokens (JWT) y manejo de contraseñas con bcryptjs.

### Instalacion de dependencias
```bash
npm init -y
npm install express jsonwebtoken bcryptjs uuid
npm install -D typescript ts-node-dev @types/express @types/jsonwebtoken @types/bcryptjs @types/uuid
npx tsc --init
```

### Configuracion de .gitignore
```groovy
# Ignore node_modules
node_modules/

# Ignore TypeScript build output
git rm -r --cached node_modules
git commit -m "Remove node_modules from repo"
```

### Author: Raul Robinson Bolivar Navas
### License: MIT