import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { diffCss } from '../css.js';	

const diffResult = diffCss(
	'.test,#value .test{margin-left:50px;margin-right:-40px}',
	'.test2, #value2 .test {\nmargin-top:50px;\nmargin-right:-400px;\n}');

Assert.equal(diffResult.length, 17);