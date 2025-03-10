;; Voter Registration Contract

;; Data Variables
(define-map voters principal bool)
(define-data-var voter-count uint u0)

;; Public Functions
(define-public (register-voter (voter principal))
  (if (is-registered voter)
    (err u1) ;; Already registered
    (begin
      (map-set voters voter true)
      (var-set voter-count (+ (var-get voter-count) u1))
      (ok true))))

;; Read-only Functions
(define-read-only (is-registered (voter principal))
  (default-to false (map-get? voters voter)))

(define-read-only (get-voter-count)
  (var-get voter-count))

