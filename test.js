// colour-cli: Unit tests
//
// Copyright © 2018 Hugo Locurcio and contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import test from 'ava';

const childProcess = require('child_process');

test('display information from a RGB color string', (t) => {
  t.plan(3);

  const output = childProcess.execSync('node index.js info "rgb(255, 0, 0)"').toString();

  const matchHex = output.indexOf('#ff0000');
  const matchRgb = output.indexOf('rgb(255, 0, 0)');
  const matchHsl = output.indexOf('hsl(0, 100%, 50%)');

  t.not(matchHex, -1);
  t.not(matchRgb, -1);
  t.not(matchHsl, -1);
});

test('negate and display an HSV color', (t) => {
  t.plan(3);

  const output = childProcess.execSync('node index.js negate "hsl(180, 100%, 50%)"').toString();

  const matchHex = output.indexOf('#ff0000');
  const matchRgb = output.indexOf('rgb(255, 0, 0)');
  const matchHsl = output.indexOf('hsl(0, 100%, 50%)');

  t.not(matchHex, -1);
  t.not(matchRgb, -1);
  t.not(matchHsl, -1);
});

test('lighten and display an HEX color', (t) => {
  t.plan(3);

  const output = childProcess.execSync('node index.js lighten "#ff0000" 1.0').toString();

  const matchHex = output.indexOf('#ffffff');
  const matchRgb = output.indexOf('rgb(255, 255, 255)');
  const matchHsl = output.indexOf('hsl(0, 100%, 100%)');

  t.not(matchHex, -1);
  t.not(matchRgb, -1);
  t.not(matchHsl, -1);
});
