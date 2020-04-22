class Klasa {
    constructor(){
        this.Int = 0;
        this.Dex = 0;
        this.Str = 0;
        this.Gold = 0;
    }

     LevelUp(Int,Dex,Str) { 
    }

}


class Wojownik extends Klasa {
    constructor(){
        this.Hp = 0;
        this.Def = 0;
        this.Mana = 0;
        this.Attack = 0;
        this.Ekwipunek = Eq;
        this.Level = 0;
        this.Backpack = new Array[12];
    }

    LevelUp(Int,Dex,Str){
        this.Int = this.Int + Int;
        this.Def = this.Def + Dex;
        this.Str = this.Str + Str;
    }
}



class Eq {
    constructor(){
        this.Weapon = 0;
        this.Glove = 0;
        this.Boots = 0;
        this.Chest = 0;
        this.Helm = 0;
    }

    Upgrade_wep(upgread){
        this.Weapon = upgread + this.Weapon;
    }
    Upgrade_gl(upgread){
        this.Glove = upgread + this.Glove;
    }
    Upgrade_boots(upgread){
        this.Boots = upgread + this.Boots;
    }
    Upgrade_chest(upgread){
        this.Chest = upgread + this.Chest;
    }
    Upgrade_helm(upgread){
        this.Helm = upgread + this.Helm;
    }
}