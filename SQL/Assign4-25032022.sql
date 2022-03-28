-- 1) count of order per customer between 1st august to 15th august
SELECT rental.customer_id, concat(customer.first_name, '  ' , customer.last_name), count(rental.inventory_id) AS order_count
FROM rental
JOIN customer 
ON rental.customer_id = customer.customer_id
WHERE rental.rental_date 
BETWEEN '08-01 00:00:00' AND '2005-08-15 00:00:00'
GROUP BY rental.customer_id
ORDER BY rental.customer_id;


-- 2)all customers whose orders quantity is greater than 100
SELECT customer.customer_id, customer.first_name, customer.last_name, count(payment.payment_id) AS order_count FROM payment
JOIN customer ON payment.customer_id = customer.customer_id
GROUP BY payment.customer_id
HAVING order_count > 40
ORDER BY order_count DESC;


-- 3) Find customers product
SELECT customer.customer_id, concat(customer.first_name, '  ',customer.last_name), film.title
FROM customer 
INNER JOIN rental
ON customer.customer_id = rental.customer_id
INNER JOIN inventory 
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film 
ON inventory.film_id = film.film_id
ORDER BY customer.customer_id;


-- 4) total price of products bought by each customer
SELECT concat(customer.first_name, '  ', customer.last_name) AS customer_name, 
sum(payment.amount) AS Total
FROM payment
JOIN customer
ON customer.customer_id = payment.customer_id
GROUP BY payment.customer_id;
