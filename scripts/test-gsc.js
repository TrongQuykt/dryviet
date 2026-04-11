const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const KEY_FILE = path.join(process.cwd(), 'gsc-key.json');
const siteUrl = 'https://dryviet.com'; // Thử nghiệm với URL này

async function testConnection() {
  console.log('--- Đang kiểm tra kết nối GSC ---');
  
  if (!fs.existsSync(KEY_FILE)) {
    console.error('❌ Lỗi: Không tìm thấy file gsc-key.json tại ' + KEY_FILE);
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    console.log('1. Đang lấy danh sách các trang web bạn có quyền truy cập...');
    const listRes = await searchconsole.sites.list();
    const sites = listRes.data.siteEntry || [];
    
    if (sites.length === 0) {
      console.warn('⚠️ Cảnh báo: Service Account này chưa được thêm vào bất kỳ trang web nào trong Google Search Console.');
      console.log('Vui lòng vào GSC > Settings > Users và thêm email này:');
      const keyData = JSON.parse(fs.readFileSync(KEY_FILE));
      console.log('👉 ' + keyData.client_email);
    } else {
      console.log('✅ Các trang web tìm thấy:');
      sites.forEach(s => console.log('   - ' + s.siteUrl));
    }

    console.log('\n2. Đang truy vấn dữ liệu cho URL: ' + siteUrl);
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const res = await searchconsole.searchanalytics.query({
      siteUrl: siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10,
      },
    });

    console.log('✅ Thành công! Đã lấy được ' + (res.data.rows?.length || 0) + ' dòng dữ liệu.');
  } catch (err) {
    console.error('❌ Lỗi từ Google API:');
    console.error(err.message);
  }
}

testConnection();
