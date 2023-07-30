/* eslint-disable no-console */
type DebugType = 'debug' | 'error' | 'warn' | 'log' | 'table'

export type Debug = {
  [K in DebugType]: (...args: unknown[]) => void
}

enum DebugVerbosity {
  Debug,
  Log,
  Warn,
  Error,
}

const debugLvl =
  process.env.DEBUG_LEVEL !== undefined
    ? parseInt(process.env.DEBUG_LEVEL)
    : null

const logFn = (
  type: DebugType,
  verbosity: DebugVerbosity,
  styling: string,
  ...args: unknown[]
) => {
  let info = '%c'
  if (debugLvl === null || !(debugLvl <= verbosity)) {
    return
  }

  switch (verbosity) {
    case DebugVerbosity.Debug:
      info += '[Debug]'
      break
    case DebugVerbosity.Log:
      info += '[Log]'
      break
    case DebugVerbosity.Warn:
      info += '[Warning]'
      break
    case DebugVerbosity.Error:
      info += '[Error]'
      break
  }

  if (process.env.NEXT_PUBLIC_DEBUG_TIMESTAMP === '1') {
    info += `[${new Date().toLocaleTimeString()}]`
  }

  if (type === 'table') {
    console.log(info, styling)
    console.table(...args)
  } else {
    const logMethod = console[type] || console.log
    logMethod(info, styling, ...args)
  }
}

const debug: Debug = {
  debug(...args) {
    logFn('log', DebugVerbosity.Debug, 'color:gray;', ...args)
  },
  error(...args) {
    logFn('error', DebugVerbosity.Error, 'color:red;', ...args)
  },
  log(...args) {
    logFn('log', DebugVerbosity.Log, 'color:yellow;', ...args)
  },
  table(...args) {
    logFn('table', DebugVerbosity.Log, 'color:orange;', ...args)
  },
  warn(...args) {
    logFn('warn', DebugVerbosity.Warn, 'color:orange;', ...args)
  },
}

globalThis.debug = debug
