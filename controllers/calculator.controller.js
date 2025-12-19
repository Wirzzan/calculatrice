function validateNumbers(a, b, res) {

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Both numbers a and b are required' });
  }

  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Both a and b must be valid numbers' });
  }

  return true;
}

exports.add = (req, res) => {
  const { a, b } = req.body;

  if (validateNumbers(a, b, res) !== true) return;

  res.json({ result: a + b });
};

exports.sub = (req, res) => {
  const { a, b } = req.body;

  if (validateNumbers(a, b, res) !== true) return;

  res.json({ result: a - b });
};

exports.mul = (req, res) => {
  const { a, b } = req.body;

  if (validateNumbers(a, b, res) !== true) return;

  res.json({ result: a * b });
};

exports.div = (req, res) => {
  const { a, b } = req.body;

  if (validateNumbers(a, b, res) !== true) return;

  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }

  res.json({ result: a / b });
};

exports.puissance = (req, res) => {
  const { a, b } = req.body;
 
  if (validateNumbers(a, b, res) !== true) return; 
  res.json({ result: a ** b });
};