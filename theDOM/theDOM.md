# Introduction to The Document Object Model (DOM)

- **Exercise 1:** Describe, in your own words, what the DOM is and why it’s important in web development.

    - The Document Object Model or DOM, is the "live" version of a webpage as rendered by the browser.

- **Exercise 2:** Research and list three key features of the DOM.

    i. The DOM logical structure is *tree-like*, where each tree ends in a branch represented by a *node*

    ii. The DOM features specific methods which allow is to be programmatically accessed and manipulated.

    iii. Event Handlers allow us to actively monitor a webpage DOM for specific changes, usually so that we may perform actions based on said change.

- **Exercise 3:** Explain the difference between the HTML structure and 
the DOM.

    - HTML features the static structure and content of our page whereas the DOM is the "live" interpretation of the page when rendered by the Browser.

- **Exercise 4:** Draw a simple diagram representing the hierarchy of a 
web page in the DOM.

<details>
<summary>DOM diagram</summary>

                      Document
                         |
                    html (Root)
                    /        \
                head           body______
               /    \         /    \      \
            title  meta      header main  footer
</details>

- **Exercise 5:** Identify and describe the roles of the document, element, 
and attribute nodes in the DOM.

    i. The Document is the *root* node in the DOM which has all other nodes heirarchically below it.

    ii. An Element node in the DOM is representative of an element as defined by it's HTML *tag*

    iii. Similarly *attribute* nodes in the DOM represent HTML tag/element attributes. 

