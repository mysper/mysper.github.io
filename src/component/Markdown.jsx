import React, { Component } from 'react';

import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import gfm from 'remark-gfm';
import html from 'remark-html';
import link from 'remark-reference-links';
import footnotes from 'remark-footnotes';

import '../style/markdown.scss';

class Markdown extends Component {
    render() {
        return (
            <div id="markdown">
                {
                    unified()
                        .use(parse)
                        .use(footnotes)
                        .use(gfm)
                        .use(link)
                        .use(html)
                        .use(remark2react)
                        .processSync(this.props.content).result
                }
            </div>
        );
    }
}

export default Markdown;