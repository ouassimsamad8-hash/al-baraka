# 🚀 Guide de Déploiement Vercel - Al Baraka Butcher

## Méthode 1: Déploiement via GitHub (Recommandé)

### Étape 1: Créer un dépôt GitHub

1. Allez sur https://github.com/new
2. Nom du repo: `al-baraka-butcher`
3. **Important**: Laissez le repo vide (pas de README, .gitignore, etc.)
4. Cliquez sur "Create repository"

### Étape 2: Lier votre projet local à GitHub

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/al-baraka-butcher.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Étape 3: Déployer sur Vercel

1. Allez sur https://vercel.com
2. Cliquez sur "Add New" → "Project"
3. Importez votre repo GitHub `al-baraka-butcher`
4. Configuration:
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
5. Cliquez sur "Deploy"

### Étape 4: Configuration Post-Déploiement

Une fois déployé:
1. Copiez l'URL de production (ex: `https://al-baraka-butcher.vercel.app`)
2. Mettez à jour les URLs dans le code:

```typescript
// Dans app/layout.tsx
metadataBase: new URL('https://VOTRE-URL.vercel.app')

// Dans tous les jsonLd
'@id': 'https://VOTRE-URL.vercel.app'
url: 'https://VOTRE-URL.vercel.app'
```

3. Commit et push les changements:
```bash
git add .
git commit -m "Update production URLs"
git push
```

---

## Méthode 2: Déploiement Direct via Vercel CLI

### Installation

```bash
npm i -g vercel
```

### Login

```bash
vercel login
```

### Déploiement

```bash
# Depuis le dossier du projet
cd "/Users/asf/Desktop/el baraka"

# Premier déploiement (test)
vercel

# Déploiement en production
vercel --prod
```

### Questions lors du déploiement:
- **Set up and deploy?** → Yes
- **Which scope?** → Votre compte
- **Link to existing project?** → No
- **What's your project's name?** → al-baraka-butcher
- **In which directory is your code located?** → ./
- **Want to override the settings?** → No

---

## Méthode 3: Import Direct depuis le Dossier Local

Si vous ne voulez pas utiliser Git:

1. Compressez votre dossier `el baraka` en ZIP
2. Allez sur https://vercel.com/new
3. Cliquez sur "Browse" et uploadez le ZIP
4. Suivez les mêmes étapes de configuration

⚠️ **Attention**: Cette méthode ne permet pas les mises à jour automatiques.

---

## Variables d'Environnement (Optionnel)

Si vous utilisez des API keys:

1. Dans Vercel Dashboard → Settings → Environment Variables
2. Ajoutez:
   ```
   NEXT_PUBLIC_GA4_ID=G-VOTRE-ID
   NEXT_PUBLIC_SITE_URL=https://votre-url.vercel.app
   ```

---

## Domaine Personnalisé (Optionnel)

### Ajouter votre propre domaine:

1. Vercel Dashboard → Settings → Domains
2. Ajoutez votre domaine: `albarakabutcher.com`
3. Suivez les instructions DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. Une fois configuré, mettez à jour toutes les URLs dans le code

---

## Après le Déploiement ✅

### 1. Vérifier le Build

- Le build doit être ✅ réussi
- Pas d'erreurs TypeScript
- Toutes les pages générées

### 2. Tester le Site

- [ ] Page d'accueil charge correctement
- [ ] Images s'affichent
- [ ] Changement de langue fonctionne
- [ ] Boutons WhatsApp fonctionnent
- [ ] Carte Google Maps s'affiche
- [ ] Mobile responsive

### 3. Vérifier le SEO

- [ ] Sitemap: `https://votre-url.vercel.app/sitemap.xml`
- [ ] Robots: `https://votre-url.vercel.app/robots.txt`
- [ ] Manifest: `https://votre-url.vercel.app/manifest.webmanifest`

### 4. Tester les Performances

```bash
# PageSpeed Insights
https://pagespeed.web.dev/analysis?url=https://votre-url.vercel.app

# Rich Results Test
https://search.google.com/test/rich-results?url=https://votre-url.vercel.app
```

### 5. Configurer Google Analytics

1. Créez un compte GA4: https://analytics.google.com
2. Obtenez votre ID (G-XXXXXXXXXX)
3. Remplacez dans `app/layout.tsx` ligne 186 et 192
4. Commitez et redéployez

### 6. Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre propriété
3. Vérification via DNS ou fichier HTML
4. Soumettez le sitemap: `https://votre-url.vercel.app/sitemap.xml`

---

## Mises à Jour Futures

### Via Git (Recommandé):
```bash
# Faire vos modifications
git add .
git commit -m "Description des changements"
git push

# Vercel redéploie automatiquement!
```

### Via Vercel CLI:
```bash
vercel --prod
```

---

## Dépannage 🔧

### Erreur: "Couldn't find app directory"
✅ **Solution**: Le dossier `app/` doit être commité dans Git
```bash
git add app/
git commit -m "Add app directory"
git push
```

### Build Failed: TypeScript errors
✅ **Solution**: 
```bash
npm run build
# Corriger les erreurs affichées
```

### Images ne chargent pas
✅ **Solution**: Vérifier `next.config.js` - `remotePatterns` doit inclure `images.unsplash.com`

### Analytics ne fonctionne pas
✅ **Solution**: 
1. Remplacer `G-XXXXXXXXXX` par votre vrai ID
2. Attendre 24-48h pour voir les données

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Problème de build**: Vérifiez les logs dans Vercel Dashboard

---

## 🎉 Checklist Finale

- [ ] Git repository initialisé et commité
- [ ] Code pushé sur GitHub (ou déployé via CLI)
- [ ] Build réussi sur Vercel ✅
- [ ] Site accessible en production
- [ ] URLs mises à jour dans le code
- [ ] GA4 ID configuré
- [ ] Sitemap soumis à Google Search Console
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Tests de performance effectués

**Votre site est maintenant en ligne! 🚀**
