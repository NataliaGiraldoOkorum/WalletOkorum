module.export({getSliderUtilityClass:()=>getSliderUtilityClass});let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getSliderUtilityClass(slot) {
  return generateUtilityClass('MuiSlider', slot);
}
const sliderUnstyledClasses = generateUtilityClasses('MuiSlider', ['root', 'active', 'focusVisible', 'disabled', 'dragging', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'markLabelActive', 'thumb']);
module.exportDefault(sliderUnstyledClasses);