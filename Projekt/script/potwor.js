class potwor {
    constructor() {
        this.Hp = 10;
        this.Atk = 1;
        this.Def = 1;
    }

    ustaw(lvl) {
        this.Hp += lvl * 5;
        this.Atk += lvl;
        this.Def += (1 / 3) * lvl;
        console.log('Hp potwora: ' + this.Hp);
        console.log('Atak potwora: ' + this.Atk);
        console.log('Obrona potwora: ' + this.Def);
    }

    walka(Klasa) {
        do {
            this.Hp -= (Klasa.Attack - this.Def);
            console.log('Hp potwora: ' + this.hp);

            if (this.Hp < 1) {
                return 1; //wygrana walka 
            }

            Klasa.Hp -= (this.Atk - Klasa.Def);
            console.log("Hp postaci: " + Klasa.hp);
        } while (Klasa.Hp > 0);

        return 0; // przegrana walka	
    }
};