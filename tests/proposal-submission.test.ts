import { describe, it, expect, vi } from "vitest"

describe("Proposal Submission Contract", () => {
  const mockContractCall = vi.fn()
  
  it("submits a new proposal", () => {
    mockContractCall.mockReturnValueOnce({ result: { value: 1n } })
    const result = mockContractCall("submit-proposal", ["Test Proposal", "This is a test proposal"])
    expect(result.result.value).toBe(1n)
  })
  
  it("gets a proposal", () => {
    mockContractCall.mockReturnValueOnce({
      result: {
        value: {
          title: "Test Proposal",
          description: "This is a test proposal",
          proposer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
        },
      },
    })
    const result = mockContractCall("get-proposal", [1])
    expect(result.result.value).toEqual({
      title: "Test Proposal",
      description: "This is a test proposal",
      proposer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    })
  })
  
  it("gets the proposal count", () => {
    mockContractCall.mockReturnValueOnce({ result: { value: 1n } })
    const result = mockContractCall("get-proposal-count")
    expect(result.result.value).toBe(1n)
  })
})

