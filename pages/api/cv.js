import { readFileSync } from "fs";
import path from "path";

const CV = (_, res) => {
  const pdfPath = path.join(process.cwd(), "public", "cv.pdf");
  const pdfContent = readFileSync(pdfPath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `inline; name="Curriculum Vitae"; filename="Curriculum Vitae - Josh Newham.pdf"`
  );
  res.send(pdfContent);
};

export default CV;
