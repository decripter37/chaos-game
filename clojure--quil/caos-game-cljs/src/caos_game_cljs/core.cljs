(ns caos-game-cljs.core
	(:require [quil.core :as q :include-macros true]))

(def radius 300)
(def size [(* 2 radius) (* 2 radius)])

(def points-num 3)
(def points-radius radius)
(def points-angle (/ (* 2 Math/PI) points-num))

(defn init-points []; -- ([x y] [x y] ... )
	(for [i (range points-num)]
		(vector
				(* points-radius (Math/cos (* points-angle i)))
				(- (* points-radius (Math/sin (* points-angle i)))))))

(def points (init-points))

(defn get-random-point []
	(nth points (int (rand points-num))))

(defn get-random-point-inside-circle []
		(let [x (- (rand (first size)) radius)
			  y (- (rand (second size)) radius)]
			(if (< (* radius radius) (+ (* x x) (* y y))) (recur) (vector x y))))

(def random-point (get-random-point-inside-circle))

(defn middle-point [p q]
	(vector (/ (+ (first p) (first q)) 2) (/ (+ (second p) (second q)) 2)))

(defn reject-firsts []
	(for [_ (range 100)]
		(let [point (get-random-point)
			  point-inside random-point
			  p (middle-point point point-inside)]
			(def random-point p))))

;;; QUIL

(defn setup []
	(q/background 255)
	(q/frame-rate 60)
	(reject-firsts)
	(q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
		(doseq [p points]
			(q/ellipse (first p) (second p) 10 10 ))))

(defn draw-state []
	(q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
		(let [point (get-random-point)
			  point-inside random-point
			  p (middle-point point point-inside)]
			(q/fill 0 0 0 100)
			(q/stroke 0 0 0 100)
			(q/ellipse (first p) (second p) 2 2)
			(def random-point p))))

(q/defsketch caos-game-cljs
	:host "caos-game-cljs"
	:title "Caos game"
	:size size
	:setup setup
	:draw draw-state)
