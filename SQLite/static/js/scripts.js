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
                <li class="movie-item" data-movie-id="${peli.id}">
                    <h3>${peli.title} (${peli.year})</h3>
                    <p>⭐ Puntuación: ${peli.score?.toFixed(1) || 'N/A'}</p>
                    <button class="btn-actores" data-movie-id="${peli.id}">Ver actores</button>
                    <div class="actores-container" id="actores-${peli.id}" style="display:none;"></div>
                </li>`;
            });
            html += '</ul>';
            
            divResultados.innerHTML = html;
            
            // Agregar event listeners a los nuevos botones
            document.querySelectorAll('.btn-actores').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const movieId = e.target.getAttribute('data-movie-id');
                    const container = document.getElementById(`actores-${movieId}`);
                    
                    if (container.style.display === 'none') {
                        if (container.innerHTML === '') {
                            await cargarActores(movieId);
                        }
                        container.style.display = 'block';
                        e.target.textContent = 'Ocultar actores';
                    } else {
                        container.style.display = 'none';
                        e.target.textContent = 'Ver actores';
                    }
                });
            });
        } catch (error) {
            divResultados.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            console.error('Error:', error);
        }
    }

    async function cargarActores(movieId) {
        try {
            const container = document.getElementById(`actores-${movieId}`);
            container.innerHTML = '<p>Cargando actores...</p>';
            
            const response = await fetch(`/api/actores/${movieId}`);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            
            const actores = await response.json();
            
            if (actores.length === 0) {
                container.innerHTML = '<p>No hay información de actores</p>';
                return;
            }
            
            let html = '<ul class="actor-list">';
            actores.forEach(actor => {
                html += `<li>${actor.Name}</li>`;
            });
            html += '</ul>';
            
            container.innerHTML = html;
        } catch (error) {
            document.getElementById(`actores-${movieId}`).innerHTML = 
                `<p class="error">Error al cargar actores: ${error.message}</p>`;
            console.error('Error al cargar actores:', error);
        }
    }
});