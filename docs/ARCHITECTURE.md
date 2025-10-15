# Cine-Channel · Architettura Video (v1)

## Obiettivo
Pipeline scalabile per upload massivi, transcodifica asincrona e streaming via CDN.

## Flusso (alto livello)
1) Client → **/api/upload/sign** → URL firmato (S3-compatibile).
2) Client → **PUT diretto** su Object Storage (chunkable).
3) Storage event / Provider (Mux/CF Stream) → **Webhook** → aggiorna stato `processing/ready`.
4) Playback **HLS/DASH** via CDN, con poster/thumbnail.

## Componenti
- **Object Storage (R2/S3/B2)**: originali + (opz.) thumbnails.
- **Transcoder**: Mux / Cloudflare Stream / MediaConvert / Bunny.
- **Coda lavori**: (in seguito) SQS / Cloudflare Queues per burst.
- **DB metadati**: Postgres (tabelle `videos`, `assets`, `channels`).
- **CDN**: Cloudflare/Fastly/Akamai fronting HLS.

## Stati video
`draft` → `uploading` → `processing` → `ready` | `failed`

## Sicurezza
- Signed URL a breve scadenza.
- Limiti (size/durata/bitrate), rate limit per user/IP.
- Idempotency keys per webhook.
- Validazione MIME server-side.

## Monitoring
- Sentry (errori).
- Dashboard code/transcode/playback (Datadog/Grafana).
- Alert su tempi coda e error rate.

## Scalabilità
- Upload **diretti** (mai proxy tramite Next).
- Lavori **asincroni** (no transcode in request).
- Paginazione **cursor-based** per liste video.

