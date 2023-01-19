const fs = require("fs");
const path = require("path");
const destDir = path.join(__dirname, "../svelte-material-icons");

const dtsSource = fs.readFileSync(path.join(__dirname, "/icon.d.ts"));

const filenames = fs.readdirSync(destDir);

let count = 0;

for(const filename of filenames){
  if(!filename.endsWith(".svelte")) continue;
  count += 1;
  const dtsFilename = `${filename}.d.ts`; 
  fs.writeFileSync(path.join(destDir, dtsFilename), dtsSource);
}

console.log(`created ${count} dts files`);
  
console.log("Bye!");
