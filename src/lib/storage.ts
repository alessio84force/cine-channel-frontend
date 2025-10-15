import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const endpoint = process.env.STORAGE_ENDPOINT
const region = process.env.STORAGE_REGION || 'auto'
const bucket = process.env.STORAGE_BUCKET as string
const accessKeyId = process.env.STORAGE_ACCESS_KEY_ID as string
const secretAccessKey = process.env.STORAGE_SECRET_ACCESS_KEY as string
const ttl = Number(process.env.UPLOAD_URL_TTL_SECONDS || 900)
const maxBytes = Number(process.env.UPLOAD_MAX_BYTES || 1_500_000_000)

if (!bucket) throw new Error('Missing STORAGE_BUCKET env')

export const s3 = new S3Client({
  region,
  endpoint,
  forcePathStyle: true, // utile per R2/B2
  credentials: { accessKeyId, secretAccessKey },
})

export async function createSignedPutUrl(opts: {
  key: string
  contentType: string
  contentLength: number
}) {
  const { key, contentType, contentLength } = opts

  if (contentLength <= 0 || contentLength > maxBytes) {
    throw Object.assign(new Error('Invalid content length'), { status: 400 })
  }
  // whitelisting base dei MIME video comuni
  if (!/^video\//.test(contentType)) {
    throw Object.assign(new Error('Only video/* allowed'), { status: 415 })
  }

  const cmd = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: contentType,
    ContentLength: contentLength,
    // (opz) ServerSideEncryption: 'AES256',
    // (opz) ACL: 'private',
  })

  const url = await getSignedUrl(s3, cmd, { expiresIn: ttl })
  return { url, headers: { 'Content-Type': contentType } as Record<string,string> }
}
