let deepmerge;module.link('@material-ui/utils',{deepmerge(v){deepmerge=v}},0);

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

module.exportDefault(merge);