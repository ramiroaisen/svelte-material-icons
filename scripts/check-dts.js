const fs = require("fs");
const path = require("path");

const names = fs.readdirSync(path.resolve(__dirname, "../svelte-material-icons"));

console.log(names.length, "files");

const svelte = new Set();
const dts = new Set();

for(const name of names) {
  if(name.endsWith(".svelte")) {
    svelte.add(name.replace(".svelte", ""))
  }

  if(name.endsWith(".svelte.d.ts")) {
    dts.add(name.replace(".svelte.d.ts", ""));
  }
}

console.log(`${svelte.size} svelte files`);
console.log(`${dts.size} dts files`);

const no_dts = new Set();
for(const name of svelte) {
  if(!dts.has(name)) no_dts.add(name);
}

const extra_dts = new Set();
for(const name of dts) {
  if(!svelte.has(name)) extra_dts.add(name);
}

console.log(`extra dts: ${extra_dts.size} files`);
console.log(`no dts: ${no_dts.size} files`)

console.log("== no dts ==");
for(const name of no_dts) console.log(name);

console.log("== extra dts ==");
for(const name of extra_dts) console.log(name);
