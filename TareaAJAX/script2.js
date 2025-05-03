fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const fechas = data[0].confirmed.map(e => e.date);
    const regionesExcluir = ["Lima", "Callao"];
    const regionesIncluidas = data.filter(e => !regionesExcluir.includes(e.region));

    const crecimiento = fechas.map((fecha, i) => {
      let total = 0;
      regionesIncluidas.forEach(region => {
        const valor = parseInt(region.confirmed[i].value);
        total += isNaN(valor) ? 0 : valor;
      });
      return total;
    });

    new Chart(document.getElementById('grafico2'), {
      type: 'line',
      data: {
        labels: fechas,
        datasets: [{
          label: 'Total Confirmados (sin Lima y Callao)',
          data: crecimiento,
          borderColor: 'green',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Crecimiento diario (confirmados) sin Lima y Callao'
          }
        }
      }
    });
  });
