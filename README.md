# 🚦 Sistema de Semáforo Inteligente

Projeto desenvolvido para a disciplina de **Matemática Computacional**, com o objetivo de simular um cruzamento inteligente utilizando conceitos de lógica computacional, teoria dos conjuntos, representação binária e máquinas de estados.

## 📋 Sobre o Projeto

O sistema simula o funcionamento de um cruzamento urbano com:

* Semáforo horizontal e vertical;
* Controle automático de estados;
* Travessia de pedestres;
* Modo emergência;
* Sensores de presença de veículos;
* Representação binária dos estados;
* Veículos animados em tempo real.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript

## ⚙️ Funcionalidades

### 🚗 Controle de Tráfego

O sistema alterna automaticamente entre os estados dos semáforos:

* S1 – Via Horizontal Verde
* S2 – Via Horizontal Amarelo
* S3 – Via Vertical Verde
* S4 – Via Vertical Amarelo

### 🚶 Modo Pedestre

Ao pressionar o botão de pedestre:

* O ciclo normal é interrompido;
* Os veículos param;
* O pedestre atravessa a faixa;
* O estado SP é ativado.

### 🚑 Modo Emergência

Ao pressionar o botão de emergência:

* O sistema entra no estado SE;
* O ciclo normal é interrompido;
* A emergência recebe prioridade máxima.

### 📡 Sensores Inteligentes

O sistema possui sensores simulados:

* Sensor Via A
* Sensor Via B

Quando apenas uma via possui veículos, o tempo de sinal verde é ampliado para melhorar o fluxo do trânsito.

## 🔢 Representação Binária

| Estado | Binário |
| ------ | ------- |
| S1     | 0001    |
| S2     | 0010    |
| S3     | 0011    |
| S4     | 0100    |
| SP     | 0101    |
| SE     | 0110    |

## 🧠 Conceitos de Matemática Computacional Aplicados

* Teoria dos Conjuntos
* Lógica Proposicional
* Tabela-Verdade
* Representação Binária
* Máquina de Estados Finitos (FSM)

## 🌐 Demonstração

Hospedado no Vercel:

**Link:** https://semaforo-inteligente-theta.vercel.app/

## 👨‍💻 Integrantes

Nathan Kichel / 
Guilherme Fabricio / 
Gabriel Felipe de Faria

## 📚 Disciplina

Matemática Computacional

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.
