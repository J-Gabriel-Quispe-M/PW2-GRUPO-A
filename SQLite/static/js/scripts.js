document.addEventListener('DOMContentLoaded', () => {
    const btnCargar = document.getElementById('cargarPeliculas');
    const divResultados = document.getElementById('resultados');

    btnCargar.addEventListener('click', cargarPeliculas);

    async function cargarPeliculas() {
        try {
            const response = await fetch('/api/peliculas');
            const data = await response.json();
            
            if (data.error) throw new Error(data.error);
            
            let html = '<ul class="movie-list">';
            data.forEach(peli => {
                html += `
                <li class="movie-item">
                    <h3>${peli.title} (${peli.year})</h3>
                    <p>⭐ Puntuación: ${peli.score.toFixed(1)}</p>
                    <button onclick="verActores(${peli.id})">Ver actores</button>
                </li>`;
            });
            html += '</ul>';
            
            divResultados.innerHTML = html;
        } catch (error) {
            divResultados.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            console.error('Error:', error);
        }
    }

    window.verActores = async function(movieId) {
        try {
            const response = await fetch(`/api/actores/${movieId}`);
            const actores = await response.json();
            
            let html = '<ul class="actor-list">';
            actores.forEach(actor => {
                html += `<li>${actor.Name}</li>`;
            });
            html += '</ul>';
            
            document.getElementById(`actors-${movieId}`).innerHTML = html;
        } catch (error) {
            console.error('Error al cargar actores:', error);
        }
    }
});