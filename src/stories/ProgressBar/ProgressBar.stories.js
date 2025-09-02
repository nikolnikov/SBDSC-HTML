import { QDSProgressBar } from './ProgressBar';

export default {
    title: 'Components/Progress indicator/Progress bar',
    component: QDSProgressBar,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    tags: ['autodocs', '!dev']
};

export const BasicProgressBar = {
    args: {
        completed: 50,
        showPercentage: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-progress-wrap" role="progressbar" aria-label="Progress bar">
    <div class="ds-progress-bar --rounded">
        <div class="--fill" style="width: 50%;"></div>
    </div>

    <span class="percentage">50%</span>
</div>
                `.trim()
            }
        }
    }
};
