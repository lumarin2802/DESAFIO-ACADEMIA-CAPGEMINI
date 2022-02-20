

var escada = (degrau) => {
    var comeco = 1;
    while (0 != degrau) {
        console.log(" ".repeat(degrau - 1) + "*".repeat(comeco));
       degrau--;
        comeco++;
    }
}
escada(6);
