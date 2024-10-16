// middleware/timecheck.js
module.exports = function (req,res,next){
    const currenDate = new Date();
    const currenDay = currenDate.getDay();
    const currenHour = currenDate.getHours();
    // faisons du lundi au vendredi
    if (currenDay >=1 && currenDay <=5 && currenHour >=7 && currenHour< 18 ){
        next(); // continuer pendant des heures de travail
    } else{
        res.send("il est accesible du lundi au vendredi de 7h à 18h")
    }
}