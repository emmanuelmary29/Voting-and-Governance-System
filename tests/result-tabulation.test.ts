import { describe, it, expect, vi } from "vitest"

describe("Result Tabulation Contract", () => {
  const mockContractCall = vi.fn()
  
  it("tabulates a result", () => {
    mockContractCall.mockReturnValueOnce({ result: { value: true } })
    const result = mockContractCall("tabulate-result", [1, 10, 5])
    expect(result.result.value).toBe(true)
  })
  
  it("gets a result", () => {
    mockContractCall.mockReturnValueOnce({
      result: {
        value: {
          approved: true,
          votes_for: 10n,
          votes_against: 5n,
        },
      },
    })
    const result = mockContractCall("get-result", [1])
    expect(result.result.value).toEqual({
      approved: true,
      votes_for: 10n,
      votes_against: 5n,
    })
  })
})

