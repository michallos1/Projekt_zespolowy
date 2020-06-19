class potwor {
	constructor(){
		this.Hp=10;
		this.Atk=1; 
		this.Def=1; 
	}
}

walka (Klasa){
	potwor p;
	p = ustaw(Klasa.lvl);
	
	do{
		p.Hp-=(Klasa.Attack-p.Def);
		Klasa.Hp-=(p.Atk-Klasa.Def);
	}while(Klasa.Hp>0 && p.Hp>0);
	
	if(p.Hp<1)
		return 1; //wygrana walka 
	
	return 0; // przegrana walka	
}

ustaw (lvl) {
	potwor p
	p.Hp+=lvl*5; 
	p.Atk+=lvl;
	p.Def+=(1/3)*lvl;
	
	return p;
}