let document = {};

document.headInnerHtml = `
  <meta charset="utf-8">
  <meta name="referrer" content="none">
  <title>Userfront</title>

  <!-- Userfront -->
  <script defer src="https://mod.userfront.com/v2"></script>
  <script id="Userfront-script">
    (function (m,o,d,u,l,a,r,i,z,e) {
      u[m]={rq:[],ready:function(j){u[m].rq.push(j);},m:m,o:o,d:d,r:r};function j(s){return encodeURIComponent(btoa(s));}
      z=l.getElementById(m+'-'+a);r=u.location;e=[d+'/page/'+o+'/'+j(r.pathname)+'/'+j(r.host)+'?t='+Date.now(),d];
      e.map(function(w){i=l.createElement(a);i.defer=1;i.src=w;z.parentNode.insertBefore(i,z);});u.amvartem=m;
    })('Userfront','BASIC1','https://mod.userfront.com/v2',window,document,'script',{});
  </script>
  <!-- /Userfront -->

  <style userfront-styles></style>
`;

export { document };
