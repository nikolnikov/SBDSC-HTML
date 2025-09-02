import { QDSToggle } from './Toggle';

export default {
    title: 'Components/Toggle',
    component: QDSToggle,
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

export const BasicToggle = {
    args: {
        inputId: 'toggle-1',
        label: 'Label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-toggle-switch">
    <label for="toggle">
        <input type="checkbox" id="toggle" />
        <div class="--slider"></div>
    </label>
    
    <span aria-label="toggle">
        Label
    </span>
</div>
                `.trim()
            }
        }
    }
};

export const DisabledToggle = {
    args: {
        inputId: 'toggle-2',
        isDisabled: true,
        label: 'Label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-toggle-switch --disabled">
    <label for="toggle">
        <input type="checkbox" id="toggle" disabled />
        <div class="--slider"></div>
    </label>
    
    <span aria-label="toggle">
        Label
    </span>
</div>
                `.trim()
            }
        }
    }
};

export const CheckedToggle = {
    args: {
        inputId: 'toggle-3',
        isChecked: true,
        label: 'Label'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-toggle-switch">
    <label for="toggle">
        <input type="checkbox" id="toggle" checked />
        <div class="--slider"></div>
    </label>
    
    <span aria-label="toggle">
        Label
    </span>
</div>
                `.trim()
            }
        }
    }
};
