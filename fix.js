const fs = require('fs');
let text = fs.readFileSync('index.html', 'utf8');

const replacements = {
  'â†—': '↗',
  'âŽ¯': '⎯',
  'â¤µ': '⤵',
  'â€”': '—',
  'âœ¦': '✦',
  'â˜…': '★',
  'â ¤ï¸ ': '❤️',
  'ðŸ–¼': '🖼',
  'ðŸŒ´': '🌴',
  'ðŸŒ ': '🌕',
  'ðŸ¤ ': '🌞',
  'Â©': '©',
  'A°': '©'
};

for (const [bad, good] of Object.entries(replacements)) {
  text = text.split(bad).join(good);
}

fs.writeFileSync('index.html', text, 'utf8');
console.log('Fixed encoding issues in index.html');
