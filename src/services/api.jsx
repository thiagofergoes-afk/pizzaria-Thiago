import axios from "axios";

const api = axios.create({

 baseURL: "http://172.19.49/pizzariateste/api/v1",
    timeout: 100000  // tempo máximo de resposta (10 segundos)
 

})

export default api 

//Utilize em baseURL
//https://172.19.49/pizzariateste/api/v1 -> API do professor "so funcionana escola"

//https:localhost:8080/endereço_da_sua_api -> API do aluno, greralmente api localrodando na porta 8080 (spring boot)


