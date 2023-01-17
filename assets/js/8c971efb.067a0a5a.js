"use strict";(self.webpackChunkvisdecode_site=self.webpackChunkvisdecode_site||[]).push([[894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},231:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){let{imageSrc:t,caption:a,imageCredit:i}=e;return n.createElement("div",{className:"text--center"},n.createElement("img",{src:t}),n.createElement("p",{className:"text--center"},a," ",i&&n.createElement(n.Fragment,null,n.createElement("a",{href:i},"Image credit"))))}},4293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(231);const o={slug:"line chart",title:"Visualizing Data with Line Charts in React and D3",authors:["mehdi"],tags:["data visualization","react","d3","line chart"]},s=void 0,l={permalink:"/visualdecode/blog/line chart",source:"@site/blog/2023-01-12-linechart.md",title:"Visualizing Data with Line Charts in React and D3",description:"Introduction",date:"2023-01-12T00:00:00.000Z",formattedDate:"January 12, 2023",tags:[{label:"data visualization",permalink:"/visualdecode/blog/tags/data-visualization"},{label:"react",permalink:"/visualdecode/blog/tags/react"},{label:"d3",permalink:"/visualdecode/blog/tags/d-3"},{label:"line chart",permalink:"/visualdecode/blog/tags/line-chart"}],readingTime:11.01,hasTruncateMarker:!1,authors:[{name:"Mehdi Allahyari",title:"Principle Research Scientist",url:"https://github.com/mallahyari",imageURL:"https://github.com/mallahyari.png",key:"mehdi"}],frontMatter:{slug:"line chart",title:"Visualizing Data with Line Charts in React and D3",authors:["mehdi"],tags:["data visualization","react","d3","line chart"]}},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Set up a React project",id:"set-up-a-react-project",level:2},{value:"Set up line chart with React",id:"set-up-line-chart-with-react",level:2},{value:"Collect and prepare the data",id:"collect-and-prepare-the-data",level:3},{value:"Set up SVG container",id:"set-up-svg-container",level:3},{value:"Define data accessors",id:"define-data-accessors",level:3},{value:"Create the scales",id:"create-the-scales",level:3},{value:"Draw the line",id:"draw-the-line",level:3},{value:"Draw the axes",id:"draw-the-axes",level:3}],p={toc:d};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Data visualization is an important aspect of making sense of large amounts of data. It allows us to quickly identify patterns and trends, and make informed decisions based on that information. React and D3.js are two powerful tools that can be used together to create powerful and interactive data visualizations. In this blog post, we'll explore how to use React and D3.js to create data visualizations, and how they can be used together to create dynamic and interactive visualizations."),(0,i.kt)("p",null,"First, let's take a look at D3.js. ",(0,i.kt)("a",{parentName:"p",href:"https://d3js.org/"},"D3.js"),", which stands for Data-Driven Documents, is a JavaScript library that allows you to create data-driven documents, such as charts and graphs, using HTML, CSS, and SVG. It has a wide range of built-in functions and tools that can be used to create a wide range of different types of visualizations."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", on the other hand, is a JavaScript library for building user interfaces. It allows you to create reusable components that can be easily integrated into your application. React's virtual DOM (Document Object Model) makes it easy to update and render changes to the UI, which is important when working with dynamic data."),(0,i.kt)("p",null,"Combining React and D3.js could be notoriously tricky, since they both want to handle the DOM. Nevertheless, if done properly, it allows us to take advantage of the strengths of both libraries. while D3.js can handle the creation and manipulation of the visualizations themselves, we'd rather use it for data manipulation and let React handle the application's state, visualization, and user interactions. This separation of concerns allows for a more maintainable and scalable codebase."),(0,i.kt)("h2",{id:"set-up-a-react-project"},"Set up a React project"),(0,i.kt)("p",null,"When creating a data visualization with React and D3.js, the first step is to set up a React project. You can use the create-react-app command to set up a new project, and then install D3.js using npm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npx create-react-app my-app\n")),(0,i.kt)("p",null,'This will create a new directory called "my-app" that contains a basic React project.\nOnce you have your React project set up, the next step is to install D3.js. You can do this by running the following command in your project directory:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm install d3\n")),(0,i.kt)("p",null,"Once your project is set up, you can start creating your visualization. Here are the general steps for creating a visualization using D3.js:\nCollect and prepare your data: Before creating the visualization, you'll need to have your data ready. This means cleaning, formatting, and organizing the data as needed."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set up the SVG container: D3.js uses SVG (Scalable Vector Graphics) to create visualizations. This means that you'll need to create an SVG element in your HTML and set its size and dimensions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create scales: D3.js uses scales to map data values to visual elements. You'll need to create a scale for each dimension of your data. For example, if you're creating a line chart, you'll need to create a scale for the x-axis and a scale for the y-axis.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the visualization: Once you have your data, container, and scales set up, you can start creating the visualization itself. This can involve creating the elements that make up the visualization (e.g. lines, bars, circles) and binding the data to those elements.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add axis, labels and legends: Adding axis, labels and legends help to understand the data better and make it clear what the visualization represents.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add interactivity: D3.js allows you to add interactivity to your visualizations, such as hover effects and animations. You can use D3's built-in functions and events to add interactivity to your visualization. ",(0,i.kt)("strong",{parentName:"p"},"We, however, use React for interactions."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Test and refine: Once you have your visualization set up, you'll want to test it and make any necessary adjustments. This can involve adjusting the scales, tweaking the visual elements, and adding or removing interactivity as needed."))),(0,i.kt)("p",null,"We leave the interactivity to a separate blog post."),(0,i.kt)("h2",{id:"set-up-line-chart-with-react"},"Set up line chart with React"),(0,i.kt)("p",null,"In your project directory, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"LineChart.js")," and add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useRef, useEffect } from 'react';\nimport * as d3 from 'd3';\n\nconst dimensions = {\n  width: 600,\n  height: 400,\n  margin: { top: 30, right: 30, bottom: 40, left: 50 },\n};\n\nconst LineChart = ({ data }) => {\n  const boundedDimensions = {\n    width: dimensions.width - margin.left - margin.right,\n    height: dimensions.height - margin.top - margin.bottom,\n  };\n\n  // 1. Access the data\n\n  // 2. Create scales\n\n  // 3. Draw visualization\n\n  // 4. Draw axis, labels, legends, etc\n\n  return <svg width={dimensions.width} height={dimensions.height}></svg>;\n};\n")),(0,i.kt)("p",null,"Inside our component we need to create a ",(0,i.kt)("strong",{parentName:"p"},"SVG")," element to be able to visualize the data in the browser. Therefore, we define our SVG element and set the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," of it."),(0,i.kt)("h3",{id:"collect-and-prepare-the-data"},"Collect and prepare the data"),(0,i.kt)("p",null,"The dataset that I'll be using contains Apple stock prices from 2013 to 2018 that I got from ",(0,i.kt)("a",{parentName:"p",href:"https://observablehq.com/@observablehq/sample-datasets#-aapl"},"Observable"),". In order to easily work with the data, I created a ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/mallahyari/8d4f6a43c80154bdb391edbc3f156029"},"Github Gist")," Github Gist and uploaded csv file. Below is a screenshot of the data columns and values."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apple csv sample",src:a(2189).Z,width:"1001",height:"427"})),(0,i.kt)("p",null,"We'll be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Close")," cloumns for our line chart. There are several ways to read and load the dataset. We are going to utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.csv()")," built-in function. It's simply a convinient method on top of Fetch API. For more information please see its documentation ",(0,i.kt)("a",{parentName:"p",href:"https://devdocs.io/d3~7/"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"d3.csv(url[([, accessor], callback)]);\n")),(0,i.kt)("p",null,"To make the code more modularized, I have defined a custom hook and loads the dataset in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," file and passes it to ",(0,i.kt)("inlineCode",{parentName:"p"},"LineChart")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useEffect, useState } from 'react';\nimport { csv } from 'd3';\nconst useData = () => {\n  const [data, setData] = useState();\n  useEffect(() => {\n    csv(\n      'https://gist.githubusercontent.com/mallahyari/8d4f6a43c80154bdb391edbc3f156029/raw/26792b80dbabdd6371bc9ff10c17f9a090495649/apple_stock_price.csv'\n    ).then((dataset) => setData(dataset));\n  }, []);\n\n  return data;\n};\n\nexport default useData;\n")),(0,i.kt)("h3",{id:"set-up-svg-container"},"Set up SVG container"),(0,i.kt)("p",null,"When drawing a chart, we need two containers. First one is the main SVG that holds the entire chart, axes, data elements, labels, etc. We call this container, the ",(0,i.kt)("inlineCode",{parentName:"p"},"wrapper"),". The second one (inner container) that contains our data elements and we call it ",(0,i.kt)("inlineCode",{parentName:"p"},"bounding box"),". We, then, need to define dimensions for both containers.\nImage below illustrates the wrapper SVG and bounding box containers."),(0,i.kt)(r.Z,{imageSrc:"img/svg_wrapper.png",caption:"Chart dimensions",mdxType:"Figure"}),(0,i.kt)("p",null,"We define a dimension object that contains the size of the wrapper and all the margins. The margins give room for axes, ticks, labels, annotation, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"<svg width={width} height={height} style={{ border: '1px solid black' }}>\n  <g transform={`translate(${margin.left},${margin.top})`}></g>\n</svg>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<g>")," element is our bounding box that contains and ",(0,i.kt)("em",{parentName:"p"},"groups")," data elements visualizations. We need to ",(0,i.kt)("strong",{parentName:"p"},"shift")," bounding box to respect our top and left margins, to make sure that our chart is inside our SVG element. The CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," property allows the ",(0,i.kt)("inlineCode",{parentName:"p"},"<g>")," element to shift its content all at once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const dimensions = {\n  width: 800,\n  height: 400,\n  margin: { top: 30, right: 30, bottom: 40, left: 60 },\n};\n")),(0,i.kt)("h3",{id:"define-data-accessors"},"Define data accessors"),(0,i.kt)("p",null,"When the data is available in our ",(0,i.kt)("inlineCode",{parentName:"p"},"LineChart")," component, we need to access the metrics (i.e. columns) that we want to visualize."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define accessors\nconst dateParser = d3.timeParse('%Y-%m-%d');\nconst xAccessor = (d) => dateParser(d.Date);\nconst yAccessor = (d) => +d.Close;\n")),(0,i.kt)("p",null,"Both the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Close")," columns are ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", and also, I used ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.timeParse")," to parse the string and convert it to Javascript ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," object. You can check the documentation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-time-format"},"here")),(0,i.kt)("h3",{id:"create-the-scales"},"Create the scales"),(0,i.kt)("p",null,"In D3.js, a scale is a function that maps data values to visual elements, such as pixels on a screen. Scales are used to translate the data into the coordinate system that is used by the SVG elements that make up the visualization.\nD3.js provides several types of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-scale"},"scales"),", including linear scales, time scales, and ordinal scales. Each type of scale is designed to work with a specific type of data. For example, a linear scale can be used to map numerical data to a continuous range of values, such as pixels on a screen, while an ordinal scale can be used to map categorical data to a discrete range of values, such as colors. You can check ",(0,i.kt)("a",{parentName:"p",href:"https://observablehq.com/@observablehq/plot-cheatsheets-scales?collection=@observablehq/plot-cheatsheets"},"this")," out to play with different scales in d3."),(0,i.kt)("p",null,"Linear scale is one of the most common scales used in D3.js, it allows to map a continuous domain of data ","[min, max]"," to a continuous range of pixels ","[0, width]",". For example, in a line chart, a linear scale can be used to map the x-axis data to the horizontal position of the line on the SVG, and the y-axis data to the vertical position of the line."),(0,i.kt)(r.Z,{imageSrc:"img/d3_scale.png",caption:"How scales map values",imageCredit:"https://observablehq.com/@observablehq/plot-cheatsheets-scales?collection=@observablehq/plot-cheatsheets",mdxType:"Figure"}),(0,i.kt)("p",null,"We need to create two scales: (i) a scale for x-axis to map date values of our dataset into the range of ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, width]")," of our bounding box; (ii) a scale that converts stock closing price into the range of ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, height]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define Scales\nconst xScale = d3\n  .scaleTime()\n  .domain(d3.extent(data, xAccessor))\n  .range([0, boundedDimensions.width])\n  .nice();\n\nconst yScale = d3\n  .scaleLinear()\n  .domain(d3.extent(data, yAccessor))\n  .range([boundedDimensions.height, 0])\n  .nice();\n")),(0,i.kt)("p",null,"The reason that ",(0,i.kt)("inlineCode",{parentName:"p"},"yScale"),"'s range is ",(0,i.kt)("inlineCode",{parentName:"p"},"[height, 0]")," is that SVG y-values start from top to bottom so we want our range to begin at the top. Additionally, we used ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.extent()")," function from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-array"},"d3-array")," to find the minimum and maximum values for ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"closing")," columns."),(0,i.kt)("h3",{id:"draw-the-line"},"Draw the line"),(0,i.kt)("p",null,"Now that we have defined our scales, we can draw the line and see the result. Thankfully, d3 save us again by providing us the tools and functions to create the line. We rely on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-shape"},"d3-shape")," to map our data to a line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define line generator\nconst lineGenerator = d3\n  .line()\n  .x((d) => xScale(xAccessor(d)))\n  .y((d) => yScale(yAccessor(d)));\n")),(0,i.kt)("p",null,"The line visualization is essentially a SVG ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," element that takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," attribute to create a shape. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.line()")," function generates the ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," string for us, which we can use in our ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<path\n  d={lineGenerator(data)}\n  className="line-chart"\n  fill="none"\n  stroke="#E3BA22"\n  strokeWidth="2"\n/>\n')),(0,i.kt)("p",null,"Here's our line chart:\n",(0,i.kt)("img",{alt:"linechart",src:a(4304).Z,width:"863",height:"477"})),(0,i.kt)("p",null,"Cool! the line's drawn properly, however, there is no axis to help us understand the chart. Let's create axes for our line."),(0,i.kt)("h3",{id:"draw-the-axes"},"Draw the axes"),(0,i.kt)("p",null,"We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.axisBottom()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.axisLeft()")," functions from d3 API to create x and y axis respectively. Nevertheless, our goal is to create axes in React. So we have to write custom code to create the axis, ticks, and their format."),(0,i.kt)("p",null,"Our axis needs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A line that starts from 0 to width (for x axis) or height (y axis) of our chart."),(0,i.kt)("li",{parentName:"ul"},"All the ticks with the labels")),(0,i.kt)("p",null,"Our scale's ",(0,i.kt)("inlineCode",{parentName:"p"},"tick([count])")," method returns approximately count representative values from the scale\u2019s domain. If count is not specified, it defaults to 10. The specified ",(0,i.kt)("em",{parentName:"p"},"count")," is only a hint; the scale may return more or fewer values depending on the domain. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"xScale.ticks()")," method return 7 ticks:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"xaxis",src:a(7450).Z+"#center",width:"435",height:"146"})),(0,i.kt)("p",null,"Since our tick values are dates, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.timeFormat()")," with a proper format to display the ticks on the axis. I used ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.timeFormat(%b %Y)")," to show only the month and year for ticks. You can see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-time-format"},"d3-time-format")," for complete formats information. Let's put together everything and create the React component for x axis:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const AxisBottom = ({ width, height, xScale }) => {\n  return (\n    <g className="axis xaxis" transform={`translate(0, ${height})`}>\n      <line x1={0} x2={width} stroke="currentColor" />\n\n      {xScale.ticks().map((tickvalue, i) => (\n        <g key={i} transform={`translate(${xScale(tickvalue)},0)`}>\n          <line y2={6} stroke="currentColor" />\n          <text\n            // y="15"\n            dy=".71em"\n            fill="currentColor"\n            style={{\n              fontSize: \'10px\',\n              textAnchor: \'middle\',\n              transform: \'translateY(15px)\',\n            }}\n          >\n            {timeFormat(\'%b %Y\')(tickvalue)}\n          </text>\n        </g>\n      ))}\n    </g>\n  );\n};\n')),(0,i.kt)("p",null,"Several points worth mentioning here. We grouped the entire axis into a ",(0,i.kt)("inlineCode",{parentName:"p"},"<g>")," element so we can easily shift it because our ",(0,i.kt)("inlineCode",{parentName:"p"},"(0,0)")," point is at top left. So we must move the x axis to the bottom. Then, we iterate on each tick value and create a tick line and a text label for it. To better organize ticks we put each tick into a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"<g>")," element too. And lastly, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," value or CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"transform")," to shift the text labels below the ticks for better readability."),(0,i.kt)("p",null,"Similarly, for y axis we'll have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const AxisLeft = ({ height, yScale }) => {\n  return (\n    <g className=\"axis yaxis\">\n      <line x1={0} y2={height} stroke=\"currentColor\" />\n\n      {yScale.ticks().map((tickvalue, i) => (\n        <g key={i} transform={`translate(0,${yScale(tickvalue)})`}>\n          <line x2={-6} stroke=\"currentColor\" />\n          <text\n            // x={-15}\n            dy={'.32em'}\n            fill=\"currentColor\"\n            style={{\n              fontSize: '10px',\n              textAnchor: 'end',\n              transform: 'translateX(-15px)',\n            }}\n          >\n            {tickvalue}\n          </text>\n        </g>\n      ))}\n    </g>\n  );\n};\n")),(0,i.kt)("p",null,"We also define labels for our axes. The x axis label should be in the middle of the axis line (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"width/2"),") a bit further below tick values. Similarly, the y axis label should be in the middle (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"height/2"),"), further to the left of the axis and needs to be rotated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{/* X axis label */}\n<text\n  x={boundedDimensions.width / 2}\n  y={35}\n  className=\"axis-label\"\n  transform={`translate(0, ${boundedDimensions.height})`}\n  style={{\n    fontSize: '11px',\n    textAnchor: 'end',\n  }}\n>\n  {xAxisLabel}\n\n{/* Y axis label */}\n<text\n  textAnchor=\"middle\"\n  className=\"axis-label\"\n  transform={`translate(-35,${\n    boundedDimensions.height / 2\n  }) rotate(-90) `}\n  style={{\n    fontSize: '11px',\n  }}\n>\n  {yAxisLabel}\n</text>\n")),(0,i.kt)("p",null,"Not to mention that I added some CSS properties to the ",(0,i.kt)("inlineCode",{parentName:"p"},"line")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," elements to make them more apealing to the eyes."),(0,i.kt)("p",null,"Here's the final result:\n",(0,i.kt)("img",{alt:"line chart",src:a(5054).Z,width:"826",height:"432"})))}h.isMDXComponent=!0},2189:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apple_csv-c40a7d3fa02548726f9a91c1720ffcdb.png"},5054:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/line_chart-47f0f4a8d6db419a53d63639edf50635.png"},4304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linechart_01-3dde6bf57713da486d364be51f958925.png"},7450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xaxis_ticks-b2f1c7ca72997b5ca5117f8a06cac057.png"}}]);