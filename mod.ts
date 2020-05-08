// app entry

import { serve, Server, HTTPOptions } from "./deps.ts"

export const createServer = async (addr: string | HTTPOptions): Promise<void> => {
  const s = serve(addr)
  console.log(`server running at: ${addr}`)
  for await (const req of s) {
    req.respond({ body: "Hello Deno\n" });
  }
}

export const getString = (): string => 'Hello Deno'
