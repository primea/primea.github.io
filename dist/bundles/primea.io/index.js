System.bundles={"bundles/primea.io/index.css!":["tachyons@4.9.0#css/tachyons.css!steal-css@1.3.1#css","tachyons-base@1.2.6#css/tachyons-base.css!steal-css@1.3.1#css"]},define("npm-utils",function(e,t,n){!function(e,t,n,r){function a(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/]*(?::[^:@\/]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}var o=Array.prototype.slice,i=/.+@.+\..+\..+#.+/,s=/#\{[^\}]+\}|#\?.+$/,l=/(git|http(s?)):\/\//,u="function"==typeof Set,c={extend:function(e,t,n,r){var a,i=r;if(n)if(i||(i=u?new Set:[]),u){if(i.has(t))return t;i.add(t)}else{if(-1!==i.indexOf(t))return t;i.push(t)}for(var s in t)a=t[s],n?c.isArray(a)?e[s]=o.call(a):c.isPlainObject(a)?e[s]=c.extend({},a,n,i):e[s]=t[s]:e[s]=t[s];return e},map:function(e,t){for(var n=0,r=e.length,a=[];n<r;n++)a.push(t.call(e,e[n]));return a},filter:function(e,t){for(var n=0,r=e.length,a=[];n<r;n++)t.call(e,e[n])&&a.push(e[n]);return a},forEach:function(e,t){for(var n=0,r=e.length;n<r;n++)t.call(e,e[n],n)},isObject:function(e){return"object"==typeof e},isPlainObject:function(e){return c.isObject(e)&&(!e||e.__proto__===Object.prototype)},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isEnv:function(e){return this.isEnv?this.isEnv(e):this.env===e},isGitUrl:function(e){return l.test(e)},warnOnce:function(e){var t=this._warnings=this._warnings||{};t[e]||(t[e]=!0,this.warn(e))},warn:function(e){"undefined"!=typeof steal&&"undefined"!=typeof console&&console.warn&&steal.done().then(function(){steal.dev&&steal.dev.warn||(console.warn?console.warn("steal.js WARNING: "+e):console.log(e))})},relativeURI:function(e,t){return"undefined"!=typeof steal?steal.relativeURI(e,t):t},moduleName:{create:function(e,t){if(t)return e.moduleName;if("@empty"===e)return e;var n;return e.modulePath&&(n="./"===e.modulePath.substr(0,2)?e.modulePath.substr(2):e.modulePath),e.packageName+(e.version?"@"+e.version:"")+(n?"#"+n:"")+(e.plugin?e.plugin:"")},isNpm:function(e){return i.test(e)},isConditional:function(e){return s.test(e)},isFullyConvertedNpm:function(e){return!!(e.packageName&&e.version&&e.modulePath)},isScoped:function(e){return"@"===e[0]},parse:function(e,t,n,r){var a=e.split("!"),o=a[0].split("#"),i=o[0].split("@");o[1]||i[0]||(i=["@"+i[1]]),3===i.length&&c.moduleName.isScoped(e)&&(i.splice(0,1),i[0]="@"+i[0]);var s,l;if(t&&c.path.isRelative(e))s=t,l=i[0];else if(t&&c.path.isInHomeDir(e,r))s=t,l=i[0].split("/").slice(1).join("/");else if(o[1])s=i[0],l=o[1];else{var u=i[0].split("/");s=u.length&&"@"===u[0][0]?u.splice(0,2).join("/"):u.shift(),l=u.join("/")}return l=c.path.removeJS(l),{plugin:2===a.length?"!"+a[1]:void 0,version:i[1],modulePath:l,packageName:s,moduleName:e,isGlobal:n}},parseFromPackage:function(e,t,n,r){var a=c.pkg.name(t),o=c.moduleName.parse(n,a,void 0,{loader:e}),i=c.path.isRelative(o.modulePath);if(i&&!r)throw new Error("Cannot resolve a relative module identifier with no parent module:",n);if(i){var s=c.moduleName.parse(r,a);if(s.packageName===o.packageName&&s.modulePath){var l=!0;if("../"===n||"./"===n||".."===n){var u=c.path.relativeTo(s.modulePath,n);c.path.isPackageRootDir(u)?(o.modulePath=c.pkg.main(t),l=!1):o.modulePath=n+(c.path.endsWithSlash(n)?"":"/")+"index"}l&&(o.modulePath=c.path.makeRelative(c.path.joinURIs(s.modulePath,o.modulePath)))}}var p,f=c.moduleName.create(o),d=c.pkg.config(t);!(t.browser&&"string"!=typeof t.browser&&f in t.browser)||d&&d.ignoreBrowser||(p=!1===t.browser[f]?"@empty":t.browser[f]);var m=e&&e.globalBrowser&&e.globalBrowser[f];return m&&(p=!1===m.moduleName?"@empty":m.moduleName),p?c.moduleName.parse(p,a,!!m):o},nameAndVersion:function(e){return e.packageName+"@"+e.version},isBareIdentifier:function(e){return e&&"."!==e[0]&&"@"!==e[0]}},pkg:{name:function(e){var t=c.pkg.config(e);return t&&t.name||e.name},main:function(e){var t,n=c.pkg.config(e);return t=n&&n.main?n.main:"string"==typeof e.browser?c.path.endsWithSlash(e.browser)?e.browser+"index":e.browser:"object"==typeof e.jam&&e.jam.main?e.jam.main:e.main?e.main:"index",c.path.removeJS(c.path.removeDotSlash(t))},rootDir:function(e,t){var n=t?c.path.removePackage(e.fileUrl):c.path.pkgDir(e.fileUrl),r=c.pkg.directoriesLib(e);return r&&(n=c.path.joinURIs(c.path.addEndingSlash(n),r)),n},isRoot:function(e,t){var n=c.pkg.getDefault(e);return t.name===n.name&&t.version===n.version},homeAlias:function(e){return e&&e.loader&&e.loader.homeAlias||"~"},getDefault:function(e){return e.npmPaths.__default},findByModuleNameOrAddress:function(e,t,n){if(e.npm){if(t){var r=c.moduleName.parse(t);if(r.version&&r.packageName){var a=r.packageName+"@"+r.version;if(a in e.npm)return e.npm[a]}}if(n){var o=c.relativeURI(e.baseURL,n),i=c.pkg.folderAddress(o);return i?e.npmPaths[i]:c.pkg.getDefault(e)}return c.pkg.getDefault(e)}},folderAddress:function(e){var t=e.lastIndexOf("/node_modules/"),n=e.indexOf("/",t+"/node_modules/".length);if(t>=0)return n>=0?e.substr(0,n):e},findDep:function(e,t,n){if(e.npm&&t&&!c.path.startsWithDotSlash(n)){var r=n+"@"+t.resolutions[n];return e.npm[r]}},findDepWalking:function(e,t,n){if(e.npm&&t&&!c.path.startsWithDotSlash(n))for(var r=c.path.depPackageDir(t.fileUrl,n);r;){var a=e.npmPaths[r];if(a)return a;var o=c.path.parentNodeModuleAddress(r);if(!o)return;r=o+"/"+n}},findByName:function(e,t){if(e.npm&&!c.path.startsWithDotSlash(t))return e.npm[t]},findByNameAndVersion:function(e,t,n){if(e.npm&&!c.path.startsWithDotSlash(t)){var r=t+"@"+n;return e.npm[r]}},findByUrl:function(e,t){if(e.npm){var n=c.pkg.folderAddress(t);return e.npmPaths[n]}},directoriesLib:function(e){var t,n=c.pkg.config(e),r=n&&n.directories&&n.directories.lib,a=[".","/"];if(r){for(;t=a.shift();)r[0]===t&&(r=r.substr(1));return r}},hasDirectoriesLib:function(e){var t=c.pkg.config(e);return t&&t.directories&&!!t.directories.lib},findPackageInfo:function(e,t){var n=e.pkgInfo;if(n){var r;return c.forEach(n,function(e){t.name===e.name&&t.version===e.version&&(r=e)}),r}},saveResolution:function(e,t,n){c.pkg.findPackageInfo(e,t).resolutions[n.name]=t.resolutions[n.name]=n.version},config:function(e){return e.steal||e.system}},path:{makeRelative:function(e){return c.path.isRelative(e)&&"/"!==e.substr(0,1)?e:"./"+e},removeJS:function(e){return e.replace(/\.js(!|$)/,function(e,t){return t})},removePackage:function(e){return e.replace(/\/package\.json.*/,"")},addJS:function(e){return/\.js(on)?$/.test(e)?e:e+".js"},isRelative:function(e){return"."===e.substr(0,1)},isInHomeDir:function(e,t){return e.substr(0,2)===c.pkg.homeAlias(t)+"/"},joinURIs:function(e,t){var n=a(t||""),r=a(e||"");return n&&r?(n.protocol||r.protocol)+(n.protocol||n.authority?n.authority:r.authority)+function(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}(n.protocol||n.authority||"/"===n.pathname.charAt(0)?n.pathname:n.pathname?(r.authority&&!r.pathname?"/":"")+r.pathname.slice(0,r.pathname.lastIndexOf("/")+1)+n.pathname:r.pathname)+(n.protocol||n.authority||n.pathname?n.search:n.search||r.search)+n.hash:null},startsWithDotSlash:function(e){return"./"===e.substr(0,2)},removeDotSlash:function(e){return c.path.startsWithDotSlash(e)?e.substr(2):e},endsWithSlash:function(e){return"/"===e[e.length-1]},addEndingSlash:function(e){return c.path.endsWithSlash(e)?e:e+"/"},depPackage:function(e,t){var n=e.replace(/\/package\.json.*/,"");return(n?n+"/":"")+"node_modules/"+t+"/package.json"},peerPackage:function(e,t){var n=e.replace(/\/package\.json.*/,"");return n.substr(0,n.lastIndexOf("/"))+"/"+t+"/package.json"},depPackageDir:function(e,t){return c.path.depPackage(e,t).replace(/\/package\.json.*/,"")},peerNodeModuleAddress:function(e){var t=e.lastIndexOf("/node_modules/");if(t>=0)return e.substr(0,t+"/node_modules/".length-1)},parentNodeModuleAddress:function(e){var t=e.lastIndexOf("/node_modules/"),n=e.lastIndexOf("/node_modules/",t-1);if(n>=0)return e.substr(0,n+"/node_modules/".length-1)},pkgDir:function(e){var t=e.lastIndexOf("/node_modules/"),n=e.indexOf("/",t+"/node_modules/".length);if("@"===e[t+"/node_modules/".length]&&(n=e.indexOf("/",n+1)),t>=0)return n>=0?e.substr(0,n):e},basename:function(e){var t=e.split("/");return t[t.length-1]},relativeTo:function(e,t){for(var n=e.split("/"),r=1;"."===t[r];)n.pop(),r++;return n.join("/")},isPackageRootDir:function(e){return-1===e.indexOf("/")}},json:{transform:function(e,t,n){n.steal=c.pkg.config(n);var r=e.jsonOptions&&e.jsonOptions.transform;return r?r.call(e,t,n):n}},includeInBuild:!0};r.exports=c}(0,0,0,n)}),define("npm-extension",["require","exports","module","@steal","./npm-utils"],function(e,t,n){!function(e,t,n,r){"format cjs";var a=t("@steal"),o=t("./npm-utils");n.includeInBuild=!0;var i="object"==typeof process&&"[object process]"==={}.toString.call(process),s="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,l="undefined"!=typeof window&&!i&&!s;n.addExtension=function(e){function t(e,t){var n=this,r="function"==typeof t.name?t.name(n,e):e.name+t.name,a=o.extend({},e);return a.name=r,a.metadata={dryRun:!0},Promise.resolve(n.locate(a)).then(function(e){return a.address=e,n.fetch(a)}).then(function(t){e.metadata.address=a.address,n.npmParentMap[e.name]=a.name;var r=n.npmContext&&n.npmContext.npmLoad;return r&&(r.saveLoadIfNeeded(n.npmContext),i||o.warnOnce("Some 404s were encountered while loading. Don't panic! These will only happen in dev and are harmless.")),t})}e._extensions&&e._extensions.push(n.addExtension);var r=e.normalize;e.normalize=function(e,t,n,a){function i(e){y.version=e.version,y.modulePath||(y.modulePath=o.pkg.main(e));var t=r.call(C,o.moduleName.create(y),l,n,a);return p&&t.then(function(e){x&&x.forwardSlashMap&&(x.forwardSlashMap[e]=!0)}),t}var s=e,l=t;l&&this.npmParentMap&&this.npmParentMap[l]&&(l=this.npmParentMap[l]);var u=o.path.isRelative(s),c=o.moduleName.isNpm(l),p=o.path.endsWithSlash(s);if(l&&u&&!c)return r.call(this,s,l,n,a);if(o.moduleName.isConditional(s))return r.call(this,s,l,n,a);if("object"==typeof this.map[l]&&this.map[l][s])return r.call(this,s,l,n,a);var f=o.pkg.findByModuleNameOrAddress(this,l,n);if(!f)return r.call(this,s,l,n,a);var d="../"===s||"./"===s;if(c&&d){var m=o.moduleName.parse(l).modulePath||"",h=o.path.relativeTo(m,s);o.path.isPackageRootDir(h)?s=f.name+"#"+o.path.removeJS(f.main):s+="index"}var g,v,y=o.moduleName.parseFromPackage(this,f,s,l),b=o.pkg.isRoot(this,f),k=y.packageName===f.name;c&&u&&k&&(g=f);var x=this.npmContext,w=x&&x.crawl,S=!!w;if(!g)if(w){if((D=u?null:w.matchedVersion(x,f.name,f.version))&&(v=(_=w.getFullDependencyMap(this,D,b))[y.packageName])){var N=f.resolutions&&f.resolutions[v.name]||v.version,j=w.matchedVersion(this.npmContext,v.name,N);j&&(g=o.pkg.findByUrl(this,j.fileUrl))}}else g=b?o.pkg.findDepWalking(this,f,y.packageName):o.pkg.findDep(this,f,y.packageName);if(k&&(g=o.pkg.findByNameAndVersion(this,y.packageName,f.version)),y.isGlobal,g||(g=o.pkg.findByName(this,y.packageName)),S&&g&&v&&!w.pkgSatisfies(g,v.version)?g=void 0:S&&g&&o.pkg.saveResolution(x,f,g),!g){var P=this.globalBrowser[y.packageName];P&&(y.packageName=P.moduleName,g=o.pkg.findByName(this,y.packageName))}if(!g&&b&&s===f.main&&o.pkg.hasDirectoriesLib(f))return y.version=f.version,y.packageName=f.name,y.modulePath=o.pkg.main(f),r.call(this,o.moduleName.create(y),l,n,a);var C=this;if(g)return i(g);if(w){var D=w.matchedVersion(this.npmContext,f.name,f.version);if(D){var _=w.getFullDependencyMap(this,D,b);if(!(g=_[y.packageName])){var A=w.findPackageAndParents(this.npmContext,y.packageName);A&&(g=A.package)}}}if(!g){if(f.browser&&f.browser[s])return r.call(this,f.browser[s],l,n,a);var O=o.pkg.config(f);return O&&O.map&&"string"==typeof O.map[s]?C.normalize(O.map[s],l,n,a):r.call(this,s,l,n,a)}return w.dep(this.npmContext,D,f,g,b).then(i)};var s=e.locate;e.locate=function(t){var n=o.moduleName.parse(t.name),r=this;if(t.metadata.parsedModuleName=n,n.version&&this.npm&&!r.paths[t.name]){var i=this.npm[o.moduleName.nameAndVersion(n)];if(i)return s.call(this,t).then(function(s){var u=s,c=o.path.joinURIs(e.baseURL,t.name);if(l&&(c=c.replace(/#/g,"%23")),u!==c+".js"&&u!==c)return u;var p=o.pkg.rootDir(i,o.pkg.isRoot(r,i));if(n.modulePath){var f=o.path.joinURIs(o.path.addEndingSlash(p),n.plugin?n.modulePath:o.path.addJS(n.modulePath));u=void 0!==a?o.path.joinURIs(r.baseURL,f):f}return u})}return s.call(this,t)};var u=e.fetch;e.fetch=function(e){if(e.metadata.dryRun)return u.apply(this,arguments);var n=this,r=(n.npmContext,Promise.resolve(u.apply(this,arguments)));return o.moduleName.isNpm(e.name)&&(r=r.then(null,function(r){function a(r,o){if(!r.length)throw o;var i=r.shift();if(!i.test(e))throw o;return Promise.resolve(t.call(n,e,i)).then(null,function(e){return a(r,e)})}return 404!==r.statusCode?Promise.reject(r):a([].slice.call(d),r)})),r.catch(function(t){throw 404===t.statusCode&&o.moduleName.isBareIdentifier(e.name)?new Error(["Could not load '"+e.name+"'","Is this an npm module not saved in your package.json?"].join("\n")):t})};var c=function(e,t){var n=o.pkg.findByName(e,t.split("/")[0]);if(n){var r=o.moduleName.parse(t,n.name);return r.version=n.version,r.modulePath||(r.modulePath=o.pkg.main(n)),o.moduleName.create(r)}return t},p={map:function(e){var t,n={};for(var r in e)t=e[r],n[c(this,r)]="object"==typeof t?p.map(t):c(this,t);return n},meta:function(e){var t={};for(var n in e)t[c(this,n)]=e[n];return t},paths:function(e){var t={};for(var n in e)t[c(this,n)]=e[n];return t}},f=e.config;e.config=function(e){var t=this;if(t.npmContext){var n=t.npmContext,r=n.versions.__default;return n.convert.steal(n,r,e,!0,!1,!1),void f.apply(t,arguments)}for(var a in e)p[a]&&(e[a]=p[a].call(t,e[a]));f.apply(t,arguments)},a.addNpmPackages=function(e){for(var t=e||[],n=this.loader,r=0;r<t.length;r+=1){var a=t[r],o=a&&a.fileUrl;o&&(n.npmContext.paths[o]=a)}},a.getNpmPackages=function(){var e=this.loader.npmContext;return e?e.packages||[]:[]};var d=[{name:function(e,t){if(e.npmContext.forwardSlashMap[t.name]){var n=t.name.split("/");return n.pop(),n.concat(["index"]).join("/")}return t.name+"/index"},test:function(){return!0}},{name:".json",test:function(e){return o.moduleName.isNpm(e.name)&&"package.js"===o.path.basename(e.address)}}]}}(0,e,t)}),define("npm-load",[],function(){return{}}),define("semver",[],function(){return{}}),define("npm-crawl",[],function(){return{}}),define("npm-convert",[],function(){return{}}),define("npm",[],function(){return{}}),define("package.json!npm",["@loader","npm-extension","module"],function(e,t,n){t.addExtension(e),e.main||(e.main="primea.io@0.0.0#index"),e._npmExtensions=[].slice.call(arguments,2),function(e,t,r){var a=e.global;a.process||(a.process={argv:[],cwd:function(){return e.baseURL},browser:!0,env:{NODE_ENV:e.env},version:"",platform:navigator&&navigator.userAgent&&/Windows/.test(navigator.userAgent)?"win":""}),e.npm||(e.npm={},e.npmPaths={},e.globalBrowser={}),e.npmParentMap||(e.npmParentMap=r.npmParentMap||{});var o=e.npmPaths.__default=t[0],i=o.steal||o.system,s=(i&&i.directories&&i.directories.lib,function(t,n){for(var r in t)e.globalBrowser[r]={pkg:n,moduleName:t[r]}}),l=function(t,n){e.npm[t]||(e.npm[t]=n),e.npm[t+"@"+n.version]=n},u=function(e,t){for(var n=0,r=e.length;n<r&&(res=t.call(e,e[n],n),!1!==res);n++);},c=["bundle","configDependencies","transpiler"];t.reverse(),u(t,function(t){var n=t.steal||t.system;if(n){var r=n.main;delete n.main;var a=n.configDependencies;t!==o&&u(c,function(e){delete n[e]}),e.config(n),t===o&&(n.configDependencies=a),n.main=r}t.globalBrowser&&("steal"===t.name&&!1===i.builtins||s(t.globalBrowser,t));var p=n&&n.name;p?l(p,t):l(t.name,t),e.npm[t.name]||(e.npm[t.name]=t),e.npm[t.name+"@"+t.version]=t;var f=t.fileUrl.replace(/\/package\.json.*/,"");e.npmPaths[f]=t}),e.liveReloadInstalled&&e.import("live-reload",{name:n.id}).then(function(t){t.dispose(function(){var t=e.npmContext.pkgInfo;delete t[o.name+"@"+o.version];var n=-1;u(t,function(e,t){if(e.name===o.name&&e.version===o.version)return n=t,!1}),t.splice(n,1)})}),u(e._npmExtensions||[],function(t){t.systemConfig&&e.config(t.systemConfig)})}(e,[{name:"primea.io",version:"0.0.0",fileUrl:"./package.json",main:"index.js",steal:{plugins:["steal-css"],npmAlgorithm:"flat"},resolutions:{"primea.io":"0.0.0",tachyons:"4.9.0","steal-css":"1.3.1","tachyons-base":"1.2.6",bel:"5.1.7"}},{name:"steal-css",version:"1.3.1",fileUrl:"./node_modules/steal-css/package.json",main:"css.js",steal:{ext:{css:"steal-css"},map:{$css:"steal-css@1.3.1#css"}},resolutions:{}},{name:"tachyons",version:"4.9.0",fileUrl:"./node_modules/tachyons/package.json",main:"css/tachyons.css",resolutions:{}},{name:"tachyons-base",version:"1.2.6",fileUrl:"./node_modules/tachyons-base/package.json",resolutions:{}},{name:"bel",version:"5.1.7",fileUrl:"./node_modules/bel/package.json",main:"index.js",browser:"browser.js",resolutions:{bel:"5.1.7",hyperx:"2.3.3"}},{name:"hyperx",version:"2.3.3",fileUrl:"./node_modules/hyperx/package.json",main:"index.js",resolutions:{"hyperscript-attribute-to-property":"1.0.0"}},{name:"hyperscript-attribute-to-property",version:"1.0.0",fileUrl:"./node_modules/hyperscript-attribute-to-property/package.json",main:"index.js",resolutions:{}}],{npmParentMap:{}})}),define("steal-css@1.3.1#css",["require","exports","module","@loader","@steal"],function(e,t,n){!function(e,t,n,r){function a(){return o()&&!!Function("/*@cc_on return (/^9/.test(@_jscript_version) && /MSIE 9.0(?!.*IEMobile)/i.test(navigator.userAgent)); @*/")()}function o(){if("undefined"!=typeof doneSsr&&doneSsr.globalDocument)return doneSsr.globalDocument;if("undefined"!=typeof document)return document;throw new Error("Unable to load CSS in an environment without a document.")}function i(){var e=o(),t=e.head||e.getElementsByTagName("head")[0];if(!t){var n=e.documentElement||e;t=e.createElement("head"),n.insertBefore(t,n.firstChild)}return t}function s(e,t){"object"==typeof e?(this.load=e,this.loader=t,this.address=this.load.address,this.source=this.load.source):(this.address=e,this.source=t)}var l=t("@loader"),u=t("@steal"),c="object"==typeof process&&"[object process]"==={}.toString.call(process),p=/@import [^uU]['"]?([^'"\)]*)['"]?/g,f=/url\(['"]?([^'"\)]*)['"]?\)/g,d=l.cssOptions&&l.cssOptions.timeout?parseInt(l.cssOptions.timeout,10):60,m=function(e,t){for(var n=o().styleSheets,r=n.length;r--;)if(n[r].href===e.href)return t();setTimeout(function(){m(e,t)})};s.cssCount=0,s.ie9MaxStyleSheets=31,s.currentStyleSheet=null,s.prototype={injectLink:function(){if(this._loaded)return this._loaded;if(this.linkExists())return this._loaded=Promise.resolve(""),this._loaded;var e=o(),t=this.link=e.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=this.address,this._loaded=new Promise(function(e,n){var r=setTimeout(function(){n("Unable to load CSS")},1e3*d),a=function(o){clearTimeout(r),t.removeEventListener("load",a),t.removeEventListener("error",a),o&&"error"===o.type?n("Unable to load CSS"):e("")};"isApplicationInstalled"in navigator||!t.addEventListener?m(t,a):navigator.noUI?a():(t.addEventListener("load",a),t.addEventListener("error",a)),i().appendChild(t)}),this._loaded},injectStyle:function(){var e=o(),t=i(),n=this.style=e.createElement("style");n.type="text/css",n.sheet?n.sheet.cssText=this.source:n.styleSheet?n.styleSheet.cssText=this.source:n.appendChild(e.createTextNode(this.source)),t.appendChild(n)},ie9StyleSheetLimitHack:function(){var e=o();s.cssCount||(s.currentStyleSheet=e.createStyleSheet()),s.cssCount+=1,s.currentStyleSheet.cssText+=this.source,s.cssCount===s.ie9MaxStyleSheets&&(s.cssCount=0)},updateURLs:function(){var e=this.source,t=this.address;return this.source=e.replace(p,function(e,n){return c?"@import url("+n+")":"@import url("+u.joinURIs(t,n)+")"}),l.isEnv("build")||(this.source=this.source+"/*# sourceURL="+t+" */",this.source=this.source.replace(f,function(e,n){return"url("+u.joinURIs(t,n)+")"})),this.source},getExistingNode:function(){var e=o(),t="[href='"+this.address+"']";return e.querySelector&&e.querySelector(t)},linkExists:function(){for(var e=o().styleSheets,t=0;t<e.length;++t)if(this.address===e[t].href)return!0;return!1},setupLiveReload:function(e,t){var n=i(),a=this;if(e.liveReloadInstalled){var o=e.import("live-reload",{name:r.id});Promise.resolve(o).then(function(r){e.import(t).then(function(){r.once("!dispose/"+t,function(){a.style.__isDirty=!0,r.once("!cycleComplete",function(){n.removeChild(a.style)})})})})}}},l.isEnv("production")?n.fetch=function(e){return new s(e.address).injectLink()}:n.instantiate=function(e){var t=this,n=new s(e.address,e.source);e.source=n.updateURLs(),e.metadata.deps=[],e.metadata.format="css",e.metadata.execute=function(){return o()&&(a()?n.ie9StyleSheetLimitHack():n.injectStyle(),n.setupLiveReload(t,e.name)),t.newModule({source:n.source})}},n.CSSModule=s,n.getDocument=o,n.getHead=i,n.locateScheme=!0,n.buildType="css",n.includeInBuild=!0,n.pluginBuilder="steal-css/slim"}(0,e,t,n)}),define("hyperscript-attribute-to-property@1.0.0#index",function(e,t,n){n.exports=function(e){return function(t,n,a){for(var o in n)o in r&&(n[r[o]]=n[o],delete n[o]);return e(t,n,a)}};var r={class:"className",for:"htmlFor","http-equiv":"httpEquiv"}}),define("hyperx@2.3.3#index",["require","exports","module","hyperscript-attribute-to-property"],function(e,t,n){function r(e){return e===m||e===h}function a(e){return b.test(e)}var o=e("hyperscript-attribute-to-property"),i=1,s=2,l=3,u=4,c=5,p=6,f=7,d=8,m=9,h=10,g=11,v=12,y=13;n.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"==typeof e?e:b("",e)}t||(t={});var b=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=o(e)),function(o){function k(e){var n=[];x===f&&(x=u);for(var a=0;a<e.length;a++){var o=e.charAt(a);x===i&&"<"===o?(w.length&&n.push([i,w]),w="",x=s):">"!==o||r(x)||x===y?x===y&&/-$/.test(w)&&"-"===o?(t.comments&&n.push([d,w.substr(0,w.length-1)],[l]),w="",x=i):x===s&&/^!--$/.test(w)?(t.comments&&n.push([s,w],[c,"comment"],[g]),w=o,x=y):x===i||x===y?w+=o:x===s&&"/"===o&&w.length||(x===s&&/\s/.test(o)?(n.push([s,w]),w="",x=u):x===s?w+=o:x===u&&/[^\s"'=/]/.test(o)?(x=c,w=o):x===u&&/\s/.test(o)?(w.length&&n.push([c,w]),n.push([v])):x===c&&/\s/.test(o)?(n.push([c,w]),w="",x=p):x===c&&"="===o?(n.push([c,w],[g]),w="",x=f):x===c?w+=o:x!==p&&x!==u||"="!==o?x!==p&&x!==u||/\s/.test(o)?x===f&&'"'===o?x=h:x===f&&"'"===o?x=m:x===h&&'"'===o?(n.push([d,w],[v]),w="",x=u):x===m&&"'"===o?(n.push([d,w],[v]),w="",x=u):x!==f||/\s/.test(o)?x===d&&/\s/.test(o)?(n.push([d,w],[v]),w="",x=u):x!==d&&x!==m&&x!==h||(w+=o):(x=d,a--):(n.push([v]),/[\w-]/.test(o)?(w+=o,x=c):x=u):(n.push([g]),x=f)):(x===s?n.push([s,w]):x===c?n.push([c,w]):x===d&&w.length&&n.push([d,w]),n.push([l]),w="",x=i)}return x===i&&w.length?(n.push([i,w]),w=""):x===d&&w.length?(n.push([d,w]),w=""):x===h&&w.length?(n.push([d,w]),w=""):x===m&&w.length?(n.push([d,w]),w=""):x===c&&(n.push([c,w]),w=""),n}for(var x=i,w="",S=arguments.length,N=[],j=0;j<o.length;j++)if(j<S-1){var P=arguments[j+1],C=k(o[j]),D=x;D===h&&(D=d),D===m&&(D=d),D===f&&(D=d),D===u&&(D=c),C.push([0,D,P]),N.push.apply(N,C)}else N.push.apply(N,k(o[j]));for(var _=[null,{},[]],A=[[_,-1]],j=0;j<N.length;j++){var O=A[A.length-1][0],R=(C=N[j])[0];if(R===s&&/^\//.test(C[1]))U=A[A.length-1][1],A.length>1&&(A.pop(),A[A.length-1][0][2][U]=e(O[0],O[1],O[2].length?O[2]:void 0));else if(R===s){var E=[C[1],{},[]];O[2].push(E),A.push([E,O[2].length-1])}else if(R===c||0===R&&C[1]===c){for(var I,L="";j<N.length;j++)if(N[j][0]===c)L=b(L,N[j][1]);else{if(0!==N[j][0]||N[j][1]!==c)break;if("object"!=typeof N[j][2]||L)L=b(L,N[j][2]);else for(I in N[j][2])N[j][2].hasOwnProperty(I)&&!O[1][I]&&(O[1][I]=N[j][2][I])}N[j][0]===g&&j++;for(var M=j;j<N.length;j++)if(N[j][0]===d||N[j][0]===c)O[1][L]?""===N[j][1]||(O[1][L]=b(O[1][L],N[j][1])):O[1][L]=n(N[j][1]);else{if(0!==N[j][0]||N[j][1]!==d&&N[j][1]!==c){!L.length||O[1][L]||j!==M||N[j][0]!==l&&N[j][0]!==v||(O[1][L]=L.toLowerCase()),N[j][0]===l&&j--;break}O[1][L]?""===N[j][2]||(O[1][L]=b(O[1][L],N[j][2])):O[1][L]=n(N[j][2])}}else if(R===c)O[1][C[1]]=!0;else if(0===R&&C[1]===c)O[1][C[2]]=!0;else if(R===l){if(a(O[0])&&A.length){var U=A[A.length-1][1];A.pop(),A[A.length-1][0][2][U]=e(O[0],O[1],O[2].length?O[2]:void 0)}}else if(0===R&&C[1]===i)void 0===C[2]||null===C[2]?C[2]="":C[2]||(C[2]=b("",C[2])),Array.isArray(C[2][0])?O[2].push.apply(O[2],C[2]):O[2].push(C[2]);else if(R===i)O[2].push(C[1]);else if(R!==g&&R!==v)throw new Error("unhandled: "+R)}if(_[2].length>1&&/^\s*$/.test(_[2][0])&&_[2].shift(),_[2].length>2||2===_[2].length&&/\S/.test(_[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(_[2][0])&&"string"==typeof _[2][0][0]&&Array.isArray(_[2][0][2])&&(_[2][0]=e(_[2][0][0],_[2][0][1],_[2][0][2])),_[2][0]}},Object.prototype.hasOwnProperty;var b=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$")}),define("bel@5.1.7#appendChild",function(e,t,n){var r=/\n[\s]+$/,a=/^\n[\s]+/,o=/[\s]+$/,i=/^[\s]+/,s=/[\n\s]+/g,l=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],u=["code","pre","textarea"];n.exports=function e(t,n){if(Array.isArray(n))for(var c,p,f=t.nodeName.toLowerCase(),d=!1,m=0,h=n.length;m<h;m++){var g=n[m];if(Array.isArray(g))e(t,g);else{("number"==typeof g||"boolean"==typeof g||"function"==typeof g||g instanceof Date||g instanceof RegExp)&&(g=g.toString());var v=t.childNodes[t.childNodes.length-1];if("string"==typeof g)d=!0,v&&"#text"===v.nodeName?v.nodeValue+=g:(g=document.createTextNode(g),t.appendChild(g),v=g),m===h-1&&(d=!1,-1===l.indexOf(f)&&-1===u.indexOf(f)?""===(c=v.nodeValue.replace(a,"").replace(o,"").replace(r,"").replace(s," "))?t.removeChild(v):v.nodeValue=c:-1===u.indexOf(f)&&(p=0===m?"":" ",c=v.nodeValue.replace(a,p).replace(i," ").replace(o,"").replace(r,"").replace(s," "),v.nodeValue=c));else if(g&&g.nodeType){d&&(d=!1,-1===l.indexOf(f)&&-1===u.indexOf(f)?""===(c=v.nodeValue.replace(a,"").replace(r,"").replace(s," "))?t.removeChild(v):v.nodeValue=c:-1===u.indexOf(f)&&(c=v.nodeValue.replace(i," ").replace(a,"").replace(r,"").replace(s," "),v.nodeValue=c));var y=g.nodeName;y&&(f=y.toLowerCase()),t.appendChild(g)}}}}}),define("bel@5.1.7#browser",["require","exports","module","hyperx","./appendChild"],function(e,t,n){function r(e,t,n){var r;-1!==c.indexOf(e)&&(t.namespace=i);var a=!1;if(t.namespace&&(a=t.namespace,delete t.namespace),a)r=document.createElementNS(a,e);else{if(e===u)return document.createComment(t.comment);r=document.createElement(e)}for(var p in t)if(t.hasOwnProperty(p)){var f=p.toLowerCase(),d=t[p];if("classname"===f&&(f="class",p="class"),"htmlFor"===p&&(p="for"),-1!==l.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?r[p]=d:a?"xlink:href"===p?r.setAttributeNS(s,p,d):/^xmlns($|:)/i.test(p)||r.setAttributeNS(null,p,d):r.setAttribute(p,d)}return o(r,n),r}var a=e("hyperx"),o=e("./appendChild"),i="http://www.w3.org/2000/svg",s="http://www.w3.org/1999/xlink",l=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],u="!--",c=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];n.exports=a(r,{comments:!0}),n.exports.default=n.exports,n.exports.createElement=r}),define("primea.io@0.0.0#index",["bel","tachyons","tachyons-base/css/tachyons-base.css"],function(e){"use strict";function t(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var n=function(e){return e&&e.__esModule?e:{default:e}}(e),r=t(['\n<div class="fl w-100">\n  <svg class="fl w-100" width="300" height="300" viewBox="0 0 475 300" transform="scale(1, -1)"\n       xmlns="http://www.w3.org/2000/svg">\n    <path d="M 200 200 L 284 200 L 242 122 z"\n          fill="none" stroke="none" stroke-width="3" />\n    <circle cx="200" cy="200" r="15"/>\n    <circle cx="284" cy="200" r="15"/>\n    <circle cx="242" cy="122" r="15"/>\n  </svg>\n</div>\n'],['\n<div class="fl w-100">\n  <svg class="fl w-100" width="300" height="300" viewBox="0 0 475 300" transform="scale(1, -1)"\n       xmlns="http://www.w3.org/2000/svg">\n    <path d="M 200 200 L 284 200 L 242 122 z"\n          fill="none" stroke="none" stroke-width="3" />\n    <circle cx="200" cy="200" r="15"/>\n    <circle cx="284" cy="200" r="15"/>\n    <circle cx="242" cy="122" r="15"/>\n  </svg>\n</div>\n']),a=t(['\n<footer class="flex items-center justify-center pa4 lh-copy">\n  <a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="https://www.github.com/primea">source code</a>\n</footer>\n'],['\n<footer class="flex items-center justify-center pa4 lh-copy">\n  <a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="https://www.github.com/primea">source code</a>\n</footer>\n']),o=(0,n.default)(r),i=(0,n.default)(a);document.body.appendChild(o),document.body.appendChild(i)});