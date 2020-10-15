var url = "http://data.fixer.io/api/latest?access_key=________&base=EUR&symbols=USD,JPY,EUR,GBP"

function recupererValeur () {
    $.ajax({
        url: url,
        type: "GET",
        success: function (res,status,req) {
            var rates = res.rates
            var amount = document.getElementById("fromAmount").value
            var from = document.getElementById("from").value
            var to = document.getElementById("to").value
            var result = amount * rates[to] / rates[from]
            document.getElementById("toAmount").value = result
            console.log(rates);
        }
    })
}

