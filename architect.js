
var search=document.getElementById('search');
var menudivs = document.getElementById('menudivs');
var cancel = document.getElementById('cancelbtn');
var impliment1 = document.getElementById('imp1');
var text = document.getElementById('textbar');
var cancel = document.getElementById('cancelbtn');
var menu= document.getElementById('menudrop');
var over= document.getElementById('over');
var settingbtn = document.getElementById('setting');
var set =document.getElementById('setting1');
var project=document.getElementById('project');
var pro =document.getElementById('setting2');
var usa=document.getElementById('usa');
var logo = document.getElementById('logoflag');
var mainflag =document.getElementById('maindiv-flag');
var flg=document.getElementById('flag-div');
var menus=document.getElementById('menus');
var offcanvas=document.getElementById('offcanvas');
var close =document.getElementById('close1');

search.addEventListener('click',function(){

    impliment1.className = "searchadd";
    text.className = "textadd";
    cancel.className = "canceladd";
    console.log("hh");
    menudivs.style.visibility = "hidden";

})

cancel.addEventListener('click',function(){
    menudivs.style.visibility = "visible";
    impliment1.className = "searchbar";
    text.className = "text";
    cancel.className = "cancel";

})

menu.addEventListener('click',function(){
    var ans = over.className;
    console.log(ans);
    if(ans=="overview"){
        over.className="overviewdel";
    }
    else{
        over.className="overview";

    }
})

settingbtn.addEventListener('click',function(){
    var ans1 = set.className;
    console.log(ans1);
    if(ans1=="overdel"){
        set.className="over1";
    }
    else{
        set.className="overdel";

    }
})

project.addEventListener('click',function(){
    var ans2=pro.className;
    console.log(ans2);
    if(ans2=="overdel"){
        pro.className="over2";
    }
    else{
        pro.className="overdel";
    }
})


mainflag.addEventListener('click',function(){
    var ans=flg.className;
    console.log(ans);
    if(ans=="flag-divdel"){
        flg.className = "flag-div";
    }
    else{
        flg.className="flag-divdel";    
    }
})
// usa.addEventListener('click',function(){
//     console.log('ussa');
//     // var ans=usa.className;
//    logo.src = "E:/Backup_data/Javascript/Architect/ES.svg";
//     console.log(logo.src)
// })



function fun(a){
    console.log(a);
   console.log(logo.src);
   logo.src = "E:/Backup_data/Javascript/Architect/"+ a +".svg";
   flg.className="flag-divdel";    
   console.log(logo.src);
}

menus.addEventListener('click',function(){

    var ans=offcanvas.className;
    console.log(ans);
    if(ans=="offcanvas"){
        offcanvas.className="off";
    document.getElementById('close1').style.display+="flex";
    document.getElementById('close1').style.width+="25px";

    }
})
close.addEventListener('click',function(){
    document.getElementById('close1').style.display="none";
    var ans=offcanvas.className;
    console.log(ans);
    if(ans=="off"){
        offcanvas.className="offcanvas";
    }
})







