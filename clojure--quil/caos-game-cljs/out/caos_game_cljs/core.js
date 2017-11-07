// Compiled by ClojureScript 1.9.473 {}
goog.provide('caos_game_cljs.core');
goog.require('cljs.core');
goog.require('quil.core');
caos_game_cljs.core.radius = (300);
caos_game_cljs.core.size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * caos_game_cljs.core.radius),((2) * caos_game_cljs.core.radius)], null);
caos_game_cljs.core.points_num = (3);
caos_game_cljs.core.points_radius = caos_game_cljs.core.radius;
caos_game_cljs.core.points_angle = (((2) * Math.PI) / caos_game_cljs.core.points_num);
caos_game_cljs.core.init_points = (function caos_game_cljs$core$init_points(){
var iter__7602__auto__ = (function caos_game_cljs$core$init_points_$_iter__8479(s__8480){
return (new cljs.core.LazySeq(null,(function (){
var s__8480__$1 = s__8480;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8480__$1);
if(temp__4657__auto__){
var s__8480__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8480__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__8480__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__8482 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__8481 = (0);
while(true){
if((i__8481 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__8481);
cljs.core.chunk_append.call(null,b__8482,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(caos_game_cljs.core.points_radius * Math.cos((caos_game_cljs.core.points_angle * i))),(- (caos_game_cljs.core.points_radius * Math.sin((caos_game_cljs.core.points_angle * i))))],null)));

var G__8483 = (i__8481 + (1));
i__8481 = G__8483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8482),caos_game_cljs$core$init_points_$_iter__8479.call(null,cljs.core.chunk_rest.call(null,s__8480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8482),null);
}
} else {
var i = cljs.core.first.call(null,s__8480__$2);
return cljs.core.cons.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(caos_game_cljs.core.points_radius * Math.cos((caos_game_cljs.core.points_angle * i))),(- (caos_game_cljs.core.points_radius * Math.sin((caos_game_cljs.core.points_angle * i))))],null)),caos_game_cljs$core$init_points_$_iter__8479.call(null,cljs.core.rest.call(null,s__8480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,caos_game_cljs.core.points_num));
});
caos_game_cljs.core.points = caos_game_cljs.core.init_points.call(null);
caos_game_cljs.core.get_random_point = (function caos_game_cljs$core$get_random_point(){
return cljs.core.nth.call(null,caos_game_cljs.core.points,(cljs.core.rand.call(null,caos_game_cljs.core.points_num) | (0)));
});
caos_game_cljs.core.get_random_point_inside_circle = (function caos_game_cljs$core$get_random_point_inside_circle(){
while(true){
var x = (cljs.core.rand.call(null,cljs.core.first.call(null,caos_game_cljs.core.size)) - caos_game_cljs.core.radius);
var y = (cljs.core.rand.call(null,cljs.core.second.call(null,caos_game_cljs.core.size)) - caos_game_cljs.core.radius);
if(((caos_game_cljs.core.radius * caos_game_cljs.core.radius) < ((x * x) + (y * y)))){
continue;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,y],null));
}
break;
}
});
caos_game_cljs.core.random_point = caos_game_cljs.core.get_random_point_inside_circle.call(null);
caos_game_cljs.core.middle_point = (function caos_game_cljs$core$middle_point(p,q){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core.first.call(null,p) + cljs.core.first.call(null,q)) / (2)),((cljs.core.second.call(null,p) + cljs.core.second.call(null,q)) / (2))],null));
});
caos_game_cljs.core.reject_firsts = (function caos_game_cljs$core$reject_firsts(){
var iter__7602__auto__ = (function caos_game_cljs$core$reject_firsts_$_iter__8488(s__8489){
return (new cljs.core.LazySeq(null,(function (){
var s__8489__$1 = s__8489;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8489__$1);
if(temp__4657__auto__){
var s__8489__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8489__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__8489__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__8491 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__8490 = (0);
while(true){
if((i__8490 < size__7601__auto__)){
var _ = cljs.core._nth.call(null,c__7600__auto__,i__8490);
cljs.core.chunk_append.call(null,b__8491,(function (){var point = caos_game_cljs.core.get_random_point.call(null);
var point_inside = caos_game_cljs.core.random_point;
var p = caos_game_cljs.core.middle_point.call(null,point,point_inside);
return (
caos_game_cljs.core.random_point = p)
;
})());

var G__8492 = (i__8490 + (1));
i__8490 = G__8492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8491),caos_game_cljs$core$reject_firsts_$_iter__8488.call(null,cljs.core.chunk_rest.call(null,s__8489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8491),null);
}
} else {
var _ = cljs.core.first.call(null,s__8489__$2);
return cljs.core.cons.call(null,(function (){var point = caos_game_cljs.core.get_random_point.call(null);
var point_inside = caos_game_cljs.core.random_point;
var p = caos_game_cljs.core.middle_point.call(null,point,point_inside);
return (
caos_game_cljs.core.random_point = p)
;
})(),caos_game_cljs$core$reject_firsts_$_iter__8488.call(null,cljs.core.rest.call(null,s__8489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,(100)));
});
caos_game_cljs.core.setup = (function caos_game_cljs$core$setup(){
quil.core.background.call(null,(255));

quil.core.frame_rate.call(null,(60));

caos_game_cljs.core.reject_firsts.call(null);

var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

var seq__8497 = cljs.core.seq.call(null,caos_game_cljs.core.points);
var chunk__8498 = null;
var count__8499 = (0);
var i__8500 = (0);
while(true){
if((i__8500 < count__8499)){
var p = cljs.core._nth.call(null,chunk__8498,i__8500);
quil.core.ellipse.call(null,cljs.core.first.call(null,p),cljs.core.second.call(null,p),(10),(10));

var G__8501 = seq__8497;
var G__8502 = chunk__8498;
var G__8503 = count__8499;
var G__8504 = (i__8500 + (1));
seq__8497 = G__8501;
chunk__8498 = G__8502;
count__8499 = G__8503;
i__8500 = G__8504;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8497);
if(temp__4657__auto__){
var seq__8497__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8497__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__8497__$1);
var G__8505 = cljs.core.chunk_rest.call(null,seq__8497__$1);
var G__8506 = c__7633__auto__;
var G__8507 = cljs.core.count.call(null,c__7633__auto__);
var G__8508 = (0);
seq__8497 = G__8505;
chunk__8498 = G__8506;
count__8499 = G__8507;
i__8500 = G__8508;
continue;
} else {
var p = cljs.core.first.call(null,seq__8497__$1);
quil.core.ellipse.call(null,cljs.core.first.call(null,p),cljs.core.second.call(null,p),(10),(10));

var G__8509 = cljs.core.next.call(null,seq__8497__$1);
var G__8510 = null;
var G__8511 = (0);
var G__8512 = (0);
seq__8497 = G__8509;
chunk__8498 = G__8510;
count__8499 = G__8511;
i__8500 = G__8512;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}});
caos_game_cljs.core.draw_state = (function caos_game_cljs$core$draw_state(){
var tr__8398__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8398__auto__);

var point = caos_game_cljs.core.get_random_point.call(null);
var point_inside = caos_game_cljs.core.random_point;
var p = caos_game_cljs.core.middle_point.call(null,point,point_inside);
quil.core.fill.call(null,(0),(0),(0),(100));

quil.core.stroke.call(null,(0),(0),(0),(100));

quil.core.ellipse.call(null,cljs.core.first.call(null,p),cljs.core.second.call(null,p),(2),(2));

return (
caos_game_cljs.core.random_point = p)
;
}finally {quil.core.pop_matrix.call(null);
}});
caos_game_cljs.core.caos_game_cljs = (function caos_game_cljs$core$caos_game_cljs(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"caos-game-cljs",new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,caos_game_cljs.core.size))?(function() { 
var G__8513__delegate = function (args){
return cljs.core.apply.call(null,caos_game_cljs.core.size,args);
};
var G__8513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8514__i = 0, G__8514__a = new Array(arguments.length -  0);
while (G__8514__i < G__8514__a.length) {G__8514__a[G__8514__i] = arguments[G__8514__i + 0]; ++G__8514__i;}
  args = new cljs.core.IndexedSeq(G__8514__a,0);
} 
return G__8513__delegate.call(this,args);};
G__8513.cljs$lang$maxFixedArity = 0;
G__8513.cljs$lang$applyTo = (function (arglist__8515){
var args = cljs.core.seq(arglist__8515);
return G__8513__delegate(args);
});
G__8513.cljs$core$IFn$_invoke$arity$variadic = G__8513__delegate;
return G__8513;
})()
:caos_game_cljs.core.size),new cljs.core.Keyword(null,"title","title",636505583),"Caos game",new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,caos_game_cljs.core.setup))?(function() { 
var G__8516__delegate = function (args){
return cljs.core.apply.call(null,caos_game_cljs.core.setup,args);
};
var G__8516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8517__i = 0, G__8517__a = new Array(arguments.length -  0);
while (G__8517__i < G__8517__a.length) {G__8517__a[G__8517__i] = arguments[G__8517__i + 0]; ++G__8517__i;}
  args = new cljs.core.IndexedSeq(G__8517__a,0);
} 
return G__8516__delegate.call(this,args);};
G__8516.cljs$lang$maxFixedArity = 0;
G__8516.cljs$lang$applyTo = (function (arglist__8518){
var args = cljs.core.seq(arglist__8518);
return G__8516__delegate(args);
});
G__8516.cljs$core$IFn$_invoke$arity$variadic = G__8516__delegate;
return G__8516;
})()
:caos_game_cljs.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,caos_game_cljs.core.draw_state))?(function() { 
var G__8519__delegate = function (args){
return cljs.core.apply.call(null,caos_game_cljs.core.draw_state,args);
};
var G__8519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8520__i = 0, G__8520__a = new Array(arguments.length -  0);
while (G__8520__i < G__8520__a.length) {G__8520__a[G__8520__i] = arguments[G__8520__i + 0]; ++G__8520__i;}
  args = new cljs.core.IndexedSeq(G__8520__a,0);
} 
return G__8519__delegate.call(this,args);};
G__8519.cljs$lang$maxFixedArity = 0;
G__8519.cljs$lang$applyTo = (function (arglist__8521){
var args = cljs.core.seq(arglist__8521);
return G__8519__delegate(args);
});
G__8519.cljs$core$IFn$_invoke$arity$variadic = G__8519__delegate;
return G__8519;
})()
:caos_game_cljs.core.draw_state));
});
goog.exportSymbol('caos_game_cljs.core.caos_game_cljs', caos_game_cljs.core.caos_game_cljs);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),caos_game_cljs.core.caos_game_cljs,new cljs.core.Keyword(null,"host-id","host-id",742376279),"caos-game-cljs"], null));
}

//# sourceMappingURL=core.js.map