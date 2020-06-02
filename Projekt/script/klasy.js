
const w=3,g=1,b=1,c=3,h=2;

const statywoj[2]={1,2,3}; // int  dex  str
const statylucz[2]={1,3,2};
const statymag[2]={3,2,1};

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
        this.Int = this.Int + statywoj[0];
        this.Def = this.Def + statywoj[1];
        this.Str = this.Str + statywoj[2];
    }
}

class Lucznik extends Klasa {
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

class Mag extends Klasa {
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
		this.Armor = 0;
    }

    Upgrade_wep(w){
        this.Weapon = w + this.Weapon;
    }
    Upgrade_gl(g){
        this.Glove = g + this.Glove;
    }
    Upgrade_boots(b){
        this.Boots = b + this.Boots;
    }
    Upgrade_chest(c){
        this.Chest = c + this.Chest;
    }
    Upgrade_helm(h){
        this.Helm = h + this.Helm;
    }
	Set_armor(Glove,Boots,Chest,Helm){
		this.Armor = this.Glove + this.Boots + this.Chest + this.Helm;
	}
}

