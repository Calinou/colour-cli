# colour-cli

**Get information about colors and convert them in the command line.**

## Use cases

- As HSL colors are easier to reason about by humans, you want to use an
  HSL color in software that only accepts RGB colors or hexadecimal
  color codes.
- You want to perform color manipulation to derive a color scheme from
  a base color.

## Installation

Enter one of the following commands in a terminal:

```
# Using npm
npm install -g colour-cli
# Using yarn
yarn global add colour-cli
```

## Usage

See the command-line help:

```
   USAGE

     colour <command> [options]

   COMMANDS

     info <color>                     Display a color in various formats 
     negate <color>                   Invert and display a color         
     lighten <color> <amount>         Lighten and display a color        
     darken <color> <amount>          Darken and display a color         
     saturate <color> <amount>        Saturate and display a color       
     desaturate <color> <amount>      Desaturate and display a color     
     rotate <color> <degrees>         Rotate the hue and display a color 
     help <command>                   Display help for a specific command

   GLOBAL OPTIONS

     -h, --help         Display help                                      
     -V, --version      Display version                                   
     --no-color         Disable colors                                    
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## License

Copyright © 2018 Hugo Locurcio and contributors

Unless otherwise specified, files in this repository are licensed under
the MIT license; see [LICENSE.md](LICENSE.md) for more information.
