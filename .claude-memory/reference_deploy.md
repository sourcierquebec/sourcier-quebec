---
name: Déploiement Docker/Traefik
description: Comment déployer le site sourcier — docker compose sur le VPS, réseau n8n_default, pas de remote Git
type: reference
originSessionId: 8274757e-8f8c-48c2-8fb1-4052fe14414a
---
Déploiement du site : `docker compose up -d --build` depuis `/home/debian/thomas-le-sourcier` sur le VPS OVH.

- Dockerfile : build multi-stage Node 20 + nginx:alpine
- Réseau Traefik externe : `n8n_default`
- Domaine : `sourcier.thierrypoitras.com` (TLS via certresolver `mytlschallenge`)
- Conteneur : `sourcier-web`
- Pas de remote Git configuré — tout se fait en local sur le VPS
