import React from 'react';
import { QDSHeader } from './Header';
import { QDSButton } from '../Button/Button';
import { QDSInput } from '../Input/Input';
import {
    headerNavData,
    headerNavData2,
    topBarData,
    userAccountData
} from './data';

export default {
    title: 'Components/Navigation/Page header',
    component: QDSHeader,
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

export const HeaderWithNavigation = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg',
        navData: headerNavData2
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<header class="ds-header">
    <div class="ds-row --margins --max-width">
        <a class="ds-header__logo" href="/">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg" alt="logo">
        </a>
        
        <nav class="ds-header__nav" role="navigation">
            <div class="ds-header__nav-group">
                <div class="ds-header__nav-item ">
                    <a href="#">Menu Option 1</a>
                </div>
                
                <div class="ds-header__nav-item ">
                    <a href="#">Menu Option 2</a>
                </div>
                
                <div class="ds-header__nav-item ">
                    <a href="#">Menu Option 3</a>
                </div>
            </div>
        </nav>

        <div class="ds-header__right">
            <div class="ds-header__mobile">
                <button class="ds-button --icon --lg" aria-label="menu">
                    <span class="ds-icon--menu" aria-label="menu" role="img"></span>
                </button>
            </div>
        </div>
    </div>
</header>
                `.trim()
            }
        }
    }
};

export const HeaderWithSearch = {
    args: {
        children: (
            <QDSInput
                inputId="search-input"
                iconLeft="search"
                name="search-input"
                placeholder="Search"
                type="text"
                onChange={() => {}}
            />
        ),
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<header class="ds-header">
    <div class="ds-row --margins --max-width">
        <a class="ds-header__logo" href="/">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg" alt="logo">
        </a>
        
        <div class="ds-header__right">
            <div class="ds-header__actions">
                <div class="ds-input --icons --icon-left">
                    <label class="ds-input__label" for="search-input"></label>

                    <div class="ds-flex --start-center --row">
                        <span class="ds-icon--search --left" aria-label="search" role="img"></span>
                        <input id="search-input" placeholder="Search" type="text" value="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
                `.trim()
            }
        }
    }
};

export const BasicHeader = {
    args: {
        logo: 'https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg'
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<header class="ds-header">
    <div class="ds-row --margins --max-width">
        <a class="ds-header__logo" href="/">
            <img src="https://ds.cdn.questdiagnostics.com/assets/img/quest-logo.svg" alt="logo">
        </a>
    </div>
</header>
                `.trim()
            }
        }
    }
};
