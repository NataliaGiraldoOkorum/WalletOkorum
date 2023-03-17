module.export({useStepperContext:()=>useStepperContext});let React;module.link('react',{"*"(v){React=v}},0);
/**
 * Provides information about the current step in Stepper.
 */
const StepperContext = /*#__PURE__*/React.createContext({});
if (process.env.NODE_ENV !== 'production') {
  StepperContext.displayName = 'StepperContext';
}

/**
 * Returns the current StepperContext or an empty object if no StepperContext
 * has been defined in the component tree.
 */
function useStepperContext() {
  return React.useContext(StepperContext);
}
module.exportDefault(StepperContext);