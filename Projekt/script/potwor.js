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


};

function walka(Klasa) {
    p = ustaw(Klasa.lvl);
    do {
        p.Hp -= (Klasa.Attack - p.Def);
        Klasa.Hp -= (p.Atk - Klasa.Def);
    } while (Klasa.Hp > 0 && p.Hp > 0);

    if (p.Hp < 1)
        return 1; //wygrana walka 

    return 0; // przegrana walka	
}