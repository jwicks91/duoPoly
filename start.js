let inp1;
let par0,s10;
let par1,s11;
let par2,s12;
let par3,s13;
let rad2;
let multivec=[];

function start(){

        multivec=[20,30,40,50,100];

        inp1=createInput("len1,dir1,len2,dir2,amt");
        inp1.class('bdd');
        inp1.position(800,50);
        inp1.changed(chglev1);

        par0=createP("first length");
        par0.position(800,90);
        par0.id('p0');
        par0.class('parbdd');
        s10=createSlider(0,150,50,1);
        s10.parent('p0');
        s10.mousePressed(chgmult0);

        par1=createP("first angle");
        par1.position(800,190);
        par1.id('p1');
        par1.class('parbdd');
        s11=createSlider(0,180,50,2);
        s11.parent('p1');
        s11.mousePressed(chgmult1);

        par2=createP("second length");
        par2.position(800,280);
        par2.id('p2');
        par2.class('parbdd');
        s12=createSlider(0,150,50,5);
        s12.parent('p2');
        s12.mousePressed(chgmult2);

        par3=createP("second length");
        par3.position(800,370);
        par3.id('p3');
        par3.class('parbdd');
        s13=createSlider(0,180,50,2);
        s13.parent('p3');
        s13.mousePressed(chgmult3);

        rad2=createRadio("choose a Rec.Shape");
        rad2.class('radbdd');
        rad2.position(1000,110);
		rad2.option('Sier',1);
		rad2.option('koch',2);
		rad2.option('clear',3);
		rad2.option('bkgrd',4);
		rad2.option('no bkgrd',5);
		rad2.mousePressed(chgRec);
}

function chgmult0(){
	multvec[0]=s10.value();
}
function chgmult1(){
	multvec[1]=s11.value();
}
function chgmult2(){
	multvec[2]=s12.value();
}
function chgmult3(){
	multvec[3]=s13.value();
}



function chgRec(){
	let choice=rad2.value();
	if(choice){
		switch (choice){
			case '1' :tChoice.set1(200,300,-60);
			StriA(tChoice,150,5);break;
			case '2' :tChoice.set1(10,450,0);
			koch(tChoice,100,6);break;
			case '3' :break;
			case '4' :background(200,200,100);break;
			case '5' :clear();break;
	}}
}

function duoPoly(t,len1,dir1,len2,dir2,total)
{
	let amt=1;
	do{
		t.vec(amt*dir1,len1);
		t.vec(amt*dir2,len2);
		amt+=1;
	}while(amt<total);
}

		