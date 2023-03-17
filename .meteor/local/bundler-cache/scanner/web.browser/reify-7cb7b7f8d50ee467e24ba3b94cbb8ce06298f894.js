module.export({useStepContext:()=>useStepContext});let React;module.link('react',{"*"(v){React=v}},0);
/**
 * Provides information about the current step in Stepper.
 */
const StepContext = /*#__PURE__*/React.createContext({});
if (process.env.NODE_ENV !== 'production') {
  StepContext.displayName = 'StepContext';
}

/**
 * Returns the current StepContext or an empty object if no StepContext
 * has been defined in the component tree.
 */
function useStepContext() {
  return React.useContext(StepContext);
}
module.exportDefault(StepContext);