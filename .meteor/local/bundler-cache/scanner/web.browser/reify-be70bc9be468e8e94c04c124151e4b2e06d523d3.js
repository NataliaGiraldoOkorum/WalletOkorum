module.export({unstable_ClassNameGenerator:()=>unstable_ClassNameGenerator},true);let ClassNameGenerator;module.link('@mui/base/className',{unstable_ClassNameGenerator(v){ClassNameGenerator=v}},0);module.link('./capitalize',{default:"capitalize"},1);module.link('./createChainedFunction',{default:"createChainedFunction"},2);module.link('./createSvgIcon',{default:"createSvgIcon"},3);module.link('./debounce',{default:"debounce"},4);module.link('./deprecatedPropType',{default:"deprecatedPropType"},5);module.link('./isMuiElement',{default:"isMuiElement"},6);module.link('./ownerDocument',{default:"ownerDocument"},7);module.link('./ownerWindow',{default:"ownerWindow"},8);module.link('./requirePropFactory',{default:"requirePropFactory"},9);module.link('./setRef',{default:"setRef"},10);module.link('./useEnhancedEffect',{default:"unstable_useEnhancedEffect"},11);module.link('./useId',{default:"unstable_useId"},12);module.link('./unsupportedProp',{default:"unsupportedProp"},13);module.link('./useControlled',{default:"useControlled"},14);module.link('./useEventCallback',{default:"useEventCallback"},15);module.link('./useForkRef',{default:"useForkRef"},16);module.link('./useIsFocusVisible',{default:"useIsFocusVisible"},17);

















// TODO: remove this export once ClassNameGenerator is stable
// eslint-disable-next-line @typescript-eslint/naming-convention
const unstable_ClassNameGenerator = {
  configure: generator => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(['MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.', '', "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", '', 'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401', '', 'The updated documentation: https://mui.com/guides/classname-generator/'].join('\n'));
    }
    ClassNameGenerator.configure(generator);
  }
};