
function koch(t,len,level){
if(leve==1){}
else{
koch(t,len/2,level-1);
t.lt(60);
koch(t,len/2,level-1);
t.rt(60);
koch(t,len/2,level-1);
t.lt(60);
koch(t,len/2,level-1);
}
}

function StriA(t,len,level){
if(level==0){}
else{
t.fd(len);
StriA(t,len/2,level-1);
t.rt(120);
t.fd(len);
StriA(t,len/2,level-1);
t.rt(120);
t.fd(len);
StriA(t,len/2,level-1);
t.rt(120);
}
}