!function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([,function(t,e,r){t.exports=r(2)},function(t,e){var r=[{name:"Bar Charts",value:7},{name:"Pie Charts",value:19},{name:"Scatterplots",value:12},{name:"Timelines",value:14},{name:"Node Graphs",value:23},{name:"Tree Graphs",value:8},{name:"Stream Graphs",value:11},{name:"Voronoi Diagrams",value:14}],a=d3.select("#chart").attr("width",700).attr("height",500),n=d3.scaleLinear().domain([0,d3.max(r,(function(t){return t.value}))]).rangeRound([400,0]),o=d3.scaleBand().domain(r.map((function(t){return t.name}))).rangeRound([0,500]).padding(.1),u=a.append("g").attr("id","bars-container");u.selectAll(".bar").data(r).enter().append("rect").attr("class","bar").attr("x",(function(t){return o(t.name)})).attr("y",(function(t){return n(t.value)})).attr("width",o.bandwidth()).attr("height",(function(t){return 400-n(t.value)})),u.attr("transform","translate(100,0)"),yAxis=a.append("g").attr("id","y-axis").call(d3.axisLeft(n).ticks(10)).attr("transform","translate(100,0)"),xAxis=a.append("g").attr("id","x-axis").call(d3.axisBottom(o)).attr("transform","translate(100,400)").selectAll("text").style("text-anchor","start").attr("transform","rotate(45)")}]);