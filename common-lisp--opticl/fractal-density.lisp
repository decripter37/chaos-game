(ql:quickload "opticl")
(require :opticl)

(defparameter *size* 0)
(defparameter *num-of-points* 0)
(defparameter *n* 3)

(defun area-polygon-inside-circle (r n)
    (* (* r r) (/ n 2) (sin (/ (* 2 pi) n))))
(defun get-size ()
    (let ((img (opticl:read-png-file "chaos.png")))
        ;(print (first(array-dimensions img)))
        (typecase img  
            (opticl:8-bit-rgb-image  
                (locally  
                    (opticl:with-image-bounds (height width) img  
                        (progn  
                            (setf *size* (area-polygon-inside-circle (/ height 2) *n*))
                            (loop for i below height do 
                                (loop for j below width do  
                                    (multiple-value-bind (r g b)  
                                        (opticl:pixel img i j)  
                                        (declare (type (unsigned-byte 8) r g b))  
                                        (if (not(and (= 0 r) (= 0 g) (= 0 b)))
                                            (setf *num-of-points* (1+ *num-of-points*)))))))))))))

(get-size)
(print (format nil "The density of the fractal is: ~5$." (/ *num-of-points* *size*)))
