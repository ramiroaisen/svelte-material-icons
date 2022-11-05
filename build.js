/*
  SOME CONSIDERATIONS

  All svg files have ONE svg element
  All svg elements have the same attrs (xmlns, xlink, version, id, width, height viewBox)
  All svg viewBox's are "0 0 24 24"
  All svg files have ONE path element
  All path elements have only the d attr;
*/

const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const allowedAttrs = ["width", "height", "class", "viewBox"];
const template = fs.readFileSync(__dirname + "/template.svelte", "utf8");

const srcDir = __dirname + "/MaterialDesign/svg";
const destDir = __dirname + "/svelte-material-icons";

const dtsSource = fs.readFileSync(path.join(__dirname, "/icon.d.ts"));

const hyp = "-".charCodeAt(0);

const generateComponentFilename = (svgName, ext = ".svelte") => {
  let name = svgName.replace(".svg", "");
  let helper = "";
  
  let upper = true;

  for(let i = 0; i < name.length; i++){
    
    const charCode = name.charCodeAt(i);
    
    if(charCode === hyp){
      upper = true;
      continue;
    }

    let char = String.fromCharCode(charCode);
    
    if(upper)
      char = char.toUpperCase();

    helper += char;

    upper = false;
  }

  return helper + ext;
}

const generateComponentSource = (file) => {
  const $ = cheerio.load(file);
  const $svg = $("svg");
  
  let attrs = $svg.attr();
  for(const attr in attrs){
    // remove unused attrs
    if(!allowedAttrs.includes(attr)){
      $svg.removeAttr(attr);
    }
  }

  // Add attrs
  $svg.attr("width", "{width}");
  $svg.attr("height", "{height}");
  $svg.attr("class", "{$$$props.class}")
  $svg.attr("viewBox", "{viewBox}");

  const $path = $svg.find("> path");
  
  // add fill attr
  $path.attr("fill", "${color}");

  return template.replace("%svg%", $.html($svg));
}

const filenames = fs.readdirSync(srcDir);
console.log("Generating " + filenames.length + " components");

for(let i = 0; i < filenames.length; i++){
  //process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write("Component" + ("" + (i + 1)).padStart(5, " ") + " / " + filenames.length);

  const filename = filenames[i];
  const file = fs.readFileSync(path.join(srcDir, filename), "utf8");

  const componentFilename = generateComponentFilename(filename, ".svelte");
  const componentSource = generateComponentSource(file);
  
  const dtsFilename = componentFilename + ".d.ts";

  fs.writeFileSync(
    path.join(destDir, componentFilename),
    componentSource
  );

  fs.writeFileSync(path.join(destDir, dtsFilename), dtsSource);

}

process.stdout.write("\n");

// copy readme
console.log("Copying README.md to npm package");

// npm does not support ```svelte so change it to ```html
const readmeSrc = fs.readFileSync(__dirname + "/README.md", "utf8");
const readme = readmeSrc.replace(/\`\`\`svelte/g, "```html");

fs.writeFileSync(path.join(destDir, "README.md"), readme);
  
console.log("Bye!");
