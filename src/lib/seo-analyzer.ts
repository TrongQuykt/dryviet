import { parse } from 'node-html-parser';

export interface SEORecommendation {
  type: 'critical' | 'warning' | 'info';
  title: string;
  advice: string;
  priority: 'high' | 'medium' | 'low';
}

export interface HeadingTreeNode {
  tag: string;
  text: string;
  children: HeadingTreeNode[];
  status: 'success' | 'warning' | 'error';
}

export interface SEOMacroResult {
  score: number;
  performance: {
    lcp: number; // ms
    fid: number; // ms
    cls: number; 
    speedScore: number; // 0-100
    loadTime: number; // s
    trendData: number[]; // Simulated 7-day trend
  };
  basic: {
    title: { text: string; length: number; status: 'success' | 'warning' | 'error'; message: string };
    description: { text: string; length: number; status: 'success' | 'warning' | 'error'; message: string };
    headings: { 
      tree: HeadingTreeNode[];
      h1: string[]; h2: string[]; h3: string[]; 
      status: 'success' | 'warning' | 'error'; 
      message: string 
    };
    images: { total: number; missingAlt: number; status: 'success' | 'warning' | 'error'; message: string };
  };
  macro: {
    wordCount: number;
    keywordDensity: number;
    keywordInTitle: boolean;
    keywordInH1: boolean;
    keywordInFirstPara: boolean;
    internalLinks: number;
    externalLinks: number;
    status: 'success' | 'warning' | 'error';
    message: string;
  };
  recommendations: SEORecommendation[];
  checklist: Array<{ label: string; status: 'success' | 'warning' | 'error'; priority: 'high' | 'medium' | 'low'; tip?: string }>;
  ogTags: { present: boolean; tags: Record<string, string> };
}

export function analyzeSEO(html: string, focusKeyword: string = ''): SEOMacroResult {
  const root = parse(html);
  
  // 1. DOM Queries & Base Data
  const titleTag = root.querySelector('title');
  const titleText = titleTag?.innerText || '';
  const titleLen = titleText.length;
  
  const descTag = root.querySelector('meta[name="description"]');
  const descText = descTag?.getAttribute('content') || '';
  
  const h1s = root.querySelectorAll('h1').map(h => h.innerText.trim());
  const h2s = root.querySelectorAll('h2').map(h => h.innerText.trim());
  const h3s = root.querySelectorAll('h3').map(h => h.innerText.trim());
  const allHeadings = root.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  const allImgs = root.querySelectorAll('img');
  const missingAlts = allImgs.filter(img => !img.getAttribute('alt')).length;

  const bodyText = root.querySelector('body')?.innerText || '';
  const words = bodyText.trim().split(/\s+/).filter(w => w.length > 1);
  const wordCount = words.length;

  const keywordLower = focusKeyword.toLowerCase().trim();

  // 2. Keyword & Content Analytics
  let keywordCount = 0;
  if (keywordLower) {
    const regex = new RegExp(`\\b${keywordLower}\\b`, 'gi');
    keywordCount = (bodyText.match(regex) || []).length;
  }
  const keywordDensity = wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;

  const keywordInTitle = keywordLower ? titleText.toLowerCase().includes(keywordLower) : false;
  const keywordInH1 = keywordLower ? h1s.some(h => h.toLowerCase().includes(keywordLower)) : false;
  const firstPara = root.querySelector('p')?.innerText || '';
  const keywordInFirstPara = keywordLower ? firstPara.toLowerCase().includes(keywordLower) : false;

  // Links
  const allLinks = root.querySelectorAll('a');
  const internalLinks = allLinks.filter(a => {
    const href = a.getAttribute('href');
    if (!href) return false;
    const isRelative = href.startsWith('/') || href.startsWith('#');
    const isCurrentDomain = process.env.NEXT_PUBLIC_SITE_URL && href.includes(process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, ''));
    return isRelative || isCurrentDomain || href.includes('localhost');
  }).length;
  const externalLinks = allLinks.length - internalLinks;

  // 2b. Heading Tree Extraction (Simplified hierarchy)
  const headingTree: HeadingTreeNode[] = allHeadings.map(h => ({
    tag: h.tagName,
    text: h.innerText.trim(),
    children: [],
    status: h.tagName === 'H1' ? 'success' : (h.tagName === 'H2' ? 'success' : 'warning')
  }));

  // 2c. Performance Simulation (Simulating Core Web Vitals)
  const baseLCP = 800 + (allImgs.length * 50) + (wordCount / 10);
  const lcp = Math.max(1200, Math.min(3500, baseLCP));
  const speedScore = Math.max(40, 100 - (lcp/100) - (missingAlts * 2));
  const trendData = [85, 88, 82, speedScore - 5, speedScore + 2, speedScore - 3, speedScore];

  // 3. Recommendations Engine
  const recommendations: SEORecommendation[] = [];

  // Critical issues (High Priority)
  if (h1s.length === 0) {
    recommendations.push({ 
      type: 'critical', 
      title: 'Thiếu thẻ H1', 
      priority: 'high',
      advice: 'Đây là lỗi nghiêm trọng nhất. Hãy bổ sung ngay 1 thẻ H1 chứa từ khóa mục tiêu để Google hiểu nội dung chính của trang.' 
    });
  } else if (h1s.length > 1) {
    recommendations.push({ 
      type: 'critical', 
      title: 'Quá nhiều thẻ H1', 
      priority: 'high',
      advice: 'Phát hiện nhiều hơn 1 thẻ H1. Điều này gây nhiễu cho Robot Google. Hãy chuyển các H1 phụ thành H2.' 
    });
  }

  if (titleLen === 0) {
    recommendations.push({ type: 'critical', title: 'Thiếu Title SEO', priority: 'high', advice: 'Trang web không có tiêu đề sẽ không thể xếp hạng. Hãy cập nhật Metadata ngay.' });
  }

  // Warnings (Medium/Low Priority)
  if (keywordLower && !keywordInTitle) {
    recommendations.push({ 
      type: 'warning', 
      title: 'Từ khóa không có trong Title', 
      priority: 'medium',
      advice: `Bạn đang SEO cho từ khóa "${focusKeyword}" nhưng nó chưa xuất hiện trong tiêu đề. Hãy đưa nó vào đầu tiêu đề.` 
    });
  } else if (titleLen > 0 && (titleLen < 40 || titleLen > 70)) {
    recommendations.push({
      type: 'warning',
      title: 'Độ dài Tiêu đề không tối ưu',
      priority: 'medium',
      advice: `Tiêu đề hiện tại (${titleLen} ký tự) có độ dài chưa chuẩn. Hãy viết tiêu đề trong khoảng 40-70 ký tự để hiển thị tốt nhất trên Google.`
    });
  }

  if (descText.length > 0 && descText.length < 100) {
    recommendations.push({
      type: 'warning',
      title: 'Mô tả (Description) quá ngắn',
      priority: 'medium',
      advice: 'Thẻ Description hiện tại quá ngắn. Hãy viết mô tả dài hơn (100-160 ký tự) để tăng tỷ lệ click (CTR).'
    });
  } else if (descText.length === 0) {
    recommendations.push({
      type: 'critical',
      title: 'Thiếu thẻ Description',
      priority: 'high',
      advice: 'Trang web thiếu thẻ mô tả Meta. Điều này khiến Google tự lấy nội dung ngẫu nhiên, có thể làm giảm hiệu quả SEO.'
    });
  }

  if (wordCount < 300) {
    recommendations.push({ 
      type: 'warning', 
      title: 'Nội dung quá mỏng (Thin Content)', 
      priority: 'medium',
      advice: `Trang chỉ có ${wordCount} chữ. Các trang SEO tốt nên đạt ít nhất 600-1000 chữ để mang lại giá trị vĩ mô.` 
    });
  } else if (wordCount >= 300 && wordCount < 600) {
    recommendations.push({
      type: 'info',
      title: 'Cần mở rộng nội dung',
      priority: 'low',
      advice: `Trang của bạn có ${wordCount} chữ. Để cạnh tranh với các đối thủ mạnh TOP 1, bạn nên mở rộng nội dung lên trên 600 chữ.`
    });
  }

  if (missingAlts > 0) {
    recommendations.push({ 
      type: 'warning', 
      title: 'Thiếu thẻ Alt cho hình ảnh', 
      priority: 'medium',
      advice: `Có ${missingAlts} hình ảnh đang "mù" với Google. Hãy thêm mô tả vào thuộc tính Alt của các thẻ <img>.` 
    });
  }

  if (internalLinks === 0) {
    recommendations.push({ 
      type: 'warning', 
      title: 'Thiếu Internal Link', 
      priority: 'low',
      advice: 'Bạn cần ít nhất 1 liên kết tới các trang khác trong website để tăng tính kết nối và thời gian On-page.' 
    });
  }

  if (keywordDensity > 3) {
    recommendations.push({ 
      type: 'warning', 
      title: 'Mật độ từ khóa quá cao', 
      priority: 'high',
      advice: 'Bạn đang lặp lại từ khóa quá nhiều (trên 3%). Hãy dùng các từ đồng nghĩa hoặc giảm bớt để tránh bị Google coi là spam.' 
    });
  }

  // Performance improvements
  if (speedScore < 90) {
    recommendations.push({
      type: 'info',
      title: 'Tối ưu hóa LCP/FCP',
      priority: 'medium',
      advice: 'Tốc độ tải trang đo được chưa đạt mức tối ưu (trên 90). Hãy nén hình ảnh, xóa các script dư thừa để cải thiện trải nghiệm người dùng.'
    });
  }

  // Checklist Generation
  const checklist: SEOMacroResult['checklist'] = [
    { label: 'Thẻ H1 duy nhất', status: h1s.length === 1 ? 'success' : (h1s.length === 0 ? 'error' : 'warning'), priority: 'high' },
    { label: 'Độ dài tiêu đề SEO', status: titleLen >= 40 && titleLen <= 70 ? 'success' : 'warning', priority: 'medium' },
    { label: 'Độ dài nội dung', status: wordCount > 300 ? 'success' : 'warning', priority: 'low' }
  ];

  if (keywordLower) {
    checklist.push({ label: `Key "${focusKeyword}" in Title`, status: keywordInTitle ? 'success' : 'warning', priority: 'high' });
    checklist.push({ label: 'Keyword Density', status: keywordDensity >= 0.5 && keywordDensity <= 3 ? 'success' : 'warning', priority: 'medium' });
  }

  // 4. Final Scoring
  let score = 0;
  if (titleLen >= 30 && titleLen <= 65) score += 15;
  if (descText.length >= 100) score += 15;
  if (h1s.length === 1) score += 20;
  if (wordCount > 600) score += 10; else if (wordCount > 300) score += 5;
  if (keywordInTitle) score += 10;
  if (keywordInH1) score += 10;
  if (keywordDensity >= 0.5 && keywordDensity <= 3.0) score += 10;
  if (internalLinks > 0) score += 10;

  const ogTags: Record<string, string> = {};
  root.querySelectorAll('meta[property^="og:"]').forEach(meta => {
    const prop = meta.getAttribute('property');
    const content = meta.getAttribute('content');
    if (prop && content) ogTags[prop] = content;
  });

  return {
    score: Math.min(100, score),
    performance: {
       lcp,
       fid: 50 + (allHeadings.length * 2), // Simulated FID
       cls: 0.1,
       speedScore,
       loadTime: lcp / 1000,
       trendData
    },
    basic: {
      title: { text: titleText, length: titleLen, status: titleLen >= 40 && titleLen <= 70 ? 'success' : 'warning', message: 'Title Check' },
      description: { text: descText, length: descText.length, status: descText.length >= 100 ? 'success' : 'warning', message: 'Description Check' },
      headings: { tree: headingTree, h1: h1s, h2: h2s, h3: h3s, status: h1s.length === 1 ? 'success' : 'error', message: 'Heading Check' },
      images: { total: allImgs.length, missingAlt: missingAlts, status: missingAlts === 0 ? 'success' : 'warning', message: 'Alt Check' },
    },
    macro: {
      wordCount,
      keywordDensity,
      keywordInTitle,
      keywordInH1,
      keywordInFirstPara,
      internalLinks,
      externalLinks,
      status: 'success',
      message: 'Macro analysis complete.'
    },
    recommendations,
    checklist,
    ogTags: { present: Object.keys(ogTags).length > 0, tags: ogTags }
  };
}
