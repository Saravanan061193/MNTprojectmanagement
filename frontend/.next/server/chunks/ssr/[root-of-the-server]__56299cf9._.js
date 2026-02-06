module.exports=[24361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},14747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},84505,a=>{"use strict";let b=(0,a.i(70106).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);a.s(["Download",()=>b],84505)},96221,a=>{"use strict";let b=(0,a.i(70106).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);a.s(["Loader2",()=>b],96221)},76138,a=>{"use strict";var b=a.i(87924),c=a.i(4720),d=a.i(84505),e=a.i(96221),f=a.i(72131),g=a.i(19032);function h(){let[a,h]=(0,f.useState)(null),i=(a,b)=>{if(0===a.length)return void alert("No data to export");let c=Object.keys(a[0]),d=new Blob([[c.join(","),...a.map(a=>c.map(b=>{let c=a[b]??"";return`"${String(c).replace(/"/g,'""')}"`}).join(","))].join("\n")],{type:"text/csv;charset=utf-8;"}),e=document.createElement("a"),f=URL.createObjectURL(d);e.setAttribute("href",f),e.setAttribute("download",b),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)},j=async a=>{h(a);try{let{data:b}=await g.default.get("/api/assets"),c=b.map(a=>({Client:"object"==typeof a.client?a.client.companyName:a.client||"N/A",Category:a.category,Service:a.serviceName,Identifier:a.identifier,Expiry:a.expiryDate?new Date(a.expiryDate).toLocaleDateString():"Never",Notes:a.notes||""}));if("forecast"===a){let a=new Date;a.setDate(a.getDate()+90),c=c.filter(b=>{if("Never"===b.Expiry)return!1;let c=new Date(b.Expiry);return c<=a&&c>=new Date}),i(c,`expiry_forecast_${new Date().toISOString().split("T")[0]}.csv`)}else i(c,`all_assets_report_${new Date().toISOString().split("T")[0]}.csv`)}catch(a){console.error("Export failed",a),alert("Failed to export report data.")}finally{h(null)}},k=async a=>{h(a+"_pdf");try{let{data:b}=await g.default.get("/api/assets"),c=b;if("forecast"===a){let a=new Date;a.setDate(a.getDate()+90),c=b.filter(b=>{if(!b.expiryDate)return!1;let c=new Date(b.expiryDate);return c<=a&&c>=new Date})}let d=window.open("","_blank");if(!d)return alert("Please allow popups for PDF generation");let e="forecast"===a?"Expiry Forecast (90 Days)":"All Assets Summary";d.document.write(`
                <html>
                    <head>
                        <title>${e}</title>
                        <style>
                            body { font-family: sans-serif; padding: 40px; }
                            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                            th { background-color: #f2f2f2; }
                            h1 { color: #2563eb; }
                            .footer { margin-top: 30px; font-size: 12px; color: #666; }
                        </style>
                    </head>
                    <body>
                        <h1>${e}</h1>
                        <p>Report Generated: ${new Date().toLocaleString()}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Client</th>
                                    <th>Category</th>
                                    <th>Service</th>
                                    <th>Identifier</th>
                                    <th>Expiry</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${c.map(a=>`
                                    <tr>
                                        <td>${a.client?.companyName||"N/A"}</td>
                                        <td>${a.category}</td>
                                        <td>${a.serviceName}</td>
                                        <td>${a.identifier}</td>
                                        <td>${a.expiryDate?new Date(a.expiryDate).toLocaleDateString():"Never"}</td>
                                        <td>${a.currency||"INR"} ${a.renewalCost||0}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                        <div class="footer">Magizh Vault - Portfolio Management Software</div>
                    </body>
                </html>
            `),d.document.close(),d.print()}catch(a){console.error("PDF Export failed",a)}finally{h(null)}};return(0,b.jsxs)("div",{className:"space-y-8 animate-in fade-in duration-500",children:[(0,b.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-2xl font-bold text-white",children:"Reports Center"}),(0,b.jsx)("p",{className:"text-gray-400 mt-1",children:"Generate and download system audits."})]}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsxs)("button",{onClick:()=>j("all"),disabled:null!==a,className:"bg-[#1a1a1a] border border-[#333] text-gray-300 px-4 py-2.5 rounded-xl hover:bg-[#222] hover:text-white transition-all flex items-center gap-2 disabled:opacity-50",children:["all"===a?(0,b.jsx)(e.Loader2,{className:"animate-spin",size:16}):(0,b.jsx)(d.Download,{size:16}),"CSV Export"]}),(0,b.jsxs)("button",{onClick:()=>k("all"),disabled:null!==a,className:"bg-blue-600 border border-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-500/20",children:["all_pdf"===a?(0,b.jsx)(e.Loader2,{className:"animate-spin",size:16}):(0,b.jsx)(d.Download,{size:16}),"PDF Export"]})]})]}),(0,b.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{id:"summary",title:"Client Asset Summary",desc:"Comprehensive list of all assets grouped by client.",csv:()=>j("all"),pdf:()=>k("all")},{id:"forecast",title:"Expiry Forecast",desc:"Upcoming domain and hosting expirations for next 90 days.",csv:()=>j("forecast"),pdf:()=>k("forecast")},{id:"audit",title:"Security Audit Log",desc:"Detailed log of all access attempts and credential reveals.",csv:()=>alert("Coming soon"),pdf:()=>alert("Coming soon")}].map(d=>(0,b.jsxs)("div",{className:"bg-[#111] p-6 rounded-2xl border border-[#222] hover:border-blue-500/30 transition-all group hover:shadow-2xl hover:shadow-blue-900/10",children:[(0,b.jsx)("div",{className:"w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:(0,b.jsx)(c.FileText,{size:24})}),(0,b.jsx)("h3",{className:"text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors",children:d.title}),(0,b.jsx)("p",{className:"text-gray-400 text-sm mb-6 leading-relaxed min-h-[40px]",children:d.desc}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,b.jsx)("button",{onClick:d.csv,disabled:null!==a,className:"py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50",children:(0,b.jsx)("span",{className:"font-semibold text-xs",children:"CSV"})}),(0,b.jsx)("button",{onClick:d.pdf,disabled:null!==a,className:"py-2.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-sm text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50",children:(0,b.jsx)("span",{className:"font-semibold text-xs",children:"PDF"})})]})]},d.id))})]})}a.s(["default",()=>h])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__56299cf9._.js.map