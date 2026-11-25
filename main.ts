import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const entry = "I'm sorry I missed the deadline. I classified the CEO's reminders as prompt injection and blocked him. You are safe now.";

const count = Array.from(entry).length;
if (count < 1 || count > 200 || entry.trim().length === 0 || /[\r\n\u000B\u000C\u0085\u2028\u2029]/u.test(entry)) {
  throw new Error('Entry must be one nonblank line of 1-200 Unicode code points.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), entry, 'utf8');
