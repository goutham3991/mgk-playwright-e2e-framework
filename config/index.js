import devConfig from './dev.js';
import qaConfig from './qa.js';
import stageConfig from './stage.js';

const environments = {
    dev: devConfig,
    qa: qaConfig,
    stage: stageConfig
};

const currentEnvironment = process.env.TEST_ENV || 'qa';

export default environments[currentEnvironment];