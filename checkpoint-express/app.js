const express = require('express');
const path = require('path');
const timeCheck = require('./timecheck'); // middleware personnalisé

const app = express();

// Définir le moteur de template sur ejs (optionnel)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir les fichiers statiques (CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Appliquer le middleware de vérification des heures
app.use(timeCheck);

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Accueil' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Nos Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contactez-nous' });
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose a mal tourné!');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).send('Quelque chose a mal tourné!');
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
