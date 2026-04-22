let salarioBruto = parseFloat(prompt("Digite o seu slario bruto mensal (ex: R$ 15.00):"));
let imposto = 0;
let aliquota = "";
let slarioposimposto =""

if (salarioBruto <= 5000.00){
    imposto = 0;
    aliquota = "Isento";
} else if (salarioBruto >= 5000.01 && salarioBruto<= 6500.00){
    imposto = salarioBruto * 0.075
    aliquota = "aliquoto de 7,5%"
}else if (salarioBruto >= 6500.01 && salarioBruto<= 8000.00){
    imposto = salarioBruto * 0.15
    aliquota = "aliquoto de 15%"
}else if (salarioBruto >= 8000.01 && salarioBruto<= 10000.00){
    imposto = salarioBruto * 0.225
    aliquota = "aliquoto de 22,5%"
}else{
    imposto = salarioBruto * 0.275
    aliquota = "aliquoto de 27,5%"
}
slarioposimposto = salarioBruto - imposto
alert(`salario bruto R$ ${salarioBruto.toFixed(2)}\n
aliquota aplicado:${aliquota}\n
valor com desconto de IR: ${imposto.toFixed(2)}\n
salario liquido: R$ ${slarioposimposto.toFixed(2)}`)
