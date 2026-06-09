const estados = [
    {
        nome: "S1",
        tempo: 10,
        horizontal: "verde",
        vertical: "vermelho"
    },
    {
        nome: "S2",
        tempo: 3,
        horizontal: "amarelo",
        vertical: "vermelho"
    },
    {
        nome: "S3",
        tempo: 10,
        horizontal: "vermelho",
        vertical: "verde"
    },
    {
        nome: "S4",
        tempo: 3,
        horizontal: "vermelho",
        vertical: "amarelo"
    }
];

const estadosBinarios = {
    S1: "0001",
    S2: "0010",
    S3: "0011",
    S4: "0100",
    SP: "0101",
    SE: "0110"
};

let indiceEstado = 0;
let tempoRestante = estados[0].tempo;

let modoPedestre = false;
let modoEmergencia = false;

let veiculoA = false;
let veiculoB = false;

const pedestreAnimado =
    document.getElementById("pedestre");

function apagarLuzes() {

    document
        .querySelectorAll(".luz")
        .forEach(luz => luz.classList.remove("ativo"));
}

function atualizarSemaforos() {

    apagarLuzes();

    const estado = estados[indiceEstado];

    document.getElementById("estado").innerText =
        `Estado: ${estado.nome}
Binário: ${estadosBinarios[estado.nome]}`;

    document.getElementById("contador").innerText =
        `Tempo: ${tempoRestante}`;

    const semaforoHorizontal =
        document.querySelector("#semaforo-horizontal");

    const semaforoVertical =
        document.querySelector("#semaforo-vertical");

    semaforoHorizontal
        .querySelector("." + estado.horizontal)
        .classList.add("ativo");

    semaforoVertical
        .querySelector("." + estado.vertical)
        .classList.add("ativo");
}

function definirTempoEstado() {

    const estadoAtual =
        estados[indiceEstado];

    if (
        estadoAtual.nome === "S1" &&
        veiculoA &&
        !veiculoB
    ) {
        return 15;
    }

    if (
        estadoAtual.nome === "S3" &&
        veiculoB &&
        !veiculoA
    ) {
        return 15;
    }

    return estadoAtual.tempo;
}

function iniciarCiclo() {

    setInterval(() => {

        if (
            modoPedestre ||
            modoEmergencia
        ) {
            return;
        }

        tempoRestante--;

        if (tempoRestante <= 0) {

            indiceEstado++;

            if (
                indiceEstado >= estados.length
            ) {
                indiceEstado = 0;
            }

            tempoRestante =
                definirTempoEstado();
        }

        atualizarSemaforos();

    }, 1000);
}

function alternarViaA() {

    veiculoA = !veiculoA;

    document.getElementById("statusViaA")
        .innerText =
        veiculoA
            ? "🚗 Via A: Veículo detectado"
            : "🚗 Via A: Livre";
}

function alternarViaB() {

    veiculoB = !veiculoB;

    document.getElementById("statusViaB")
        .innerText =
        veiculoB
            ? "🚙 Via B: Veículo detectado"
            : "🚙 Via B: Livre";
}

function pedestre() {

    if (
        modoPedestre ||
        modoEmergencia
    ) {
        return;
    }

    modoPedestre = true;

    let posicao = 330;

    pedestreAnimado.style.display =
        "block";

    pedestreAnimado.style.left =
        "330px";

    pedestreAnimado.style.top =
        "160px";

    document.getElementById("estado")
        .innerText =
        `Estado: SP
Binário: ${estadosBinarios.SP}`;

    document.getElementById("contador")
        .innerText =
        "Travessia";

    apagarLuzes();

    const animacao = setInterval(() => {

        posicao += 2;

        pedestreAnimado.style.left =
            posicao + "px";

        if (posicao >= 620) {

            clearInterval(animacao);

            pedestreAnimado.style.display =
                "none";

            modoPedestre = false;

            atualizarSemaforos();
        }

    }, 30);
}

function emergencia() {

    if (modoEmergencia) {
        return;
    }

    modoEmergencia = true;

    document.getElementById("estado")
        .innerText =
        `Estado: SE
Binário: ${estadosBinarios.SE}`;

    document.getElementById("contador")
        .innerText =
        "Corredor de emergência";

    apagarLuzes();

    document
        .querySelector(
            "#semaforo-horizontal .verde"
        )
        .classList.add("ativo");

    document
        .querySelector(
            "#semaforo-vertical .vermelho"
        )
        .classList.add("ativo");

    setTimeout(() => {

        modoEmergencia = false;

        atualizarSemaforos();

    }, 5000);
}

const carroH =
    document.getElementById("carroH");

const carroV =
    document.getElementById("carroV");

let posH = 20;
let posV = 20;

function moverCarros() {

    const estadoAtual =
        estados[indiceEstado];

    const linhaParadaH = 290;
    const linhaParadaV = 140;

    if (
        !modoPedestre &&
        !modoEmergencia
    ) {

        if (
            estadoAtual.horizontal ===
                "verde" ||
            posH > linhaParadaH
        ) {
            posH += 2;
        }

        if (posH > 1000) {
            posH = -80;
        }

        carroH.style.left =
            posH + "px";
    }

    if (
        !modoPedestre &&
        !modoEmergencia
    ) {

        if (
            estadoAtual.vertical ===
                "verde" ||
            posV > linhaParadaV
        ) {
            posV += 2;
        }

        if (posV > 650) {
            posV = -80;
        }

        carroV.style.top =
            posV + "px";
    }

    requestAnimationFrame(
        moverCarros
    );
}

atualizarSemaforos();
iniciarCiclo();
moverCarros();