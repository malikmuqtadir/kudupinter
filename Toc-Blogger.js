/* 
 * Blogspot TOC
 * https://bibit.ws/toc-di-blogspot.php
*/
.bwstoc {
 margin: 10px 0;
 background: #F0F0F0;
 border: 1px solid #ddd;
}
.bwstoc ol, .bwstoc ul {
 margin: 0 0 15px 20px;
 padding: 0;
}
.bwstoc ul {
 list-style: disc;
}
.bwstoc ol li, .bwstoc ul li {
 font-size: 95%;
 padding: 5px 10px 0 0;
 margin: 0 0 0 30px;
}
.bwstoc a {
 text-decoration: none;
}
.bwstoc a:hover {
 text-decoration: underline;
}
.bwstoc .bwstocHeader {
 font-weight: bold;
 font-size: 100%;
 position: relative;
 outline: none;
 border: none;
 padding: 5px 15px 5px 5px;
 margin: 5px 10px;
}
.bwstoc .bwstocHeader a {
 text-decoration: none;
 cursor: pointer;
}
.bwstoc .bwstocHeader a:hover {
 text-decoration: underline;
}
</style>
<!-- Blogger TOC -->
<script type='text/javascript'>
/* 
 * SEO Friendly Blogspot Table Of Contents
 * https://bibit.ws/toc-di-blogspot.php
*/
//<![CDATA[
function bwstoc() {
 var bwstoc = i = headinglength = getheading = 0;
 headinglength = document.getElementById("post-toc").querySelectorAll("h2, h3, h4").length;
 if (headinglength > 1) { 
 // Hanya Tampil Jika Ditemukan Minimal 2 Heading
 for (i = 0; i < headinglength; i++) {
 getheading = document.getElementById("post-toc").querySelectorAll("h2, h3, h4")[i].textContent;
 var bws_1 = getheading.replace(/[^a-z0-9]/gi," ");
 var bws_2 = bws_1.trim();
 var getHeadUri = bws_2.replace(/\s/g, "_");
 document.getElementById("post-toc").querySelectorAll("h2, h3, h4")[i].setAttribute("id", getHeadUri);
 bwstoc = "<li><a href='#" + getHeadUri + "'>" + getheading + "</a></li>";
 document.getElementById("bwstoc").innerHTML += bwstoc;
 }
 } else { document.write("<style>.bwstoc{display:none !important;visibility:hidden !important;width:0 !important;height:0 !important;}</style>"); }
}
function bwstocShow() {
    var bwstocBtn = document.getElementById('bwstoc');
 var bwstocWrapID = document.getElementById('bwstocwrap');
 var bwstocLink = document.getElementById('bwstocLink');
    if (bwstocBtn.style.display === 'none') {
        bwstocBtn.style.display = 'block';
 bwstocWrapID.style.display = 'block';
 bwstocLink.innerHTML = 'Tutup';
 
    } else {
        bwstocBtn.style.display = 'none';
 bwstocWrapID.style.display = 'inline-block';
 bwstocLink.innerHTML = 'Tampil';
    }
}
//]]>