// Compiled by ClojureScript 1.9.473 {}
goog.provide('caos_game.core');
goog.require('cljs.core');
goog.require('quil.core');
caos_game.core.radius = (300);
caos_game.core.size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * caos_game.core.radius),((2) * caos_game.core.radius)], null);
caos_game.core.points_num = (5);
caos_game.core.points_radius = caos_game.core.radius;
caos_game.core.points_angle = (((2) * Math.PI) / caos_game.core.points_num);
caos_game.core.init_points = (function caos_game$core$init_points(){
var iter__7602__auto__ = (function caos_game$core$init_points_$_iter__8865(s__8866){
return (new cljs.core.LazySeq(null,(function (){
var s__8866__$1 = s__8866;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8866__$1);
if(temp__4657__auto__){
var s__8866__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8866__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__8866__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__8868 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__8867 = (0);
while(true){
if((i__8867 < size__7601__auto__)){
var i = cljs.core._nth.call(null,c__7600__auto__,i__8867);
cljs.core.chunk_append.call(null,b__8868,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(caos_game.core.points_radius * Math.cos((caos_game.core.points_angle * i))),(- (caos_game.core.points_radius * Math.sin((caos_game.core.points_angle * i))))],null)));

var G__8869 = (i__8867 + (1));
i__8867 = G__8869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8868),caos_game$core$init_points_$_iter__8865.call(null,cljs.core.chunk_rest.call(null,s__8866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8868),null);
}
} else {
var i = cljs.core.first.call(null,s__8866__$2);
return cljs.core.cons.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(caos_game.core.points_radius * Math.cos((caos_game.core.points_angle * i))),(- (caos_game.core.points_radius * Math.sin((caos_game.core.points_angle * i))))],null)),caos_game$core$init_points_$_iter__8865.call(null,cljs.core.rest.call(null,s__8866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7602__auto__.call(null,cljs.core.range.call(null,caos_game.core.points_num));
});
caos_game.core.points = caos_game.core.init_points.call(null);
caos_game.core.get_random_point = (function caos_game$core$get_random_point(){
return cljs.core.nth.call(null,caos_game.core.points,(cljs.core.rand.call(null,caos_game.core.points_num) | (0)));
});
caos_game.core.get_random_point_inside_circle = (function caos_game$core$get_random_point_inside_circle(){
while(true){
var x = (cljs.core.rand.call(null,cljs.core.first.call(null,caos_game.core.size)) - caos_game.core.radius);
var y = (cljs.core.rand.call(null,cljs.core.second.call(null,caos_game.core.size)) - caos_game.core.radius);
if(((caos_game.core.radius * caos_game.core.radius) < ((x * x) + (y * y)))){
continue;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[x,y],null));
}
break;
}
});
caos_game.core.random_point = caos_game.core.get_random_point_inside_circle.call(null);
caos_game.core.middle_point = (function caos_game$core$middle_point(p,q){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core.first.call(null,p) + cljs.core.first.call(null,q)) / (2)),((cljs.core.second.call(null,p) + cljs.core.second.call(null,q)) / (2))],null));
});
caos_game.core.reject_firsts = (function caos_game$core$reject_firsts(){
var iter__7602__auto__ = (function caos_game$core$reject_firsts_$_iter__8874(s__8875){
return (new cljs.core.LazySeq(null,(function (){
var s__8875__$1 = s__8875;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8875__$1);
if(temp__4657__auto__){
var s__8875__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8875__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__8875__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__8877 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__8876 = (0);
while(true){
if((i__8876 < size__7601__auto__)){
var _ = cljs.core._nth.call(null,c__7600__auto__,i__8876);
cljs.core.chunk_append.call(null,b__8877,(function (){var point = caos_game.core.get_random_point.call(null);
var point_inside = caos_game.core.random_point;
var p = caos_game.core.middle_point.call(null,point,point_inside);
return (
caos_game.core.random_point = p)
;
})());

var G__8878 = (i__8876 + (1));
i__8876 = G__8878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8877),caos_game$core$reject_firsts_$_iter__8874.call(null,cljs.core.chunk_rest.call(null,s__8875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8877),null);
}
} else {
var _ = cljs.core.first.call(null,s__8875__$2);
return cljs.core.cons.call(null,(function (){var point = caos_game.core.get_random_point.call(null);
var point_inside = caos_game.core.random_point;
var p = caos_game.core.middle_point.call(null,point,point_inside);
return (
caos_game.core.random_point = p)
;
})(),caos_game$core$reject_firsts_$_iter__8874.call(null,cljs.core.rest.call(null,s__8875__$2)));
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
caos_game.core.setup = (function caos_game$core$setup(){
quil.core.background.call(null,(255));

quil.core.frame_rate.call(null,(60));

caos_game.core.reject_firsts.call(null);

return quil.core.with_translation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null),(function (){var seq__8883 = cljs.core.seq.call(null,caos_game.core.points);
var chunk__8884 = null;
var count__8885 = (0);
var i__8886 = (0);
while(true){
if((i__8886 < count__8885)){
var p = cljs.core._nth.call(null,chunk__8884,i__8886);
quil.core.ellipse.call(null,cljs.core.first.call(null,p),cljs.core.second.call(null,p),(10),(10));

var G__8887 = seq__8883;
var G__8888 = chunk__8884;
var G__8889 = count__8885;
var G__8890 = (i__8886 + (1));
seq__8883 = G__8887;
chunk__8884 = G__8888;
count__8885 = G__8889;
i__8886 = G__8890;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8883);
if(temp__4657__auto__){
var seq__8883__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8883__$1)){
var c__7633__auto__ = cljs.core.chunk_first.call(null,seq__8883__$1);
var G__8891 = cljs.core.chunk_rest.call(null,seq__8883__$1);
var G__8892 = c__7633__auto__;
var G__8893 = cljs.core.count.call(null,c__7633__auto__);
var G__8894 = (0);
seq__8883 = G__8891;
chunk__8884 = G__8892;
count__8885 = G__8893;
i__8886 = G__8894;
continue;
} else {
var p = cljs.core.first.call(null,seq__8883__$1);
quil.core.ellipse.call(null,cljs.core.first.call(null,p),cljs.core.second.call(null,p),(10),(10));

var G__8895 = cljs.core.next.call(null,seq__8883__$1);
var G__8896 = null;
var G__8897 = (0);
var G__8898 = (0);
seq__8883 = G__8895;
chunk__8884 = G__8896;
count__8885 = G__8897;
i__8886 = G__8898;
continue;
}
} else {
return null;
}
}
break;
}
})());
});
caos_game.core.draw_state = (function caos_game$core$draw_state(){
return quil.core.with_translation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null),(function (){var point = caos_game.core.get_random_point.call(null);
var point_inside = caos_game.core.random_point;
var p = caos_game.core.middle_point.call(null,point,point_inside);
quil.core.fill.call(null,(0),(0),(0),(100));

quil.core.stroke.call(null,(0),(0),(0),(100));

quil.core.ellipse.call(null,cljs.core.first.call(null,p),cljs.core.second.call(null,p),(2),(2));

return (
caos_game.core.random_point = p)
;
})());
});
quil.core.defsketch.call(null,caos_game.core.caos_game,new cljs.core.Keyword(null,"title","title",636505583),"Caos game",new cljs.core.Keyword(null,"size","size",1098693007),caos_game.core.size,new cljs.core.Keyword(null,"setup","setup",1987730512),caos_game.core.setup,new cljs.core.Keyword(null,"draw","draw",1358331674),caos_game.core.draw_state);

//# sourceMappingURL=core.js.map