import { assert, Equals } from "tsafe"
import { Result } from "kavi"
import { describe, it } from "../utils.types"

describe("result.types expect", () => {
  it("should have value as returntype", async () => {
    const _result = await new Result<number>(() => 1).expect()

    type Result = typeof _result
    assert<Equals<Result, number>>()
  })
})
