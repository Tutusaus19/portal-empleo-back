INSERT INTO users (
  first_name, surname, email, password, mobile, area, description, knowledge, experience, location, availability, photo, CV, url_linkedIn, url_github, url_portfolio
) VALUES (
  'Carlos', 'Tutusaus', 'ctutusaus@connectingvisionsgroup.com', 'tutusaus19', '664623997', 'Developer', 'Hola soy Carlos el gran programador', 'JavaScript', '2 años', 'Madrid', 'Remoto','https://connectingvisionsgroup.com/wp-content/uploads/2021/11/Equipo-1.png', 'https://ac6377091.sharepoint.com/sites/ConnectingVisionsGroup/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FConnectingVisionsGroup%2FDocumentos%20compartidos%2F7%2D%20Marketing%2F7%2E10%20Prensa%2FPrensa%20%2D%20CV%20%26%20Armendariz%20PR%2FClipping%2F2022%2007%2E%20JULIO%2FExpansi%C3%B3n%2020072022%2Epdf&parent=%2Fsites%2FConnectingVisionsGroup%2FDocumentos%20compartidos%2F7%2D%20Marketing%2F7%2E10%20Prensa%2FPrensa%20%2D%20CV%20%26%20Armendariz%20PR%2FClipping%2F2022%2007%2E%20JULIO&p=true&wdLOR=cB960517A%2D7C35%2D4658%2DA092%2DA1E86D7C5C4A&ct=1658332465373&or=Outlook-Body&cid=A0F7144F-C6A4-4618-8552-330C351E1C8D&ga=1','https://www.linkedin.com/in/carlos-tutusaus-tejedor-a11810139/', 'https://github.com/Tutusaus19', 'https://connectingvisionsgroup.com' 
);

INSERT INTO accounts (
  account_name, description, sector 
) VALUES (
  'Google', 'Empresa tecnológica', 'Tecnología'
);

INSERT INTO offers (
    cuenta_id, title_position, area_position, knowledge, location, experience, availability, salarie_min, salarie_max, public_salarie, description 
) VALUES (
  (SELECT id FROM accounts WHERE account_name = 'Google' LIMIT 1),'Full Stack Developer', 'Developer', 'JavaScript', 'Madrid', '2 años', 'Remoto', '30000', '45000', 'true', 'Buscamos a un full stack developer'
);

INSERT INTO applied (
    talent_id, offer_id
) VALUES (
    (SELECT id FROM users WHERE first_name ='Carlos' LIMIT 1), (SELECT id FROM offers WHERE title_position = 'Full Stack Developer' LIMIT 1) 
);

INSERT INTO contacts (
  cuenta_id, first_name, surname, puesto, email, mobile, url_linkedin, photo
) VALUES (
  (SELECT id FROM accounts WHERE account_name = 'Google' LIMIT 1), 'David', 'Gassó', 'CTO', 'dgarcia@connectingvisionsgroup.com', '664634665', 'https://connectingvisionsgroup.com/wp-content/uploads/2021/11/Equipo6.png', 'https://connectingvisionsgroup.com/wp-content/uploads/2021/11/Equipo6.png'
);