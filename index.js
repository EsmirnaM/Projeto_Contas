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
.then((answer) => {

    const action = answer['action']

    if (action === 'Criar Conta') {
        createAccount()
    } 

})
.catch((err) => console.log(err))
}

//criar conta

function createAccount() {
    console.log(chalk.bgGreen.black('Parábens por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
}
