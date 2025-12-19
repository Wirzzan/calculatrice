async function calculate(operation) {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
 
  const resultEl = document.getElementById('result');
  const errorEl = document.getElementById('error');
 
  errorEl.textContent = '';
  resultEl.textContent = '...';
 
 
 
 
  try {
    const response = await fetch(`/api/calc/${operation}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        a: a,
        b: b
      })
    });
 
 
    const data = await response.json();
 
    console.log(data);
   
    if (!response.ok) {
      throw new Error(data.error || 'Erreur');
    }
 
    resultEl.textContent = data.result;
  } catch (error) {
    resultEl.textContent = '—';
    errorEl.textContent = error.message;
  }
}