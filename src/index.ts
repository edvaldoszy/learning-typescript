var Exception = function(mensagem, codigo, dados) {
    this.codigo = (mensagem.codigo || codigo);
    this.mensagem = (mensagem.mensagem || mensagem);
    this.dados = (mensagem.dados || dados);
    
    Error.call(this);
};
Exception.prototype.toString = function() {
    return JSON.stringify(this);
}

function test(a, throwException) {
    if (throwException) {
        throw new Exception("You threw a new Exception", 0, null);
    }

    console.log("You sent me " + a + " number");
}

try {
    test(1, true);
} catch (ex) {
    if (ex instanceof Exception) {
        console.error("Exception");
    }

    console.error(ex.stack);
}