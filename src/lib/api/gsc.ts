import { google } from 'googleapis'
import path from 'path'
import fs from 'fs'

const KEY_FILE = path.join(process.cwd(), 'gsc-key.json')

export async function getGSCData(siteUrl: string, days: number = 30) {
  try {
    if (!fs.existsSync(KEY_FILE)) {
      return { error: 'Thiếu file gsc-key.json. Vui lòng làm theo hướng dẫn để thiết lập.' }
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    })

    const searchconsole = google.searchconsole({ version: 'v1', auth })

    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    // 1. Fetch search analytics (Keywords, Clicks, Impressions, CTR, Position)
    const response = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 100,
      },
    })

    return {
      rows: response.data.rows || [],
      startDate,
      endDate
    }
  } catch (err: any) {
    console.error('GSC API Error:', err)
    return { error: 'Lỗi kết nối API Google: ' + err.message }
  }
}

/**
 * Get Sitemaps status
 */
export async function getSitemaps(siteUrl: string) {
  try {
    if (!fs.existsSync(KEY_FILE)) return null
    
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    })
    const searchconsole = google.searchconsole({ version: 'v1', auth })
    
    const res = await searchconsole.sitemaps.list({ siteUrl })
    return res.data.sitemap || []
  } catch (err) {
    return null
  }
}
