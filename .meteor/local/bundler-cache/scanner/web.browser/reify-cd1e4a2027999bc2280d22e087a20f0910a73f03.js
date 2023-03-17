let isHostComponent;module.link('@mui/base',{isHostComponent(v){isHostComponent=v}},0);
const shouldSpreadAdditionalProps = Slot => {
  return !Slot || !isHostComponent(Slot);
};
module.exportDefault(shouldSpreadAdditionalProps);