import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'The shadow of the west hill moves across the pasture without bending a blade of grass.\nIt climbs the fence, then the barn wall, then the ridge, as the whole valley tilts into night.';

if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error('Entry must be 1-280 characters');
}

const outputDir = process.env.POEM_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), TEXT, 'utf8');
console.log(`Characters: ${TEXT.length}`);
