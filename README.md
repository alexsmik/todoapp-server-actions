# This is a ToDo App Next.js project.

## Explore Server Actions in a React Server Component.

- Setup Next.js framework
- Setup Prisma ORM
- Define the Zod Schema Validations src/lib/schema.ts
- Functions to Query and Mutate the Database src/lib/todos_db.ts
- Define the Server Actions src/app/action.ts

## Setting up project:

```bash
npm create-next-app@latest
npm i -D prisma
npm i @prisma/client
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name 'initial migration'
npm i zod react-hook-form @hookform/resolvers
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
