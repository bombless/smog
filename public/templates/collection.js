define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({"class":"well"},{})),buf.push("><div"),buf.push(attrs({"class":"page-header"},{})),buf.push("><h1>"+escape((interp=name)==null?"":interp)+"</h1></div><table"),buf.push(attrs({id:"datagrid",cellpadding:"0",cellspacing:"0",border:"0","class":"table table-striped table-bordered"},{cellpadding:!0,cellspacing:!0,border:!0})),buf.push("><thead><tr><th>ID</th><th>Document</th><th>Actions</th></tr></thead><tbody>"),documents&&function(){if("number"==typeof documents.length)for(var a=0,b=documents.length;a<b;a++){var c=documents[a];buf.push("<tr><td>"+escape((interp=c.id)==null?"":interp)+"</td><td"),buf.push(attrs({id:""+c.id+"","class":"editable_textarea"},{id:!0})),buf.push(">"+escape((interp=c.value)==null?"":interp)+"</td><td><a"),buf.push(attrs({href:"#/delete/"+name+"/"+c.id+"",rel:"tooltip",title:"Delete"},{href:!0,rel:!0,title:!0})),buf.push("><i"),buf.push(attrs({"class":"icon-trash"},{})),buf.push("></i></a></td></tr>")}else for(var a in documents){var c=documents[a];buf.push("<tr><td>"+escape((interp=c.id)==null?"":interp)+"</td><td"),buf.push(attrs({id:""+c.id+"","class":"editable_textarea"},{id:!0})),buf.push(">"+escape((interp=c.value)==null?"":interp)+"</td><td><a"),buf.push(attrs({href:"#/delete/"+name+"/"+c.id+"",rel:"tooltip",title:"Delete"},{href:!0,rel:!0,title:!0})),buf.push("><i"),buf.push(attrs({"class":"icon-trash"},{})),buf.push("></i></a></td></tr>")}}.call(this),buf.push("</tbody></table></div>")}return buf.join("")}})