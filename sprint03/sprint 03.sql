-- Tasca S3.01. Manipulació de taules

USE transactions;

-- Nivell 1
-- Exercici 1
-- La teva tasca és dissenyar i crear una taula anomenada "credit_card" que emmagatzemi detalls crucials sobre les targetes de crèdit. 
-- La nova taula ha de ser capaç d'identificar de manera única cada targeta i establir una relació adequada amb les altres dues taules ("transaction" i "company"). 
-- Després de crear la taula serà necessari que ingressis la informació del document denominat "dades_introduir_credit". 
-- Recorda mostrar el diagrama i realitzar una breu descripció d'aquest.
CREATE TABLE IF NOT EXISTS credit_card(
	id VARCHAR(15) PRIMARY KEY,
    iban VARCHAR(50) NOT NULL,
    pan VARCHAR(20) NOT NULL,
    pin CHAR(4),
    cvv CHAR(3),
    expiring_date VARCHAR(15) NOT NULL); -- amb varchar per poder carregar sense errors
-- carregar dades
UPDATE credit_card
SET expiring_date = STR_TO_DATE(expiring_date, '%m/%d/%y'); -- dòna format de data

ALTER TABLE credit_card
MODIFY expiring_date DATE; -- modificar format a data

ALTER TABLE transaction
ADD CONSTRAINT fk_transaction_credit_card
FOREIGN KEY(credit_card_id) REFERENCES credit_card(id) ON DELETE RESTRICT;

-- Exercici 2
-- El departament de Recursos Humans ha identificat un error en el número de compte associat a la targeta de crèdit amb ID CcU-2938. 
-- La informació que ha de mostrar-se per a aquest registre és: TR323456312213576817699999. Recorda mostrar que el canvi es va realitzar.
UPDATE credit_card
SET iban = "TR323456312213576817699999"
WHERE id = "CcU-2938";

SELECT *
FROM credit_card
WHERE id = "CcU-2938";

-- Exercici 3
-- En la taula "transaction" ingressa una nova transacció amb la següent informació:
-- crear primer registre a la taula on company_id és PK, sinó error perqué l'empresa no existeix, abans de fer això s'hauria de contrastar que el company_id és correcte:
INSERT INTO company (id)
VALUES ("b-9999"); 
-- passa el mateix amb credit_card_id, en aquest cas, haig de modificar taula creada per eliminar condició not null:
ALTER TABLE credit_card MODIFY iban VARCHAR(50) NULL; 
ALTER TABLE credit_card MODIFY pan VARCHAR(20) NULL;
INSERT INTO credit_card (id)
VALUES ("CcU-9999"); 
-- insertar dades que demana l'exercici:
SHOW COLUMNS FROM transaction; -- per poder copiar noms de columnes
INSERT INTO transaction (id, credit_card_id, company_id, user_id, lat, longitude, timestamp, amount, declined)
VALUES ("108B1D1D-5B23-A76C-55EF-C568E49A99DD", "CcU-9999", "b-9999", 9999, 829.999, -117.999, CURRENT_TIMESTAMP, 111.11, 0);

SELECT *
FROM transaction
WHERE user_id = 9999;

-- Exercici 4
-- Des de recursos humans et sol·liciten eliminar la columna "pan" de la taula credit_card. Recorda mostrar el canvi realitzat.
ALTER TABLE credit_card
DROP COLUMN pan;

SHOW COLUMNS FROM credit_card;

-- Nivell 2
-- Exercici 1
-- Elimina de la taula transaction el registre amb ID 000447FE-B650-4DCF-85DE-C7ED0EE1CAAD de la base de dades.
-- comprovació inicial:
SELECT *
FROM transaction
WHERE id = "000447FE-B650-4DCF-85DE-C7ED0EE1CAAD";
-- eliminar:
DELETE FROM transaction
WHERE id = "000447FE-B650-4DCF-85DE-C7ED0EE1CAAD";
-- comprovació final:
SELECT *
FROM transaction
WHERE id = "000447FE-B650-4DCF-85DE-C7ED0EE1CAAD";

-- Exercici 2
-- La secció de màrqueting desitja tenir accés a informació específica per a realitzar anàlisi i estratègies efectives. 
-- S'ha sol·licitat crear una vista que proporcioni detalls clau sobre les companyies i les seves transaccions. 
-- Serà necessària que creïs una vista anomenada VistaMarketing que contingui la següent informació: Nom de la companyia. Telèfon de contacte. 
-- País de residència. Mitjana de compra realitzat per cada companyia. Presenta la vista creada, ordenant les dades de major a menor mitjana de compra.
CREATE VIEW VistaMarketing AS
SELECT company.company_name, company.phone, company.country, avg_amount_company.avg_amount
FROM company
JOIN (	SELECT company_id, ROUND(AVG(amount), 2) AS avg_amount
		FROM transaction
        GROUP BY company_id) avg_amount_company
ON company.id = avg_amount_company.company_id
ORDER BY avg_amount_company.avg_amount DESC;
-- veure resultat:
SELECT *
FROM VistaMarketing;

-- Exercici 3
-- Filtra la vista VistaMarketing per a mostrar només les companyies que tenen el seu país de residència en "Germany".
SELECT *
FROM VistaMarketing
WHERE country = "Germany";

-- Nivell 3
-- Exercici 1
-- La setmana vinent tindràs una nova reunió amb els gerents de màrqueting. Un company del teu equip va realitzar modificacions en la base de dades, 
-- però no recorda com les va realitzar. Et demana que l'ajudis a deixar els comandos executats per a obtenir el següent diagrama:
 -- Recordatori
-- En aquesta activitat, és necessari que descriguis el "pas a pas" de les tasques realitzades. És important realitzar descripcions senzilles, simples i fàcils de comprendre. 
-- Per a realitzar aquesta activitat hauràs de treballar amb els arxius denominats "estructura_dades_user" i "dades_introduir_user"
-- Recorda continuar treballant sobre el model i les taules amb les quals ja has treballat fins ara.
-- PAS 1: executar arxius sql taula user i comprovar que s'han creat correctament.
SELECT *
FROM user;

-- PAS 2: Revisar que totes les taules tenen tots els atributs establerts.
-- TAULA company:
SHOW COLUMNS FROM company;
-- de taula company eliminar atribut website.
ALTER TABLE company DROP COLUMN website;
SHOW COLUMNS FROM company;
-- TAULA credit_card:
SHOW COLUMNS FROM credit_card;
-- a la taula credit_card afegir atribut fecha_actual.
ALTER TABLE credit_card ADD fecha_actual DATE DEFAULT (CURDATE()); -- curdate pensant en que ens servirà per calcular quant queda per caducar targeta.
SHOW COLUMNS FROM credit_card;
-- TAULA transaction:
SHOW COLUMNS FROM transaction;
-- TAULA user:
SHOW COLUMNS FROM user;
-- S'ha de canviar nom de taula.
RENAME TABLE user TO data_user;
SHOW COLUMNS FROM data_user;
-- Canviar nom atribut email a personal_email.
ALTER TABLE data_user CHANGE email personal_email VARCHAR(150);
SHOW COLUMNS FROM data_user;
-- PAS 3: Revisar a les 4 taules quin tipus de variable és cada atribut i fer que correspongui amb esquema proporcionat.
-- TAULA company:
SHOW COLUMNS FROM company; -- tot correcte
-- TAULA credit_card:
SHOW COLUMNS FROM credit_card;
ALTER TABLE credit_card MODIFY id VARCHAR(20);
ALTER TABLE credit_card MODIFY pin VARCHAR(4);
ALTER TABLE credit_card MODIFY cvv INT;
ALTER TABLE credit_card MODIFY expiring_date VARCHAR(20);
SHOW COLUMNS FROM credit_card;
-- TAULA transaction:
SHOW COLUMNS FROM transaction;
-- TAULA data_user:
SHOW COLUMNS FROM data_user;
ALTER TABLE data_user MODIFY id INT;
-- PAS 4: Revisar connexions entre taules. Falta conectar la taula data_user amb transaction mitjançant user_id, assignar FK.
-- comprovació:
SELECT DISTINCT transaction.user_id
FROM transaction
LEFT JOIN data_user ON transaction.user_id = data_user.id
WHERE data_user.id IS NULL;
-- afegir usuari que falta:
INSERT INTO data_user(id) VALUES (9999);
-- Crear FK:
ALTER TABLE transaction
ADD CONSTRAINT fk_user_transaction
FOREIGN KEY (user_id) REFERENCES data_user(id);


-- Exercici 2
-- L'empresa també us demana crear una vista anomenada "InformeTecnico" que contingui la següent informació:
-- o	ID de la transacció
-- o	Nom de l'usuari/ària
-- o	Cognom de l'usuari/ària
-- o	IBAN de la targeta de crèdit usada.
-- o	Nom de la companyia de la transacció realitzada.
-- o	Assegureu-vos d'incloure informació rellevant de les taules que coneixereu i utilitzeu àlies per canviar de nom columnes segons calgui.
-- Mostra els resultats de la vista, ordena els resultats de forma descendent en funció de la variable ID de transacció.
CREATE VIEW InformeTecnico AS
SELECT transaction.id AS transaction_id, data_user.name AS user_name, data_user.surname AS user_surname, credit_card.iban, company.company_name
FROM transaction
LEFT JOIN data_user ON transaction.user_id = data_user.id
LEFT JOIN credit_card ON transaction.credit_card_id = credit_card.id
LEFT JOIN company ON transaction.company_id = company.id
ORDER BY transaction.id DESC;

SELECT *
FROM InformeTecnico;