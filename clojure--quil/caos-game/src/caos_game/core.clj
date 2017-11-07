(ns caos-game.core
	(:require [quil.core :as q]))

(set! *unchecked-math* true)

(def radius 300)
(def size [(* 2 radius) (* 2 radius)])
(def points-num 3)
(def points-radius radius)
(def points-angle (/ (* 2 Math/PI) points-num))

(defn init-points []
	(for [i (range points-num)]
		(vector
				(* points-radius (Math/cos (* points-angle i)))
				(- (* points-radius (Math/sin (* points-angle i)))))))

(def points (init-points))

(defn get-random-point []
	(nth points (int (rand points-num))))

(defn get-random-point-inside-circle []
		(let [x (- (* (Math/random) (first size)) radius)
			  y (- (* (Math/random) (second size)) radius)]
			(if (< (* radius radius) (+ (* x x) (* y y))) (recur) (vector x y))))

(def random-point (get-random-point-inside-circle))

(defn middle-point [p q]
	(vector (/ (+ (first p) (first q)) 2) (/ (+ (second p) (second q)) 2)))

;;; QUIL

(defn setup []
	(q/background 255)
	(q/frame-rate 4000)
	(q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
		(doseq [p points]
			(q/ellipse (first p) (second p) 5 5 ))))

(defn draw-state []
	(q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
		(let [point (get-random-point)
			  point-inside random-point
			  p (middle-point point point-inside)]
			;(q/stroke 0 0 0 100)
			;(q/fill 0 0 0 100)
			;(q/ellipse (first p) (second p) 2 2)
			(.start (Thread. (q/point (first p) (second p))))
			(def random-point p))))

(defn -main []
    (q/defsketch caos-game
	    :title "Caos game"
	    :size size
	    :setup setup
	    :draw draw-state))
