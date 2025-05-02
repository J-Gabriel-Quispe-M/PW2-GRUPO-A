fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const fechas = data[0].confirmed.map(e => e.date);
    const regionesExcluir = ["Lima", "Callao"];
    const regionesIncluidas = data.filter(e => !regionesExcluir.includes(e.region));
    });