import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
    <>
        <div className='blog-container'>
            <h3>What is Contex API</h3>   
            <p>
                The React Context API has been around as an experimental feature for a while now,  it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.
                This new API solves one major problem prop drilling. Even if you're not familiar with the term, if you have worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components one by one. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.
            </p>
            <h3>What is Semantic Tag</h3>   
            <p>
            Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. A semantic element clearly describes its meaning to both the browser and the developer. 'div' and 'span' - Tells nothing about its content. it is non-semantic tag. but 'form', 'table', 'article', 'aside' is simantic tag. HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.
            </p>
            
            <h3>Difference between inline block and inline block elements? </h3>   
            <p>
            Our Web browsers treat every element as a kind of box. However, CSS has two different types of boxes block and inline. A block element always starts on a new line, and fills up the horizontal space left and right on the web page. can add margins and padding on all four sides of any block element — top, right, left, and bottom. As a example 'div',  'p' tags is block elements. 
            On the other hand inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some example of inline elements are 'span', 'strong', 'img' tags. When it comes to margins and padding, browsers treat inline elements differently. You can add space to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element but in block element you can do this.
            </p>

        </div>
    </>
    );
};

export default Blog;