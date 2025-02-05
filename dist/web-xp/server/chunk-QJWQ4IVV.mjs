import './polyfills.server.mjs';
import{A as j,D as z,H as E,K as I,a as x,b as l,c as b,d as k,e as h,f as g,g as w,h as P,i,j as o,k as d,l as a,m as c,n as O,o as m,v as S,x as T,y as C,z as W}from"./chunk-QZY2XMTN.mjs";import{h as _}from"./chunk-KRLCULJA.mjs";var v=(()=>{let t=class t{constructor(){this.isVolumeHidden=!0,this.isSecurityHidden=!0}volumeWindowToggle(){this.isVolumeHidden=!this.isVolumeHidden;let e=document.getElementById("volume_slider");e&&(e.hidden=this.isVolumeHidden),this.getIsSecurityHidden()===!1&&this.getIsVolumeHidden()===!1&&this.securityWindowToggle()}securityWindowToggle(){this.isSecurityHidden=!this.isSecurityHidden;let e=document.getElementById("security_window");e&&(e.hidden=this.isSecurityHidden),this.getIsVolumeHidden()===!1&&this.getIsSecurityHidden()===!1&&this.volumeWindowToggle()}getIsVolumeHidden(){return this.isVolumeHidden}getIsSecurityHidden(){return this.isSecurityHidden}setIsVolumeHidden(e){this.isVolumeHidden=e}setIsSecurityHidden(e){this.isSecurityHidden=e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var H=(()=>{let t=class t{constructor(e){this.TrayWindowsService=e,this.isMuted=!1,this.volumeSliderValueInit=100,this.volumeSliderValue=100}volumeWindowToggle(){this.TrayWindowsService.volumeWindowToggle()}mute(){this.isMuted===!1?(this.isMuted=!0,this.volumeSliderValueInit=this.volumeSliderValue,this.volumeSliderValue=0):this.isMuted===!0&&(this.isMuted=!1,this.volumeSliderValue=this.volumeSliderValueInit)}onVolumeChange(e){console.log("yea"),this.volumeSliderValue=Number(e.target.value),this.volumeSliderValue<=1?this.isMuted=!0:this.isMuted=!1}getIsMuted(){return this.isMuted}};t.\u0275fac=function(n){return new(n||t)(g(v))},t.\u0275cmp=l({type:t,selectors:[["app-volume"]],standalone:!0,features:[m],decls:9,vars:5,consts:[["id","volume","height","50px","width","30px",3,"src","click"],["id","volume_slider",3,"hidden"],["id","volume_background","src","assets/images/volume_background.png","height","220px","width","120px"],["id","volume_background_text1"],["id","volume_background_text2"],["id","volume_checkbox",3,"click"],["type","range","height","5px","min","1","max","100",1,"slider",3,"value","input"]],template:function(n,s){n&1&&(i(0,"img",0),a("click",function(){return s.volumeWindowToggle()}),o(),i(1,"div",1),d(2,"img",2),i(3,"span",3),c(4,"Volume"),o(),i(5,"span",4),c(6,"Mute"),o(),i(7,"div",5),a("click",function(){return s.mute()}),o(),i(8,"input",6),a("input",function(y){return s.onVolumeChange(y)}),o()()),n&2&&(w("src",s.isMuted?"assets/images/volume_muted.png":"assets/images/volume_full.png",k),h(1),w("hidden",!0),h(6),P("background-image",s.isMuted?"url('assets/images/checkmark_enabled.png')":"url('assets/images/checkmark_disabled.png')"),h(1),w("value",s.volumeSliderValue))},styles:["#volume[_ngcontent-%COMP%]{right:90px;bottom:0;height:25px;width:25px;position:fixed;z-index:10;cursor:pointer}#volume_background[_ngcontent-%COMP%]{right:72px;bottom:28px;position:fixed;z-index:2;height:180px;width:70px}#volume_background_text1[_ngcontent-%COMP%]{font-family:Tahoma;right:88px;font-size:12px;bottom:187px;position:fixed;z-index:3}#volume_background_text2[_ngcontent-%COMP%]{font-family:Tahoma;right:91px;bottom:42px;position:fixed;font-size:12px;z-index:3}#volume_checkbox[_ngcontent-%COMP%]{background-repeat:no-repeat;right:118px;bottom:42px;position:fixed;background-size:contain;z-index:3;width:17px;height:14px;cursor:pointer}.slider[_ngcontent-%COMP%]{border:0;right:39px;bottom:112px;position:fixed;z-index:3;scale:.8;transform:rotate(270deg)}.slider[_ngcontent-%COMP%]::-webkit-slider-thumb{cursor:pointer;border:none;color:#4d4c48}"]});let r=t;return r})();var V=(()=>{let t=class t{constructor(){this.currentTime=""}ngOnInit(){this.updateTime()}updateTime(){let e=new Date,n=e.getHours(),s=e.getMinutes(),p=n>=12?"PM":"AM",y=n%12||12;this.currentTime=`${y}:${this.padZero(s)} ${p}`}padZero(e){return e<10?`0${e}`:`${e}`}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-time"]],standalone:!0,features:[m],decls:2,vars:1,consts:[["id","time"]],template:function(n,s){n&1&&(i(0,"p",0),c(1),o()),n&2&&(h(1),O(s.currentTime))},styles:["#time[_ngcontent-%COMP%]{font-family:Tahoma;color:#fff;position:fixed;bottom:-8px;z-index:10;font-size:14px;right:8px}"]});let r=t;return r})();var F=(()=>{let t=class t{constructor(e){this.TrayWindowsService=e}securityWindowToggle(){this.TrayWindowsService.securityWindowToggle()}};t.\u0275fac=function(n){return new(n||t)(g(v))},t.\u0275cmp=l({type:t,selectors:[["app-security"]],standalone:!0,features:[m],decls:17,vars:1,consts:[["id","security","src","assets/images/security.png","height","30","width","31",3,"click"],["id","security_window",3,"hidden"],["id","security_background","src","assets/images/security_background.png","height","165","width","336"],["id","window_one","src","assets/images/window_one2.png","height","238","width","538"],["id","security_bl","src","assets/images/window_border_lr.png","height","238","width","538"],["id","security_br","src","assets/images/window_border_lr.png","height","238","width","538"],["id","security_bb","src","assets/images/window_border_lr.png","height","142","width","6"],["id","security_title"],["id","security_title2"],["id","security_text"],["href","https://support.microsoft.com/en-us/windows/windows-xp-support-has-ended-47b944b8-f4d3-82f2-9acc-21c79ee6ef5e","target","_blank","id","security_hyper"],[1,"winXP-wrap"],["type","button","value","Close",1,"winXP-btn",3,"click"]],template:function(n,s){n&1&&(i(0,"img",0),a("click",function(){return s.securityWindowToggle()}),o(),i(1,"div",1),d(2,"img",2)(3,"img",3)(4,"img",4)(5,"img",5)(6,"img",6),i(7,"span",7),c(8,"Security Essentials"),o(),i(9,"span",8),c(10,"Requires your attention"),o(),i(11,"span",9),c(12," Support for this operating system is ending. When this occurs Security Essentials will no longer be supported and your PC might be unprotected. To make sure your PC stays protected, click the link below to see our end-of-support guidance for operating systems. "),o(),i(13,"a",10),c(14,"End-of-support guidance for operating systems"),o(),i(15,"div",11)(16,"input",12),a("click",function(){return s.securityWindowToggle()}),o()()()),n&2&&(h(1),w("hidden",!0))},styles:["#security[_ngcontent-%COMP%]{position:fixed;right:68px;bottom:3px;z-index:10;height:23px;width:23px;cursor:pointer}#security_background[_ngcontent-%COMP%], #window_one[_ngcontent-%COMP%], #security_bl[_ngcontent-%COMP%], #security_br[_ngcontent-%COMP%], #security_bb[_ngcontent-%COMP%]{position:fixed;bottom:35px;z-index:1;background-size:contain}#security_background[_ngcontent-%COMP%]{right:15.5px;width:310px;height:175px}#window_one[_ngcontent-%COMP%]{right:0;bottom:144px;width:343px;height:95px}#security_bl[_ngcontent-%COMP%]{right:324.5px;width:5px;height:180px;bottom:30px}#security_br[_ngcontent-%COMP%]{right:11.3px;width:4px;height:180px;bottom:30px;transform:scaleX(-1)}#security_bb[_ngcontent-%COMP%]{right:168.3px;width:5.6px;height:317px;rotate:270deg;bottom:-125.6px}#security_title[_ngcontent-%COMP%], #security_title2[_ngcontent-%COMP%], #security_text[_ngcontent-%COMP%], #security_hyper[_ngcontent-%COMP%]{font-family:Tahoma;color:#fff;position:fixed;z-index:5}#security_title[_ngcontent-%COMP%]{bottom:213px;right:218px;font-size:13px}#security_title2[_ngcontent-%COMP%]{bottom:193px;right:195px;font-size:12px}#security_text[_ngcontent-%COMP%]{font-size:10.5px;color:gray;bottom:101px;right:10px;width:250px}#security_hyper[_ngcontent-%COMP%]{font-size:11px;color:#00f;bottom:80px;right:0;width:260px}.winXP-wrap[_ngcontent-%COMP%]{position:absolute;border:1px solid RGB(1,63,102);border-radius:3px;bottom:38px;right:23px;z-index:5;background:#f6f6f6}.winXP-btn[_ngcontent-%COMP%]{padding:3px 15px;border:2px solid transparent;background:transparent;cursor:pointer}.winXP-btn[_ngcontent-%COMP%]:hover, .winXP-btn[_ngcontent-%COMP%]:focus{outline:0;border:2px solid #B9D0F0}.winXP-btn[_ngcontent-%COMP%]:active{background:#dad3c9}"]});let r=t;return r})();var f=(()=>{let t=class t{constructor(){this.isContactHidden=!1,this.isProjectsHidden=!1,this.menuHidden=!0}contactsWindowToggle(){this.isContactHidden=!this.isContactHidden;let e=document.getElementById("contact_info");e&&(e.hidden=this.isContactHidden)}projectsWindowToggle(){this.isProjectsHidden=!this.isProjectsHidden;let e=document.getElementById("projects_window");e&&(e.hidden=this.isProjectsHidden)}openSite(e){window.open(e)}toggleMenu(){this.menuHidden=!this.menuHidden;let e=document.getElementById("menu2");e&&(e.hidden=this.menuHidden)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var A=(()=>{let t=class t{constructor(e){this.openCloseWindowsService=e}showContactsWindow(){document.getElementById("contact_info")?.hidden==!0&&this.openCloseWindowsService.contactsWindowToggle()}showProjectsWindow(){document.getElementById("projects_window")?.hidden==!0&&this.openCloseWindowsService.projectsWindowToggle()}openSite(e){this.openCloseWindowsService.openSite(e)}reloadPage(){window.location.reload()}};t.\u0275fac=function(n){return new(n||t)(g(f))},t.\u0275cmp=l({type:t,selectors:[["app-start-menu"]],standalone:!0,features:[m],decls:17,vars:0,consts:[[1,"menu"],["id","startmenu_picture","src","assets/images/startmenu.png","height","375","width","500"],["id","pp","src","assets/images/viks1.jpg","height","460","width","460"],["id","username"],["id","git",3,"click"],["id","gitLogo","src","assets/images/home_icon.png","height","576","width","608"],["id","about_me",3,"click"],["id","about_me_icon","src","assets/images/notepad.png","height","608","width","576"],["id","website",3,"click"],["id","website_icon","src","assets/images/world_icon.png","height","28","width","30"],["id","restart_text",3,"click"],["id","restart_image","src","assets/images/restart_image.png","height","256","width","256"]],template:function(n,s){n&1&&(i(0,"div",0),d(1,"img",1)(2,"img",2),i(3,"a",3),c(4,"viks"),o(),i(5,"a",4),a("click",function(){return s.showProjectsWindow()}),c(6,"GitHub"),o(),d(7,"img",5),i(8,"a",6),a("click",function(){return s.showContactsWindow()}),c(9,"About me"),o(),d(10,"img",7),i(11,"a",8),a("click",function(){return s.openSite("https://github.com/user-attachments/files/18677494/Viktor.Atanasoski.pdf")}),c(12,"my CV"),o(),d(13,"img",9),i(14,"a",10),a("click",function(){return s.reloadPage()}),c(15,"Restart"),o(),d(16,"img",11),o())},styles:[".menu[_ngcontent-%COMP%]{z-index:400;position:fixed}#pp[_ngcontent-%COMP%], #startmenu_picture[_ngcontent-%COMP%], #gitLogo[_ngcontent-%COMP%], #about_me_icon[_ngcontent-%COMP%], #world_icon[_ngcontent-%COMP%], #discord_icon[_ngcontent-%COMP%], #restart_image[_ngcontent-%COMP%]{background-size:contain;position:fixed}#pp[_ngcontent-%COMP%]{width:30px;height:30px;border:3px;border-style:solid;border-color:#fff;border-radius:5px;bottom:359px;left:12px;position:fixed}#username[_ngcontent-%COMP%]{bottom:366px;left:56px;position:fixed;font-family:Tahoma;font-size:20px;color:#fff}#startmenu_picture[_ngcontent-%COMP%]{width:360px;height:377px;bottom:27px}#git[_ngcontent-%COMP%]{bottom:322px;left:54px;position:fixed;font-family:Tahoma;text-decoration:underline;font-size:15px;color:#000;cursor:pointer}#gitLogo[_ngcontent-%COMP%]{width:27px;height:27px;left:20px;bottom:317px;position:fixed}#about_me[_ngcontent-%COMP%]{bottom:296px;left:54px;position:fixed;font-family:Tahoma;text-decoration:underline;font-size:15px;color:#000;cursor:pointer}#about_me_icon[_ngcontent-%COMP%]{width:24px;height:24px;left:25px;bottom:292px;position:fixed}#website[_ngcontent-%COMP%]{bottom:323px;left:228px;position:fixed;font-family:Tahoma;font-size:16px;text-decoration:underline;color:#4169e1;cursor:pointer}#website_icon[_ngcontent-%COMP%]{width:25px;height:25px;left:198px;bottom:320px;position:fixed}#restart_image[_ngcontent-%COMP%]{width:27px;height:27px;left:260px;bottom:30px}#restart_text[_ngcontent-%COMP%]{bottom:35px;left:292px;position:fixed;font-family:Tahoma;font-size:16px;color:#fff;text-decoration:underline;cursor:pointer}"]});let r=t;return r})();var X=(()=>{let t=class t{constructor(e){this.openCloseWindowService=e}toggleMenu(){this.openCloseWindowService.toggleMenu()}};t.\u0275fac=function(n){return new(n||t)(g(f))},t.\u0275cmp=l({type:t,selectors:[["app-start"]],standalone:!0,features:[m],decls:2,vars:0,consts:[["id","start",3,"click"],["id","menu2","hidden","true"]],template:function(n,s){n&1&&(i(0,"div",0),a("click",function(){return s.toggleMenu()}),o(),d(1,"app-start-menu",1))},dependencies:[A],styles:['#start[_ngcontent-%COMP%]{bottom:0;left:0;background-image:url("./media/unclicked-DY43X3LA.png");background-size:contain;width:100px;height:27.6px;z-index:10;position:fixed;background-repeat:no-repeat}#start[_ngcontent-%COMP%]:hover{background-image:url("./media/hovered-VR2SXIMA.png")}#start[_ngcontent-%COMP%]:active{background-image:url("./media/clicked-73USDSDF.png")}']});let r=t;return r})();var B=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-taskbar"]],standalone:!0,features:[m],decls:6,vars:0,consts:[["id","taskbar_blue","src","assets/images/taskbar_blue.png","height","50px"],["id","taskbar_end","src","assets/images/taskbar_end.png","height","50px","width","150px"]],template:function(n,s){n&1&&d(0,"img",0)(1,"img",1)(2,"app-start")(3,"app-security")(4,"app-volume")(5,"app-time")},dependencies:[H,V,F,X],styles:["#taskbar_blue[_ngcontent-%COMP%]{z-index:9;position:fixed;bottom:0%;width:100%;height:28px}#taskbar_end[_ngcontent-%COMP%]{z-index:9;position:fixed;bottom:0%;right:0%;height:27px;width:140px}"]});let r=t;return r})();var R=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-desktop"]],standalone:!0,features:[m],decls:5,vars:0,consts:[["id","dsk"],["id","desktop_icon","src","assets/images/trash.png","height","608","width","576"],["id","desktop_icon_text"],["id","background"]],template:function(n,s){n&1&&(i(0,"div",0),d(1,"img",1),i(2,"a",2),c(3,"Recycle bin"),o()(),d(4,"div",3))},styles:['#desktop_icon[_ngcontent-%COMP%]{background-size:contain;padding-left:17px;top:20px;height:35px;width:35px}#desktop_icon_text[_ngcontent-%COMP%]{left:10px;top:60px;font-size:15px;color:#fff}#background[_ngcontent-%COMP%]{background-image:url("./media/wall1-DFDLGBFR.png");height:100%;width:100%;background-position:center;background-size:cover;position:absolute;z-index:-1}#dsk[_ngcontent-%COMP%]{position:fixed;left:10px;top:20px;height:60px;width:75px;cursor:pointer}']});let r=t;return r})();var L=(()=>{let t=class t{constructor(e){this.openCloseWindowsService=e}closeProjectsWindow(){this.openCloseWindowsService.projectsWindowToggle()}openSite(e){this.openCloseWindowsService.openSite(e)}};t.\u0275fac=function(n){return new(n||t)(g(f))},t.\u0275cmp=l({type:t,selectors:[["app-projects-window"]],standalone:!0,features:[m],decls:46,vars:0,consts:[["id","projects_window"],["id","projects_bl","src","assets/images/window_border_lr.png","height","238","width","538"],["id","projects_br","src","assets/images/window_border_lr.png","height","238","width","538"],["id","projects_bd","src","assets/images/window_border_lr.png","height","238","width","538"],["id","projects_top","src","assets/images/window_one2.png"],["id","close1","src","assets/images/close.png",3,"click"],["id","projects_title"],[1,"list-container"],[1,"scrollable-list"],[3,"click"],["src","assets/images/doku.gif","height","338","width","600",3,"click"],["src","assets/images/hackernn.png","height","338","width","600",3,"click"],["src","assets/images/website image.png","height","338","width","600",3,"click"],["src","assets/images/arh.gif","height","338","width","600",3,"click"],["src","assets/images/ttd.gif","height","338","width","600",3,"click"],["src","assets/images/duck2.png","height","338","width","600",3,"click"]],template:function(n,s){n&1&&(i(0,"div",0),d(1,"img",1)(2,"img",2)(3,"img",3)(4,"img",4),i(5,"img",5),a("click",function(){return s.closeProjectsWindow()}),o(),i(6,"span",6),c(7,"GitHub Projects"),o(),i(8,"div",7)(9,"ul",8)(10,"li")(11,"h3",9),a("click",function(){return s.openSite("https://github.com/viks1/Doku")}),c(12,"Doku"),o(),i(13,"span"),c(14,"an iOS app that helps you safely and digitally store your ID Cards (\u043B\u0438\u0447\u043D\u0438 \u043A\u0430\u0440\u0442\u0438), and extract information using OCR"),o(),i(15,"img",10),a("click",function(){return s.openSite("https://github.com/viks1/Doku")}),o()(),i(16,"li")(17,"h3",9),a("click",function(){return s.openSite("https://github.com/viks1/hackernews-vue")}),c(18,"hackernews-vue"),o(),i(19,"span"),c(20,"a Hacker News clone created in Vue3, that displays all of the latest postings and comments"),o(),i(21,"img",11),a("click",function(){return s.openSite("https://github.com/viks1/hackernews-vue")}),o()(),i(22,"li")(23,"h3",9),a("click",function(){return s.openSite("https://github.com/viks1/webXP")}),c(24,"webXP (portfolio)"),o(),i(25,"span"),c(26,"this website"),o(),i(27,"img",12),a("click",function(){return s.openSite("https://github.com/viks1/webXP")}),o()(),i(28,"li")(29,"h3",9),a("click",function(){return s.openSite("https://github.com/nullobjects/Arh")}),c(30,"Arh"),o(),i(31,"span"),c(32,"web application that allows users to easily find art galleries in Macedonia. "),o(),i(33,"img",13),a("click",function(){return s.openSite("https://github.com/nullobjects/Arh")}),o()(),i(34,"li")(35,"h3",9),a("click",function(){return s.openSite("https://github.com/viks1/Through-The-Darkness")}),c(36,"Through the Darkness"),o(),i(37,"span"),c(38,"small and interesting game about revealing the truth, and facing the consequences.."),o(),i(39,"img",14),a("click",function(){return s.openSite("https://github.com/viks1/Through-The-Darkness")}),o()(),i(40,"li")(41,"h3",9),a("click",function(){return s.openSite("https://github.com/viks1/duck-repostBot")}),c(42,"duck-repostBot"),o(),i(43,"span"),c(44,"discord.py bot that can repost messages, images and videos when users react to content"),o(),i(45,"img",15),a("click",function(){return s.openSite("https://github.com/viks1/duck-repostBot")}),o()()()()())},styles:["h3[_ngcontent-%COMP%]{cursor:pointer}#projects_window[_ngcontent-%COMP%]{width:560px;height:480px;background-color:#e8e7de;position:fixed;top:220px;left:500px}#projects_bl[_ngcontent-%COMP%]{height:484px;width:6px;position:absolute;bottom:-7px;left:-6px}#projects_br[_ngcontent-%COMP%]{height:484px;width:6px;position:absolute;bottom:-7px;left:559.5px;transform:scaleX(-1)}#projects_bd[_ngcontent-%COMP%]{height:570px;width:6.9px;position:absolute;bottom:-289px;rotate:270deg;left:277px}#projects_top[_ngcontent-%COMP%]{height:120px;width:616px;position:absolute;top:-33px;left:-29px;padding:0;margin:0;border:0;white-space:none;z-index:3}#projects_title[_ngcontent-%COMP%]{font-family:Tahoma;position:absolute;color:#fff;left:0;top:-19px;z-index:4}ul[_ngcontent-%COMP%]{list-style-type:none}li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:220px;height:140px;border-style:solid;border-color:#0452d6;border-width:7px;cursor:pointer}li[_ngcontent-%COMP%]:nth-child(1)   img[_ngcontent-%COMP%]{width:130px;height:240px}li[_ngcontent-%COMP%]{border:2px dotted;width:500px;margin-bottom:20px;overflow:auto}li[_ngcontent-%COMP%]:nth-child(1){width:330px}li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-family:Tahoma;margin:0;float:right;font-size:15px}li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:200px;font-family:Tahoma;margin:10px 40px 0 0;float:right;clear:right;font-size:14px}li[_ngcontent-%COMP%]:nth-child(1)   span[_ngcontent-%COMP%]{padding-right:10px;width:110px}.list-container[_ngcontent-%COMP%]{height:100%;overflow-y:scroll;width:100%;left:-2.5%}[_ngcontent-%COMP%]::-webkit-scrollbar{width:16px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ece9d8;border-left:1px solid transparent;margin-top:5px;margin-left:50px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:linear-gradient(to right,#316ac5 0%,#316ac5 50%,#2451a1 51%,#2451a1 100%);border:1px solid #ffffff;border-radius:3px;box-shadow:inset 0 0 1px #0000004d;height:20px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:linear-gradient(to right,#5990de 0%,#5990de 50%,#3d6bb7 51%,#3d6bb7 100%)}[_ngcontent-%COMP%]::-webkit-scrollbar-button{height:16px;background:#ece9d8}.list-container[_ngcontent-%COMP%]{z-index:unset;position:relative}li[_ngcontent-%COMP%]:nth-child(1)   h3[_ngcontent-%COMP%]{padding-top:25px;padding-right:120px}li[_ngcontent-%COMP%]:nth-child(2)   h3[_ngcontent-%COMP%]{padding-top:35px;padding-right:116px}li[_ngcontent-%COMP%]:nth-child(3)   h3[_ngcontent-%COMP%]{padding-top:35px;padding-right:105px}li[_ngcontent-%COMP%]:nth-child(4)   h3[_ngcontent-%COMP%]{padding-top:35px;padding-right:214px}li[_ngcontent-%COMP%]:nth-child(5)   h3[_ngcontent-%COMP%]{padding-top:35px;padding-right:74px}li[_ngcontent-%COMP%]:nth-child(6)   h3[_ngcontent-%COMP%]{padding-top:35px;padding-right:124px}#close1[_ngcontent-%COMP%]{position:absolute;bottom:477.5px;left:535px;width:26px;height:23px;margin:0;z-index:9;cursor:pointer}"]});let r=t;return r})();var $=(()=>{let t=class t{constructor(e){this.openCloseWindowService=e}hideContactWindow(){this.openCloseWindowService.contactsWindowToggle()}};t.\u0275fac=function(n){return new(n||t)(g(f))},t.\u0275cmp=l({type:t,selectors:[["app-contact-window"]],standalone:!0,features:[m],decls:14,vars:0,consts:[["id","contact_info"],["id","close1","src","assets/images/close.png","height","238","width","538",3,"click"],["id","contact_bl","src","assets/images/window_border_lr.png","height","238","width","538"],["id","contact_br","src","assets/images/window_border_lr.png","height","238","width","538"],["id","contact_bd","src","assets/images/window_border_lr.png","height","238","width","538"],["id","contact_top","src","assets/images/window_one2.png","height","238","width","538"],["id","contact_title"],["id","name"],["id","email"],["id","github","href","https://github.com/viks1","target","_blank"]],template:function(n,s){n&1&&(i(0,"div",0)(1,"img",1),a("click",function(){return s.hideContactWindow()}),o(),d(2,"img",2)(3,"img",3)(4,"img",4)(5,"img",5),i(6,"span",6),c(7,"Contact information"),o(),i(8,"a",7),c(9,"name: Viktor Atanasoski"),o(),i(10,"a",8),c(11,"email: viks3@proton.me"),o(),i(12,"a",9),c(13,"https://github.com/viks1"),o()())},styles:["#contact_info[_ngcontent-%COMP%]{width:220px;height:85px;background-color:#e8e7de;position:absolute;top:80px;left:674px;z-index:5}#contact_bl[_ngcontent-%COMP%]{height:90px;width:4px;position:absolute;bottom:-5px;left:-2.5px}#contact_br[_ngcontent-%COMP%]{height:90px;width:4px;position:absolute;bottom:-5px;right:-2px;transform:scaleX(-1)}#contact_bd[_ngcontent-%COMP%]{height:224px;width:5px;position:absolute;bottom:-114.25px;left:107.3px;rotate:270deg}#contact_top[_ngcontent-%COMP%]{height:90px;width:242px;position:absolute;top:-25px;z-index:6;left:-11.7px}#contact_title[_ngcontent-%COMP%]{font-family:Tahoma;position:absolute;color:#fff;font-size:13px;left:5px;top:-15px;z-index:7}#name[_ngcontent-%COMP%]{font-family:Tahoma;position:absolute;color:#000;font-size:13px;left:3%;top:15%;z-index:7;font-weight:700}#email[_ngcontent-%COMP%]{font-family:Tahoma;position:absolute;font-size:13px;color:#000;left:3%;top:40%;z-index:7;font-weight:700}#github[_ngcontent-%COMP%]{font-family:Tahoma;font-weight:700;position:absolute;text-decoration:underline;font-size:13px;color:#00f;left:3%;top:65%;z-index:7}#close1[_ngcontent-%COMP%]{position:absolute;bottom:100%;left:201px;width:18px;height:16px;margin:0;z-index:8;cursor:pointer}"]});let r=t;return r})();var q=(()=>{let t=class t{constructor(e){this.platformId=e}ngOnInit(){C(this.platformId)&&this.hideAppComponentAfterDelay()}hideAppComponentAfterDelay(){return _(this,null,function*(){yield this.delay(5e3);let e=document.querySelector(".windows__bg");e&&e.setAttribute("style","display: none;")})}delay(e){return _(this,null,function*(){return new Promise(n=>setTimeout(n,e))})}};t.\u0275fac=function(n){return new(n||t)(g(b))},t.\u0275cmp=l({type:t,selectors:[["app-loading"]],standalone:!0,features:[m],decls:12,vars:0,consts:[[1,"windows__bg"],[1,"windows__bg--inner"],[1,"windows__name"],[1,"windows__name--inner"],[1,"windows__bg--loading"]],template:function(n,s){n&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4," Web"),i(5,"span"),c(6,"xp"),o()()(),i(7,"div",4)(8,"ul"),d(9,"li")(10,"li")(11,"li"),o()()()())},styles:[".windows__bg[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:500;background:black}.windows__bg[_ngcontent-%COMP%]   .windows__bg--inner[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;transform:translateY(-50%) translate(-50%) scale(.75);-webkit-transform:slale(.75) translateY(-50%) translateX(-50%);animation:1s linear infinite}.windows__bg[_ngcontent-%COMP%]   .windows__name[_ngcontent-%COMP%]{color:#fff;font-family:sans-serif;clear:both;top:-3.4vw;position:relative}.windows__bg[_ngcontent-%COMP%]   .windows__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8vw}.windows__bg[_ngcontent-%COMP%]   .windows__name[_ngcontent-%COMP%]   .windows__name--inner[_ngcontent-%COMP%]{font-size:6vw;font-weight:700}.windows__bg[_ngcontent-%COMP%]   .windows__name[_ngcontent-%COMP%]   .windows__name--inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#c3441d;font-size:4.8vw;bottom:2.8vw;position:relative}.windows__bg[_ngcontent-%COMP%]   .windows__bg--loading[_ngcontent-%COMP%]{width:20vw;height:2.5vw;border:.2vw solid #878787;margin:2.5vw auto 0;border-radius:.5vw;position:relative;overflow:hidden}.windows__bg[_ngcontent-%COMP%]   .windows__bg--loading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:0;display:inline-block;position:absolute;top:0;left:-2.6vw;animation:2s linear infinite _ngcontent-%COMP%_loading;width:3.9vw}.windows__bg[_ngcontent-%COMP%]   .windows__bg--loading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:1.2vw;height:2vw;display:inline-block;background:linear-gradient(180deg,#09112d,#8197cd 20%,#8197cd 40%,#5d62ab 60%,#4158a6 70%,#4158a6 80%,#204399 90%,#1c2954);margin:0 .1vw 0 0}.windows__name[_ngcontent-%COMP%]{left:25px}@keyframes _ngcontent-%COMP%_loading{0%{left:-2.6vw}to{left:20vw}}"]});let r=t;return r})();var G=(()=>{let t=class t{constructor(e){this.platformId=e}ngOnInit(){C(this.platformId)&&this.hideAppComponentAfterDelay()}hideAppComponentAfterDelay(){return _(this,null,function*(){yield this.delay(7e3);let e=document.querySelector("#welcome_screen");e&&e.setAttribute("style","display: none;")})}delay(e){return _(this,null,function*(){return new Promise(n=>setTimeout(n,e))})}};t.\u0275fac=function(n){return new(n||t)(g(b))},t.\u0275cmp=l({type:t,selectors:[["app-login"]],standalone:!0,features:[m],decls:1,vars:0,consts:[["id","welcome_screen"]],template:function(n,s){n&1&&d(0,"div",0)},styles:['#welcome_screen[_ngcontent-%COMP%]{width:100%;height:100%;z-index:495;position:fixed;background-size:contain;background-repeat:no-repeat;background-position:center;background-image:url("./media/welcome-5HY5USQ7.png");background-color:#012f9c}']});let r=t;return r})();var Y=(()=>{let t=class t{constructor(){this.title="viks1/webXP"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:7,vars:0,template:function(n,s){n&1&&d(0,"app-loading")(1,"app-login")(2,"app-desktop")(3,"app-taskbar")(4,"app-projects-window")(5,"app-contact-window")(6,"router-outlet")},dependencies:[T,E,B,R,L,$,q,G]});let r=t;return r})();var U=[];var N={providers:[I(U),j()]};var Q={providers:[z()]},Z=S(N,Q);var J=()=>W(Y,Z),ne=J;export{ne as a};
