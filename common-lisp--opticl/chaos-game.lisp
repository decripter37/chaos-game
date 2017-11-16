(ql:quickload "opticl")
(require :opticl)

;;; Raggio cerchio contenuto nella finestra
(defparameter *radius* 3000)
;;; Larghezza finestra
(defparameter *w* (+ 1 *radius*))
;;; Altezza finestra
(defparameter *h* (+ 1 *radius*))
;;; Numero attrattori
(defparameter *n* 3)
;;; Numero attrattori attivi
(defparameter *m* *n*)
;;; Distanza taglio (ex: 2 => taglio a 1/2)
(defparameter *cut* 2)
;;; Numero cicli
(defparameter *cycles* 100000000)
;;; Raggio cerchio contenente il frattale
(defparameter *r* *radius*)
;;; Angolo degli attrattori
(defparameter *angle* (/ (* 2 PI) *n*))
;;; Attrattori
(defparameter *points* (make-array *n*))
;;; Ultimo attrattore scelto
(defparameter *last-point* '(0 0))
;;; Punto che si sposta verso gli attrattori
(defparameter *starting-point* '(0 0))

;;; Inizializza attrattori
(defun init-points()
    (dotimes (i *n*)
        (setf (aref *points* i)
            (list
                (* *r* (cos (* *angle* i)))
                (* *r* (sin (* *angle* i)))))))

;;; Genera numero di attrattore attivo a caso
(defun get-random-number()
    (random *m*))

;;; Genera il punto iniziale a caso
(defun get-random-starting-point()
    (list (random *radius*)
          (random *radius*)))

;;; Muove verso l'attrattore
(defun middle-point (p q)
    (list (/ (+ (first p) (first q)) *cut*)
          (/ (+ (second p) (second q)) *cut*)))

;;; Centra le coordinate per la stampa
(defun centerize (p)
    (list (floor (/ (+ (first p) *w*) 2))
          (floor (/ (+ (second p) *h*) 2)))) 

;;; Controlla se il punto esce dalla finestra
(defun check-point (p)
    (and (>= *w* (abs (first p)))
         (>= *h* (abs (second p)))))

;;; Controlla se un numero è in un intervallo
(defun in (v interval)
    (and (>= v (first interval))
         (< v (second interval)) ))

;;; Trasforma un numero in [0, 6) in un colore RGB 
(defun h-to-rgb-values (h)
    (cond ((in h '(0 1)) (values 255 (floor(* h 255)) 0))
          ((in h '(1 2)) (values (floor(* (- 2 h) 255)) 255 0))
          ((in h '(2 3)) (values 0 255 (floor(* (- h 2)) 255)))
          ((in h '(3 4)) (values 0 (floor(* (- 4 h) 255)) 255))
          ((in h '(4 5)) (values (floor(* (- h 4) 255)) 0 255))
          ((in h '(5 6)) (values 255 0 (floor(* (- 6 h) 255))))
          (T (values 255 255 255)) ))

;;; Inizializza tutto
(defun setup (image)
    (init-points)
    (setf *starting-point* (get-random-starting-point))
    (dotimes (i *n*)
        (setf (opticl:pixel image 
                     (first (centerize (aref *points* i)))
                     (second (centerize (aref *points* i))))
              (values 255 255 255) )))

;;; Disegna il frattale
(defun draw (image)
    (dotimes (i *cycles*)
        (let* ((m (get-random-number)) (point (aref *points* m)))
            (let ((p (middle-point point *starting-point*)))
                (if (check-point p)
                    (setf (opticl:pixel image
                                 (first (centerize p))
                                 (second (centerize p)))
                          (h-to-rgb-values (* (float (/ m *n*)) 6))))
                (setf *starting-point* p)))))

;;; Disegna il frattale, ma rendi impossibile scegliere di nuovo il punto appena scelto
(defun draw-unique (image)
    (dotimes (i *cycles*)
        (let* ((m (get-random-number)) (point (aref *points* m)))
            (if (not (equal point *last-point*))
                (let ((p (middle-point point *starting-point*)))
                    (if (check-point p)
                        (setf (opticl:pixel image
                                     (first (centerize p))
                                     (second (centerize p)))
                              (h-to-rgb-values (* (float (/ m *n*)) 6))))
                    (setf *last-point* point)
                    (setf *starting-point* p))))))

;;; Stampa l'immagine in chaos.png
(defun print-png ()
      (let ((image (opticl:make-8-bit-rgb-image *w* *h* :initial-element 0)))
         (setup image)
         (draw image)
         (opticl:write-png-file "chaos.png" image)) )

;EXECUTION
(print-png)
