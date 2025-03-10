;; Result Tabulation Contract

;; Data Variables
(define-map results { proposal-id: uint } { approved: bool, votes-for: uint, votes-against: uint })

;; Public Functions
(define-public (tabulate-result (proposal-id uint) (votes-for uint) (votes-against uint))
  (let ((approved (> votes-for votes-against)))
    (map-set results
      { proposal-id: proposal-id }
      { approved: approved, votes-for: votes-for, votes-against: votes-against })
    (ok approved)))

;; Read-only Functions
(define-read-only (get-result (proposal-id uint))
  (map-get? results { proposal-id: proposal-id }))

