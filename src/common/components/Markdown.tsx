/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import type { TypographyProps } from '@mui/material/Typography';

const Markdown = ({ children, className = '' }: { children: string | null | undefined, className?: string }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={className}
      components={{
        h1: ({ node, ...props }) => <Typography variant='h1' {...props as TypographyProps} />,
        h2: ({ node, ...props }) => <Typography variant='h2' {...props as TypographyProps} />,
        h3: ({ node, ...props }) => <Typography variant='h3' {...props as TypographyProps} />,
        h4: ({ node, ...props }) => <Typography variant='h4' {...props as TypographyProps} />,
        h5: ({ node, ...props }) => <Typography variant='h5' {...props as TypographyProps} />,
        h6: ({ node, ...props }) => <Typography variant='h6' {...props as TypographyProps} />,
        p: ({ node, ...props }) => <Typography variant='body1' {...props as TypographyProps} />,
        span: ({ node, ...props }) => <Typography variant='body1' component='span' {...props as TypographyProps} />,
        a: ({ node, ...props }) => (
          <Typography
            variant="body1"
            component="a"
            target="_blank"
            rel="noreferrer"
            {...props as TypographyProps}
          />
        ),
        li: ({ node, ...props }) => <Typography variant='body1' component='li' {...props as TypographyProps} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;