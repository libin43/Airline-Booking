let BASE_URL;

if(import.meta.env.MODE === 'production'){
    BASE_URL = ''
}
else{
    BASE_URL = 'http://localhost:7000/api/v1'
}

export  {BASE_URL}