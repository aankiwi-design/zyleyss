'use strict'

/* =========================
   DEPENDENCIES
========================= */
const chalk = require('chalk')
const gradient = require('gradient-string')

/* =========================
   CLEAR CONSOLE
========================= */
const clearConsole = () => {
  process.stdout.write(
    process.platform === 'win32'
      ? '\x1B[2J\x1B[0f'
      : '\x1B[2J\x1B[3J\x1B[H'
  )
}

clearConsole()

/* =========================
   HEADER BOX
========================= */
console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`))

console.log(
  chalk.hex('#d7a1ff').italic('     T H A N K S   F O R   U S I N G\n') +
  chalk.hex('#a78bfa').italic('           M Y   B A I L E Y S ♡\n\n') +
  chalk.hex('#d7a1ff').italic('          ⋆ ˚ ✧ ₊ ˚ ෆ\n')
)

console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`))

/* =========================
   CENTER GRADIENT TEXT
========================= */
const centerText = `
> Vialeys | WhatsApp API
> Thanks for using this Modified Baileys!
`

console.log(
  centerText
    .split('\n')
    .map(line =>
      line
        .split('')
        .map((ch, i, arr) => {
          const t = i / (arr.length - 1 || 1)
          const r = Math.round(0)
          const g = Math.round(120 + (255 - 120) * t)
          const b = Math.round(255 + (120 - 255) * t)
          return `\x1b[38;2;${r};${g};${b}m${ch}`
        })
        .join('') + '\x1b[0m'
    )
    .join('\n')
)

/* =========================
   FOOTER
========================= */
console.log()
console.log(
  chalk.bold.blue('Wil') + chalk.bold.green('eys')
)

console.log()
console.log(
  chalk.bold(
    gradient(['magenta', 'cyan'])('> Modified developer by. Sazyy <')
  )
)
console.log()

/* =========================
   BAILEYS EXPORT CORE
========================= */
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function () { return m[k] } }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })

var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p)
  }

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }

Object.defineProperty(exports, '__esModule', { value: true })
exports.proto = exports.makeWASocket = void 0

const WAProto_1 = require('../WAProto')
Object.defineProperty(exports, 'proto', {
  enumerable: true,
  get: function () {
    return WAProto_1.proto
  }
})

const Socket_1 = __importDefault(require('./Socket'))
exports.makeWASocket = Socket_1.default

__exportStar(require('../WAProto'), exports)
__exportStar(require('./Utils'), exports)
__exportStar(require('./Types'), exports)
__exportStar(require('./Store'), exports)
__exportStar(require('./Defaults'), exports)
__exportStar(require('./WABinary'), exports)
__exportStar(require('./WAM'), exports)
__exportStar(require('./WAUSync'), exports)

exports.default = Socket_1.default
