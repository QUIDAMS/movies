(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{34:function(e,t,s){},41:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(25),a=s.n(c),r=(s(34),s(7)),l=s.n(r),o=s(9),d=s(14),j=s(15),h=s(29),b=s(28),m=function(){function e(){Object(d.a)(this,e),this._apiBase="https://imdb-api.com/en/API",this.apiKeys=["k_6saccxi8","k_axtondoz","k_ebx8003x","k_tihm83sb","k_j7k21h7v","k_t8munklj"],this.retries=0}return Object(j.a)(e,[{key:"getMovies",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var s,i,n,c=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase,"/SearchTitle/").concat(this.apiKeys[this.retries],"/").concat(t));case 2:return s=e.sent,e.next=5,s.json();case 5:if(""===(i=e.sent).errorMessage){e.next=11;break}return this.retries=this.retries+1,e.abrupt("return",this.getMovies(t));case 11:return e.next=13,Promise.all(i.results.map((function(e){return c.getMoviesById(e.id)})));case 13:return n=e.sent,e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoviesById",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase,"/Title/").concat(this.apiKeys[this.retries],"/").concat(t,"/FullActor,Posters,Trailers"));case 2:return s=e.sent,e.next=5,s.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),u=s(0),x=function(){return Object(u.jsxs)("div",{id:"inTurnFadingTextG",children:[Object(u.jsx)("div",{id:"inTurnFadingTextG_1",className:"inTurnFadingTextG",children:"L"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_2",className:"inTurnFadingTextG",children:"o"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_3",className:"inTurnFadingTextG",children:"a"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_4",className:"inTurnFadingTextG",children:"d"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_5",className:"inTurnFadingTextG",children:"i"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_6",className:"inTurnFadingTextG",children:"n"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_7",className:"inTurnFadingTextG",children:"g"}),Object(u.jsx)("div",{id:"inTurnFadingTextG_8",className:"inTurnFadingTextG",children:"."}),Object(u.jsx)("div",{id:"inTurnFadingTextG_9",className:"inTurnFadingTextG",children:"."}),Object(u.jsx)("div",{id:"inTurnFadingTextG_10",className:"inTurnFadingTextG",children:"."})]})},O=s(8),v=function(e){var t=e.movie,s=e.classes;e.position;if(console.log("movie",t),!t.genres)return null;var i=t.genres.split(",");return i.map((function(e,t){var n=t===i.length-1;return Object(u.jsxs)("li",{className:s,children:[e,!n&&Object(u.jsx)("span",{children:",\xa0"})]},t)}))},p=function(e){var t=e.movie;return Object(u.jsx)("div",{className:"list",children:Object(u.jsxs)("div",{className:"element",children:[Object(u.jsx)("div",{className:"poster",children:Object(u.jsx)(O.b,{to:"/movies/".concat(t.id),children:Object(u.jsx)("img",{src:t.image,alt:""})})}),Object(u.jsxs)("div",{className:"info infoPosition",children:[Object(u.jsxs)("div",{className:"titleAndRating",children:[Object(u.jsx)(O.b,{to:"/movies/".concat(t.id),children:Object(u.jsx)("h4",{children:t.title})}),Object(u.jsx)("div",{className:"rating",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"textButtonPosition",children:"IMDb"}),Object(u.jsx)("span",{children:t.imDbRating})]})})]}),Object(u.jsxs)("ul",{className:"infoList",children:[Object(u.jsx)("li",{className:"infoItem positionItemRight positionLeft576 borderItem",children:t.type}),Object(u.jsx)("li",{className:"infoItem positionItemRight borderItem positionItemLeft",children:t.year}),Object(u.jsx)(v,{movie:t,classes:"infoItem positionItemLeft"})]}),Object(u.jsx)("hr",{className:"line positionLine"}),Object(u.jsx)("p",{className:"award positionLeft576",children:t.awards})]})]})})},f=s(2),g=s(21),N=(s(41),function(e){var t=e.header,s=void 0===t||t,n=e.visible,c=void 0!==n&&n,a=e.title,r=void 0===a?"":a,l=e.content,o=void 0===l?"":l,d=e.footer,j=void 0===d?"":d,h=e.onClose,b=function(e){switch(e.key){case"Escape":h()}};return Object(i.useEffect)((function(){return document.addEventListener("keydown",b),function(){return document.removeEventListener("keydown",b)}})),c?Object(u.jsx)("div",{className:"modal",onClick:h,children:Object(u.jsxs)("div",{className:"modal-dialog",onClick:function(e){return e.stopPropagation()},children:[s&&Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h3",{className:"modal-title",children:r}),Object(u.jsx)("span",{className:"modal-close",onClick:h,children:"\xd7"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsx)("div",{className:"modal-content",children:o})}),j&&Object(u.jsx)("div",{className:"modal-footer",children:j})]})}):null}),T=function(e){var t=e.similar;return Object(u.jsx)("div",{className:"similar",style:{backgroundImage:"url(".concat(t.image,")")},children:Object(u.jsx)(O.b,{to:"/movies/".concat(t.id),children:Object(u.jsxs)("div",{className:"info infoSimilarSize",children:[Object(u.jsx)("h5",{className:"similarTitle ",children:t.title}),Object(u.jsx)("p",{className:"similarItem",children:t.genres}),Object(u.jsx)("p",{className:"similarDescription",children:t.plot}),Object(u.jsx)("div",{className:"rating ",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"textButtonPosition",children:"IMDb"}),Object(u.jsx)("span",{children:t.imDbRating})]})})]})})})},y=s(22),w=(s(42),s(43),s(27)),k=s.n(w);var F=function(e){var t=e.movie,s=e.children,i=t.posters.backdrops.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"box-img",style:{backgroundImage:"url(".concat(e.link,")")},children:s})})}));return Object(u.jsx)(k.a,Object(y.a)(Object(y.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplaySpeed:5e3,autoplay:!0}),{},{children:i}))},I=(s(59),function(e){var t=e.id,s=e.changeSearch,n=e.getMovies;Object(i.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(t){var s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new m,e.next=3,s.getMoviesById(t);case 3:i=e.sent,d(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[]);var c=Object(i.useState)(),a=Object(g.a)(c,2),r=a[0],d=a[1],j=Object(i.useState)(!1),h=Object(g.a)(j,2),b=h[0],x=h[1];if(!r)return null;var p=function(){return x(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)(O.b,{to:"/",children:Object(u.jsx)("div",{className:"logo"})}),Object(u.jsxs)("form",{className:"headerSearch",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type here smth...",onChange:s}),Object(u.jsx)(O.b,{to:"/",children:Object(u.jsx)("button",{type:"submit",onClick:function(e){return n(),Object(u.jsx)(f.a,{to:"/"})},children:Object(u.jsx)("i",{className:"fa fa-search"})})})]})]})})}),Object(u.jsxs)("section",{className:" descriptionPoster",children:[Object(u.jsx)(F,{movie:r,children:Object(u.jsx)("div",{className:"description",children:Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("div",{className:"film",children:[Object(u.jsx)("h1",{className:"filmTitle",children:r.title}),Object(u.jsxs)("div",{className:"tags tagsPosition",children:[Object(u.jsx)("div",{className:"ratingDetails",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"textButtonPosition",children:"IMDb"}),Object(u.jsx)("span",{children:r.imDbRating})]})}),Object(u.jsxs)("ul",{className:"infoList",children:[Object(u.jsx)("li",{className:"ratingPosition borderItem ",children:r.year}),Object(u.jsx)("li",{className:"ratingPosition borderItem ",children:r.type}),Object(u.jsx)(v,{movie:r,classes:"listRatingPosition"})]})]}),Object(u.jsx)("button",{className:"buttonWatch",onClick:function(){return x(!0)},children:Object(u.jsx)("span",{className:"buttonWatchText",children:"Watch"})}),Object(u.jsx)("p",{className:"awardFilm",children:r.awards})]})})})}),Object(u.jsx)(N,{header:!1,visible:b,onClose:p,content:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"aaaaa",style:{position:"relative",paddingTop:"56.25%"},children:Object(u.jsx)("iframe",{src:"".concat(r.trailer.linkEmbed,"?autoplay=false&width=854"),width:"854",height:"480",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true",frameborder:"no",scrolling:"no",frameBorder:"0",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})})})})]}),Object(u.jsx)("section",{className:"description descriptionImage",style:{backgroundImage:"linear-gradient(to left, rgba(0, 0, 0, 0.2), 50%, rgba(0, 0, 0, 1)), \n\t\t\t\t\turl(".concat(r.posters.backdrops[0].link,")")},children:Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("div",{className:"film",children:[Object(u.jsx)("h1",{className:"filmTitle",children:r.title}),Object(u.jsxs)("div",{className:"tags tagsPosition",children:[Object(u.jsx)("div",{className:"ratingDetails",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{className:"textButtonPosition",children:"IMDb"}),Object(u.jsx)("span",{children:r.imDbRating})]})}),Object(u.jsxs)("ul",{className:"infoList",children:[Object(u.jsx)("li",{className:"ratingPosition borderItem ",children:r.year}),Object(u.jsx)("li",{className:"ratingPosition borderItem ",children:r.type}),Object(u.jsx)(v,{movie:r,classes:"listRatingPosition"})]})]}),Object(u.jsx)("button",{className:"buttonWatch",onClick:function(){return x(!0)},children:Object(u.jsx)("span",{className:"buttonWatchText",children:"Watch"})}),Object(u.jsx)(N,{header:!1,visible:b,onClose:p,content:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"aaaa",style:{position:"relative",paddingTop:"56.25%"},children:Object(u.jsx)("iframe",{src:"".concat(r.trailer.linkEmbed,"?autoplay=false&width=480"),width:"480",height:"270",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true",frameborder:"no",scrolling:"no",frameBorder:"0",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})})})}),Object(u.jsx)("p",{className:"awardFilm",children:r.awards})]})})}),Object(u.jsx)("section",{className:"page",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"pageDetails",children:[Object(u.jsxs)("h3",{className:"pageTitle",children:["Watch ",r.title," on Richbee Shows"]}),Object(u.jsx)("p",{className:"pageDescription pageDescriptionPosition",children:r.plot}),Object(u.jsx)("h5",{className:"alsoLike alsoLikePosition",children:"You may also like"})]}),Object(u.jsx)("div",{className:"similarsBox similarsBoxPosition",children:r.similars.map((function(e){return Object(u.jsx)(T,{similar:e},e.id)}))})]})})]})}),P=(s(60),function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(d.a)(this,s),(i=t.call(this,e)).changeSearch=function(e){i.setState({value:e.target.value})},i.state={error:null,movies:[],value:"",loading:!1},i}return Object(j.a)(s,[{key:"getMovies",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var s,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({movies:[],loading:!0}),s=this.state.value,t&&t.preventDefault(),i=new m,e.next=6,i.getMovies(s);case 6:n=e.sent,this.setState({loading:!1,movies:n});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,s=t.error,i=t.movies,n=t.value,c=t.loading;return s?Object(u.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",s.message]}):Object(u.jsx)(O.a,{basename:"/",children:Object(u.jsxs)("main",{children:[Object(u.jsxs)(f.d,{children:[Object(u.jsx)(f.b,{path:"/",exact:!0,children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"container-video",children:[Object(u.jsx)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:"video",children:Object(u.jsx)("source",{src:"https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1eoWRcPP_tj_89kGM0xt2mIj15MOH1N6w",type:"video/mp4"})}),Object(u.jsxs)("div",{className:"content-video",children:[Object(u.jsx)("div",{className:"".concat(0===i.length?"subContent":"subListContent"),children:Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("h2",{className:"positionH2",children:"Unlimited movies, TV shows, and more."}),Object(u.jsx)("h3",{className:"positionH3",children:"Watch anywhere. Cancel anytime."}),Object(u.jsxs)("div",{className:"searchForm",children:[Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{value:n,type:"text",placeholder:"Type here smth...",onChange:this.changeSearch}),Object(u.jsx)("button",{type:"submit",onClick:function(t){return e.getMovies(t)}})]}),c&&Object(u.jsx)(x,{})]})]})}),Object(u.jsx)("div",{children:i&&i.map((function(e){return Object(u.jsx)(p,{movie:e},e.id)}))})]})]})})}),Object(u.jsx)(f.b,{path:"/movies/:id",render:function(t){return Object(u.jsx)(I,{id:t.match.params.id,changeSearch:e.changeSearch,getMovies:function(t){return e.getMovies(t)}},t.match.params.id)}})]}),Object(u.jsx)("footer",{className:"footer",children:"Richbee Shows"})]})})}}]),s}(i.Component));a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1ece25e8.chunk.js.map