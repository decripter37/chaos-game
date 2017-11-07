(ql:quickload "sdl2")
(require :sdl2)

(defconstant RADIUS 500)
(defconstant W RADIUS)
(defconstant H RADIUS)
(defconstant N 4)
(defconstant CUT 1/3)
(defconstant CYCLES 100000)
(defconstant R RADIUS)
(defconstant ANGLE (/ (* 2 PI) N))
(defvar points (make-array N))
(defvar last-point '(0 0))
(defvar starting-point '(0 0))

(defun init-points()
    (dotimes (i N)
        (setf (aref points i)
            (list
                (* R (cos (* ANGLE i)))
                (* R (sin (* ANGLE i)))))))

(defun get-random-point()
    (aref points (random N)))

(defun get-random-starting-point()
    (list (random RADIUS) (random RADIUS)))

(defun middle-point (p q)
    (list (* (+ (car p) (car q)) CUT) (* (+ (cadr p) (cadr q)) CUT)))

(defun centerize (p)
    (list (/ (+ (car p) W) 2) (/ (+ (cadr p) H) 2))) 

(defun test-render-clear (renderer)
    (sdl2:set-render-draw-color renderer 0 0 0 255)
    (sdl2:render-clear renderer))

(defun setup (renderer)
    (init-points)
    (setf starting-point (get-random-starting-point))
    (sdl2:set-render-draw-color renderer 255 255 255 100)
    (dotimes (i N)
        (sdl2:render-draw-point renderer (floor(car (centerize (aref points i)))) (floor(cadr (centerize (aref points i)))))))

(defun draw (renderer k)
    (dotimes (i k)
        (let ((point (get-random-point)) (point-start starting-point))
            (if T;(not (equal point last-point))
                (let ((p (middle-point point point-start)))
                    (sdl2:set-render-draw-color renderer 255 255 255 100)
                    (sdl2:render-draw-point renderer (floor(car (centerize p))) (floor(cadr (centerize p))))
                    (setf last-point point)
                    (setf starting-point p))))))

(defun renderer-test ()
    "Fractal generator with chaos game"
    (sdl2:with-init (:everything)
        (sdl2:with-window (win :title "Caos game" :flags '(:shown) :W W :H H)
            (sdl2:with-renderer (renderer win :flags '(:accelerated))
                (setup renderer)
                (draw renderer CYCLES)
                (sdl2:with-event-loop (:method :poll)
                    (:keyup (:keysym keysym)
                        (when (sdl2:scancode= (sdl2:scancode-value keysym) :scancode-escape)
                            (sdl2:push-event :quit)))
                    (:idle ()
                        (sdl2:render-present renderer))
                    (:quit () t))))))

;EXECUTION
(renderer-test)
