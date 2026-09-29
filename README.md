# Vinci

Projeto Vue 3 + Vite, publicado no GitHub Pages.

## Rodar local
```
npm install
npm run dev
```

## Publicar
Cada push na branch `main` dispara o workflow `.github/workflows/deploy.yml`,
que compila o projeto e publica no GitHub Pages.
O caminho base (`/nome-do-repositorio/`) é definido automaticamente a partir do nome do repositório.
