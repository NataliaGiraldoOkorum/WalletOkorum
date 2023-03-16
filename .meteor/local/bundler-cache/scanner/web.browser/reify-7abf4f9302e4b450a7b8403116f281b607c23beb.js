module.export({getBadgeUnstyledUtilityClass:()=>getBadgeUnstyledUtilityClass});let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getBadgeUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiBadge', slot);
}
const badgeUnstyledClasses = generateUtilityClasses('MuiBadge', ['root', 'badge', 'invisible']);
module.exportDefault(badgeUnstyledClasses);