;; Proposal Submission Contract

;; Data Variables
(define-map proposals
  { id: uint }
  { title: (string-utf8 50), description: (string-utf8 500), proposer: principal })
(define-data-var proposal-count uint u0)

;; Public Functions
(define-public (submit-proposal (title (string-utf8 50)) (description (string-utf8 500)))
  (let ((new-id (+ (var-get proposal-count) u1)))
    (map-set proposals { id: new-id } { title: title, description: description, proposer: tx-sender })
    (var-set proposal-count new-id)
    (ok new-id)))

;; Read-only Functions
(define-read-only (get-proposal (id uint))
  (map-get? proposals { id: id }))

(define-read-only (get-proposal-count)
  (var-get proposal-count))

