import { assertEquals } from "../deps.ts"
import { getString } from "../mod.ts"

Deno.test('test getString', (): void => {
  assertEquals(getString(), 'Hello Deno')
})
