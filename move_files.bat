@echo off
mkdir frontend 2>nul
echo Moving files to frontend folder...

move .env frontend\
move eslint.config.mjs frontend\
move next-env.d.ts frontend\
move next.config.ts frontend\
move package-lock.json frontend\
move package.json frontend\
move postcss.config.mjs frontend\
move tsconfig.json frontend\

echo Moving directories...
move src frontend\
move public frontend\
move .next frontend\
move node_modules frontend\

echo Done.
