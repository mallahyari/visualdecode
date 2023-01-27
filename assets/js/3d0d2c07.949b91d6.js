"use strict";(self.webpackChunkvisdecode_site=self.webpackChunkvisdecode_site||[]).push([[8979],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||l;return t?n.createElement(m,r(r({ref:a},p),{},{components:t})):n.createElement(m,r({ref:a},p))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1193:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const l={slug:"beautiful-radar-plot",title:"Designing Eye-catching Radar Plots with React and D3",authors:["mehdi"],tags:["data visualization","radar plot","react","d3"],hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:5},r=void 0,o={permalink:"/visualdecode/blog/beautiful-radar-plot",source:"@site/blog/2023-01-26-simple-radarplot.md",title:"Designing Eye-catching Radar Plots with React and D3",description:"Introduction",date:"2023-01-26T00:00:00.000Z",formattedDate:"January 26, 2023",tags:[{label:"data visualization",permalink:"/visualdecode/blog/tags/data-visualization"},{label:"radar plot",permalink:"/visualdecode/blog/tags/radar-plot"},{label:"react",permalink:"/visualdecode/blog/tags/react"},{label:"d3",permalink:"/visualdecode/blog/tags/d-3"}],readingTime:8.95,hasTruncateMarker:!1,authors:[{name:"Mehdi Allahyari",title:"Principle Research Scientist",url:"https://github.com/mallahyari",imageURL:"https://github.com/mallahyari.png",key:"mehdi"}],frontMatter:{slug:"beautiful-radar-plot",title:"Designing Eye-catching Radar Plots with React and D3",authors:["mehdi"],tags:["data visualization","radar plot","react","d3"],hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:5},nextItem:{title:"How to add a tooltip to a line chart",permalink:"/visualdecode/blog/add-tooltip"}},s={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare the data",id:"prepare-the-data",level:2},{value:"Create the SVG element",id:"create-the-svg-element",level:2},{value:"Define the scales",id:"define-the-scales",level:2},{value:"Draw the radar plot",id:"draw-the-radar-plot",level:2}],p={toc:d};function c(e){let{components:a,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Radar plots, also known as spider plots or star plots, are a great way to visualize multivariate data. They are particularly useful when you want to compare multiple variables for a set of items. Here are some situations where radar plots may be useful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Comparing multiple variables:")," Radar plots are useful for showing how multiple variables are related to each other. They allow you to see the relative strengths and weaknesses of each variable across a set of items.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Showing relative values:")," Radar plots can be useful for showing the relative values of each variable for a set of items. This can be useful for comparing the relative strengths and weaknesses of different items.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Displaying data with cyclical patterns:")," If your data has cyclical patterns, such as seasonal patterns, a radar plot can help you visualize it by plotting the variables on a circular axis."))),(0,i.kt)("p",null,"Radar plots tend to be among my favorite types of plots as they can convey various kinds of information simultaneously, and are also visually appealing. In this blog post, I will show you how to create a radar plot using React and D3.js. Like previous blogs, our goal is to use React for managing the DOM and utilize d3 for data manipulations."),(0,i.kt)("p",null,"There are many libraries that allow you to draw radar plots like ",(0,i.kt)("a",{parentName:"p",href:"https://plotly.com/python/radar-chart/"},"Plotly"),", but when it comes to creating ",(0,i.kt)("em",{parentName:"p"},"beautiful")," plots, they are limited and don't have a lot of flexibility. That make sense, because their intention is more towards non-technical individuals."),(0,i.kt)("p",null,"Plots do not have to be ",(0,i.kt)("em",{parentName:"p"},"necessarily")," visually appealing, but it is generally beneficial for them to be clear and easy to understand. A well-designed plot can help make the data more accessible and easier to interpret. This can be especially important when presenting data to non-experts or decision-makers who may not have the same level of expertise in the subject matter."),(0,i.kt)("p",null,"Visual appeal can be achieved by using colors, labels, and other design elements to guide the viewer's eye through the data. This can help convey the main message of the plot more effectively. It is also important to choose the right type of plot for the data and the message you want to convey."),(0,i.kt)("p",null,"I covered in the ",(0,i.kt)("a",{parentName:"p",href:"/visualdecode/blog/linechart-visualization"},"visualizing line chart")," that for creating any plot we need to follow six main steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare the data"),(0,i.kt)("li",{parentName:"ol"},"Create the SVG element"),(0,i.kt)("li",{parentName:"ol"},"Create the scales"),(0,i.kt)("li",{parentName:"ol"},"Draw the (radar) plot"),(0,i.kt)("li",{parentName:"ol"},"Add interactivity"),(0,i.kt)("li",{parentName:"ol"},"Add styling")),(0,i.kt)("p",null,"Now let's complete each step."),(0,i.kt)("h2",{id:"prepare-the-data"},"Prepare the data"),(0,i.kt)("p",null,"Before we are able to proceed, we need to prepare our dataset. For this example I have created some fake data. My data represents levels of skills for two persons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const initialData = [\n  [\n    { key: 'resilience', value: 19 },\n    { key: 'strength', value: 6 },\n    { key: 'adaptability', value: 20 },\n    { key: 'creativity', value: 12 },\n    { key: 'openness', value: 1 },\n    { key: 'confidence', value: 11 },\n  ],\n  [\n    { key: 'resilience', value: 7 },\n    { key: 'strength', value: 18 },\n    { key: 'adaptability', value: 6 },\n    { key: 'creativity', value: 14 },\n    { key: 'openness', value: 17 },\n    { key: 'confidence', value: 14 },\n  ],\n];\n")),(0,i.kt)("h2",{id:"create-the-svg-element"},"Create the SVG element"),(0,i.kt)("p",null,"I create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleRadar.js")," as my React component, and add an SVG element that will be used to render the radar plot. We need to define dimensions of our SVG."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const dimensions = {\n  width: 600,\n  height: 600,\n  margin: { top: 50, right: 60, bottom: 50, left: 60 },\n};\n\nconst SimpleRadar = ({ data = initialData }) => {\n  const { width, height, margin } = dimensions;\n\n  // bounding box dimensions\n  const boundedDimensions = {\n    width: dimensions.width - margin.left - margin.right,\n    height: dimensions.height - margin.top - margin.bottom,\n  };\n\n  boundedDimensions.radius = boundedDimensions.width / 2;\n\n  return (\n    <div>\n      <svg width={width} height={height}></svg>\n    </div>\n  );\n};\n")),(0,i.kt)("p",null,"We would like our radar plot to be in the center of the SVG, therefore, we'd set our SVG ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," to be equal. The ",(0,i.kt)("em",{parentName:"p"},"bounding box")," that we create inside SVG, which basically contain all the data visualization elements must respect our SVG margins, to make sure the entire chart will displayed properly. Thus, we shift our bounding box so that ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, 0)")," point will be top-left of the bounding box. The figure below depicts the transformation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(5503).Z,width:"502",height:"502"})),(0,i.kt)("p",null,"However, we will have some difficulties. Our radar chart is expected to be inside the bounding box, to be in the center of it to be exact. Therefore, selecting top-left of the bounding box as our ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, 0)")," point makes our math and all the calculations that we need to do for drawing circles, ticks, axes, etc., more difficult. Because all the drawings will be in respect to this point. ",(0,i.kt)("em",{parentName:"p"},"To make our math much easier later on"),", we shift our bounding box in such a way that the point ",(0,i.kt)("inlineCode",{parentName:"p"},"(0, 0)")," will shift to the center of the SVG. Now, we can place our visualization elements easily with respect to the center of radar plot circle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(3811).Z,width:"502",height:"502"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// bounding box\n<g\n  transform={`translate(${margin.left + boundedDimensions.radius} ,${\n    margin.top + boundedDimensions.radius\n  } )`}\n></g>\n")),(0,i.kt)("h2",{id:"define-the-scales"},"Define the scales"),(0,i.kt)("p",null,"As our data shows, we have six skills (variables) that need to displayed on the radar chart. So, we need a ",(0,i.kt)("em",{parentName:"p"},"continuous")," scale with a ",(0,i.kt)("inlineCode",{parentName:"p"},"domain")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"[0,5]"),".\nRadar plot is ",(0,i.kt)("em",{parentName:"p"},"circular"),", therefore, our scale's ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," must be ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 2 * Math.PI]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// This creates an array of [0, 1, 2, 3, 4, 5]\nconst angleScaleDomain = d3.range(data[0].length + 1);\n\n// Accessor method to access `key` names from data\nconst angleScaleDomainLabels = data[0].map((d) => d.key);\n\nconst angleScale = d3\n  .scaleLinear()\n  .domain(d3.extent(angleScaleDomain))\n  .range([0, 2 * Math.PI]);\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that we are using ",(0,i.kt)("strong",{parentName:"p"},"radians")," as javascript Math library has functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"math.sin()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.cos()")," that work with radians.")),(0,i.kt)("p",null,"We can use our scale to find where to put six skills' labels (",(0,i.kt)("inlineCode",{parentName:"p"},"['resilience', 'strength', 'adaptability', 'creativity', 'openness', 'confidence']"),") on the radar plot around the circle. Given our ",(0,i.kt)("inlineCode",{parentName:"p"},"angleScale"),", we pass a number between 0 and 5 and it gives us the angle to place our label. Nevertheless, we need one more thing. We should be able to find a ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y]")," position on the plot by giving an ",(0,i.kt)("inlineCode",{parentName:"p"},"angle"),". How to do that? Answer is simple, we make use of our trigonometry knowledge."),(0,i.kt)("p",null,"Given an angle $\\theta$, we can calculate the ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y]")," using the following formulas."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(6637).Z,width:"708",height:"362"})),(0,i.kt)("p",null,"In order to draw elements at arbitrary ",(0,i.kt)("em",{parentName:"p"},"radii")," (e.g. tick values or skill labels), we add another variable ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," to our function. Additionally, we rotate angles by -90 degrees or ",(0,i.kt)("inlineCode",{parentName:"p"},"-Math.PI/2")," so the angle 0 begins at 12 O'clock."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const getCoordinatesForAngle = (angle, offset = 1) => {\n  return [\n    boundedDimensions.radius * Math.cos(angle - Math.PI / 2) * offset,\n    boundedDimensions.radius * Math.sin(angle - Math.PI / 2) * offset,\n  ];\n};\n")),(0,i.kt)("p",null,"We need another scale that I call it ",(0,i.kt)("inlineCode",{parentName:"p"},"radiusScale"),", for our ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," field in our dataset, as each record in our dataset has ",(0,i.kt)("inlineCode",{parentName:"p"},"skill")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," attributes. Domain of ",(0,i.kt)("inlineCode",{parentName:"p"},"radiusScale")," has to be ",(0,i.kt)("inlineCode",{parentName:"p"},"[min, max]")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," feature, and the range is the range will be ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, radius]"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let allVals = [];\ndata.map((array) => array.map((d) => allVals.push(d.value)));\n\nconst radiusScale = d3\n  .scaleLinear()\n  .domain([0, d3.max(allVals)])\n  .range([0, boundedDimensions.radius])\n  .nice();\n")),(0,i.kt)("p",null,"We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"radiusScale")," to get ticks for our radar plot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const valueTicks = radiusScale.ticks(4);\n")),(0,i.kt)("h2",{id:"draw-the-radar-plot"},"Draw the radar plot"),(0,i.kt)("p",null,"Now that we have defined our scales, we only need to create a line generator to draw lines on the radar chart. We utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.lineRadial()")," function, please see documentation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-shape#lines"},"here"),". It's very similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"d3.line()")," except it accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"angle()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"radius()")," methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const radarLineGenerator = d3\n  .lineRadial()\n  .angle((d, i) => angleScale(i))\n  .radius((d) => radiusScale(d.value))\n  .curve(d3.curveCardinalClosed);\n")),(0,i.kt)("p",null,"We are ready to create our radar plot. We start by drawing ",(0,i.kt)("inlineCode",{parentName:"p"},"grid lines")," for our skills as well as skills' labels. We have our labels, therefore, we simply iterate over each one and get its angle, then find ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y]")," using our ",(0,i.kt)("inlineCode",{parentName:"p"},"getCoordinatesForAngle()")," and draw ",(0,i.kt)("inlineCode",{parentName:"p"},"<line>")," from the center of the circle. For drawing the labels, we would like them to be a little bit outside of the radar plot circle, therefore, we set our ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," to be slightly bigger than 1. Here's the code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  angleScaleDomainLabels.map((label, i) => {\n    const angle = angleScale(i);\n    const [x, y] = getCoordinatesForAngle(angle);\n    const [labelX, labelY] = getCoordinatesForAngle(angle, 1.1);\n    return (\n      <g key={i} className=\"grid\">\n        <line x2={x} y2={y} stroke=\"#E5E2E0\" className=\"grid-line\" />\n        <text\n          x={labelX}\n          y={labelY}\n          textAnchor={labelX < 0 ? 'end' : labelX < 3 ? 'middle' : 'start'}\n        >\n          {label}\n        </text>\n      </g>\n    );\n  });\n}\n")),(0,i.kt)("p",null,"The figure below shows the output:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(7718).Z,width:"614",height:"587"})),(0,i.kt)("p",null,"We need to draw the ticks. For each tick value, we draw a ",(0,i.kt)("inlineCode",{parentName:"p"},"<circle>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"r=radiusScale(tick)")," and for tick label we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"<text>")," element and set ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," positions. I set the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," value to be slightly to the right and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," values be vertically drawn."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  valueTicks.reverse().map((tick, i) => (\n    <g key={i} className="grid">\n      <circle\n        // style={{ filter: \'url(#dropshadow)\' }}\n        r={radiusScale(tick)}\n        fill="#fff"\n        // fill="#E5E2E0"\n        stroke="#E5E2E0"\n        fillOpacity={0.9}\n      />\n      <text x={5} y={-radiusScale(tick)} dy=".3em">\n        {tick}\n      </text>\n    </g>\n  ));\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"radar ticks",src:t(7690).Z,width:"630",height:"569"}),"\nTo finish our drawing, we need to draw the lines using our ",(0,i.kt)("inlineCode",{parentName:"p"},"lineGenerator"),". We have two series of records for two people, so we will draw two ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<g>\n   <path\n     d={radarLineGenerator(data[0])}\n     fill="#137B80"\n     stroke="#137B80"\n     strokeWidth="2.5"\n     fillOpacity="0.1"\n   />\n </g>\n <g>\n   <path\n     d={radarLineGenerator(data[1])}\n     fill="#E6842A"\n     stroke="#E6842A"\n     strokeWidth="2.5"\n     fillOpacity="0.1"\n   />\n </g>\n')),(0,i.kt)("p",null,"You can see the radar plot in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(9915).Z,width:"667",height:"589"})),(0,i.kt)("p",null,"It looks nice already! Nevertheless, Let's add more styling to that. I would like to add some shadow to my plot and each inner circle. To be able to do that, we cannot use CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"box-shadow"),", because it gives us a rectangular shadow, so it's not good for non-rectangular shapes. Instead, we will use the CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," property with ",(0,i.kt)("inlineCode",{parentName:"p"},"drop-shadow"),". Another way is to define a SVG ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter"},"filter")," to have lots of flexibility to control the shadow and opacity to give to ",(0,i.kt)("inlineCode",{parentName:"p"},"drop-shadow"),". For this example, I'll go with the former option. I created a CSS file ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css")," and added the following CSS rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"grid circle {\n  filter: drop-shadow(0px 5px 100px rgba(146, 212, 238, 0.9));\n  mix-blend-mode: multiply;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(3496).Z,width:"1077",height:"699"})),(0,i.kt)("p",null,"The plot looks quite beautiful. However, you can see a rectangle around it that has clipped the shade of the blue color. It can be easily fixed by adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow: 'visible'")," property to the SVG element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"<svg\n  width={width}\n  height={height}\n  style={{ backgroundColor: '#fff', overflow: 'visible' }}\n>\n  // rest of the code\n</svg>\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(6644).Z,width:"772",height:"684"})),(0,i.kt)("p",null,"By changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"drop-shadow")," values, you'll get very pretty plots."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"grid line",src:t(854).Z,width:"663",height:"275"})),(0,i.kt)("p",null,"You can find the code here at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mallahyari/vis-react-d3"},"Github repo")))}c.isMDXComponent=!0},7718:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_gridline-a8ba7c657f0a2a6f04774ea6fc0166be.png"},6637:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_math_sin_cos-ba03f897d8803d4667a4a662cb9823b5.png"},3496:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_overflow-52d05faa41a47bfbccc7ea4a92b67be8.png"},6644:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_pretty-b1bd894793e16e194b4d3339d71706ae.png"},854:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_pretty_2-12695cfd5cdd8d34c4cac23c2b52811e.png"},9915:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_simple-cfb71232fe9e155d318cc8c784edaecf.png"},5503:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_svg_boundingbox-adc186539a286235c8222ee3f351f113.png"},3811:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_svg_boundingbox_final-e94e80e63c51cdecbcd0c27c2f2d3a33.png"},7690:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/radar_ticks-3b59e607b58d135421fc6827bcf49089.png"}}]);