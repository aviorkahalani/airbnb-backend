import fs from 'fs'

const logsDir = './logs'

const LEVELS = {
  DEBUG: '🪲 DEBUG',
  INFO: '*️⃣ INFO',
  WARN: '☢️ WARN',
  ERROR: '❌ ERROR',
}

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

//define the time format
function getTime() {
  let now = new Date()
  return now.toLocaleString()
}

function doLog(level: string, ...args: unknown[]) {
  const strs = args.map((arg) => (typeof arg === 'string' ? arg : JSON.stringify(arg)))
  var line = strs.join(' | ')
  line = `${getTime()} - ${level} - ${line}\n`
  console.log(line)
  fs.appendFileSync('./logs/backend.log', line, 'utf-8')
}

export const logger = {
  debug(...args: unknown[]) {
    if (process.env.NODE_NEV === 'production') return
    doLog(LEVELS.DEBUG, ...args)
  },
  info(...args: unknown[]) {
    if (process.env.NODE_NEV === 'production') return
    doLog(LEVELS.INFO, ...args)
  },
  warn(...args: unknown[]) {
    if (process.env.NODE_NEV === 'production') return
    doLog(LEVELS.WARN, ...args)
  },
  error(...args: unknown[]) {
    if (process.env.NODE_NEV === 'production') return
    doLog(LEVELS.ERROR, ...args)
  },
}
