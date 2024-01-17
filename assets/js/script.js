const form = document.querySelector("#formIMC");
form.addEventListener('submit',function verificarResultado(event){
        event.preventDefault();
        const resultado = form.querySelector('#resultado');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        let obj = objImc.setImc(peso.value,altura.value);
    
            
        resultado.innerHTML= ` ${objImc.imc && "Seu IMC é:"+objImc.imc+"."} ${objImc.msg}`;
        resultado.classList.remove(resultado.classList.item[0]);
        resultado.classList.add(objImc.cor);
           
})



let objImc = {
    imc: null,
    msg:null,
    cor:null,
    setImc: function(peso,altura){
        this.imc = (peso/(altura**2)).toFixed(2);
        switch (true) {
            case (this.imc < 16) && (this.imc > 15):
                this.setMensagem(` magreza grave (menor que 16).`);
                this.setCor("color-red");
                break;
            case (this.imc > 16) && (this.imc < 17):
                this.setMensagem(` magreza moderada (entre 16 e 16,9).`);
                this.setCor("color-orangered");
                break;
            case (this.imc >= 17) && (this.imc < 18.5):
                this.setMensagem(` magreza leve(menor que 16)`);
                this.setCor("color-orange");
                break;
            case (this.imc > 18.5 && this.imc < 25):
                this.setMensagem(` peso normal`);
                this.setCor("color-green");
                break;
            case (this.imc >= 25) && (this.imc < 30):
                this.setMensagem(` sobrepeso.`);
                this.setCor("color-coral");
                break;
            case (this.imc >= 30) && (this.imc < 35):
                this.setMensagem(` obesidade grau 1.`);
                this.setCor("color-orange");
                break;
            case (this.imc >= 35) && (this.imc < 40):
                this.setMensagem(` obesidade severa (Grau 2).`);
                this.setCor("color-orangered");
                break;
            case (this.imc >= 40):
                this.setMensagem(` obesidade mórbida (Grau 3).`);
                this.setCor("color-red");
                break;
            default:
                this.imc=0;
                this.setMensagem("dados invalidos, tente novamente");
                this.setCor("color-coral");
                break;
        }
    },
    getImc: function(){
        return this.msg;
    },
    getMensagem: function(){
        return this.msg;
    },

    setMensagem:function(msg){
        this.msg = msg;
    },
    getCor: function(){
        return this.cor;
    },
    setCor: function (cor) { 
        this.cor = cor;
     },
}
  