import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'Forty-six billion light-years away, in a galaxy whose light tonight will never reach us, a hydrogen atom emits the exact same wavelength it does in a quiet room on Earth.';

if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error('Entry must be 1-280 characters');
}

const outputDir = process.env.POEM_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), TEXT, 'utf8');
console.log(TEXT.length);
