document.querySelector("#btn").addEventListener("click",function()
{
let request = new XMLHttpRequest()//СОЗДАТЬ ЗАПРОС
//request setup
request.open('GET', "data.json",false)
request.send()
if(request.status==200)
{
    console.log(request.responseText)
    document.querySelector("#result").innerHTML=request.responseText
}
})



