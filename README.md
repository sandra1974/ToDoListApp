TO DO LIST APP

Aplikacija je izrađena korištenjem Angular CLI, Angular8, RESTful API, Bootstrap i JSON servera za testiranje CRUD funkcija.

Funkcije koje su prezentirane u ovoj aplikaciji:
- CRUD - pregled, unos novih zadataka, ažuriranje postojećih i brisanje
- pretraga/filtriranje podataka iz tablice
- sortiranje podataka iz tablice
- numeriranje pregleda podataka iz tablice do 5 redova po stranici
- povezivanje s JSON-serverom za spremanje unesenih podataka i testiranje CRUD operacija.

Pokretanje aplikacije:

1. Instalirati Angular CLI
npm install @angular/cli -g

2. Instalirati Bootstrap
npm install bootstrap

3. Downloadirati datoteku sa Githuba

4. Instalirati JSON server
npm install -g json-server
npm touch server/db.json 

5. Pokrenuti JSON server
npm json-server --watch server/db.json

5. Provjeriti dali je db.json datoteka na json serveru, otvoriti: http://localhost:3000/tasks

6. Zatim pokrenuti Angular aplikaciju unutar preuzetog projekta
ng serve --open
Otvoriti: http://localhost:4200


Potrebno vrijeme za kreiranje aplikacije: 4 dana.
