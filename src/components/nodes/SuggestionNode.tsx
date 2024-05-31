// src/nodes/SuggestionNode.ts
import { EditorConfig, NodeKey, TextNode } from 'lexical';

class SuggestionNode extends TextNode {
  static getType() {
    return 'suggestion';
  }

  static clone(node: SuggestionNode) {
    return new SuggestionNode(node.__text, node.__key);
  }

  constructor(text: string, key?: NodeKey) {
    super(text, key);
  }

  createDOM(config: any) {
    const dom = super.createDOM(config);
    dom.style.backgroundColor = '#f0f8ff';
    dom.style.border = '1px solid #b0c4de';
    dom.style.borderRadius = '4px';
    dom.style.padding = '2px 4px';
    return dom;
  }

  updateDOM(prevNode: SuggestionNode, dom: HTMLElement, editorConfig: EditorConfig) {
    const isUpdated = super.updateDOM(prevNode, dom, editorConfig);
    if (isUpdated) {
      dom.style.backgroundColor = '#f0f8ff';
      dom.style.border = '1px solid #b0c4de';
      dom.style.borderRadius = '4px';
      dom.style.padding = '2px 4px';
    }
    return isUpdated;
  }
}

export function $createSuggestionNode(text: string): SuggestionNode {
  return new SuggestionNode(text);
}

export function $isSuggestionNode(node: TextNode): node is SuggestionNode {
  return node instanceof SuggestionNode;
}

export default SuggestionNode;
