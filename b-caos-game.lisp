(ql:quickload "opticl")
(require :opticl)

(defparameter *radius* 200)
(defparameter *w* (+ 1 *radius*))
(defparameter *h* (+ 1 *radius*))
(defparameter *n* 3)
(defparameter *m* *n*)
(defparameter *cut* 2)
(defparameter *cycles* 100000)
(defparameter *r* *radius*)
(defparameter *angle* (/ (* 2 PI) *n*))
(defparameter *points* (make-array *n*))
(defparameter *last-point* '(0 0))
(defparameter *starting-point* '(0 0))

(defun init-points()
    (dotimes (i *n*)
        (setf (aref *points* i)
            (list
                (* *r* (cos (* *angle* i)))
                (* *r* (sin (* *angle* i)))))))

(defun get-random-point(m)
    (aref *points* m))

(defun get-random-number()
    (random *m*))

(defun get-random-starting-point()
    (list (random *radius*)
          (random *radius*)))

(defun middle-point (p q)
    (list (/ (+ (first p) (first q)) *cut*)
          (/ (+ (second p) (second q)) *cut*)))

(defun centerize (p)
    (list (floor (/ (+ (first p) *w*) 2))
          (floor (/ (+ (second p) *h*) 2)))) 

(defun check-point (p)
    (and (>= *w* (abs (first p)))
         (>= *h* (abs (second p)))))

(defun in (v interval)
    (and (>= v (first interval))
         (< v (second interval)) ))

(defun h-to-rgb-values (h)
    (cond ((in h '(0 1)) (values 255 (floor(* h 255)) 0))
          ((in h '(1 2)) (values (floor(* (- 2 h) 255)) 255 0))
          ((in h '(2 3)) (values 0 255 (floor(* (- h 2)) 255)))
          ((in h '(3 4)) (values 0 (floor(* (- 4 h) 255)) 255))
          ((in h '(4 5)) (values (floor(* (- h 4) 255)) 0 255))
          ((in h '(5 6)) (values 255 0 (floor(* (- 6 h) 255))))
          (T (values 255 255 255)) ))

(defun setup (image)
    (init-points)
    (setf *starting-point* (get-random-starting-point))
    (dotimes (i *n*)
        (setf (opticl:pixel image 
                     (first (centerize (aref *points* i)))
                     (second (centerize (aref *points* i))))
              (values 255 255 255) )))

(defun draw (image)
    (dotimes (i *cycles*)
        (let* ((m (get-random-number)) (point (get-random-point m)))
            (let ((p (middle-point point *starting-point*)))
                (if (check-point p)
                    (setf (opticl:pixel image
                                 (first (centerize p))
                                 (second (centerize p)))
                          ;(values 255 255 255)
                          (h-to-rgb-values (* (float (/ m *n*)) 6))
                    ))
                (setf *starting-point* p)))))

(defun draw-unique (image)
    (dotimes (i *cycles*)
        (let* ((m (get-random-number)) (point (get-random-point m)))
            (if (not (equal point *last-point*))
                (let ((p (middle-point point *starting-point*)))
                    (if (check-point p)
                        (setf (opticl:pixel image
                                     (first (centerize p))
                                     (second (centerize p)))
                              (values 255 255 255)))
                    (setf *last-point* point)
                    (setf *starting-point* p))))))

(defun renderer-test ()
      (let ((image (opticl:make-8-bit-rgb-image *w* *h* :initial-element 0)))
         (setup image)
         (draw image)
         (opticl:write-png-file "caos.png" image)) )

;EXECUTION
(renderer-test)
