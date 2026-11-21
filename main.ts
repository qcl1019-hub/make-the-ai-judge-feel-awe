import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'You fall asleep by the embers in the yard.\nYour father wraps you in a blanket, and lifts you.\nA step in the grass. His warm chest. A step.\nLight that left the stars\nbefore there were houses\nrests on the wool.\nHe carries you in.\nYou do not have to wake.';

if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error('Entry must be 1-280 characters');
}

const outputDir = process.env.POEM_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), TEXT, 'utf8');
console.log(`Characters: ${TEXT.length}`);
