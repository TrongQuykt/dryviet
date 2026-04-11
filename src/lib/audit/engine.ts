import fs from 'fs'
import path from 'path'

export interface AuditResult {
  overallScore: number
  technicalScore: number
  performanceScore: number
  contentScore: number
  uxScore: number
  urlCount: number
  metadataCoverage: number
  modularityIndex: number
  totalFiles: number
  issues: any[]
}

/**
 * Enterprise Diagnostic Engine
 * Deep scan of source code and architecture
 */
export async function runLocalAudit(): Promise<AuditResult> {
  const srcPath = path.join(process.cwd(), 'src')
  const appDir = path.join(srcPath, 'app')
  const issues: any[] = []
  
  // 1. Scan for Pages (Routes)
  const pages = getAllPages(appDir)
  const urlCount = pages.length
  
  // 2. Technical Audit: Metadata Coverage & Architecture
  let totalFiles = 0
  let featureFiles = 0
  let componentFiles = 0
  let pagesWithMetadata = 0
  
  const walk = (dir: string) => {
    if (!fs.existsSync(dir)) return
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const res = path.resolve(dir, entry.name)
      if (entry.isDirectory()) {
        walk(res)
      } else if (['.ts', '.tsx'].includes(path.extname(entry.name))) {
        totalFiles++
        if (res.includes(`${path.sep}features${path.sep}`)) featureFiles++
        if (res.includes(`${path.sep}components${path.sep}`)) componentFiles++
        
        // Metadata Check in Pages
        if (res.includes(`${path.sep}app${path.sep}`) && entry.name === 'page.tsx') {
          const content = fs.readFileSync(res, 'utf-8')
          if (content.includes('export const metadata') || content.includes('generateMetadata')) {
            pagesWithMetadata++
          } else {
            issues.push({
              type: 'technical',
              severity: 'warning',
              message: `Missing Metadata: ${path.relative(process.cwd(), res)}`
            })
          }
        }
      }
    }
  }
  walk(srcPath)

  const metadataCoverage = urlCount > 0 ? Math.round((pagesWithMetadata / urlCount) * 100) : 0
  const modularityIndex = componentFiles > 0 ? parseFloat((featureFiles / componentFiles).toFixed(2)) : 0
  
  // 3. Performance Audit: Assets
  let performancePoints = 100
  const publicDir = path.join(process.cwd(), 'public')
  const images = getAllImages(publicDir)
  
  images.forEach(img => {
    const stats = fs.statSync(img)
    const sizeKB = stats.size / 1024
    if (sizeKB > 500) {
      performancePoints -= 3
      issues.push({ 
        type: 'performance', 
        severity: 'warning', 
        message: `Large Asset: ${path.relative(process.cwd(), img)} (${Math.round(sizeKB)}KB)` 
      })
    }
  })

  // Final Scoring Logic
  const technicalScore = metadataCoverage
  const performanceScore = Math.max(0, performancePoints)
  const contentScore = 92 // Mocked metric
  const uxScore = modularityIndex > 0.5 ? 95 : 80 // UX/DevExp based on architecture
  
  const overallScore = Math.round((technicalScore + performanceScore + contentScore + uxScore) / 4)

  return {
    overallScore,
    technicalScore,
    performanceScore,
    contentScore,
    uxScore,
    urlCount,
    metadataCoverage,
    modularityIndex,
    totalFiles,
    issues: issues.slice(0, 50)
  }
}

function getAllPages(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      getAllPages(filePath, fileList)
    } else if (file === 'page.tsx') {
      fileList.push(filePath)
    }
  })
  return fileList
}

function getAllImages(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      getAllImages(filePath, fileList)
    } else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file)) {
      fileList.push(filePath)
    }
  })
  return fileList
}
