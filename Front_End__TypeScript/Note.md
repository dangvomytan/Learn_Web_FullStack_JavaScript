1. Khởi tạo.
-------------------------------------------------------------------------------
	npm init
-------------------------------------------------------------------------------
"scripts": 
{
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":  "nodemon index.ts"
}


2. Cài đặt thư viện.
-------------------------------------------------------------------------------
	npm i typescript ts-node ts-lib express cors body-parser multer
-------------------------------------------------------------------------------
"dependencies": 
{
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "ts-lib": "^0.0.5",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.6"
  }
-----------------------------------------------------------------------------------------------------------------------
	npm i nodemon @types/node @types/cors @types/express  @types/multer  @types/body-parser  --save-dev 
-----------------------------------------------------------------------------------------------------------------------
"devDependencies": 
{
    "@types/body-parser": "^1.19.2",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/multer": "^1.4.7",
    "@types/node": "^20.4.5",
    "nodemon": "^3.0.1"
  }