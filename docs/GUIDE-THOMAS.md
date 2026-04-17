# Guide du propriétaire — Sourcier Québec

Ce guide est pour **Thomas**. Il explique comment ton site fonctionne, comment le modifier, et quoi faire si quelque chose ne va pas — **même si tu n'as plus de développeur sous la main**.

Garde ce document précieusement. Il est aussi versionné dans le code du site, tu peux toujours le retrouver en ligne sur GitHub.

---

## Table des matières

1. [Ce que tu possèdes](#1-ce-que-tu-possèdes)
2. [Comment modifier ton site](#2-comment-modifier-ton-site)
3. [Comment ça se met en ligne](#3-comment-ça-se-met-en-ligne)
4. [Consulter les demandes de soumission](#4-consulter-les-demandes-de-soumission)
5. [Les 5 comptes importants](#5-les-5-comptes-importants)
6. [Renouvellements à prévoir](#6-renouvellements-à-prévoir)
7. [Si quelque chose casse](#7-si-quelque-chose-casse)
8. [Trouver un nouveau développeur](#8-trouver-un-nouveau-développeur)
9. [Sauvegarde et indépendance](#9-sauvegarde-et-indépendance)

---

## 1. Ce que tu possèdes

Ton site est 100 % à toi. Personne d'autre ne peut te couper l'accès. Voici ce qui t'appartient :

- **Le nom de domaine** `sourcierquebec.ca` — acheté chez GoDaddy, à ton nom.
- **Le code source du site** — hébergé sur GitHub, dans ton compte personnel `sourcierquebec`.
- **L'hébergement** — Cloudflare Pages, dans ton compte personnel.
- **L'interface d'édition** — DecapBridge, qui te permet d'éditer le site via ton navigateur sans toucher au code.
- **Le formulaire de contact** — Formspree, qui envoie chaque demande de soumission directement dans ta boîte courriel.

Tous ces services sont **liés à ton compte Google `sourcierquebec@gmail.com`**. Tu te connectes partout avec **"Continue with Google"** (ou "Se connecter avec Google"). Aucun mot de passe séparé à retenir, sauf pour le CMS (voir section 5).

---

## 2. Comment modifier ton site

### Accès au panneau d'édition

1. Ouvre ton navigateur et va sur : **https://sourcierquebec.ca/admin**
2. Connecte-toi avec ton email et le mot de passe CMS (voir section 5 — **à conserver dans un gestionnaire de mots de passe**).
3. Tu vois la liste des sections du site à gauche.

### Les sections modifiables

| Section | À quoi ça sert |
|---|---|
| **Informations générales** | Nom du site, sous-titre, slogan du héros, Facebook, texte de confidentialité |
| **Les 3 piliers** | Les trois messages clés (Précision / Économie / Aide à la décision) |
| **À propos** | Ta présentation, ton parcours, ta méthode |
| **Forfaits & Tarifs** | Prix et inclusions des forfaits résidentiel, agricole, municipal |
| **Zone d'intervention** | Régions desservies, tarif kilométrique, rayon inclus |
| **Questions fréquentes** | FAQ — ajoute, modifie, supprime des questions |
| **Témoignages** | Avis clients |
| **Coordonnées** | Adresse, téléphone, courriel, horaires |

### Comment modifier

1. Clique sur la section que tu veux modifier (ex : "Forfaits & Tarifs").
2. Modifie les champs.
3. Clique **Publish** (en haut à droite) → **Publish now**.
4. C'est fait. Ta modification est en ligne dans **environ 2 minutes**.

### Ajouter une image

1. Dans l'éditeur Decap, utilise le bouton **Media** (icône image) en haut.
2. Upload ton image (formats JPG, PNG, WebP conseillés).
3. Sélectionne-la pour l'insérer.

**Conseil** : redimensionne tes images à max 1200 px de large avant de les uploader (sinon le site devient lent). Tu peux utiliser https://squoosh.app (gratuit, navigateur) pour compresser.

---

## 3. Comment ça se met en ligne

Chaque fois que tu cliques **Publish** dans le CMS :

1. DecapBridge enregistre ta modification dans ton dépôt GitHub (`sourcierquebec/sourcier-quebec`).
2. Cloudflare Pages détecte le changement et reconstruit le site automatiquement.
3. En ~2 minutes, la nouvelle version est en ligne sur `https://sourcierquebec.ca`.

Tu n'as **rien d'autre à faire**. Pas de commande, pas de terminal, pas de serveur à redémarrer.

### Comment vérifier que le build a bien passé

1. Va sur **https://dash.cloudflare.com**.
2. **Workers & Pages** → `sourcier-quebec`.
3. Tu vois la liste des derniers déploiements. Une coche verte = OK. Une croix rouge = échec.

Si tu vois une croix rouge, voir la [section 7 — Si quelque chose casse](#7-si-quelque-chose-casse).

---

## 4. Consulter les demandes de soumission

Quand un visiteur remplit le formulaire de contact du site, la demande part à **deux endroits** :

- **Ta boîte courriel** `sourcierquebec@gmail.com` → chaque demande arrive par email, avec toutes les infos du client.
- **Formspree** (archive en ligne) → tu peux retrouver l'historique complet sur https://formspree.io/login (login avec Google).

### Si tu ne reçois plus les emails

1. Vérifie le dossier **Spam** de Gmail.
2. Connecte-toi à Formspree → vérifie que le form `Sourcier Québec — Demande de soumission` est bien **Active**.
3. Vérifie que l'adresse de réception est toujours `sourcierquebec@gmail.com`.

---

## 5. Les 5 comptes importants

**Tous liés à `sourcierquebec@gmail.com` (SSO Google, sauf mention contraire).**

### GitHub — le code source
- **URL** : https://github.com/sourcierquebec/sourcier-quebec
- **Login** : "Sign in with Google" → compte `sourcierquebec@gmail.com`
- **À quoi ça sert** : stocke le code et l'historique de toutes tes modifications.

### Cloudflare — l'hébergement
- **URL** : https://dash.cloudflare.com
- **Login** : email `sourcierquebec@gmail.com` + mot de passe (dans ton gestionnaire) + code 2FA (TOTP, dans ton gestionnaire aussi).
- **À quoi ça sert** : héberge le site + gère le DNS du domaine `sourcierquebec.ca`.

### DecapBridge — l'éditeur web `/admin`
- **URL dashboard** : https://app.decapbridge.com
- **Login** : email `sourcierquebec@gmail.com` + mot de passe (dans ton gestionnaire).
- **À quoi ça sert** : fait le pont entre l'interface `/admin` et GitHub. C'est lui qui autorise ton login CMS.
- **Mot de passe CMS séparé** : celui que tu utilises sur `/admin` est **différent** du mot de passe du dashboard DecapBridge. Les deux sont dans ton gestionnaire.

### Formspree — le formulaire de contact
- **URL** : https://formspree.io/login
- **Login** : "Continue with Google" → compte `sourcierquebec@gmail.com`.
- **À quoi ça sert** : reçoit le formulaire du site et te l'envoie par courriel.

### GoDaddy — le nom de domaine
- **URL** : https://account.godaddy.com
- **Login** : email et mot de passe GoDaddy (dans ton gestionnaire).
- **À quoi ça sert** : détient `sourcierquebec.ca`. Le renouvellement se fait ici.

> ⚠️ **Important** : garde tous les mots de passe dans un **gestionnaire de mots de passe** (1Password, Bitwarden, Proton Pass, ou même Google Password Manager qui est déjà dans ton compte Google). Ne les note jamais sur papier ou dans un fichier texte non-chiffré.

---

## 6. Renouvellements à prévoir

### Nom de domaine `sourcierquebec.ca` (~20 $/an)
- **Où** : GoDaddy, à ton nom.
- **Fréquence** : annuel.
- **Conseil** : active le **renouvellement automatique** chez GoDaddy et vérifie que ta carte de crédit reste à jour. **Ne laisse jamais le domaine expirer** — il serait récupérable par quelqu'un d'autre.
- **Option** : tu peux transférer le domaine vers **Cloudflare Registrar** plus tard (~8 $/an, moins cher) ou **Porkbun**. Pas urgent.

### Les autres services sont tous gratuits
- GitHub (public repo) — gratuit illimité.
- Cloudflare Pages — gratuit, 500 builds/mois (largement assez).
- DecapBridge — gratuit jusqu'à 3 utilisateurs.
- Formspree — gratuit jusqu'à 50 soumissions/mois. Si tu dépasses, compte 12 $/mois.

---

## 7. Si quelque chose casse

### Le site ne s'affiche plus (erreur Cloudflare)

1. Va sur https://dash.cloudflare.com → **Workers & Pages** → `sourcier-quebec` → **Deployments**.
2. Si le dernier déploiement a une **croix rouge** : clique dessus → regarde les logs. Souvent c'est un problème dans le contenu (une image mal référencée, par exemple).
3. Solution rapide : clique sur un **déploiement antérieur qui a marché**, puis **Rollback to this deployment**. Le site revient à la version qui fonctionnait.
4. Prends le temps de trouver la cause après, ou appelle un développeur.

### Je ne peux plus me connecter à `/admin`

1. Vérifie que tu utilises le bon mot de passe (gestionnaire).
2. Connecte-toi à https://app.decapbridge.com avec ton compte DecapBridge.
3. Dans **Users**, réinitialise ton mot de passe CMS.
4. Si DecapBridge dit "site not found" : probablement un problème de token GitHub expiré. Va dans DecapBridge → **Settings** du site → régénère le GitHub token (l'interface te guide).

### Le formulaire de contact n'envoie plus rien

1. Vérifie ton spam Gmail.
2. Va sur Formspree → ton form → vérifie qu'il est **Active**.
3. Si le compteur de 50 soumissions/mois est atteint, upgrade ou attends le mois suivant.

### Le nom de domaine ne pointe plus sur le site
1. Dans GoDaddy : vérifie que les **Nameservers** sont toujours `art.ns.cloudflare.com` et `maeve.ns.cloudflare.com`.
2. Dans Cloudflare → **Websites** → `sourcierquebec.ca` : vérifie que le site est **Active**.
3. Si les deux sont OK, patience — ça peut prendre quelques minutes après un changement.

---

## 8. Trouver un nouveau développeur

Si **Thierry** (le développeur actuel) n'est plus disponible, voici comment en trouver un autre facilement.

### Ce qu'il doit savoir faire

Le site est construit avec des technologies **très standards et populaires**. N'importe quel développeur web junior ou intermédiaire peut reprendre le projet sans friction. Cherche quelqu'un qui connaît au moins **un de ces outils** :

- **Astro** (le framework du site) — très documenté, facile à apprendre.
- **Git / GitHub** — indispensable, universel.
- **Cloudflare Pages** — hébergement populaire, documentation claire.
- **Decap CMS** — open source, grosse communauté.

### Comment l'onboarder

Montre-lui ce guide + le **README** du projet sur https://github.com/sourcierquebec/sourcier-quebec. **Il aura tout ce qu'il faut en 30 minutes.**

### Comment le payer sans risque

- **Ne lui donne JAMAIS ton mot de passe.** Invite-le comme **collaborateur** sur chaque service :
  - GitHub → Settings → Collaborators → Add people
  - Cloudflare → Manage Account → Members → Invite
  - DecapBridge → dashboard du site → Collaborators
  - Formspree → Settings → Team
- **Tu peux retirer ses accès à tout moment** si la collaboration s'arrête.

### Combien ça coûte

Une petite modification (changer un prix, ajouter une FAQ) : tu peux le faire toi-même via `/admin`, gratuit.

Une modification de design ou une nouvelle fonctionnalité : compte entre **50 $ et 100 $/h** pour un développeur freelance au Québec. Le site est petit, la plupart des demandes se font en 1-2 heures.

### Où en trouver
- **Malt.fr** (freelances au Québec)
- **LinkedIn** (recherche "développeur Astro" ou "développeur web freelance Québec")
- **Recommandations** : demande autour de toi, en affaires les bons développeurs circulent par bouche-à-oreille.

---

## 9. Sauvegarde et indépendance

### Ce qui te garantit ton indépendance

- **Le code est sur GitHub, sous ton compte** → tu peux le télécharger, le déplacer, le confier à quelqu'un d'autre à tout moment.
- **Le contenu de ton site (textes) est dans le dépôt Git** — pas dans une base de données propriétaire. Donc même si Decap ou DecapBridge disparaît, tout ton contenu reste intact dans le code.
- **Le domaine est à ton nom** — tu peux le pointer ailleurs quand tu veux.
- **Les courriels de tes clients** arrivent dans ta boîte Gmail — tu les as toujours, même sans Formspree.

### Faire une sauvegarde du site

C'est rare que ce soit nécessaire (GitHub est très fiable), mais pour dormir tranquille :

1. Va sur https://github.com/sourcierquebec/sourcier-quebec
2. Bouton vert **Code** → **Download ZIP**
3. Garde ce fichier sur ton ordi ou dans Google Drive. Refais-le 1x par an.

### Si Cloudflare Pages disparaît un jour

Tous les hébergeurs modernes (Netlify, Vercel, GitHub Pages) savent héberger un site Astro. Il suffit à un développeur de reconnecter le dépôt GitHub à un nouvel hébergeur — **environ 15 minutes de travail**.

---

## Contact du développeur initial

- **Thierry Poitras** — a construit le site et fait le setup initial.
- Email : `thierry@lesradieux.com`

---

*Guide rédigé le 2026-04-17. Si des choses changent dans ton setup, mets ce fichier à jour (ou demande à ton développeur de le faire).*
