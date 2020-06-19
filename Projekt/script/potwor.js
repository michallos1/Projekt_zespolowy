class potwor {
    constructor() {
        this.Hp = 10;
        this.Atk = 1;
    }

    ustaw(lvl) {
        this.Hp += lvl * 5;
        this.Atk += lvl;
        console.log('Hp potwora: ' + parseInt(this.Hp,10));
        console.log('Atak potwora: ' + parseInt(this.Atk,10));
    }

    walka(Klasa) {
        do {
            this.Hp -=Klasa.Attack  ;
            console.log('Hp potwora: ' + parseInt(this.Hp,10));

            if (this.Hp < 1) {
                return 1; //wygrana walka 
            }

            Klasa.Hp -= this.Atk - Klasa.Def;
            console.log("Hp postaci: " + parseInt(Klasa.Hp,10));
        } while (Klasa.Hp > 0);

        return 0; // przegrana walka	
    }
};