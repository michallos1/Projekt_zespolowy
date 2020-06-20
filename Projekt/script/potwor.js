class potwor {
    constructor() {
        this.Hp = 10;
        this.Atk = 1;
    }

    ustaw(lvl) {
        this.Hp = 10 + lvl * 5;
        this.Atk = lvl * 2;
        console.log('Hp potwora: ' + parseInt(this.Hp, 10));
        console.log('Atak potwora: ' + parseInt(this.Atk, 10));
    }

    walka(Klasa) {
        do {
            this.Hp -= Klasa.Attack;
            console.log('Hp potwora: ' + parseInt(this.Hp, 10));
			if(Klasa.Mana>=6)
			{this.Hp -= Klasa.Int;
			 Klasa.Mana-=6;}


            if (this.Hp < 1) {
                return 1; //wygrana walka 
            }

            Klasa.Hp -= this.Atk - Klasa.Def;
            console.log("Hp postaci: " + parseInt(Klasa.Hp, 10));
        } while (Klasa.Hp > 0);

        return 0; // przegrana walka	
    }

    walka_boss(Klasa) {

        do {

            let at1 = Math.random() * (this.Atk + 5) + this.Atk;
            let at2 = Math.random() * (this.Atk + 1) + (this.Atk / 2);
            console.log('At1: ' + at1 + " At2: " + at2);
            this.Hp -= Klasa.Attack;
			if(Klasa.Mana>=6)
			{this.Hp -= Klasa.Int;
			 Klasa.Mana-=6;}
            console.log('Hp potwora: ' + parseInt(this.Hp, 10));

            if (this.Hp < 1) {
                return 1; //wygrana walka 
            }

            Klasa.Hp -= parseInt(random(at2, at1) - Klasa.Def);
            console.log("Hp postaci: " + parseInt(Klasa.Hp, 10));

        } while (Klasa.Hp > 0);
    }

};

function random(min, max) {
    return Math.random() * (max - min) + min;
}