const testFolder = "./docs/components";
const fs = require("fs");

function swapDocs(content: string) {
  let lines = content.split("\n");

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

  // now fix table
  lines = newContent.split("\n");
  let dt = -1;
  for (const l in lines) {
    if (lines[l].includes("## Props")) {
      dt = parseInt(l);
      break;
    }
  }

  lines[dt + 2] = lines[dt + 2].replace("| Values |", "|");

  const parts = lines[dt + 3].split("|");
  parts[4] = "_REMOVE_";
  lines[dt + 3] = parts.join("|").replace(/\|_REMOVE_\|/, "|");

  let i = 0;
  while (lines[dt + 4 + i][0] === "|") {
    const parts = lines[dt + 4 + i].split("|");
    //console.log({ lines: lines[0], part: parts });
    if (parts[1][1] !== "-") parts[1] = "`" + parts[1] + "`";
    //console.log({ part2: parts });

    lines[dt + 4 + i] = `|${parts[1]}|${parts[2]}|${parts[3]}|${parts[5]}|`;
    lines[dt + 4 + i] = lines[dt + 4 + i].replaceAll("||", "| - |");

    i++;
  }

  newContent = lines.join("\n");

  return newContent;
}

fs.readdirSync(testFolder).forEach((file: string) => {
  if (fs.lstatSync(testFolder + "/" + file).isDirectory()) {
    fs.readdirSync(testFolder + "/" + file).forEach((file2: string) => {
      const content = fs.readFileSync(testFolder + "/" + file + "/" + file2);

      fs.writeFileSync(testFolder + "/" + file + "/" + file2, swapDocs(content.toString()));
    });
  } else {
    const content = fs.readFileSync(testFolder + "/" + file);

    fs.writeFileSync(testFolder + "/" + file, swapDocs(content.toString()));
  }
});

/*fs.readdirSync(testFolder).forEach((file2: string) => {
    if (fs.lstatSync(testFolder + "/" + file2).isDirectory()) return;

    const content = fs.readFileSync(testFolder + "/" + file2);

    fs.writeFileSync(testFolder + "/" + file2, swapDocs(content.toString()));
  });*/ // NO IDEA WHY THIS DOESNT WORK
