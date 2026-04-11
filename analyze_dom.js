const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/3c38cd16-5ebb-4b4c-b04b-6f77b61bf224/dom_dump.html', 'utf-8');

const regex = /href="\/products\/jackfruit"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const index = match.index;
  const context = content.substring(Math.max(0, index - 100), Math.min(content.length, index + 300));
  console.log('--- Context ---');
  console.log(context);
}
