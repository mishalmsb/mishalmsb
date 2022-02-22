// const cvEn = document.querySelector(".cv-en");
// const cvPt = document.querySelector(".cv-pt");
// var activeCvLang = "en";

// function showCVByLang(lang) {
//   activeCvLang = lang;
//   if (activeCvLang == "pt") {
//     cvEn.classList.add("d-none");
//     cvPt.classList.remove("d-none");
//   } else {
//     cvEn.classList.remove("d-none");
//     cvPt.classList.add("d-none");
//   }
// }

// function printCv() {
//   var el = document.querySelector(`.cv-${activeCvLang}`);

//   console.log(el);

//   html2pdf(el, {
//     filename: "myfile.pdf",
//     image: { type: "jpeg", quality: 1 },
//     html2canvas: { scale: 2, logging: true, letterRendering: true },
//     jsPDF: {
//       unit: "in",
//       format: "a4",
//       orientation: "portrait",
//       pagesplit: true,
//     },
//   });
// }

// function printCv(lang = "en") {
//   var el = document.querySelector(`.cv-${lang}`);
//   var filename = lang == "en" ? "cv-mishal.pdf" : "cv-mishal-pt.pdf";
//   html2pdf(el, {
//     filename: filename,
//     image: { type: "jpeg", quality: 1 },
//     html2canvas: { scale: 2, logging: true, letterRendering: true },
//     jsPDF: {
//       unit: "in",
//       format: "letter",
//       orientation: "portrait",
//       pagesplit: true,
//     },
//   });
// }

function printCv(lang = "en") {
  var el = document.querySelector(`.cv-${lang}`);

  var pdf = new jsPDF("p", "pt", "a4");
  pdf.addHTML(el, 15, 15, function () {
    pdf.save("div.pdf");
  });
}
