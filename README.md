# React + TypeScript + Vite

My current project demonstrating React & TypeScript

     Wallpapers = wallpapers.com
Spaceships jpgs = Freepik.com
 UFO Vector svg = https://www.svgrepo.com/svg/171812/ufo
      Grass png = https://www.rawpixel.com/image/6266879/png-plant-public-domain
Spaceships pngs = [
  https://www.cleanpng.com/png-spacecraft-spaceshiptwo-rocket-clip-art-spaceship-117116/
  https://www.cleanpng.com/png-galaga-spaceship-s80-spaceship-free-spacecraft-des-616643/
  https://www.cleanpng.com/png-spacecraft-clip-art-spaceship-png-file-117118/
  https://www.pngwing.com/en/free-png-punzq
  https://www.cleanpng.com/png-george-jetson-judy-jetson-hanna-barbera-television-2010756/
  https://www.cleanpng.com/png-realistic-style-ufo-spaceship-flying-saucer-ufo-ex-7928617/
  https://www.cleanpng.com/png-light-luminous-efficacy-luminous-flux-ufo-ufo-beam-82671/
  ]
Monster pngs = [
  https://silhouettesfree.com/download-silhouette/monster-silhouette-2/
  https://silhouettesfree.com/download-silhouette/zombie-silhouette-21/
]



--------------------------------------default nonsense below-----------------------------------------------

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
