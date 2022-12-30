const testFolder = "./docs/components";
const fs = require("fs");

function swapDocs(content: string) {
  const lines = content.split("\n");

  let ds = -1;
  for (const l in lines) {
    if (lines[l].includes("BEGIN_DOCS")) {
      ds = parseInt(l);
      break;
    }
  }

  let newContent = "";

  if (ds > 0) {
    newContent += lines[0] + "\n";

    for (let l = ds + 1; l < lines.length; l++) newContent += lines[l] + "\n";
    for (let l = 1; l < ds; l++) newContent += lines[l] + "\n";
  } else newContent = content;

  newContent = newContent.replaceAll("() =&gt; [", "[");

  return newContent;
}

fs.readdirSync(testFolder).forEach((file: string) => {
  if (fs.lstatSync(testFolder + "/" + file).isDirectory()) {
    fs.readdirSync(testFolder + "/" + file).forEach((file2: string) => {
      const content = fs.readFileSync(testFolder + "/" + file + "/" + file2);

      fs.writeFileSync(testFolder + "/" + file + "/" + file2, swapDocs(content.toString()));
    });
  }
});
