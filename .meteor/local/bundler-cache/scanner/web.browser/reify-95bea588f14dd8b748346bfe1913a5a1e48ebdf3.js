module.export({default:()=>ownerWindow});let ownerDocument;module.link('./ownerDocument',{default(v){ownerDocument=v}},0);
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}