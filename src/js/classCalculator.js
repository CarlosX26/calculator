
class Calculator {
    constructor(){
        this.actualValue   = ""
    }
    
    showActions(action){
        const display = document.querySelector(".box-results p")
        display.innerHTML  = ""
        display.innerText  = action
    }

    makeActions(){
        const numbers   = document.querySelectorAll(".number")
        const operators = document.querySelectorAll(".operator")
        const limpaCalc = document.querySelector(".limpa-calc")
        const btnIgual  = document.querySelector(".btn__igual")

        numbers.forEach(num=> num.addEventListener("click", (e)=>{
            this.actualValue += e.target.innerText
            this.showActions(this.actualValue)
        }))

        operators.forEach(oper=> oper.addEventListener("click", (e)=>{
            const operacao = e.target.innerText
            
            if(!this.actualValue.includes(operacao)){
                this.actualValue += operacao
                this.showActions(this.actualValue)
            }

        }))

        limpaCalc.addEventListener("click", ()=>{
            this.actualValue = ""
            this.showActions(this.actualValue)
        })

        btnIgual.addEventListener("click", ()=>{
            const str = this.actualValue
            if(str.includes("+")){
                const toArr = this.actualValue.split("+")
                
                const res = toArr.map(num=> Number(num)).reduce((acc, acv)=> acc + acv , 0)

                this.showActions(res)

            }
            if(str.includes("-")){
                const toArr = this.actualValue.split("-")

                const res = toArr.map(num=> Number(num)).reduce((acc, acv)=> acc - acv)

                this.showActions(res)
                
            }
            if(str.includes("x")){
                const toArr = this.actualValue.split("x")

                const res = toArr.map(num=> Number(num)).reduce((acc, acv)=> acc * acv)

                this.showActions(res)
                
            }
            if(str.includes("÷")){
                const toArr = this.actualValue.split("÷")
                
                const res = toArr.map(num=> Number(num)).reduce((acc, acv)=> acc / acv)

                this.showActions(res)
            }
            this.actualValue = ""
        })
    }


}

export default Calculator