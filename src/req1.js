const fs = require('fs').promises;

async function params() {
  try {
    const data = JSON.parse(await fs.readFile('talker.json'));
    return data;
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

module.exports = params;
