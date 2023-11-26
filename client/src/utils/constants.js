let BASE_URL;

if(import.meta.env.MODE === 'production'){
    BASE_URL = 'https://airline-server.onrender.com/api/v1'
}
else{
    BASE_URL = 'http://localhost:7000/api/v1'
}

export  {BASE_URL}