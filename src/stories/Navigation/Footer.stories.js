import { QDSFooter } from './Footer';

export default {
    title: 'Components/Navigation/Page footer',
    component: QDSFooter,
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

export const CITFooter = {
    args: {
        type: 'cit'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};

export const HIPAAFooter = {
    args: {
        type: 'hipaa'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
Please contact the Design System team for the Footer code snippet.
                `.trim()
            }
        }
    }
};
