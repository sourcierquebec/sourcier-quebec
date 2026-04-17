---
name: Checklist transfert à Thomas
description: Étapes pour rendre Thomas 100% autonome — transfert de tous les comptes et services vers sourcierquebec@gmail.com
type: project
originSessionId: ca923888-562b-4509-af39-021b91ee9f59
---
Checklist de transfert pour que Thomas soit propriétaire de tout le stack, indépendant de Thierry.

**Why:** Thomas est néophyte mais doit posséder tous ses comptes/services. Thierry reste collaborateur/mainteneur, pas propriétaire.

**Comptes à transférer / créer sous sourcierquebec@gmail.com :**

1. **GitHub** — créer un compte `sourcierquebec` (sourcierquebec@gmail.com), transférer le repo `tradieux/sourcier-quebec` → `sourcierquebec/sourcier-quebec` (Settings → Transfer repository). Ajouter `tradieux` comme collaborateur.
2. **Cloudflare Pages** — créer le compte Cloudflare sous sourcierquebec@gmail.com, ou transférer le projet Pages vers son compte. Reconnecter au repo GitHub après transfert.
3. **DecapBridge** — créer le compte sous sourcierquebec@gmail.com. Ajouter Thierry comme collaborateur.
4. **Formspree** — le formulaire actuel (endpoint `xaqaebva`) est probablement sous le compte de Thierry. Créer un compte Formspree sous sourcierquebec@gmail.com, recréer le formulaire, mettre à jour l'endpoint dans `index.astro`.
5. **Nom de domaine** (si applicable) — quand Thomas achète son domaine définitif, configurer DNS vers Cloudflare Pages. Transférer la propriété du domaine à son nom.

**Stratégie arrêtée 2026-04-17** : Thierry crée lui-même tous les comptes sous `sourcierquebec@gmail.com` (accès à la boîte OK), configure tout, puis remet les identifiants à Thomas. Évite à Thomas la friction d'inscription. Pour GitHub 2FA : TOTP dans gestionnaire de mots de passe (transmissible) + codes de récupération sauvegardés.

**État au 2026-04-17 (après-midi)** : Exécution en cours.
- ✅ GitHub : compte `sourcierquebec` créé via SSO Google (2FA = Google, pas de TOTP GitHub séparé). Repo transféré → `sourcierquebec/sourcier-quebec`. `tradieux` reste collaborateur Admin (ajouté auto par GitHub lors du transfert).
- ✅ Remote local mis à jour vers `https://github.com/sourcierquebec/sourcier-quebec.git`.
- ⏭️ Prochaine étape : Cloudflare Pages (créer compte `sourcierquebec` + reconnecter repo).

**Domaine — décision 2026-04-17** : `sourcierquebec.ca` **déjà acheté chez GoDaddy, compte au nom de Thomas**. Aucun transfert de propriété nécessaire. Stratégie : garder GoDaddy comme registrar, **déléguer les nameservers à Cloudflare** pour DNS + Pages (Cloudflare DNS supporte `.ca` sans friction — seul leur Registrar a des limitations de TLD, pas pertinent ici). Long terme (3-4 mois) : envisager transfert GoDaddy → Cloudflare Registrar (~$8/an vs ~$20) ou Porkbun.

**How to apply:** Reprendre à l'étape 1 (GitHub). Enchaîner compte par compte, valider avant de passer au suivant. Ordre : GitHub → Cloudflare Pages → DecapBridge (recréer) → Formspree (recréer + swap endpoint) → **domaine (achat + rattachement Pages + update Login URL DecapBridge)**.
