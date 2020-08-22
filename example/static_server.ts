import { createStaticServer, __ } from '../mod.ts'

await createStaticServer({ hostname: '0.0.0.0', port: 4001 }, __(import.meta).dirname)