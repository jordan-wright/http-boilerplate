
// haxball build QnHwsaqi

class Writer {
  constructor() {
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer());
  }

  resize(size) {
    if (size !== undefined || this.view.byteLength < this.pos) {
      if (size === undefined) {
        size = Math.max(this.pos, 2 * this.view.byteLength);
      }
      const buffer = new ArrayBuffer(size);
      (new Uint8Array(buffer)).set(new Uint8Array(this.view.buffer.slice(0, size)));
      this.view = new DataView(buffer);
    }
  }
  compact() {
    this.resize(this.pos);
  }
  writeUint8(value) {
    const pos = this.pos;
    this.pos += 1;
    this.resize();
    this.view.setUint8(pos, value);
  }
  writeFloat64(value) {
    const pos = this.pos;
    this.pos += 8;
    this.resize();
    this.view.setFloat64(pos, value, false)
  }
  writeBool(value) {
    this.writeUint8(value ? 1 : 0);
  }
  writeDisc(disc) {
    this.writeFloat64(disc._a.x);
    this.writeFloat64(disc._a.y);
    this.writeFloat64(disc._M.x);
    this.writeFloat64(disc._M.y);
  }
  writeBuffer(buffer) {
    const pos = this.pos;
    this.pos += buffer.byteLength;
    this.resize();
    (new Uint8Array(this.view.buffer)).set(new Uint8Array(buffer), pos);
  }

  writePython(controller) {
    const L = controller._L;
    this.writeFloat64(controller._S * controller._vc); // replay time
    if (!L._H) {
      this.writeUint8(0); // 0: menu
    } else {
      this.writeUint8(L._H._Ga > 0 ? 1 : L._H._zb == 0 ? 2 : L._H._zb == 1 ? 3 : 4); // 1: pause, 2: warmup, 3: game, 4: goal
      this.writeFloat64(L._H._Ac); // game time
      this.writeUint8(L._H._Kb); // red score
      this.writeUint8(L._H._Cb); // blue score
      this.writeBool(L._H._xa > 0 && L._H._Ac > L._H._xa); // overtime
      const players = L._D.filter(x => x._$._P !== 0);
      this.writeUint8(players.length); // player count
      for (const player of players) {
        this.writeUint8(player._T); // id
        this.writeUint8(player._mb); // input
        this.writeBool(player._bc); // kick
        this.writeUint8(player._$._P - 1); // team, 0: red, 1: blue
        this.writeDisc(player._F); // player disc
      }
      this.writeDisc(L._H._wa._K[0]); // ball disc
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports.Writer = Writer;
}
