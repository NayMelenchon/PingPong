class VerifyWinner{
    constructor(c, placar){
        this.c = c;
        this.placar = placar;
    }
 
    draw(){
        if (pontoJogador1 == 7 || pontoJogador2 == 7)
        {
            if (pontoJogador1 > pontoJogador2)
            {
                setTimeout(() => {
                    textWinner = "Parabés, você venceu!";
                    this.placar.resetScore();
                },1000);
            }
            
            else
            {
                setTimeout(() => {
                    textWinner = "O CPU venceu!";
                    this.placar.resetScore();
                },1000);
            }
        }

        this.c.font = "70px arial";
        this.c.fillStyle = "black";
        this.c.fillText(textWinner, 100, this.c.canvas.height - 100, this.c.canvas.width);
    }
}
