import * as fs from "fs";
import { marked } from "marked";

const readmeMD = fs.readFileSync("./readme.md").toString();
const readmeHTML = marked.parse(readmeMD);

test("Make sure no mustache syntax is left in readme.md", () => {
	// prettier-ignore
	expect(readmeMD.includes("```markdown") 
    || readmeMD.includes("``` markdown") 
    || readmeMD.includes("~~~markdown") 
    || readmeMD.includes("~~~ markdown") 
    || (!readmeHTML.includes("{{pkg.") 
    && !readmeHTML.includes("{{ pkg.") 
    && !readmeHTML.includes("{{ load:") 
    && !readmeHTML.includes("{{load:") 
    && !readmeHTML.includes("{{ template:") 
    && !readmeHTML.includes("{{template:") 
    && !readmeHTML.includes("{{ bullets") 
    && !readmeHTML.includes("{{bullets"))
    ).toBe(true);
});
