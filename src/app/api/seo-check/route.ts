import { NextResponse } from 'next/server';
import { analyzeSEO } from '@/lib/seo-analyzer';
import { performEnterpriseAudit } from '@/lib/enterprise-auditor';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '/';
  
  const host = request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'http';
  const baseUrl = host ? `${proto}://${host}` : (process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com');
  const targetUrl = `${baseUrl}${path}`;

  try {
    const response = await fetch(targetUrl, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'SEO-Audit-Crawler/1.0',
      }
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Could not fetch ${targetUrl}. Status: ${response.status}` }, { status: 500 });
    }

    const html = await response.text();
    const keyword = searchParams.get('keyword') || '';
    
    // Perform standard SEO analysis
    const analysis = analyzeSEO(html, keyword);
    
    // Perform Enterprise Diagnostic
    const enterprise = await performEnterpriseAudit(html, path, keyword);

    return NextResponse.json({
      path,
      url: targetUrl,
      analysis: {
        ...analysis,
        enterprise // Nest the new enterprise metrics
      },
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('Audit Error:', error);
    return NextResponse.json({ error: 'Failed to perform deep scan. Ensure dev server is running.' }, { status: 500 });
  }
}
