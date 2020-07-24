from enum import Enum
import struct, json

class Team(Enum):
  Red = 0
  Blue = 1

class State(Enum):
  Menu = 0
  Pause = 1
  Warmup = 2
  Game = 3
  Goal = 4

class Input(Enum):
  Up = 1
  Down = 2
  Left = 4
  Right = 8
  Kick = 16

  def test(self, input_):
    return input_ & self.value == self.value

class Disc:
  def __init__(self, x, y, vx, vy):
    self.x, self.y, self.vx, self.vy = x, y, vx, vy

class Player:
  def __init__(self, id_, input_, kick, team, disc):
    self.id, self.input, self.kick, self.team, self.disc = id_, input_, kick, team, disc
    self.input = [bool(input_ & (1 << n)) for n in range(5)]

class Game:
  def __init__(self, replayTime, state, gameTime, score, overtime, players, ball):
    self.replayTime, self.state, self.gameTime, self.score, self.overtime, self.players, self.ball = replayTime, state, gameTime, score, overtime, players, ball

def unpack2(struct_, buffer, offset):
  return struct_.unpack_from(buffer, offset), offset + struct_.size

_Disc_s = struct.Struct('>dddd')
def _Disc(buffer, offset):
  (x, y, vx, vy), offset = unpack2(_Disc_s, buffer, offset)
  return Disc(x, y, vx, vy), offset

_Player_s = struct.Struct('>BBBB')
def _Player(buffer, offset):
  (id_, input_, kick_, team_), offset = unpack2(_Player_s, buffer, offset)
  disc, offset = _Disc(buffer, offset)
  return Player(id_, input_, bool(kick_), Team(team_), disc), offset

_Game_s1 = struct.Struct('>dB')
_Game_s2 = struct.Struct('>dBBBB')
def _Game(buffer, offset):
  (replayTime, state_), offset = unpack2(_Game_s1, buffer, offset)
  state = State(state_)
  if state == State.Menu:
    gameTime, score, overtime, ball, players = None, None, None, None, None
  else:
    (gameTime, redScore, blueScore, overtime_, playersCount), offset = unpack2(_Game_s2, buffer, offset)
    overtime = bool(overtime_)
    score = (redScore, blueScore)
    players = []
    for _ in range(playersCount):
      player, offset = _Player(buffer, offset)
      players.append(player)
    ball, offset = _Disc(buffer, offset)
  return Game(replayTime, state, gameTime, score, overtime, players, ball), offset

def Replay(buffer):
  separator = b'\r\n\r\n'
  offset = buffer.find(separator)
  names = {int(k): v for k, v in json.loads(buffer[:offset].decode('utf8')).items()}
  offset += len(separator)
  games = []
  while offset < len(buffer):
    game, offset = _Game(buffer, offset)
    games.append(game)
  return names, games
