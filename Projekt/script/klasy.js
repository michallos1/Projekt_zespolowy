const statywoj = [1, 2, 3]; // int  dex  str
const statylucz = [1, 3, 2];
const statymag = [3, 2, 1];

class Klasa {
    constructor() {
        this.MaxHp = 0;
        this.MaxMana = 0;
        this.Lvl = 0;
        this.Exp = 0;
        this.ExpUp = 10
        this.Int = 0;
        this.Dex = 0;
        this.Str = 0;
        this.Gold = 10;
    }

    LevelUp(Int, Dex, Str) {}

    ExpToLvlUp(Lvl, Exp, ExpUp) {
        this.ExpUp = this.Exp + 10 + (this.Lvl * this.Lvl);
    }

}


class Wojownik extends Klasa {
    constructor() {
        super();
        this.Hp = 30;
        this.Def = 0;
        this.Mana = 0;
        this.Attack = 0;
        this.Ekwipunek = new Eq();
        this.Backpack = new Array(12);
    }

    LevelUp(Int, Dex, Str) {
        this.Int = this.Int + statywoj[0];
        this.Dex = this.Dex + statywoj[1];
        this.Str = this.Str + statywoj[2];
        this.lvl += 1;
        this.ExpToLvlUp();
    }

    Update_stats(Ekwipunek, Int, Dex, Str, Def, Mana, Attack) {
        this.Attack = this.Ekwipunek.Weapon + (this.Str / 3);
        this.Def = this.Ekwipunek.Armor + (this.Str / 2);
        this.MaxHp = 30 + this.Str;
        this.MaxMana = 10 + this.Int;
    }

    Update_backpack(slot, event) {
        curent = this.Backpack[slot];

        if (event == 'add') {
            this.Backpack[slot] = +1;
        } else if (event == 'dec') {
            this.Backpack[slot] = -1;
        } else {

        }

    }


}

class Lucznik extends Klasa {
    constructor() {
        super();
        this.Hp = 25;
        this.Def = 0;
        this.Mana = 15;
        this.Attack = 0;
        this.Ekwipunek = new Eq();
        this.Backpack = new Array(12);
    }

    LevelUp(Int, Dex, Str) {
        this.Int = this.Int + statylucz[0];
        this.Dex = this.Dex + statylucz[1];
        this.Str = this.Str + statylucz[2];
        this.lvl += 1;
        this.ExpToLvlUp();
    }
    Update_stats(Ekwipunek, Int, Dex, Str, Def, Mana, Attack) {
        this.Attack = this.Ekwipunek.Weapon + (this.Dex / 2);
        this.Def = this.Ekwipunek.Armor + (this.Str / 2);
        this.MaxHp = 25 + this.Str;
        this.MaxMana = 10 + this.Int;
    }

}

class Mag extends Klasa {
    constructor() {
        super();
        this.Hp = 20;
        this.Def = 0;
        this.Mana = 30;
        this.Attack = 0;
        this.Ekwipunek = new Eq();
        this.Backpack = new Array(12);
    }

    LevelUp(Int, Dex, Str) {
        this.Int = this.Int + statymag[0];
        this.Dex = this.Dex + statymag[1];
        this.Str = this.Str + statymag[2];
        this.lvl += 1;
        this.ExpToLvlUp();
    }

    Update_stats(Ekwipunek, Int, Dex, Str, Def, Mana, Attack) {
        this.Attack = this.Ekwipunek.Weapon + (this.Int / 2);
        this.Def = this.Ekwipunek.Armor + (this.Str / 2);
        this.MaxHp = 20 + this.Str;
        this.MaxMana = 30 + this.Int;
    }
}



class Eq {
    constructor() {
        this.Weapon = 0;
        this.Glove = 0;
        this.Boots = 0;
        this.Chest = 0;
        this.Helm = 0;
        this.Armor = 0;
    }

    Upgrade_wep() {
        this.Weapon = 3 + this.Weapon;
    }
    Upgrade_gl() {
        this.Glove = 1 + this.Glove;
    }
    Upgrade_boots() {
        this.Boots = 1 + this.Boots;
    }
    Upgrade_chest() {
        this.Chest = 3 + this.Chest;
    }
    Upgrade_helm() {
        this.Helm = 2 + this.Helm;
    }
    Set_armor(Glove, Boots, Chest, Helm) {
        this.Armor = this.Glove + this.Boots + this.Chest + this.Helm;
    }


}