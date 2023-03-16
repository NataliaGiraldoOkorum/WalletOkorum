let ponyfillGlobal;module.link('@material-ui/utils',{ponyfillGlobal(v){ponyfillGlobal=v}},0);module.link('./createGenerateClassName',{default:"createGenerateClassName"},1);module.link('./createGenerateClassName',{"*":"*"},2);module.link('./createStyles',{default:"createStyles"},3);module.link('./createStyles',{"*":"*"},4);module.link('./getThemeProps',{default:"getThemeProps"},5);module.link('./getThemeProps',{"*":"*"},6);module.link('./jssPreset',{default:"jssPreset"},7);module.link('./jssPreset',{"*":"*"},8);module.link('./makeStyles',{default:"makeStyles"},9);module.link('./makeStyles',{"*":"*"},10);module.link('./mergeClasses',{default:"mergeClasses"},11);module.link('./mergeClasses',{"*":"*"},12);module.link('./ServerStyleSheets',{default:"ServerStyleSheets"},13);module.link('./ServerStyleSheets',{"*":"*"},14);module.link('./styled',{default:"styled"},15);module.link('./styled',{"*":"*"},16);module.link('./StylesProvider',{default:"StylesProvider"},17);module.link('./StylesProvider',{"*":"*"},18);module.link('./ThemeProvider',{default:"ThemeProvider"},19);module.link('./ThemeProvider',{"*":"*"},20);module.link('./useTheme',{default:"useTheme"},21);module.link('./useTheme',{"*":"*"},22);module.link('./withStyles',{default:"withStyles"},23);module.link('./withStyles',{"*":"*"},24);module.link('./withTheme',{default:"withTheme"},25);module.link('./withTheme',{"*":"*"},26);/** @license Material-UI v4.11.5
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */

/* Warning if there are several instances of @material-ui/styles */

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined') {
  ponyfillGlobal['__@material-ui/styles-init__'] = ponyfillGlobal['__@material-ui/styles-init__'] || 0;

  if (ponyfillGlobal['__@material-ui/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@material-ui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://mui.com/r/styles-instance-warning for more info.'].join('\n'));
  }

  ponyfillGlobal['__@material-ui/styles-init__'] += 1;
}


























