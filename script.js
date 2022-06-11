document.querySelector('#btn').addEventListener("click", function()
{
//1 -создать запрос
let request = new XMLHttpRequest() 

//2 - настройка запроса
request.open('GET', "data.json",false)

//3 - отправить
request.send()

//4 - получить ответ
if(request.status == 200)
{
    console.log(request.responseText)
    document.querySelector('#result').innerHTML = JSON.parse(request.responseText).name
}

})








