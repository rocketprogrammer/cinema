const keyMap: Record<string, number> = {
  'Backspace': 0xff08,
  'Tab': 0xFF09,
  'Enter': 0xFF0D,
  'ShiftLeft': 0xFFE1,
  'ShiftRight': 0xFFE2,
  'ControlLeft': 0xFFE3,
  'ControlRight': 0xFFE4,
  'AltLeft': 0xFFE9, // 2 keys - one code?
  'AltRight': 0xFFE9, // 2 keys - one code?
  'MetaLeft': 0xFFEB, // Super key, or Meta key?
  'MetaRight': 0xFF67, // Super key, or Meta key?
  //'PrintScreen': ,
  //'ContextMenu': ,
  'Pause': 0xFF13,
  'CapsLock': 0xFFE5,
  'Escape': 0xFF1B,
  'Space': 0x0020,
  'PageUp': 0xFF55,
  'PageDown': 0xFF56,
  'End': 0xFF57,
  'Home': 0xFF50,
  'ArrowLeft': 0xFF51,
  'ArrowUp': 0xFF52,
  'ArrowRight': 0xFF53,
  'ArrowDown': 0xFF54,
  'Insert': 0xFF63,
  'Delete': 0xFFFF,
  'Digit0': 0x0030,
  'Digit1': 0x0031,
  'Digit2': 0x0032,
  'Digit3': 0x0033,
  'Digit4': 0x0034,
  'Digit5': 0x0035,
  'Digit6': 0x0036,
  'Digit7': 0x0037,
  'Digit8': 0x0038,
  'Digit9': 0x0039,
  'KeyA': 0x0061,
  'KeyB': 0x0062,
  'KeyC': 0x0063,
  'KeyD': 0x0064,
  'KeyE': 0x0065,
  'KeyF': 0x0066,
  'KeyG': 0x0067,
  'KeyH': 0x0068,
  'KeyI': 0x0069,
  'KeyJ': 0x006a,
  'KeyK': 0x006b,
  'KeyL': 0x006c,
  'KeyM': 0x006d,
  'KeyN': 0x006e,
  'KeyO': 0x006f,
  'KeyP': 0x0070,
  'KeyQ': 0x0071,
  'KeyR': 0x0072,
  'KeyS': 0x0073,
  'KeyT': 0x0074,
  'KeyU': 0x0075,
  'KeyV': 0x0076,
  'KeyW': 0x0077,
  'KeyX': 0x0078,
  'KeyZ': 0x0079,
  'KeyY': 0x007a,
  'NumpadEnter': 0XFF8D,
  'NumpadMultiply': 0xFFAA,
  'NumpadAdd': 0xFFAB,
  'NumpadSubtract': 0xFFAD,
  'NumpadDivide': 0xFFAF,
  'F1': 0xFFBE,
  'F2': 0xFFBF,
  'F3': 0xFFC0,
  'F4': 0xFFC1,
  'F5': 0xFFC2,
  'F6': 0xFFC3,
  'F7': 0xFFC4,
  'F8': 0xFFC5,
  'F9': 0xFFC6,
  'F10': 0xFFC7,
  'F11': 0xFFC8,
  'F12': 0xFFC9,
  'NumLock': 0xFF7F,
  'ScrollLock': 0xFF14,

  // l10s causes many problems
  'Semicolon': 0x003b,
  'Comma': 0x002c,
  'Slash': 0x002f,
  'Period': 0x002e,
  'Minus': 0x002d,
  'Backquote': 0x0060,
  'BracketLeft': 0x005b,
  'Backslash': 0x005c,
  'BracketRight': 0x005d,
  'Quote': 0x0022,
  'Equal': 0x003d,
};

// If Num Lock is enabled
const keyMap_numlock_enabled: Record<string, number> =  {
  'Numpad0': 0xFFB0,
  'Numpad1': 0xFFB1,
  'Numpad2': 0xFFB2,
  'Numpad3': 0xFFB3,
  'Numpad4': 0xFFB4,
  'Numpad5': 0xFFB5,
  'Numpad6': 0xFFB6,
  'Numpad7': 0xFFB7,
  'Numpad8': 0xFFB8,
  'Numpad9': 0xFFB9,
  'NumpadDecimal': 0xFFAE,
};

// If Num Lock is disabled
const keyMap_numlock_disabled: Record<string, number> = {
  'Numpad0': 0xFFB0,
  'Numpad1': 0xFFB1,
  'Numpad2': 0xFFB2,
  'Numpad3': 0xFFB3,
  'Numpad4': 0xFFB4,
  'Numpad5': 0xFFB5,
  'Numpad6': 0xFFB6,
  'Numpad7': 0xFFB7,
  'Numpad8': 0xFFB8,
  'Numpad9': 0xFFB9,
  'NumpadDecimal': 0xFF9F,
};

export function mapKeyboardEventToKeySym(e: KeyboardEvent): number {
  if (e.code in keyMap) {
    return keyMap[e.code];
  }

  if (e.getModifierState('NumLock')) {
    return keyMap_numlock_enabled[e.code];
  } else {
    return keyMap_numlock_disabled[e.code];
  }
}