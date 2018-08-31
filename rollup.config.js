import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  plugins: [resolve({
    customResolveOptions: 'node_modules'
  })],
	// sourceMap: true,
	output: [
		{
			format: 'umd',
			name: 'INCSTATS',
			file: 'dist/incremental-stats.js',
			indent: '\t'
		}    
	]
};