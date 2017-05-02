# cupomFacil

### Como instalar e usar a API
* Ir dentro da pasta `backend` e abrir um terminal
* Executar `npm install`
* Executar `npm run dev`
* Pronto! A API já está rodando. Para fazer testes, ir ao postman e no campo de texto colocar `localhost:3003/api/person/`.
Isso permitirá que você use a rota, que possui os seguintes métodos implementados: **GET**, **GET** w/ ID, **POST**, **PUT**.
* Observação: Para executar o **POST** e/ou **PUT**, o modelo de `body` necessário é: 
```javascript
firstName: Saymon
lastName: Souza
cpf: 12345678910
dob: 05022017
phone: 12345679
```


### Como instalar e usar o Dashboard
* Ir dentro da pasta `frontend` e abrir um terminal
* Executar `npm install`
* Executar `npm run dev`
* Ir em um navegador, Chrome de preferência, e no campo de texto colocar: `http://localhost:3000/#!/dashboard` e pronto!
