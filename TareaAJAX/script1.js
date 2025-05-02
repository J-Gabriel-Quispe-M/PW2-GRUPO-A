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
}