from flask import Flask,render_template,jsonify
import json
import random 

app=Flask(__name__)

def movie_load():
    with open('movies.json','r') as f:
        return json.load(f)

@app.route('/')
def dashboard():
    movies=movie_load()[:6]
    return render_template('dashboard.html',movies=movies)

@app.route('/recommender')
def index():
    return render_template("index.html")

@app.route('/recommend')
def recomm():
    data=movie_load()
    select_movie=random.choice(data)
    return jsonify(select_movie)

if __name__ == '__main__':
    app.run(debug=True,port=7000)
