$(document).ready(function(){
  var randnum,randspell,wizard,spells;
  function getquote()
  {
    spells = [ 'COLOVARIA','CANTIS','DENSAUGEO','DEFODIO','ALOHOMORA','CONFUNDO','HOMENUM REVELIO','DEPULSO','DURO','REDUCIO','DRACONIFORS','CONFRINGO','SECTUMSEMPRA','EXPELLIARMUS','BOMBARDA MAXIMA','OBLIVIATE','IMPERIO','EXPECTO PATRONUM','AVADA KEDAVRA','CRUCIO'];
   randnum = Math.floor((Math.random()*spells.length));
     randspell = spells[randnum];
     wizard = "--Hogwartians";
    $(".spellss").text(randspell);
    $(".author").text(wizard);
  }
  $("#tweet").on("click",function()
                {
    window.open("https://twitter.com/intent/tweet?text=" + randspell);
  });
 $("#spell").on("click",function()
             {
   getquote();
 });
  
});