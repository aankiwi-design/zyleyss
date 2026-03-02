"use strict";
const chalk = require("chalk");
const gradient = require("gradient-string");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

// Banner yang lebih rapi
console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));

console.log(
  chalk.hex('#d7a1ff').italic('     T H A N K S   F O R   U S I N G\n') +
  chalk.hex('#d7a1ff').italic('          ⋆ ˚ ✧ ₊ ˚ ෆ\n')
);

console.log(`
> Zileys | WhatsApp API
> Thanks for using this Zileys Modified Baileys!
`);

console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));

console.log();
console.log(chalk.bold(gradient(['magenta', 'cyan'])('> Modified developer by. Sazyy <')));
console.log();

// Utility functions
const __createBinding = (o, m, k, k2) => {
  if (k2 === undefined) k2 = k;
  const desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { 
      enumerable: true, 
      get: () => m[k] 
    };
  }
  Object.defineProperty(o, k2, desc);
};

const exportStar = (m, exports) => {
  for (const p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) {
      __createBinding(exports, m, p);
    }
  }
};

const importDefault = (mod) => {
  return mod && mod.__esModule ? mod : { default: mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

// Core exports
const Socket_1 = importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

// Export all modules
exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
