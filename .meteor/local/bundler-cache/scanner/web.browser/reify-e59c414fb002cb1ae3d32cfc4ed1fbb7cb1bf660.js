module.export({default:()=>ownerDocument});function ownerDocument(node) {
  return node && node.ownerDocument || document;
}