import { assert, Equals } from 'tsafe'
import type { RequestEvent } from '@sveltejs/kit'
import { context, type Client } from '@svelte-api/core'

const first = context.use(() => {
  return {
    first: 1
  }
})
const second = context.use(() => {
  return {
    second: 2
  }
})

const router = {
  // Test call
  call: context
  .call(ctx => {
    // Test context
    type Ctx = typeof ctx
    type ExpectedCtx = {
      event: RequestEvent
    }
    assert<Equals<ExpectedCtx, Ctx>>()
    return 1
  }),

  // Test params
  params: context
    .params<number>()
    .call((input, ctx) => {
      // Test context
      type Ctx = typeof ctx
      type ExpectedCtx = {
        event: RequestEvent
      }
      assert<Equals<ExpectedCtx, Ctx>>()

      // Test input
      type Input = typeof input
      type ExpectedInput = number
      assert<Equals<ExpectedInput, Input>>()
    }),
  
  // Test chain
  chain: context
    .chain(first)
    .chain(second)
    .call(ctx => {
      // Test context
      type Ctx = typeof ctx
      type ExpectedCtx = {
        event: RequestEvent,
        first: number,
        second: number
      }
      assert<Equals<ExpectedCtx, Ctx>>()
    })
}

// Test router
type R = Client<typeof router>
type ExpectedR = {
  call: () => Promise<number>,
  params: (n: number) => Promise<void>,
  chain: () => Promise<void>
}
assert<Equals<ExpectedR, R>>()