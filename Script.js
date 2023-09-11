
document.addEventListener('DOMContentLoaded', (event) => {
    let listaCarro = [
        {
            "nome": "Audi",
            "img": "img/audi.jpg",
            "Resumo": "Mesmo sendo um cupê, o Audi A5 tem dimensões generosas: 4,62 metros de comprimento, 2,75 metros de entre eixos, 1,85 metro de largura e 1,37 metro de altura, o que garantia conforto e espaço de sobra para seus quatro ocupantes e com um bom porta malas com 455 litros para bagagens."
        },

        {
            "nome": "BMW M3",
            "img": "img/bmwm3.jpg",
            "Resumo": "O M3 2023 traz motor 3.0 turbo a gasolina, de seis cilindros em linha e 24 válvulas. O motor gera 510 cv de potência e 66,3 kgfm de torque máximo. A aceleração de 0 a 100 km/h é realizada em 3,9 segundos e a velocidade máxima é de 290 km/h."
        },

        {
            "nome": "GTR",
            "img": "img/Gtr.jpg",
            "Resumo": "Medindo 4,710 m de comprimento, 1,895 m de largura, 1,370 m de altura e 2,780 m de entre eixos, o Nissan GT-R tem um porta-malas de 315 litros, com iluminação. O tanque de combustível tem 74 litros. Os bancos dianteiros com encostos basculantes manuais."
        },

        {
            "nome": "Jetta",
            "img": "img/jetta.jpg",
            "Resumo": "O VW Jetta GLI 2023 traz motor 2.0 350 TSI, a gasolina, de quatro cilindros, aliado ao câmbio automatizado de dupla embreagem e sete marchas. Este propulsor gera 231 cv de potência a 5.000 rpm e torque máximo de 35,7 kgfm a 1.500 rpm"
        },

        {
            "nome": "Mercedes",
            "img": "img/mercedes.jpg",
            "Resumo": "O A 35 Sedan vem equipado com um motor 2.0 turbo, com injeção direta, que gera 360 cv de potência e 40,8 kgfm de torque. Ele também possui um câmbio automático de dupla embreagem e 7 marchas com tração integral sob demanda 4Matic."
        },

        {
            "nome": "Supra",
            "img": "img/Supra.jpg",
            "Resumo": "O Supra possui linhas agressivas e um aerofólio para gerar sustentação negativa e dar mais esportividade ao design do carro. O Supra é equipado com muita tecnologia, dispõe de controle de tração e uma excelente capacidade de frenagem."
        },
    ]

    listaCarro.map((carro, posicao) => {
        let cardCarro = document.getElementById("cards");
        if (cardCarro) {
            let newCard = document.createElement('div');
            newCard.classList.add('col');
            newCard.innerHTML = `
                <div class="col-md-4">
                <div class="card" style="width: 20rem;">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <p class="card-text">${carro.Resumo}</p>
                        <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"><i class=" bi bi-zoom-bi"></a>
                    </div>
                </div>
            `;
            cardCarro.appendChild(newCard);

            console.log(posicao);
        } else {
            console.error('Element with ID "cards" not found');
        }
    });

    function zoomImg(posicao) {
        let carroSelecionado = listaCarro[posicao];
        document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
        document.getElementById("resumoCarro").innerHTML = carroSelecionado.Resumo;
        document.getElementById("imgModal").src = carroSelecionado.img;

        new bootstrap.Modal('#zoomImg').show();
    }
});