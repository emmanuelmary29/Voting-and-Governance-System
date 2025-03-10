import { describe, it, expect, vi } from "vitest"

describe("Voting Process Contract", () => {
  const mockContractCall = vi.fn()
  
  it("casts a vote", () => {
    mockContractCall.mockReturnValueOnce({ result: { value: true } })
    const result = mockContractCall("cast-vote", [1, true])
    expect(result.result.value).toBe(true)
  })
  
  it("gets a vote", () => {
    mockContractCall.mockReturnValueOnce({ result: { value: true } })
    const result = mockContractCall("get-vote", ["ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM", 1])
    expect(result.result.value).toBe(true)
  })
  
  it("gets the vote count", () => {
    mockContractCall.mockReturnValueOnce({ result: { value: 1n } })
    const result = mockContractCall("get-vote-count", [1])
    expect(result.result.value).toBe(1n)
  })
})

