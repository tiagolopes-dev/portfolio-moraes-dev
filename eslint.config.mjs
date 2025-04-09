import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'prettier'],
    plugins: ['prettier', 'prettier-plugin-tailwindcss'],
    rules: {
      "semi": false,
      "tabWidth": 2,
      "singleQuote": true,
      "printWidth": 100,
      "trailingComma": "none",
    }
  }),
];

export default eslintConfig;
