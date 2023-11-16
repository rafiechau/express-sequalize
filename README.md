# CRUD express with sequalize

Basic express.js project with basic routes:
* Express
* Joi
* Sequalize
* Mysql2
* Sequalize-cli

---

## URL

_Server_
```
http://localhost:3000
```
---

## Global Response

_Response (404 - Not Found)_
```
{
  "message": "API Not Found"
}
```
---

## RESTful endpoints

### POST /api/categories/add
> Create categories

_Request Header_
```
not needed
```

_Request Body_
```
{
  "title" : "<title>"
}
```
_Response (200)_
```
{
    "data": {
      "id": <id>,
      "title": <title>,
      "updatedAt": <updatedAt>,
      "createdAt": <createdAt>
    },
    "message": "Category berhasil ditambahkan"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"title\" is required"
}
```
```
{
    "message": "Category sudah digunakan"
}
```

### POST /api/user/add
> Create user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "name": "<name>",
  "email": "<email>",
  "password": "<password>"
}
```
_Response (200)_
```
{
    "data": {
      "id": <id>,
      "name": "<name>",
      "email": "<email>",
      "password": "<password>"
      "updatedAt": <updatedAt>,
      "createdAt": <createdAt>
    },
    "message": "User berhasil ditambahkan"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"name\" is required"
}
```
_Response (404)_
```
{
    "message": "Pengguna tidak ditemukan"
}
```

### POST /api/orders/add
> Create orders

_Request Header_
```
not needed
```

_Request Body_
```
{
    "userId": <userId>,
    "productId": <productId>,
    "orderDate": "<orderDate>",
    "status": "<status>",
    "quantity": <quatity>
}
```
_Response (200)_
```
{
    "data": {
       <data_order>
    },
    "message": "Order berhasil ditambahkan"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"quantity\" is required"
}
```
_Response (404)_
```
{
    "message": "Product not found"
}
```
_Response (404)_
```
{
    "message": "User not found"
}
```
### POST /api/products/add
> Create product

_Request Header_
```
not needed
```

_Request Body_
```
{
    "title": "<title>",
    "description": "<description>",
    "stok": <stok>,
    "harga": <harga>,
    "categoryId": <categoryId>
}
```

_Response (200)_
```
{
    "data": {
       <data_product>
    },
    "message": "Product berhasil ditambahkan"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"description\" is required"
}
```

### GET /api/user
 > Get all user
_Request Params_

```
not needed

```

_Request Header_

```
not needed
```
_Response (200)_
```
{
    "data": {
        <data_user>
    },
    "message": "Success"
}
```

_Response (500)_
```
{
    "message": "Terjadi kesalahan dalam menampilkan list user"
}
```

### GET /api/categories
 > Get all categories

_Request Params_

```
not needed
```

_Request Header_

```
not needed
```
_Response (200)_
```
{
    "data": {
       <data_categories>
    },
    "message": "Success"
}
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan dalam menampilkan list category"
}
```

### GET /api/products/<categoryId>/categories
 > Get product by categories
_Request Params_

```
<categoryId>

```

_Request Header_

```
not needed
```
_Response (200)_
```
{
    "data": {
        <data_products>
    },
    "message": "Success"
}
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
### GET /api/orders/
 > Get by all orders
_Request Params_

```
not needed

```

_Request Header_

```
not needed
```
_Response (200)_
```
{
    "data": {
        <data_orders>
    },
    "message": "Success"
}
```
_Response (404)_
```
{
    "message": "Kategori tidak ditemukan"
}
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```

### PUT /api/user/edit/<userId>
> Update User
_Request Params_
```
/<userId>
```

_Request Header_
```
not needed
```

_Request Body_
```
{
    "name": "<name>",
    "email": "<email>",
    "password": "<password>"
}
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"name\" is required"
}
```
_Response (404)_
```
{
    "message": "Pengguna tidak ditemukan"
}
```
### PUT /api/categories/edit/<categoryId>
> Update Categories

_Request Params_
```
/<categoryId>
```

_Request Header_
```
not needed
```
_Request Body_
```
{
  "title": <title>
}
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"title\" is required"
}
```
_Response (404)_
```
{
    "message": "Category not found"
}
```
### PUT /api/products/edit/<productId>
> Update by Products
_Request Params_
```
/<productId>
```

_Request Header_
```
not needed
```
_Request Body_
```
{
     "title": "<title>",
    "description": "<description>",
    "stok": <stok>,
    "harga": <harga>,
    "categoryId": <categoryId>
}
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"description\" is required"
}
```
_Response (404)_
```
{
    "message": "Product not found"
}
```

### DELETE /api/categories/delete/3
> Delete categories by id
_Request Params_
```
/<categoryId>
```

_Request Header_
```
not needed
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```

_Response (404)_
```
{
    "message": "Category not found"
}
```
### DELETE /api/user/delete/2
> Delete user by id
_Request Params_
```
/<userId>
```

_Request Header_
```
not needed
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
_Response (404)_
```
{
    "message": "Pengguna tidak ditemukan"
}
```
### DELETE /api/products/delete/5
> Delete products by id
_Request Params_
```
/<productId>
```

_Request Header_
```
not needed
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
_Response (404)_
```
{
    "message": "Product not found"
}
```
### DELETE /api/orders/delete/1/6
> Delete orders by id
_Request Params_
```
/<userId>/<orderId>
```

_Request Header_
```
not needed
```
_Response (500)_
```
{
    "message": "Terjadi kesalahan server"
}
```
_Response (404)_
```
{
    "message": "User not found"
}
```
_Response (404)_
```
{
    "message": "Product not found"
}
```
