/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {url, headers, data, responseType, method}, callback) => {
    let request = new XMLHttpRequest();
    function callback(err, response) {
        console.log(err);
        console.log(response);
    }
    
    if(options.method === 'GET') {
        request.open('GET', `https://bhj-diplom.letsdocode.ru?mail=${options.data.mail}&password=${options.data.password}`, true)
    } else {        
        request.open('POST', 'https://bhj-diplom.letsdocode.ru')
    };

    request.withCredentials = true;

    request.addEventListener('readystatechange', function() {
        if((request.readyState == 4) && (request.status == 200)) {
            callback(null, request.response);
        } else {
            callback(request.response, null);
        }
    });

   
    if(options.method === 'GET') {
        request.send();
    } else {
        let requestData = new FormData();
        requestData.append('mail', `${options.data.mail}`);
        requestData.append('password',`${options.data.password}`)
        request.send(requestData);

    }

}
