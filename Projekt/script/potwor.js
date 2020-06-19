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
    }
	walka(Klasa) {
    do {
        this.Hp -= (Klasa.Attack - this.Def);
        Klasa.Hp -= (this.Atk - Klasa.Def);
    } while (Klasa.Hp > 0 && this.Hp > 0);

    if (this.Hp < 1)
        return 1; //wygrana walka 

    return 0; // przegrana walka	
	}
};
