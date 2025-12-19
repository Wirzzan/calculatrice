function validateAndParseNumbers(req, res) {
  let { a, b } = req.body;
 
  // 1️⃣ champs absents
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Both numbers a and b are required' });
  }
 
  // 2️⃣ champs vides (string)
  if (a === '' || b === '') {
    return res.status(400).json({ error: 'Both a and b must not be empty' });
  }
 
  // 3️⃣ conversion explicite
  a = Number(a);
  b = Number(b);
 
  // 4️⃣ validation numérique
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Both a and b must be valid numbers' });
  }
 
  return { a, b };
}
 
exports.add = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;
 
  const { a, b } = parsed;
  res.json({ result: a + b });
};
 
exports.sub = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;
 
  const { a, b } = parsed;
  res.json({ result: a - b });
};
 
 
exports.mul = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;
 
  const { a, b } = parsed;
  res.json({ result: a * b });
};
 
exports.div = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;
 
  const { a, b } = parsed;
 
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }
 
  res.json({ result: a / b });
};
 
 
exports.puissance = (req, res) => {
  const parsed = validateAndParseNumbers(req, res);
  if (!parsed) return;
 
  const { a, b } = parsed;
  res.json({ result: a ** b });
};