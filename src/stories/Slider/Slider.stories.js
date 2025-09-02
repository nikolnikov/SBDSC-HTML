import { QDSSlider } from './Slider';

export default {
    title: 'Components/Slider',
    component: QDSSlider,
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

export const DefaultSlider = {
    args: {
        defaultValue: 50
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-slider__wrap">
    <div class="ds-slider__tracks">
        <div class="--static"></div>
        <div class="--active" style="width: 50%;"></div>
    </div>
    
    <div class="ds-slider__controls">
        <input class="ds-slider" type="range" min="0" max="100" value="50" />
        <div class="--value">50</div>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const DisabledSlider = {
    args: {
        ...DefaultSlider.args,
        isDisabled: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-slider__wrap disabled">
    <div class="ds-slider__tracks">
        <div class="--static"></div>
        <div class="--active" style="width: 50%;"></div>
    </div>
    
    <div class="ds-slider__controls">
        <input class="ds-slider" type="range" min="0" max="100" value="50" disabled />
        <div class="--value">50</div>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const DoubleSlider = {
    args: {
        doubleSlider: true,
        leftDefaultValue: 25,
        rightDefaultValue: 75
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-double-slider__wrap">
    <div class="ds-double-slider__assets">
        <div class="--left-slider --value">25</div>
        
        <div class="ds-double-slider__tracks">
            <div class="--static"></div>

            <div class="--right-slider --active" style="width: 75%;"></div>
            <div class="--left-slider --active" style="width: 25%;"></div>
            
            <input class="ds-slider-double --left-slider" type="range" min="0" max="100" value="25" />
            <input class="ds-slider-double --right-slider" type="range" min="0" max="100" value="75" />
            
            <div class="focus-outline"></div>
        </div>
        
        <div class="--right-slider --value">75</div>
    </div>
</div>
                `.trim()
            }
        }
    }
};

export const DisabledDoubleSlider = {
    args: {
        ...DoubleSlider.args,
        isDisabled: true,
        doubleSlider: true
    },
    parameters: {
        docs: {
            source: {
                language: 'html',
                type: 'code',
                code: `
<div class="ds-double-slider__wrap disabled">
    <div class="ds-double-slider__assets">
        <div class="--left-slider --value">25</div>

        <div class="ds-double-slider__tracks">
            <div class="--static"></div>
            <div class="--right-slider --active" style="width: 75%;"></div>
            <div class="--left-slider --active" style="width: 25%;"></div>
            
            <input class="ds-slider-double --left-slider" type="range" min="0" max="100" value="25" disabled />
            <input class="ds-slider-double --right-slider" type="range" min="0" max="100" value="75" disabled />
            
            <div class="focus-outline"></div>
        </div>
        
        <div class="--right-slider --value">75</div>
    </div>
</div>
                `.trim()
            }
        }
    }
};
