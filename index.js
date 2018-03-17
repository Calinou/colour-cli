#!/usr/bin/env node
// colour-cli: Get information about colors and convert them in the command line
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

const Color = require('color');
const program = require('caporal');
const chalk = require('chalk');

/**
 * Convert a RGB or RGBA color to an hexadecimal code (#RRGGBB or #RRGGBBAA).
 *
 * @param color The Color object to convert.
 */
function rgbToHex(color) {
  const red = Math.round(color.red()).toString(16).padStart(2, '0');
  const green = Math.round(color.green()).toString(16).padStart(2, '0');
  const blue = Math.round(color.blue()).toString(16).padStart(2, '0');
  let alpha;

  if (color.alpha() < 1) {
    // Transparent color, alpha is included in the color code
    // Converted from a float to an integer value (0..255)
    alpha = Math.round(color.alpha() * 255).toString(16).padStart(2, '0');
  } else {
    // Opaque color, alpha is ignored
    alpha = '';
  }

  return `#${red}${green}${blue}${alpha}`;
}

/**
 * Displays a color in various formats.
 *
 * @param logger The logger object from Caporal.
 * @param color The Color object to display.
 */
function displayColor(logger, color) {
  logger.info();
  logger.info(chalk`  {white.bold HEX}   ${rgbToHex(color)}`);
  logger.info(chalk`  {white.bold RGB}   ${color.rgb().string()}`);

  // Round the HSL value to prevent floating-point precision errors from
  // messing with the displayed value
  logger.info(chalk`  {white.bold HSV}   ${color.hsl().round().string()}`);
  logger.info();
}

// Create the command line interface
program
  .version('0.1.0')

  .command('info', 'Display a color in various formats')
  .argument('<color>', 'The color string to display information about')
  .action((args, options, logger) => {
    const color = Color(args.color);
    displayColor(logger, color);
  })

  .command('negate', 'Invert and display a color')
  .argument('<color>', 'The color string to invert and display')
  .action((args, options, logger) => {
    const color = Color(args.color).negate();
    displayColor(logger, color);
  })

  .command('lighten', 'Lighten and display a color')
  .argument('<color>', 'The color string to lighten and display')
  .argument('<amount>', 'The amount to lighten the color by (0.0..1.0)')
  .action((args, options, logger) => {
    const color = Color(args.color).lighten(args.amount);
    displayColor(logger, color);
  })

  .command('darken', 'Darken and display a color')
  .argument('<color>', 'The color string to darken and display')
  .argument('<amount>', 'The amount to darken the color by (0.0..1.0)')
  .action((args, options, logger) => {
    const color = Color(args.color).darken(args.amount);
    displayColor(logger, color);
  })

  .command('saturate', 'Saturate and display a color')
  .argument('<color>', 'The color string to saturate and display')
  .argument('<amount>', 'The amount to saturate the color by (0.0..1.0)')
  .action((args, options, logger) => {
    const color = Color(args.color).saturate(args.amount);
    displayColor(logger, color);
  })

  .command('desaturate', 'Desaturate and display a color')
  .argument('<color>', 'The color string to desaturate and display')
  .argument('<amount>', 'The amount to desaturate the color by (0.0..1.0)')
  .action((args, options, logger) => {
    const color = Color(args.color).desaturate(args.amount);
    displayColor(logger, color);
  })

  .command('rotate', 'Rotate the hue and display a color')
  .argument('<color>', 'The color string to hue-rotate and display')
  .argument('<degrees>', 'The number of degrees to rotate the color\'s hue by')
  .action((args, options, logger) => {
    const color = Color(args.color).rotate(args.degrees);
    displayColor(logger, color);
  });

program.parse(process.argv);
