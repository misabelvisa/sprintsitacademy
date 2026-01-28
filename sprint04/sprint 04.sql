-- Tasca S4.01. Creació de Base de Dades

-- Nivell 1
-- Descàrrega els arxius CSV, estudia'ls i dissenya una base de dades amb un esquema d'estrella que contingui, almenys 4 taules de les quals puguis realitzar 
-- les següents consultes:
CREATE DATABASE transactions_s4;
USE transactions_s4;

-- PAS 1: crear taules, de moment utilitzo varchar i poques limitacions per poder carregar les dades:
CREATE TABLE transactions (
	id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_id VARCHAR(10),
    card_id VARCHAR(10),
    business_id VARCHAR(100),
    timestamp VARCHAR(100),
    amount VARCHAR(100),
    declined VARCHAR(100),
    product_ids VARCHAR(100),
    user_id INT,
    lat VARCHAR(100),
    longitude VARCHAR(100)
);
CREATE TABLE credit_cards (
	id VARCHAR(10) PRIMARY KEY,
    user_id INT,
    ban VARCHAR(100),
    pan VARCHAR(100),
    pin VARCHAR(100),
    cvv VARCHAR(100),
    track1 VARCHAR(100),
    track2 VARCHAR(100),
    expiring_date VARCHAR(100)
);
CREATE TABLE companies (
	company_id VARCHAR(10) PRIMARY KEY,
    company_name VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(100),
    country VARCHAR(100),
    website VARCHAR(100)
);
CREATE TABLE users (
	id INT PRIMARY KEY,
    name VARCHAR(100),
    surname VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(100),
    birth_date VARCHAR(100),
    country VARCHAR(100),
    city VARCHAR(100),
    postal_code VARCHAR(100),
    address VARCHAR(100)
);
-- PAS 2: carregar dades dels arxius csv a les taules.
-- Dades transactions: havia pensat en generar un id auto_increment a la taula transactions pero no hem permet carregar dades, de moment l'elimino.
ALTER TABLE transactions DROP COLUMN id; -- eliminar columna id addicional.
ALTER TABLE transactions MODIFY transaction_id VARCHAR(150); -- no hem deixa carregar amb valor més petit.
SHOW COLUMNS FROM transactions;
LOAD DATA INFILE 'C:/csv/sprint 04/transactions.csv'
INTO TABLE transactions
FIELDS TERMINATED BY ';'
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
SELECT *
FROM transactions;
-- Dades credit_cards:
LOAD DATA INFILE 'C:/csv/sprint 04/credit_cards.csv'
INTO TABLE credit_cards
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
SELECT *
FROM credit_cards;
-- Dades companies:
LOAD DATA INFILE 'C:/csv/sprint 04/companies.csv'
INTO TABLE companies
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
SELECT *
FROM companies;
-- Dades users:
LOAD DATA INFILE 'C:/csv/sprint 04/european_users.csv' -- european
INTO TABLE users
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'C:/csv/sprint 04/american_users.csv' -- american
INTO TABLE users
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
SELECT *
FROM users;
-- PAS 3: fer modificacions en tipus de dades si és necessari i establir relacions entre taules.
DESCRIBE transactions;
SELECT *
FROM transactions;
ALTER TABLE transactions ADD COLUMN id INT NOT NULL AUTO_INCREMENT PRIMARY KEY; -- afegir atribut id auto-increment
ALTER TABLE transactions MODIFY timestamp DATETIME;
ALTER TABLE transactions MODIFY amount DECIMAL(10,2);
ALTER TABLE transactions MODIFY declined TINYINT(1);
ALTER TABLE transactions MODIFY lat FLOAT;
ALTER TABLE transactions MODIFY longitude FLOAT;
ALTER TABLE transactions MODIFY business_id VARCHAR(10);
ALTER TABLE transactions ADD CONSTRAINT fk_card_transaction 
FOREIGN KEY (card_id) REFERENCES credit_cards(id); -- FK card_id
ALTER TABLE transactions ADD CONSTRAINT fk_companies_transaction 
FOREIGN KEY (business_id) REFERENCES companies(company_id); -- FK business_id
ALTER TABLE transactions ADD CONSTRAINT fk_user_transaction 
FOREIGN KEY (user_id) REFERENCES users(id); -- FK business_id
-- Taula credit_cards:
DESCRIBE credit_cards;
SELECT *
FROM credit_cards;
UPDATE credit_cards
SET expiring_date = STR_TO_DATE(expiring_date, '%m/%d/%y'); -- dòna format de data
ALTER TABLE credit_cards MODIFY expiring_date DATE; -- modificar format a data
ALTER TABLE credit_Cards MODIFY cvv INT;
ALTER TABLE credit_cards MODIFY pin VARCHAR(4);
ALTER TABLE credit_cards MODIFY pan VARCHAR(30);
ALTER TABLE credit_cards MODIFY ban VARCHAR(50);
-- Taula companies:
DESCRIBE companies;
SELECT *
FROM companies;
ALTER TABLE companies MODIFY phone VARCHAR(20); -- mantinc varchar per si hi ha números amb prefixos de país.
-- Taula users:
DESCRIBE users;
SELECT *
FROM users;
ALTER TABLE users MODIFY phone VARCHAR(20); -- mantinc varchar per si hi ha números amb prefixos de país.
ALTER TABLE users MODIFY postal_code VARCHAR(20);
UPDATE users SET birth_date = STR_TO_DATE(birth_date, '%b %d, %Y'); -- dòna format de data
ALTER TABLE users MODIFY birth_date DATE; -- modificar format a data

-- Correccions addicionals:
ALTER TABLE transactions MODIFY id INT UNSIGNED NOT NULL AUTO_INCREMENT FIRST; -- posar PK de transaction al principi
ALTER TABLE credit_cards CHANGE ban iban VARCHAR(50); -- nom incorrecte al crear
-- tornar a crear FK per afegir restriccions:
ALTER TABLE transactions
DROP FOREIGN KEY fk_card_transaction;
ALTER TABLE transactions
DROP FOREIGN KEY fk_companies_transaction;
ALTER TABLE transactions
DROP FOREIGN KEY fk_user_transaction;
ALTER TABLE transactions ADD CONSTRAINT fk_card_transaction
FOREIGN KEY (card_id) REFERENCES credit_cards(id)
ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE transactions ADD CONSTRAINT fk_companies_transaction
FOREIGN KEY (business_id) REFERENCES companies(company_id)
ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE transactions ADD CONSTRAINT fk_user_transaction
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE RESTRICT ON UPDATE CASCADE;

-- Exercici 1
-- Realitza una subconsulta que mostri tots els usuaris amb més de 80 transaccions utilitzant almenys 2 taules.
SELECT users.name, users.surname, trans_users.qty_transactions
FROM users
JOIN( 	SELECT user_id, COUNT(*) AS qty_transactions
		FROM transactions
		WHERE declined = 0
		GROUP BY user_id
		HAVING qty_transactions > 80) trans_users
ON users.id = trans_users.user_id;

-- Exercici 2
-- Mostra la mitjana d'amount per IBAN de les targetes de crèdit a la companyia Donec Ltd, utilitza almenys 2 taules.
SELECT credit_cards.iban, ROUND(AVG(transactions.amount),2) AS avg_amount
FROM transactions
JOIN credit_cards ON transactions.card_id = credit_cards.id
JOIN companies ON transactions.business_id = companies.company_id
WHERE transactions.declined = 0 AND companies.company_name = "Donec Ltd"
GROUP BY credit_cards.iban
ORDER BY avg_amount DESC;

-- Nivell 2
-- Crea una nova taula que reflecteixi l'estat de les targetes de crèdit basat en si les tres últimes transaccions han estat declinades aleshores és inactiu, 
-- si almenys una no és rebutjada aleshores és actiu. Partint d’aquesta taula respon:
CREATE TABLE card_state AS
SELECT card_id,
		CASE
			WHEN SUM(declined) = 3 THEN "Inactive" -- sumem declined perqué és boleana, cada 1 fa rederencia a declined
            ELSE "Active"
		END AS state
FROM (	SELECT card_id, declined,
				ROW_NUMBER() OVER(PARTITION BY card_id ORDER BY timestamp DESC) AS count_transactions -- assigna un número a cada transacció ordenat per data i agrupat per targeta
		FROM transactions) table_count -- genera taula amb card_id, declined i número de transacció per targeta
WHERE count_transactions <=3 -- per seleccionar les últimes 3 transaccions
GROUP BY card_id;
-- relacionar taula card_state amb credit_cards
ALTER TABLE card_state ADD CONSTRAINT fk_state_card
FOREIGN KEY (card_id) REFERENCES credit_cards(id); 
SELECT *
FROM card_state;
-- Exercici 1
-- Quantes targetes estan actives?
SELECT COUNT(*)
FROM card_state
WHERE state = "Active";

-- Nivell 3
-- Crea una taula amb la qual puguem unir les dades del nou arxiu products.csv amb la base de dades creada, tenint en compte que des de transaction 
-- tens product_ids. Genera la següent consulta:
CREATE TABLE products (
	id INT PRIMARY key,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    colour VARCHAR(20),
    weight DECIMAL(5,2),
    warehouse_id VARCHAR(10)
);
LOAD DATA INFILE 'C:/csv/sprint 04/products.csv'
INTO TABLE products
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(@id, @product_name, @price, @colour, @weight, @warehouse_id)
SET id = @id,
    product_name = @product_name,
    price = REPLACE(@price, '$', ''),
    colour = @colour,
    weight = @weight,
    warehouse_id = @warehouse_id; -- eliminar simbol $ al carregar dades
 -- Taula intermitja   
CREATE TABLE products_transactions (
	products_transactions_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_pk INT UNSIGNED,
    products_id INT,
    FOREIGN KEY(transaction_pk) REFERENCES transactions(id),
    FOREIGN KEY(products_id) REFERENCES products(id)
    );
SELECT *
FROM products_transactions;
-- Separar registres transactions, un registre per un product_id
UPDATE transactions
SET product_ids = CONCAT('[', product_ids, ']');
ALTER TABLE transactions
MODIFY product_ids JSON; -- passar atribut products_ids a tipus de dada json

INSERT INTO products_transactions (transaction_pk, products_id)
SELECT transactions.id, product_json.product_id
FROM transactions
JOIN JSON_TABLE(transactions.product_ids,'$[*]' COLUMNS (product_id INT PATH '$')) product_json; -- insertar dades a taula intermitja
SELECT * 
FROM products_transactions;

-- Exercici 1
-- Necessitem conèixer el nombre de vegades que s'ha venut cada producte.
SELECT products.id, products.product_name, COUNT(*) AS qty_sold
FROM transactions
JOIN products_transactions ON transactions.id = products_transactions.transaction_pk
JOIN products ON products_transactions.products_id = products.id
WHERE transactions.declined = 0
GROUP BY products.id, products.product_name
ORDER BY qty_sold DESC;


