---
name: Setup DecapBridge
description: DecapBridge branché sur /admin en PKCE — site ID et config actifs en prod
type: project
originSessionId: c232252e-efdc-40d1-9961-5862be81863d
---
**État au 2026-04-17** : `/admin` branché sur DecapBridge en PKCE. Déployé sur `https://sourcier.thierrypoitras.com/admin`.

**Site ID DecapBridge** : `01dd29e0-54df-440b-9965-b746c1b4e770` (compte Thomas `sourcierquebec@gmail.com`, créé 2026-04-17). Ancien site ID `08a80d07-a504-49a5-a821-d83677760f8c` (compte Thierry) à supprimer une fois le nouveau validé.
**Repo GitHub** : `sourcierquebec/sourcier-quebec` (branch `main`) — transféré depuis `tradieux` le 2026-04-17.
**Auth type** : Classic (email/password) côté DecapBridge. Compte DecapBridge sous `sourcierquebec@gmail.com`.
**Decap CMS** : `^3.8.3` (requis par DecapBridge).

**Config clé** dans `public/admin/config.yml` :
- `backend.name: git-gateway` + `auth_type: pkce` + endpoints `auth.decapbridge.com/sites/<SITE_ID>/…`
- `gateway_url: https://gateway.decapbridge.com`
- claims `email / first_name / last_name / avatar_url`

**À faire au transfert vers Thomas** :
- Recréer le site dans le compte DecapBridge de Thomas (sourcierquebec@gmail.com) → nouveau site ID
- Remplacer l'UUID dans `config.yml` (2 endroits : auth_endpoint + auth_token_endpoint)
- Régénérer le GitHub fine-grained token sous le nouveau compte GitHub `sourcierquebec`
- Rebuild Docker / redéployer

**How to apply:** Le panneau est prêt. Si le client signale un souci de login ou d'édition, vérifier d'abord (a) le token GitHub n'est pas expiré, (b) le repo pointe bien sur `tradieux/sourcier-quebec`.
