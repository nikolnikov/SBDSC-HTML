import React from 'react';
import { QDSMessage } from './Message';

export default {
    title: 'Components/Message',
    component: QDSMessage,
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

export const InformativeMessage = {
    args: {
        children: (
            <>
                <a className="ds-link" href={null}>
                    Yes
                </a>

                <a className="ds-link" href={null}>
                    No
                </a>
            </>
        ),
        closeHandler: () => {},
        message:
            "We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.",
        title: 'Heading',
        type: 'informative'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --informative" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--info" aria-label="info" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        <div class="ds-message__title">
            Heading
        </div>
        
        We've sent you an email detailing your recent account changes. Didn't receive an email? Click below.
        
        <div class="ds-message__actions">
            <a class="ds-link">Yes</a>
            <a class="ds-link">No</a>
        </div>
    </div>
    
    <button class="ds-button --icon --lg" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};

export const SuccessMessage = {
    args: {
        message:
            "We've sent you an email detailing your recent account changes.",
        title: 'Heading',
        type: 'success'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --success" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--check-circle" aria-label="check-circle" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        <div class="ds-message__title">
            Heading
        </div>
        
        We've sent you an email detailing your recent account changes.
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const WarningMessage = {
    args: {
        children: (
            <>
                <a className="ds-link" href={null}>
                    Yes
                </a>

                <a className="ds-link" href={null}>
                    No
                </a>
            </>
        ),
        inlineActions: true,
        message: 'Would you like to proceed with the change?',
        type: 'warning'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --warning" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning" aria-label="warning" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        Would you like to proceed with the change?
        
        <div class="ds-message__actions --inline">
            <a class="ds-link">Yes</a>
            <a class="ds-link">No</a>
        </div>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const ErrorMessage = {
    args: {
        message: 'An error has occured. Please try again.',
        type: 'error'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-message --error" role="alert">
    <div class="ds-message__icon">
        <span class="ds-icon--warning-octagon" aria-label="warning-octagon" role="img"></span>
    </div>
    
    <div class="ds-message__content">
        An error has occured. Please try again.
    </div>
</div>
                `.trim()
            }
        }
    }
};
