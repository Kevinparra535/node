const sharp = require("sharp");

sharp("./_DSC9961@2x.png").resize(80).greyscale().toFile("resizes.png");
