(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{xuRi:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),i=function(){return function(){}}(),e=t("pMnS"),o=[".main-music-info[_ngcontent-%COMP%]{height:200px;padding:0 225px;margin:10px 0}.top-coverart[_ngcontent-%COMP%]{width:200px;display:inline-block;height:100%;background-repeat:no-repeat;background-size:contain}.top-song-info[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-left:15px;position:relative;height:100%}.top-song-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0}.top-song-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;color:#818888;font-family:cursive}.Play-all-btn[_ngcontent-%COMP%]{position:absolute;bottom:12px;width:140px;border-radius:100px}.artist-name[_ngcontent-%COMP%]{white-space:nowrap;display:inline-block;width:600px;overflow:hidden;text-overflow:ellipsis;vertical-align:middle}"],c=t("Ip0R"),s=function(){function l(){}return l.prototype.transform=function(l){var n,t,u,i,e,o,c="";return n=(t=(u=l/1e3)/60)/60,o=Math.floor(u)%60,e=Math.floor(t)%60,0!=(i=Math.floor(n)%60)&&(c+=i+":",1==e.toString().length&&(e="0"+e)),c+=e+":",1==o.toString().length&&(o="0"+o),c+o},l}(),a=t("cUZ1"),r=t("t/Na"),b=function(){function l(l){this.search=l,this.notify=new u.m,this.music_list_data=[],console.log("music listing component constructor")}return l.prototype.listElementClick=function(l){this.iconClicked||this.notify.emit(l),this.iconClicked=!1},l.prototype.likeUnlike=function(l,n){this.iconClicked=!0,l.target.dataset.like=0==l.target.dataset.like?1:0,this.search.musicListActions(n,0==l.target.dataset.like?"unlike":"like").subscribe()},l.prototype.removeSong=function(l){var n=this;this.search.musicListActions(l,"remove").subscribe(function(l){return n.music_list_data=l})},l}(),p=u.nb({encapsulation:0,styles:[['tbody[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{color:#818888}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#fff;cursor:pointer;font-weight:500}.active[_ngcontent-%COMP%]{background-color:#fff;font-weight:500}.listing-coverart[_ngcontent-%COMP%]{border-radius:7px;margin-right:15px;height:30px;width:30px;-o-object-fit:cover;object-fit:cover}.main-music-list[_ngcontent-%COMP%]{padding:0 225px;margin-bottom:10px;font-size:15px}.track-name[_ngcontent-%COMP%]{white-space:nowrap;display:inline-block;width:400px;overflow:hidden;text-overflow:ellipsis;vertical-align:middle}.artist-name[_ngcontent-%COMP%]{white-space:nowrap;display:inline-block;width:250px;overflow:hidden;text-overflow:ellipsis;vertical-align:middle}.favourite-icon[_ngcontent-%COMP%]{-webkit-text-stroke:1.5px grey;-webkit-text-fill-color:transparent}tr[_ngcontent-%COMP%]:hover   .favourite-icon[_ngcontent-%COMP%]{-webkit-text-stroke:1.5px #000}.favourite-icon[data-like="1"][_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:hover   .favourite-icon[data-like="1"][_ngcontent-%COMP%]{-webkit-text-fill-color:#e72c30;-webkit-text-stroke:1.5px#e72c30}.remove-icon[_ngcontent-%COMP%]{-webkit-text-fill-color:#80808099;font-size:14px;vertical-align:middle}.remove-icon[_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover   .remove-icon[_ngcontent-%COMP%]{-webkit-text-fill-color:#000;font-size:14px;vertical-align:middle}']],data:{}});function m(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,17,"tr",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.listElementClick(l.context.$implicit)&&u),u},null,null)),u.ob(1,278528,null,0,c.h,[u.s,u.t,u.k,u.D],{ngClass:[0,"ngClass"]},null),u.Ab(2,{active:0}),(l()(),u.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.pb(5,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-heart favourite-icon"],["data-like","0"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.likeUnlike(t,l.context.$implicit)&&u),u},null,null)),(l()(),u.pb(7,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-times remove-icon"],["data-like","0"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.removeSong(l.context.$implicit)&&u),u},null,null)),(l()(),u.pb(8,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,0,"img",[["class","listing-coverart"]],[[8,"src",4]],null,null,null,null)),(l()(),u.pb(10,0,null,null,1,"span",[["class","track-name"]],null,null,null,null,null)),(l()(),u.Fb(11,null,["",""])),(l()(),u.pb(12,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.pb(13,0,null,null,1,"span",[["class","artist-name"]],null,null,null,null,null)),(l()(),u.Fb(14,null,["",""])),(l()(),u.pb(15,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.Fb(16,null,["",""])),u.Bb(17,1)],function(l,n){var t=l(n,2,0,n.component.selectedItem==n.context.$implicit.trackId);l(n,1,0,t)},function(l,n){var t=n.component;l(n,4,0,n.context.index+1),l(n,6,0,!t.meta.showLike),l(n,7,0,!t.meta.showDelete),l(n,9,0,u.rb(1,"",n.context.$implicit.artworkUrl30,"")),l(n,11,0,n.context.$implicit.trackName),l(n,14,0,n.context.$implicit.artistName);var i=u.Gb(n,16,0,l(n,17,0,u.yb(n.parent,0),n.context.$implicit.trackTimeMillis));l(n,16,0,i)})}function f(l){return u.Hb(0,[u.zb(0,s,[]),(l()(),u.pb(1,0,null,null,15,"div",[["class","container-fluid main-music-list"]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,14,"table",[["class","table table-hover"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["#"])),(l()(),u.pb(7,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),u.pb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Title"])),(l()(),u.pb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Artistt"])),(l()(),u.pb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Duration"])),(l()(),u.pb(14,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u.gb(16777216,null,null,1,null,m)),u.ob(16,278528,null,0,c.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,16,0,n.component.music_list_data.results)},null)}var d=function(){function l(){console.log("audio player constructor")}return l.prototype.play=function(l){this.input.nativeElement.src=l,this.input.nativeElement.play()},l}(),h=u.nb({encapsulation:0,styles:[["audio[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;background-color:#f1f3f4}"]],data:{}});function g(l){return u.Hb(0,[u.Db(402653184,1,{input:0}),(l()(),u.pb(1,0,[[1,0],["myAudio",1]],null,2,"audio",[["controls",""]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,0,"source",[["src",""],["type","audio/*"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Your browser does not support the audio element.\n"]))],null,null)}var v=function(){function l(l){this.search=l,this.trackId=0,this.pageStatus=!0,this.meta={showLike:!1,showDelete:!0},this.musicInfo=[],console.log("favourites constructor")}return l.prototype.ngOnInit=function(){var l=this;this.search.getFavouriteMusic().subscribe(function(n){console.log(n),n.resultCount>0?(l.searchList=n,l.musicListActions(l.searchList.results[0])):l.pageStatus=!1})},l.prototype.musicListActions=function(l){this.selectedItem=l.trackId,this.musicInfo.artistName=l.artistName,this.musicInfo.albumPic=l.artworkUrl30,this.musicInfo.albumPic=this.musicInfo.albumPic.replace(/\/[a-zA-z0-9\s\-\.]*$/i,"/300x300bb.jpg"),this.albumArt.nativeElement.style.backgroundImage="url("+this.musicInfo.albumPic+")",this.musicInfo.album=l.collectionName,this.musicInfo.genre=l.primaryGenreName,this.musicInfo.nowPlaying=l.trackName,this.player.play(l.previewUrl)},l.prototype.playNext=function(){this.trackId=this.trackId<this.searchList.resultCount-1?this.trackId+1:0,this.musicListActions(this.searchList.results[this.trackId])},l}(),k=u.nb({encapsulation:0,styles:[o],data:{}});function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,2,"music_listing",[],null,[[null,"notify"]],function(l,n,t){var u=!0;return"notify"===n&&(u=!1!==l.component.musicListActions(t)&&u),u},f,p)),u.Cb(512,null,a.a,a.a,[r.c]),u.ob(3,49152,null,0,b,[a.a],{music_list_data:[0,"music_list_data"],selectedItem:[1,"selectedItem"],meta:[2,"meta"]},{notify:"notify"})],function(l,n){var t=n.component;l(n,3,0,t.searchList,t.selectedItem,t.meta)},null)}function y(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),u.Fb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.pageStatus?"Loading........":"No Favourites Added")})}function I(l){return u.Hb(0,[u.Db(402653184,1,{player:0}),u.Db(402653184,2,{albumArt:0}),(l()(),u.pb(2,0,null,null,19,"div",[["class","main-music-info"]],null,null,null,null,null)),(l()(),u.pb(3,0,[[2,0],["albumArt",1]],null,0,"div",[["class","top-coverart"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,17,"div",[["class","top-song-info"]],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,14,"ul",[],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Fb(7,null,[""," Songs"])),(l()(),u.pb(8,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Album"])),(l()(),u.Fb(11,null,[": ",""])),(l()(),u.pb(12,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.pb(13,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Genre"])),(l()(),u.Fb(15,null,[": ",""])),(l()(),u.pb(16,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.pb(17,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Now Playing"])),(l()(),u.Fb(19,null,[": ",""])),(l()(),u.pb(20,0,null,null,1,"button",[["class","btn btn-outline-dark Play-all-btn"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.playNext()&&u),u},null,null)),(l()(),u.Fb(-1,null,["Play Next"])),(l()(),u.gb(16777216,null,null,1,null,x)),u.ob(23,16384,null,0,c.j,[u.O,u.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u.gb(0,[["loader",2]],null,0,null,y)),(l()(),u.pb(25,0,null,null,1,"audio_player",[],null,null,null,g,h)),u.ob(26,49152,[[1,4]],0,d,[],null,null)],function(l,n){l(n,23,0,n.component.searchList,u.yb(n,24))},function(l,n){var t=n.component;l(n,7,0,t.musicInfo.artistName),l(n,11,0,t.musicInfo.album),l(n,15,0,t.musicInfo.genre),l(n,19,0,t.musicInfo.nowPlaying),l(n,20,0,!t.pageStatus)})}function w(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"favourites",[],null,null,null,I,k)),u.Cb(512,null,a.a,a.a,[r.c]),u.ob(2,114688,null,0,v,[a.a],null,null)],function(l,n){l(n,2,0)},null)}var _=u.lb("favourites",v,w,{},{},[]),P=function(){function l(l,n){this.search=l,this.route=n,this.trackId=0,this.pageStatus=!0,this.meta={showLike:!0,showDelete:!1},this.musicInfo=[],this.music_data={results:[],resultCount:0},console.log("constructor function")}return l.prototype.ngOnInit=function(){var l=this,n=this.route.snapshot.paramMap.get("id");this.search.search(n).subscribe(function(n){console.log(n),n.resultCount>0?(l.searchList=n,l.musicListActions(l.searchList.results[0])):l.pageStatus=!1})},l.prototype.musicListActions=function(l){this.selectedItem=l.trackId,this.musicInfo.artistName=l.artistName,this.musicInfo.albumPic=l.artworkUrl30,this.musicInfo.albumPic=this.musicInfo.albumPic.replace(/\/[a-zA-z0-9\s\-\.]*$/i,"/300x300bb.jpg"),this.albumArt.nativeElement.style.backgroundImage="url("+this.musicInfo.albumPic+")",this.musicInfo.album=l.collectionName,this.musicInfo.genre=l.primaryGenreName,this.musicInfo.nowPlaying=l.trackName,this.player.play(l.previewUrl)},l.prototype.playNext=function(){this.trackId=this.trackId<this.searchList.resultCount-1?this.trackId+1:0,this.musicListActions(this.searchList.results[this.trackId])},l}(),C=t("ZYCi"),M=u.nb({encapsulation:0,styles:[o],data:{}});function O(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,2,"music_listing",[],null,[[null,"notify"]],function(l,n,t){var u=!0;return"notify"===n&&(u=!1!==l.component.musicListActions(t)&&u),u},f,p)),u.Cb(512,null,a.a,a.a,[r.c]),u.ob(3,49152,null,0,b,[a.a],{music_list_data:[0,"music_list_data"],selectedItem:[1,"selectedItem"],meta:[2,"meta"]},{notify:"notify"})],function(l,n){var t=n.component;l(n,3,0,t.searchList,t.selectedItem,t.meta)},null)}function F(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),u.Fb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.pageStatus?"Loading........":"No Datat Found")})}function L(l){return u.Hb(0,[u.Db(402653184,1,{player:0}),u.Db(402653184,2,{albumArt:0}),(l()(),u.pb(2,0,null,null,20,"div",[["class","main-music-info"]],null,null,null,null,null)),(l()(),u.pb(3,0,[[2,0],["albumArt",1]],null,0,"div",[["class","top-coverart"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,18,"div",[["class","top-song-info"]],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,15,"ul",[],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),u.pb(7,0,null,null,1,"span",[["class","artist-name"]],null,null,null,null,null)),(l()(),u.Fb(8,null,[""," Songs"])),(l()(),u.pb(9,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.pb(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Album"])),(l()(),u.Fb(12,null,[": ",""])),(l()(),u.pb(13,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.pb(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Genre"])),(l()(),u.Fb(16,null,[": ",""])),(l()(),u.pb(17,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),u.pb(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Now Playing"])),(l()(),u.Fb(20,null,[": ",""])),(l()(),u.pb(21,0,null,null,1,"button",[["class","btn btn-outline-dark Play-all-btn"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.playNext()&&u),u},null,null)),(l()(),u.Fb(-1,null,["Play Next"])),(l()(),u.gb(16777216,null,null,1,null,O)),u.ob(24,16384,null,0,c.j,[u.O,u.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u.gb(0,[["loader",2]],null,0,null,F)),(l()(),u.pb(26,0,null,null,1,"audio_player",[],null,null,null,g,h)),u.ob(27,49152,[[1,4]],0,d,[],null,null)],function(l,n){l(n,24,0,n.component.searchList,u.yb(n,25))},function(l,n){var t=n.component;l(n,8,0,t.musicInfo.artistName),l(n,12,0,t.musicInfo.album),l(n,16,0,t.musicInfo.genre),l(n,20,0,t.musicInfo.nowPlaying),l(n,21,0,!t.pageStatus)})}function N(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"my_music",[],null,null,null,L,M)),u.Cb(512,null,a.a,a.a,[r.c]),u.ob(2,114688,null,0,P,[a.a,C.a],null,null)],function(l,n){l(n,2,0)},null)}var A=u.lb("my_music",P,N,{},{},[]),S=function(){function l(){}return l.components=[P,v],l}();t.d(n,"MusicModuleNgFactory",function(){return E});var E=u.mb(i,[],function(l){return u.wb([u.xb(512,u.j,u.bb,[[8,[e.a,_,A]],[3,u.j],u.x]),u.xb(4608,c.l,c.k,[u.u,[2,c.r]]),u.xb(4608,r.j,r.p,[c.c,u.B,r.n]),u.xb(4608,r.q,r.q,[r.j,r.o]),u.xb(5120,r.a,function(l){return[l]},[r.q]),u.xb(4608,r.m,r.m,[]),u.xb(6144,r.k,null,[r.m]),u.xb(4608,r.i,r.i,[r.k]),u.xb(6144,r.b,null,[r.i]),u.xb(4608,r.f,r.l,[r.b,u.q]),u.xb(4608,r.c,r.c,[r.f]),u.xb(1073742336,C.m,C.m,[[2,C.s],[2,C.k]]),u.xb(1073742336,S,S,[]),u.xb(1073742336,c.b,c.b,[]),u.xb(1073742336,r.e,r.e,[]),u.xb(1073742336,r.d,r.d,[]),u.xb(1073742336,i,i,[]),u.xb(1024,C.i,function(){return[[{path:"favourites",component:v},{path:"",component:P}]]},[]),u.xb(256,r.n,"XSRF-TOKEN",[]),u.xb(256,r.o,"X-XSRF-TOKEN",[])])})}}]);