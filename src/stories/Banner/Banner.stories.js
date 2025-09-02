import React from 'react';
import { QDSBanner } from './Banner';

export default {
    title: 'Components/Banner',
    component: QDSBanner,
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

export const BasicBanner = {
    args: {
        children: (
            <p>
                Use code <b>20%WEEK</b> and take action on the symptoms keeping
                you from feeling your best.
            </p>
        )
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const BannerWithCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {}
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};

export const BannerWithTitleAndCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {},
        title: 'Enjoy 20% off this test'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};

export const BannerWithIconAndCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {},
        icon: 'face-mask'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__inner-content">
            <div class="ds-banner__banner-icon">
                <span class="ds-icon--face-mask" aria-label="face-mask" role="img"></span>
            </div>

            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};

export const BannerWithIllustrativeIconTitleAndCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {},
        illustrativeIcon: 'pcp',
        title: 'Enjoy 20% off this test'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner">
    <div class="ds-banner__banner-icon">
        <img src="https://ds.cdn.questdiagnostics.com/assets/ds-icons/ds-icon--illustrative-white--pcp.svg" alt="pcp" />
    </div>

    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    },
    name: 'Banner with illustrative icon, title and close button'
};

export const CenteredBanner = {
    args: {
        ...BasicBanner.args,
        isCentered: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner --centered">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const CenteredBannerWithCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {},
        isCentered: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner --centered">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};

export const CenteredBannerWithTitleAndCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {},
        isCentered: true,
        title: 'Enjoy 20% off this test'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner --centered">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__heading">
            <h3>Enjoy 20% off this test</h3>
        </div>

        <div class="ds-banner__inner-content">
            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};

export const CenteredBannerWithIconAndCloseButton = {
    args: {
        ...BasicBanner.args,
        dismissHandler: () => {},
        icon: 'face-mask',
        isCentered: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-banner --centered">
    <div class="ds-flex --row --wrap --start-start">
        <div class="ds-banner__inner-content">
            <div class="ds-banner__banner-icon">
                <span class="ds-icon--face-mask" aria-label="face-mask" role="img"></span>
            </div>

            <p>Use code <b>20%WEEK</b> and take action on the symptoms keeping you from feeling your best.</p>
        </div>
    </div>

    <button class="ds-button --icon --sm --inverse" aria-label="close">
        <span class="ds-icon--close" aria-label="close" role="img"></span>
    </button>
</div>
                `.trim()
            }
        }
    }
};
