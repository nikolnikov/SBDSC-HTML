import { QDSLoader } from './Loader';

export default {
    title: 'Components/Loader',
    component: QDSLoader,
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

export const BasicLoader = {
    args: {},
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-loading" role="progressbar">
    <div></div><div></div><div></div><div></div>
</div>
                `.trim()
            }
        }
    }
};
