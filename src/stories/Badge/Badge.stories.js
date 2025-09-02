import { QDSBadge } from './Badge';

export default {
    title: 'Components/Badge',
    component: QDSBadge,
    parameters: {
        layout: 'centered',
        actions: {
            disable: true
        },
        interactions: {
            disable: true
        }
    },
    argTypes: {
        status: {
            control: 'select'
        }
    },
    tags: ['autodocs', '!dev']
};

export const SolidNeutralBadge = {
    args: {
        label: 'Status',
        status: 'neutral'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --neutral" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SolidInformativeBadge = {
    args: {
        label: 'Status',
        status: 'informative'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --informative" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SolidSuccessBadge = {
    args: {
        label: 'Status',
        status: 'success'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --success" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SolidCriticalBadge = {
    args: {
        label: 'Status',
        status: 'critical'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --critical" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SolidWarningBadge = {
    args: {
        label: 'Status',
        status: 'warning'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --warning" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SecondaryNeutralBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'neutral'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --secondary --neutral" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SecondaryInformativeBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'informative'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --secondary --informative" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SecondarySuccessBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'success'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --secondary --success" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SecondaryCriticalBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'critical'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --secondary --critical" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};

export const SecondaryWarningBadge = {
    args: {
        secondary: true,
        label: 'Status',
        status: 'warning'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-badge --secondary --warning" role="status">
    Status
</div>
                `.trim()
            }
        }
    }
};
