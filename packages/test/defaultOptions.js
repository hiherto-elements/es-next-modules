
import {indent} from './indent.js';


const process = {
	exit: ()=>{}
}

export function defaultOptions($console = console, $process = process) {
	return {
		autoRun: true,
		timeout: 1000,
		bailout: false,
		hooks: {
			start() {
				$console.log(new Date().toISOString());
			},
			end(test) {
				const {breadcrumbs, passed, failed, errors} = test.summarize();
				$console.log(`passed: ${passed}, failed: ${failed}\n`);
				for (let i = 0; i < errors.length; i++) {
					const error = errors[i];
					$console.error(`#${i + 1} ${breadcrumbs.join('→')}`);
					$console.error('--------');
					$console.error(error.stack || error);
					$console.error('--------\n');
				}
				if (0 < failed) {
					$process.exit(1);
				}
			},
		},
		globalHooks: {
			firstChild(test) {
				$console.log(`${indent(test.depth)}${test.title}`);
			},
			afterEach(test) {
				const {passed, failed} = test.summarize();
				const total = passed + failed;
				const prefix = 1 < total ? `[${passed}/${total}]` : `${0 < test.failed ? '❌' : '✅'}`;
				$console.log(`${indent(test.depth)}${prefix} ${test.title} (${test.elapsed})`);
			},
			error(test, error) {
				$console.error(error);
				$process.exit(1);
			},
		},
	};
}
