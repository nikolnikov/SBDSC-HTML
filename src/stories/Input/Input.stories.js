import { QDSInput } from './Input';

export default {
    title: 'Components/Inputs/Text input',
    component: QDSInput,
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

export const BasicTextInput = {
    args: {
        inputId: 'input-1',
        label: 'Label',
        name: 'input-1',
        type: 'text',
        onChange: () => {}
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <input id="input" type="text" value="" />
</div>
                `.trim()
            }
        }
    }
};

export const RequiredTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-2',
        isRequired: true,
        name: 'input-2'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --required">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <input id="input" type="text" value="" />
</div>
                `.trim()
            }
        }
    }
};

export const DisabledTextInput = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-3',
        isDisabled: true,
        name: 'input-3'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --disabled">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>

    <input id="input" type="text" value="" disabled />
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithLeftIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-4',
        iconLeft: 'search',
        name: 'input-4'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="search" role="img"></span>
        <input id="input" type="text" value="" />
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithRightIcon = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-5',
        iconRight: 'location',
        name: 'input-5'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <input id="input" type="text" value="" />
        <span class="ds-icon--location --right" aria-label="location" role="img"></span>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithBothIcons = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-6',
        iconLeft: 'search',
        iconRight: 'location',
        name: 'input-6'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <div class="ds-flex --start-center --row">
        <span class="ds-icon--search --left" aria-label="search" role="img"></span>
        <input id="input" type="text" value="" />
        <span class="ds-icon--location --right" aria-label="location" role="img"></span>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithError = {
    args: {
        ...BasicTextInput.args,
        errorMessage: 'Error message goes here.',
        hasError: true,
        inputId: 'input-7',
        isRequired: true,
        name: 'input-7'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input --required --error">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <input id="input" type="text" value="" />

    <div class="ds-input__error" role="alert">
        Error message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithHint = {
    args: {
        ...BasicTextInput.args,
        hintMessage: 'Hint message goes here.',
        inputId: 'input-8',
        name: 'input-8'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Label</span>
    </label>
    
    <input id="input" type="text" value="" />

    <div class="ds-input__hint">
        Hint message goes here.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const TextInputWithTooltip = {
    args: {
        ...BasicTextInput.args,
        inputId: 'input-9',
        name: 'input-9',
        tooltipMessage: 'Tooltip goes here.'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-input">
    <label class="ds-input__label" for="input">
        <span>Label</span>

        <button class="ds-button --icon ds-tooltip" aria-label="info">
            <span class="ds-icon--info" aria-label="info" role="img"></span>
            
            <div class="ds-tooltip__text">
                Tooltip goes here.
            </div>
        </button>
    </label>
    
    <input id="input" type="text" value="" />
</div>
                `.trim()
            }
        }
    }
};
