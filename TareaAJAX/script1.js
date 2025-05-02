let datos;
let grafico;

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    datos = data;
    const select1 = document.getElementById('region1');
    const select2 = document.getElementById('region2');

    data.forEach(entry => {
      const opt1 = document.createElement('option');
      opt1.value = entry.region;
      opt1.textContent = entry.region;
      select1.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = entry.region;
      opt2.textContent = entry.region;
      select2.appendChild(opt2);
    });
  });

function graficarComparacion() {
  const region1 = document.getElementById('region1').value;
  const region2 = document.getElementById('region2').value;

  if (!region1 || !region2) {
    alert("Por favor, selecciona ambas regiones.");
    return;
  }

  if (region1 === region2) {
    alert("Por favor, selecciona dos regiones diferentes.");
    return;
  }

  const fechas = datos[0].confirmed.map(e => e.date);

  const colores = ['blue', 'green'];

  const datasets = [region1, region2].map((region, i) => {
    const regionData = datos.find(e => e.region === region);
    const valores = regionData.confirmed.map(p => parseInt(p.value));
    return {
      label: region,
      data: valores,
      borderColor: colores[i],
      borderWidth: 2,
      fill: false,
      tension: 0.2
    };
  });

  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(document.getElementById('grafico1'), {
    type: 'line',
    data: {
      labels: fechas,
      datasets: datasets
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Comparación de casos confirmados entre dos regiones'
        }
      }
    }
  });
}
