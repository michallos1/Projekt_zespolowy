const w=3,g=1,b=1,c=3,h=2;

class Eq {
    constructor(){
        this.Weapon = 0;
        this.Glove = 0;
        this.Boots = 0;
        this.Chest = 0;
        this.Helmet = 0;
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
	Set_armor(Glove,Boots,Chest,Helmet){
		this.Armor = this.Glove + this.Boots + this.Chest + this.Helm;
	}
}