paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: 300 * document.getElementById("amount").value
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
            alert('Compra completada. Muchas gracias 😆');
        });
    },
    style: {
        layout: "horizontal"
    }
}).render('#paypal-button-container');

function replaceImage(url){
    document.getElementById("big_image").src = url;
}