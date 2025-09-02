import React from 'react';
import { QDSTooltip } from './Tooltip';

export default {
    title: 'Components/Tooltip',
    component: QDSTooltip,
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

export const DefaultTooltip = {
    args: {
        children: <span>Show tooltip</span>,
        message: 'Tooltip message goes here.',
        placement: 'top'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<span class="ds-tooltip">
    Show tooltip
    <span class="ds-tooltip__text">Tooltip message goes here.</span>
</span>
                `.trim()
            }
        }
    }
};

export const WhiteTooltip = {
    args: {
        ...DefaultTooltip.args,
        isWhite: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<span class="ds-tooltip --white">
    Show tooltip
    <span class="ds-tooltip__text">Tooltip message goes here.</span>
</span>
                `.trim()
            }
        }
    }
};
