from flask import Flask, render_template, jsonify, request
import sqlite3
import os

app = Flask(__name__)

# Configuración de la base de datos
DATABASE = os.path.join('datos', 'imdb.db')

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # Para obtener diccionarios
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/peliculas')
def obtener_peliculas():
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT MovieID as id, 
                   Title as title, 
                   Year as year,
                   Score as score
            FROM Movie
            ORDER BY Score DESC
            LIMIT 10
        """)
        peliculas = cursor.fetchall()
        return jsonify([dict(peli) for peli in peliculas])
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

@app.route('/api/actores/<int:movie_id>')
def obtener_actores(movie_id):
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT a.ActorId, a.Name
            FROM Actor a
            JOIN Casting c ON a.ActorId = c.ActorId
            WHERE c.MovieID = ?
            ORDER BY c.Ordinal
        """, (movie_id,))
        actores = cursor.fetchall()
        return jsonify([dict(actor) for actor in actores])
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)