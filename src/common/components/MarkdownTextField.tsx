/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { alpha, styled } from '@mui/material';
import { responsive } from '../../utils/styleUtils';

const mdParser = new MarkdownIt();

interface MarkdownTextFieldProps {
  onChange: (markdown: string) => void;
  defaultValue?: string;
}

const StyledMarkdownTextFieldWrapper = styled('div')(({ theme }) => ({
  flexBasis: '100%',
  flexGrow: 1,
  marginTop: 10,

  '.rc-md-editor': {
    minHeight: 500,
    maxWidth: '100%',
    border: `1px solid ${theme.componentColors.inputBorder}`,
    paddingBottom: 0,

    '.rc-md-navigation': {
      backgroundColor: theme.componentColors.backgroundMain,
      borderColor: theme.componentColors.inputBorder,

      '.navigation-nav': {
        '.button-wrap': {
          span: {
            color: alpha(theme.textColors.main, 0.75),
          },

          '.drop-wrap': {
            backgroundColor: theme.componentColors.backgroundMain,

            ul: {
              li: {
                '&:hover': {
                  backgroundColor: theme.componentColors.backgroundTertiary,
                },
              },
            },
          },
        },

        '&.right': {
          display: 'none',
        },
      },
    },

    '.editor-container': {
      ...responsive({
        default: {
          flexDirection: 'column',
        },
        tablet: {
          flexDirection: 'row',
        },
      }),

      '.sec-md, .sec-html': {
        backgroundColor: theme.componentColors.backgroundMain,

        '*': {
          color: theme.textColors.main,
          fontFamily: theme.fonts.main,
        },

        textarea: {
          overflowY: 'auto',
          backgroundColor: theme.componentColors.backgroundMain,
          color: theme.textColors.main,
          fontFamily: theme.fonts.main,
        },
      },

      '.sec-md': {
        ...responsive({
          default: {
            borderBottom: `1px solid ${theme.componentColors.inputBorder}`,
          },
          tablet: {
            borderBottom: 'none',
            borderRight: `1px solid ${theme.componentColors.inputBorder}`,
          },
        }),
      },

      '.sec-html': {
        'h1, h2, h3, h4, h5, h6': {
          marginTop: 0,
        },
      },
    },

    '&.full': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },
}));

const MarkdownTextField = ({ onChange, defaultValue = '' }: MarkdownTextFieldProps) => {
  // @ts-ignore
  const handleEditorChange = ({ text: markdown }) => {
    onChange(markdown);
  };

  return (
    <StyledMarkdownTextFieldWrapper>
      <MdEditor 
        // @ts-ignore
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        config={{
          canView: { 
            fullScreen: false,
          },
        }}
        defaultValue={defaultValue}
      />
    </StyledMarkdownTextFieldWrapper>
  );
};

export default MarkdownTextField;