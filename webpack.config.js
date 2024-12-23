const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js', // Входной файл
	output: {
		filename: 'js/main.js', // Имя выходного файла
		path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
	},
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/, // Для работы с CSS
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
