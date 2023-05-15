# Porto Harsenn API Documentation

&nbsp;

## Endpoints :

List of available endpoints:

- `POST /register`
- `PUT /active-store`
- `POST /login`
- `GET /product-id`
- `GET /product-all`
- `GET /product-image`

Routes below need authentication:

- `POST /product-create`
- `PUT /product/:id`
- `DELETE /product/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "full_name": "string",
  "password": "string",
  "birthday_date": "string",
  "username": "string"
}
```

_Response (200 - Created)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": "boolean"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Full name is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Username is required"
}
OR
{
  "message": "Birthday is required"
}
OR
{
  "message": "Try another username"
}
```

&nbsp;

## 2. PUT /active-store

Request:

- body:

```json
{
  "unique_code": "string"
}
```

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Your code is wrong'"
}
```

&nbsp;

## 3. post /login

Request:

- body:

```json
{
  "username_email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": {
    "token": "string"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Password is required"
}
OR
{
  "message": "Username or email is required"
}

```

&nbsp;

## 4. GET /product-id

_Response (200 - Ok)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": [
    {
    "name" : "string",
    "_id_" : "string",
    }
    ...
  ]
}
```

&nbsp;

## 5. GET /products-all

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": [
    {
    "product_name" : "string",
    "price" : "integer",
    "owner" : "string",
    "quantity" : "integer",
    "_id_" : "string",
    }
    ...
  ]
}
```

&nbsp;

## 6. GET /product-image

Request:

- query:

```json
{
  "id_product": "string"
}
```

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": {
    "image_name": "string",
    "_id_": "string"
  }
}
```


&nbsp;

## 7. POST /product-create

Request:

- Headers

```json
{
  "authorization": "string (JWT)"
}
```

- Body:

```json
{
  "name": "string",
  "quantity": "integer",
  "description": "string",
  "price": "integer",
  "image": "file",
}
```

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": "string"
}
```


_Response (400 - Bad Request)_

```json
{
  "message": "Name is required'"
}
OR
{
  "message": "Quantity is required'"
}
OR
{
  "message": "Description is required'"
}
OR
{
  "message": "Price is required'"
}
```


&nbsp;

## 8. PUT /products/:id

Request:

- Headers

```json
{
  "authorization": "string (JWT)"
}
```

- Params
```json
{
  "id": "string"
}
```

- Body:

```json
{
  "name": "string",
  "quantity": "integer",
  "description": "string",
  "price": "integer",
}
```

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": "boolean"
}
```


_Response (400 - Bad Request)_

```json
{
  "message": "Name is required'"
}
OR
{
  "message": "Quantity is required'"
}
OR
{
  "message": "Description is required'"
}
OR
{
  "message": "Price is required'"
}
```



&nbsp;

## 9. DELETE /products/:id

Request:

- Headers

```json
{
  "authorization": "string (JWT)"
}
```

- Params
```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "status_code": "integer",
  "code_number": "integer",
  "comments": "string",
  "data": "boolean"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "string"
}
```
