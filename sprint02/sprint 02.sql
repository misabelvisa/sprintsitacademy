-- Tasca S2.01. Nocions bàsiques SQL
USE transactions;

-- Nivell 1
-- Exercici 1
-- A partir dels documents adjunts (estructura_dades i dades_introduir), importa les dues taules. Mostra les característiques principals de l'esquema creat 
-- i explica les diferents taules i variables que existeixen. Assegura't d'incloure un diagrama que il·lustri la relació entre les diferents taules i variables.
-- EXPLICAT A PDF
-- Comprovacions inicials:
-- Número registres company:
SELECT COUNT(*)
FROM company;
-- Duplicats company:
SELECT DISTINCT COUNT(*)
FROM company;
-- Número registres transaction:
SELECT COUNT(*)
FROM transaction;
-- Duplicats transaction:
SELECT DISTINCT COUNT(*)
FROM transaction;
-- Empreses amb transaccions:
SELECT DISTINCT company_id
FROM transaction;

-- Exercici 2
-- Utilitzant JOIN realitzaràs les següents consultes:
-- o	Llistat dels països que estan generant vendes.
SELECT DISTINCT country
FROM transaction
JOIN company
ON transaction.company_id = company.id;

-- o	Des de quants països es generen les vendes.
SELECT COUNT(DISTINCT country) AS num_paisos_vendes
FROM transaction
JOIN company
ON transaction.company_id = company.id;

-- o	Identifica la companyia amb la mitjana més gran de vendes.
SELECT DISTINCT company.id, company.company_name, mitjana_vendes
FROM (	SELECT company_id, ROUND(AVG(amount), 2) AS mitjana_vendes
		FROM transaction
        WHERE declined = 0
        GROUP BY company_id) AS mitjana_vendes_emp
JOIN company ON mitjana_vendes_emp.company_id = company.id
ORDER BY mitjana_vendes DESC
LIMIT 1;

-- Exercici 3
-- Utilitzant només subconsultes (sense utilitzar JOIN):
-- o	Mostra totes les transaccions realitzades per empreses d'Alemanya.
SELECT *
FROM transaction
WHERE company_id IN (	SELECT id
						FROM company
                        WHERE country = "Germany")
AND declined = 0;

-- o	Llista les empreses que han realitzat transaccions per un amount superior a la mitjana de totes les transaccions.
SELECT id, company_name
FROM company
WHERE id IN (	SELECT company_id
				FROM transaction
                WHERE declined = 0 
                AND amount > (	SELECT AVG(amount)
								FROM transaction
                                WHERE declined = 0));

-- o	Eliminaran del sistema les empreses que no tenen transaccions registrades, entrega el llistat d'aquestes empreses.
SELECT id, company_name
FROM company
WHERE id NOT IN (	SELECT DISTINCT company_id
					FROM transaction);

-- Nivell 2
-- Exercici 1
-- Identifica els cinc dies que es va generar la quantitat més gran d'ingressos a l'empresa per vendes. 
-- Mostra la data de cada transacció juntament amb el total de les vendes.
SELECT DATE(timestamp) AS data, SUM(amount) AS total_vendes
FROM transaction
WHERE declined = 0
GROUP BY DATE(timestamp)
ORDER BY total_vendes DESC
LIMIT 5;

-- Exercici 2
-- Quina és la mitjana de vendes per país? Presenta els resultats ordenats de major a menor mitjà.
SELECT company.country, ROUND(AVG(transaction.amount), 2) AS mitjana_vendes
FROM transaction
JOIN company ON transaction.company_id = company.id
WHERE declined = 0
GROUP BY company.country
ORDER BY mitjana_vendes DESC;

-- Exercici 3
-- En la teva empresa, es planteja un nou projecte per a llançar algunes campanyes publicitàries per a fer competència a la companyia "Non Institute". 
-- Per a això, et demanen la llista de totes les transaccions realitzades per empreses que estan situades en el mateix país que aquesta companyia.
-- o	Mostra el llistat aplicant JOIN i subconsultes.
SELECT transaction.id, transaction.credit_card_id, transaction.company_id, transaction.user_id, transaction.lat, 
	transaction.longitude, transaction.timestamp, transaction.amount, transaction.declined
FROM transaction
JOIN company ON transaction.company_id = company.id
WHERE company.country = ( SELECT country
							FROM company
							WHERE company_name = "Non Institute")
AND company_name != "Non Institute"
AND transaction.declined = 0;

-- o	Mostra el llistat aplicant solament subconsultes.
SELECT *
FROM transaction
WHERE company_id IN ( 	SELECT id
						FROM company
                        WHERE  company_name != "Non Institute"
                        AND country = (	SELECT country
											FROM company
											WHERE company_name = "Non Institute"))
AND declined = 0;

-- Nivell 3
-- Exercici 1
-- Presenta el nom, telèfon, país, data i amount, d'aquelles empreses que van realitzar transaccions amb un valor comprès entre 350 i 400 euros 
-- i en alguna d'aquestes dates: 29 d'abril del 2015, 20 de juliol del 2018 i 13 de març del 2024. Ordena els resultats de major a menor quantitat.
SELECT company.company_name, company.phone, company.country, DATE(transaction.timestamp) AS data, transaction.amount
FROM transaction
JOIN company ON transaction.company_id = company.id
WHERE transaction.amount BETWEEN 350 AND 400 
AND DATE(transaction.timestamp) IN ("2015-04-29", "2018-07-20", "2024-03-13")
AND transaction.declined = 0
ORDER BY transaction.amount DESC;

-- Exercici 2
-- Necessitem optimitzar l'assignació dels recursos i dependrà de la capacitat operativa que es requereixi, per la qual cosa et demanen la informació 
-- sobre la quantitat de transaccions que realitzen les empreses, però el departament de recursos humans és exigent i vol un llistat de les empreses 
-- on especifiquis si tenen més de 400 transaccions o menys.
SELECT company.company_name, COUNT(transaction.id) AS qty_transaccions,
	CASE 
        WHEN COUNT(transaction.id) > 400 THEN 'més de 400'
        ELSE '400 o menys'
    END AS classificacio
FROM transaction
JOIN company ON transaction.company_id = company.id
GROUP BY company.company_name;


