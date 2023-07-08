const mime = require('mime-types');

const imageExtensions = [
  "jpeg",
  "jpg",
  "tif",
  "png",
  "bmp",
  "dib",
  "rle",
  "jfif",
  "jp2",
  "gif",
  "tiff",
  "pct",
  "lco",
  "hdr",
  "exif",
  "lwi",
  "wmf",
  "emf",
];

for (var i = 0; i < imageExtensions.length; i++) {
  const mimeType = mime.lookup(imageExtensions[i])

  if (mimeType) {

    console.log(`image,${imageExtensions[i]},${mimeType}`)
  } else {

    console.log(`image,${imageExtensions[i]},NGdesu`)
  }
}


const nonImageExtensions = [
  "dgn",
  "doc",
  "dwf",
  "dwg",
  "dxf",
  "gbxml",
  "ifc",
  "pdf",
  "skp",
  "txt",
  "xls",
  "xlsx",
  "zip",
  "ppt",
  "rvt",
  "rfa",
  "rte",
  "rft",
  "sat",
  "odbc",
  "html",
  "pln",
  "pla",
  "bpn",
  "tpl",
  "mod",
  "2dl",
  "bimx",
  "bimproject",
  "twtravel",
  "bimlibrary",
  "bcmb",
  "bcsb",
  "lcf",
  "gsm",
  "gdl",
  "pmk",
  "lbk",
  "rpt",
  "rep",
  "twsupport",
  "ifcxml",
  "ifczip",
  "bcf",
  "saf",
  "nwc",
  "smc",
  "c4d",
  "3dm",
  "3ds",
  "atl",
  "kml",
  "kmz",
  "dae",
  "epx",
  "fact",
  "obj",
  "stl",
  "u3d",
  "fbx",
  "xyz",
  "e57",
  "mp4",
  "mov",
  "plt",
  "lic",
  "lis",
  "phpp",
];

for (var i = 0; i < nonImageExtensions.length; i++) {
  const mimeType = mime.lookup(nonImageExtensions[i])

  if (mimeType) {

    console.log(`nonImage,${nonImageExtensions[i]},${mimeType}`)
  } else {

    console.log(`nonImage,${nonImageExtensions[i]},NGdesu`)
  }
}
