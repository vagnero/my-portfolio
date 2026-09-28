# Portfólio de Vagner Matias

Aplicação React, TypeScript e Vite.

## Desenvolvimento

Use Node.js 22. Execute `npm ci` e `npm run dev`.
Validação: `npm run build` e `npm run lint`.

## Publicação automática

O workflow `.github/workflows/deploy.yml` compila e publica a cada push na
branch `main`. Também pode ser iniciado na aba Actions, com Run workflow.

Na primeira configuração, acesse **Settings → Pages → Build and deployment
→ Source** e selecione **GitHub Actions**.

```sh
git add .
git commit -m "Atualiza portfolio"
git push origin main
```

Um commit apenas local não inicia a publicação. Acompanhe o resultado na aba
Actions. O site será atualizado após a conclusão do deploy:
https://vagnero.github.io/my-portfolio/

O Vite usa `/my-portfolio/` e a navegação usa HashRouter para funcionar no
GitHub Pages. Não é necessário executar `npm run deploy` no fluxo automático.
