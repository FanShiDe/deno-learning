// same as package.json

// Add dependencies in here
export { serve, Server, ServerRequest, HTTPOptions, listenAndServe } from "https://deno.land/std@v0.66.0/http/server.ts"
export * as path from "https://deno.land/std@v0.66.0/path/mod.ts"
export * as fs from "https://deno.land/std@v0.66.0/fs/mod.ts"

// Add test dependencies in here
export { assertEquals } from "https://deno.land/std@v0.66.0/testing/asserts.ts"
