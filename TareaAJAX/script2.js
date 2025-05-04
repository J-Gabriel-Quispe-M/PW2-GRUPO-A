fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const fechas = data[0].confirmed.map(e => e.date);
    const regionesExcluir = ["Lima", "Callao"];
    const regionesIncluidas = data.filter(e => !regionesExcluir.includes(e.region));

    // Configuración de colores (puedes personalizarlos)
    const colores = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
        '#9966FF', '#FF9F40', '#8AC24A', '#607D8B',
        '#E91E63', '#9C27B0', '#3F51B5', '#009688'
    ];

    // Preparar datasets para todas las regiones
    const datasets = regionesIncluidas.map((region, index) => {
        return {
            label: region.region,
            data: region.confirmed.map(e => parseInt(e.value) || 0),
            borderColor: colores[index % colores.length],
            borderWidth: 2,
            fill: false,
            tension: 0.1
        };
    });

    // Crear el gráfico combinado
    new Chart(document.getElementById('grafico2'), {
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
                    text: 'Crecimiento diario por región (excepto Lima y Callao)'
                },
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de casos confirmados'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                }
            }
        }
    });
  })
  .catch(error => console.error('Error:', error));