const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/3c38cd16-5ebb-4b4c-b04b-6f77b61bf224/dom_dump.html', data);
    console.log('DOM dumped safely to dom_dump.html');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
