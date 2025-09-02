import React from 'react';
import { QDSTag } from './Tag';

export default {
    title: 'Components/Tag',
    component: QDSTag,
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

export const BasicTag = {
    args: {
        label: 'Label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-tag">
    Label
</button>
                `.trim()
            }
        }
    }
};

export const DisabledTag = {
    args: {
        ...BasicTag.args,
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<button class="ds-tag --disabled">
    Label
</button>
                `.trim()
            }
        }
    }
};
