let cep = 36045440
let endpoint = `https://viacep.com.br/ws/${cep}/json`;
let response =  fetch(endpoint, {
    method: "GET"
})
.then(async (res) => {
console.log(await res.json());
});