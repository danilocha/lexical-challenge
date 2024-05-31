// src/nodes/RedLineNode.ts
import { EditorConfig, NodeKey, TextNode } from 'lexical';

class RedLineNode extends TextNode {
  static getType() {
    return 'redline';
  }

  static clone(node: RedLineNode) {
    return new RedLineNode(node.__text, node.__key);
  }

  constructor(text: string, key?: NodeKey) {
    super(text, key);
  }

  createDOM(config: any) {
    const dom = super.createDOM(config);
    dom.style.color = 'red';
    return dom;
  }

  updateDOM(prevNode: TextNode, dom: HTMLElement, editorConfig: EditorConfig) {
    const isUpdated = super.updateDOM(prevNode, dom, editorConfig);
    if (isUpdated) {
      dom.style.color = 'red';
    }
    return isUpdated;
  }
}

export function $createRedLineNode(text: string): RedLineNode {
  return new RedLineNode(text);
}

export function $isRedLineNode(node: TextNode): node is RedLineNode {
  return node instanceof RedLineNode;
}

export default RedLineNode;
