const express = require('express');
const app = express();
const port = 3001;

// Importar serviços das exchanges
const kucoin = require('./services/kucoin');
const mexc = require('./services/mexc');
const mercadoBitcoin = require('./services/mercadoBitcoin');

// Rota para obter oportunidades de arbitragem
app.get('/api/arbitrage', async (req, res) => {
  // Lógica para buscar preços e calcular arbitragem
  res.json({ message: 'Em desenvolvimento' });
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
