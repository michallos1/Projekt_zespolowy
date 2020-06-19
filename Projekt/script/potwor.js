class potwor {
    constructor() {
        this.Hp = 10;
        this.Atk = 1;
        this.Def = 0;
    }

    ustaw(lvl) {
        this.Hp += lvl * 5;
        this.Atk += lvl;
        this.Def += (1 / 3) * lvl;
        console.log('Hp potwora: ' + parseInt(this.Hp,10));
        console.log('Atak potwora: ' + parseInt(this.Atk,10));
        console.log('Obrona potwora: ' + parseInt(this.Def, 10));
    }

    walka(Klasa) {
        do {
            this.Hp -= (Klasa.Attack - this.Def);
            console.log('Hp potwora: ' + this.Hp);

            if (this.Hp < 1) {
                return 1; //wygrana walka 
            }

            Klasa.Hp -= (this.Atk - Klasa.Def);
            console.log("Hp postaci: " + Klasa.Hp);
        } while (Klasa.Hp > 0);

        return 0; // przegrana walka	
    }
};