'use client';

import ExampleTheme from './themes/ExampleTheme';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';

import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import TextStylePlugin from '@/components/plugins/TextStylePlugin';
import RedLineNode from './nodes/RedLineNode';
import SuggestionNode from './nodes/SuggestionNode';
import InsertSuggestionComponent from './plugins/SuggestionPlugin';

function Placeholder() {
  return <div className='editor-placeholder'>Enter some rich text...</div>;
}

const editorConfig = {
  namespace: 'example',
  theme: ExampleTheme,
  onError(error: any) {
    throw error;
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    RedLineNode,
    SuggestionNode
  ],
};

const Editor = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='general-container'>
        <div className='editor-container'>
        <TextStylePlugin />
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            ErrorBoundary={LexicalErrorBoundary}
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
          <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
        </div>
        <div>
          <InsertSuggestionComponent/>
        </div>
        
      </div>
    </LexicalComposer>
  );
};

export default Editor;
