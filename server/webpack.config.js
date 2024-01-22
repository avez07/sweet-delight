import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const webpackcli = {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dev-build'),
        publicPath: '/',
        filename: '[name].cjs',
        clean: true
    },
    mode: 'production',
    target: 'node',
    externals:[nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

export default webpackcli;
