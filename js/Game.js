class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gamaState = data.val();
        });
    }
    update(State){
        database.ref('/').update({
            gameState:State
        })
    }
    start(){
        if (gameState === 0) {
            player=new Player();
            form = new Form();
            form.display();
        }
    }
}