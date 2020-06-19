class potwor {
	constructor(int lvl){
		this.Hp=10+(lvl*5);
		this.Atk=1+lvl;
		this.Def=1+((1/3)*lvl);
	}
}

int walka (class Klasa){
	potwor p = Klasa.lvl;
	
	do{
		p.Hp-=(Klasa.Attack-p.Def);
		Klasa.Hp-=(p.Atk-Klasa.Def);
	}while(Klasa.Hp>0 && p.Hp>0);
	
	if(p.Hp<1)
		return 1; //wygrana walka 
	
	return 0; // przegrana walka	
}