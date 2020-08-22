import { serve, ServerRequest, HTTPOptions, listenAndServe, path, fs } from "./deps.ts"

export const __ = ({ url = import.meta.url }: { url: string }) => {
  const u: URL = new URL(url);
  const f: string = u.protocol === 'file:' ? u.pathname : url;
  const d: string = f.replace(/[/][^/]*$/, '');
  return {
    d,
    f,
    dirname: d,
    filename: f,
    __dirname: d,
    __filename: f,
  };
}

export const createServer = async (addr: string | HTTPOptions): Promise<void> => {
  const s = serve(addr)
  const address = typeof addr === 'string' ? addr : typeof addr === 'object' ? `${addr.hostname}:${addr.port}` : JSON.stringify(addr)

  console.log(`deno server running at: ${address}`)
  for await (const req of s) {
    req.respond({ body: "Hello Deno\n" });
  }
}

export const createStaticServer = async (addr: string | HTTPOptions, rootDir: string = Deno.cwd()) => {
  await listenAndServe(addr, async (req: ServerRequest) => {
    if (req.method === "GET") {
      const filePath = path.join(rootDir, req.url === '/' ? 'index.html' : req.url)

      const isExist = await fs.exists(filePath)

      if (!isExist) {
        return req.respond({ body: "Not found" })
      }

      return req.respond({
        status: 200,
        headers: new Headers({
          "content-type": "text/html",
        }),
        body: await Deno.open(filePath),
      });
    }

    return req.respond({ body: "Hello Deno\n" })
  })
}

export const getString = (): string => 'Hello Deno'
