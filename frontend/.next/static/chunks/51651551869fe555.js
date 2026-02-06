(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40160,e=>{"use strict";let t=(0,e.i(75254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",()=>t],40160)},31278,e=>{"use strict";let t=(0,e.i(75254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>t],31278)},34830,e=>{"use strict";var t=e.i(43476),a=e.i(78583),r=e.i(40160),l=e.i(31278),i=e.i(71645),s=e.i(9165);function o(){let[e,o]=(0,i.useState)(null),d=(e,t)=>{if(0===e.length)return void alert("No data to export");let a=Object.keys(e[0]),r=new Blob([[a.join(","),...e.map(e=>a.map(t=>{let a=e[t]??"";return`"${String(a).replace(/"/g,'""')}"`}).join(","))].join("\n")],{type:"text/csv;charset=utf-8;"}),l=document.createElement("a"),i=URL.createObjectURL(r);l.setAttribute("href",i),l.setAttribute("download",t),l.style.visibility="hidden",document.body.appendChild(l),l.click(),document.body.removeChild(l)},n=async e=>{o(e);try{let{data:t}=await s.default.get("/api/assets"),a=t.map(e=>({Client:"object"==typeof e.client?e.client.companyName:e.client||"N/A",Category:e.category,Service:e.serviceName,Identifier:e.identifier,Expiry:e.expiryDate?new Date(e.expiryDate).toLocaleDateString():"Never",Notes:e.notes||""}));if("forecast"===e){let e=new Date;e.setDate(e.getDate()+90),a=a.filter(t=>{if("Never"===t.Expiry)return!1;let a=new Date(t.Expiry);return a<=e&&a>=new Date}),d(a,`expiry_forecast_${new Date().toISOString().split("T")[0]}.csv`)}else d(a,`all_assets_report_${new Date().toISOString().split("T")[0]}.csv`)}catch(e){console.error("Export failed",e),alert("Failed to export report data.")}finally{o(null)}},c=async e=>{o(e+"_pdf");try{let{data:t}=await s.default.get("/api/assets"),a=t;if("forecast"===e){let e=new Date;e.setDate(e.getDate()+90),a=t.filter(t=>{if(!t.expiryDate)return!1;let a=new Date(t.expiryDate);return a<=e&&a>=new Date})}let r=window.open("","_blank");if(!r)return alert("Please allow popups for PDF generation");let l="forecast"===e?"Expiry Forecast (90 Days)":"All Assets Summary";r.document.write(`
                <html>
                    <head>
                        <title>${l}</title>
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
                        <h1>${l}</h1>
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
                                ${a.map(e=>`
                                    <tr>
                                        <td>${e.client?.companyName||"N/A"}</td>
                                        <td>${e.category}</td>
                                        <td>${e.serviceName}</td>
                                        <td>${e.identifier}</td>
                                        <td>${e.expiryDate?new Date(e.expiryDate).toLocaleDateString():"Never"}</td>
                                        <td>${e.currency||"INR"} ${e.renewalCost||0}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                        <div class="footer">Magizh Vault - Portfolio Management Software</div>
                    </body>
                </html>
            `),r.document.close(),r.print()}catch(e){console.error("PDF Export failed",e)}finally{o(null)}};return(0,t.jsxs)("div",{className:"space-y-8 animate-in fade-in duration-500",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-white",children:"Reports Center"}),(0,t.jsx)("p",{className:"text-gray-400 mt-1",children:"Generate and download system audits."})]}),(0,t.jsxs)("div",{className:"flex gap-3",children:[(0,t.jsxs)("button",{onClick:()=>n("all"),disabled:null!==e,className:"bg-[#1a1a1a] border border-[#333] text-gray-300 px-4 py-2.5 rounded-xl hover:bg-[#222] hover:text-white transition-all flex items-center gap-2 disabled:opacity-50",children:["all"===e?(0,t.jsx)(l.Loader2,{className:"animate-spin",size:16}):(0,t.jsx)(r.Download,{size:16}),"CSV Export"]}),(0,t.jsxs)("button",{onClick:()=>c("all"),disabled:null!==e,className:"bg-blue-600 border border-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-500/20",children:["all_pdf"===e?(0,t.jsx)(l.Loader2,{className:"animate-spin",size:16}):(0,t.jsx)(r.Download,{size:16}),"PDF Export"]})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{id:"summary",title:"Client Asset Summary",desc:"Comprehensive list of all assets grouped by client.",csv:()=>n("all"),pdf:()=>c("all")},{id:"forecast",title:"Expiry Forecast",desc:"Upcoming domain and hosting expirations for next 90 days.",csv:()=>n("forecast"),pdf:()=>c("forecast")},{id:"audit",title:"Security Audit Log",desc:"Detailed log of all access attempts and credential reveals.",csv:()=>alert("Coming soon"),pdf:()=>alert("Coming soon")}].map(r=>(0,t.jsxs)("div",{className:"bg-[#111] p-6 rounded-2xl border border-[#222] hover:border-blue-500/30 transition-all group hover:shadow-2xl hover:shadow-blue-900/10",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",children:(0,t.jsx)(a.FileText,{size:24})}),(0,t.jsx)("h3",{className:"text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors",children:r.title}),(0,t.jsx)("p",{className:"text-gray-400 text-sm mb-6 leading-relaxed min-h-[40px]",children:r.desc}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,t.jsx)("button",{onClick:r.csv,disabled:null!==e,className:"py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50",children:(0,t.jsx)("span",{className:"font-semibold text-xs",children:"CSV"})}),(0,t.jsx)("button",{onClick:r.pdf,disabled:null!==e,className:"py-2.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-sm text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50",children:(0,t.jsx)("span",{className:"font-semibold text-xs",children:"PDF"})})]})]},r.id))})]})}e.s(["default",()=>o])}]);