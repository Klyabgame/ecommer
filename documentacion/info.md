# Estandar base de datos

## MODULO USUARIO 

#### TABLA LOGIN
- id_login **PK NOT NULL AUTO_INCREMENT FOREING KEY**
- email **VARCHAR(20) NOT NULL** 
- password **VARCHAR(250) NOT NULL** 


#### TABLA REGISTRO
- id_registro **PK NOT NULL**

#### TABLA PERSONA
- dni **PK NOT NULL FOREING KEY**
- nombres **VARCHAR(35) NOT NULL**
- apellido_paterno **VARCHAR(20) NOT NULL**
- apellido_paterno **VARCHAR(20) NOT NULL**
- telefono **VARCHAR(9) NOT NULL**
---

## MODULO PRODUCTO
#### TABLA CATEGORIA
- id_categoria **PK NOT NULL AUTO_INCREMENT**
- categoria **VARCHAR(30) NOT NULL**

#### TABLA PRODUCTO
- id_producto **PK NOT NULL AUTO_INCREMENT**
- nombre_producto **VARCHAR(30) NOT NULL**
- descripcion **VARCHAR(255) NOT NULL**
- precio **DECIMAL(10,2) NOT NULL**
- stock **INT NOT NULL**

### TABLA MARCA
- id_marca **PK FOREING KEY NOT NULL AUTO_INCREMENT**
- marca **VARCHAR(30) NOT NULL**
---
## EJEMPLO DE PRODUCTO   
**NOMBRE PRODUCTO:** MOUSE   
**DESCRIPCION:** Mouse inalambrico de color negro   
**MARCA:** RAZER   
**CATEGORIA:** COMPUTO  
**PRECIO:** 100.00  
**STOCK:** 50

### TABLA VENTAS
- id_ventas PK PRIMARY KEY AUTO_INCREMENT
- 

