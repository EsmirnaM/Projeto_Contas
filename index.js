//modulo externo

const inquirer = require('inquirer');
const chalk = require ('chalk')

//modulo internos

const fs = require('fs')

operation()

function operation(){

    inquirer
    .prompt([
        {
        type: 'list',
        name: 'action',
        message: 'Qual operação você deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ],
    },
])
.then()
.catch((err) => console.log(err))
}

